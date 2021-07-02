<template>
  <div class="profile-top">
    <div class="profile-photo">
      <img src="../../../assets/img/profile/avatar.svg" alt="" />
    </div>
    <div class="login-register">
      <div class="top" style="font: 20px">登录/注册</div>
      <div class="bottom">
        <img src="../../../assets/img/profile/phone.svg" alt="" />
        <span>暂无手机绑定号</span>
      </div>
    </div>
    <div class="more">
      <img src="../../../assets/img/profile/back3.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.profile-top {
  display: flex;
  background-color: var(--color-tint);
  align-items: center;
  padding-bottom: 10px;
}

.profile-photo {
  /* flex: 2; */
  height: 60px;
  width: 60px;
  margin-left: 20px;
}

.profile-photo img {
  width: 100%;
  height: 100%;
}

.login-register {
  color: azure;
  margin-left: 20px;
}
.login-register .bottom {
  padding-top: 10px;
}

.login-register .bottom img {
  height: 20px;
  width: 20px;
  border-style: none;
  vertical-align: middle;
}

.more img {
  width: 25px;
  height: 25px;
  flex: right;
  margin-left: 40px;
}
</style>