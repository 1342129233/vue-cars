<template>
  <div class="amap-wrap">
    <input type="text" v-model="loginForm.username" />
    <input type="text" v-model="loginForm.password" />
    <button @click="tijiao">提交</button>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    tijiao() { // post('/_api/login', this.loginForm)
        let userInfo = {
            'username': this.loginForm.username,
            'password': this.loginForm.password
        }
        this.$axios({
            url: '/_api/login',
            methods: 'POST',
            params: userInfo
        })
        .then((data)=> {
            console.log(data)
        })
    },
  }
};
</script>
<style lang="scss"></style>
