import axios from 'axios'
import QS from 'qs'
import store from '@/store'
import router from '@/router'
import defaultConfig from '@/config'
import { getToken, setToken, removeToken } from '@/common/auth'
import { Message } from 'element-ui'


class HttpRequest {
    constructor(baseUrl) {
        this.baseUrl = baseUrl
        this.queue = {}
    }
    getInsideConfig() {
        const config = {
            baseUrl: process.env.NODE_ENV === 'production' ? 'https://dev2.hse365.cc' : this.baseUrl,  // 区分开发还是生产环境
            transformRequest: function (data) {
                return QS.stringify(data)  // 将字符串结构成对象形式
            },
            paramsSerializer: function (params) {
                return Qs.strinfify(params)
            }
        }
        return config
    }
    destroy(url) {
        delete this.queue[url]
        if (!Object.keys(this.queue).length) {
            // 处理一些事情
            store.dispatch('loading', true)
        }
    }
    interceptors(instance, url) {
        // 请求拦截
        instance.interceptors.request.use(config => {
            // 添加全局的 loading
            if(!Object.keys(this.queue).length) {
                // 处理一些事情
                if (defaultConfig.hideModal.indexOf(url) <= 0) {  // 不存在 或者是 下标0 的
                    store.dispatch('loading', true)
                }
            }
            // token的一些处理, 带 token  到头部中
            let token = getToken('Token')
            if(token) {
                config.headers.common['token'] = token
            }
            this.queue[url] = true
            return config
        }, error => {
            return Promise.reject(error)
        })

        // 响应拦截
        instance.interceptors.response.use(res => {
            getToken('token')
            if (res.data.code === 10001 || res.data.code === 10002) {
                removeToken('token')
                router.replace({ path: '/login' })
            }else if(res.headers.new_token) {
                // 更新 token
                setToken(res.headers.new_token)
            }
            this.destroy(url)
            store.dispatch('loading', false)
            const {data, status} = res
            return {data, status}
        }, error => {
            this.destroy(url)
            if(error.response.status >= 500) {
                MessageChannel.error('网络连接失败')
            }else if(error.response.status === 401) {
                removeToken('token')
                router.replace({ path: '/login' })
            }else if(error.response.status === 404) {
                router.replace({ path: '404' })
            }else{
                Message.error(error.response.data.msg)
            }
            return Promise.reject(error)
        })
    }
    request(options) {
        const instance = axios.create({  // 请求时长
            timeout: 15000
        })
        options = Object.assign(this.getInsideConfig(), options)  // 合并两个对象
        instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'  // 请求头
        this.interceptors(instance, options.url)
        return instance(options)
    }
}

export default HttpRequest