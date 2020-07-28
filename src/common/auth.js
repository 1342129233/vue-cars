import Cookies from "js-cookie";
// import Mock from 'mockjs'

const TokenKey = "token";
const refreshTokenKey = "refresh-token";

function getToken() {
  return Cookies.get(TokenKey);
}

function setToken(token) {
  return Cookies.set(TokenKey, token);
}

function removeToken() {
  return Cookies.remove(TokenKey);
}

function getRefreshToken() {
  return Cookies.get(refreshTokenKey);
}

function setRefreshToken(token) {
  return Cookies.set(refreshTokenKey, token);
}

function removeRefreshToken() {
  return Cookies.remove(refreshTokenKey);
}

export {
  getToken,
  setToken,
  removeToken,
  getRefreshToken,
  setRefreshToken,
  removeRefreshToken
};
