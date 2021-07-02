<template>
  <div class="profile-bottom">
    <!-- <div class="top"> -->
    <div class="message">
      <img src="../../../assets/img/profile/message.svg" alt="" />
      <span>我的消息</span>
    </div>
    <div class="integral">
      <img src="../../../assets/img/profile/pointer.svg" alt="" />
      <span>我的消息</span>
    </div>
    <div class="member">
      <img src="../../../assets/img/profile/vip.svg" alt="" />
      <span>会员卡</span>
    </div>
    <!-- </div> -->
    <!-- <div class="bottom"> -->
    <div class="shop">
      <img src="../../../assets/img/profile/cart.svg" alt="" />
      <span>我的购物车</span>
    </div>
    <div class="download">
      <img src="../../../assets/img/profile/shopping.svg" alt="" />
      <span>下载购物车app</span>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped>
.message {
  height: 40px;
  /* background-color: pink; */
  border-bottom: 1px solid rgb(223, 212, 212);
  justify-content: center;
  padding-top: 10px;
  padding-left: 10px;
}
.message img {
  width: 25px;
  height: 25px;
  vertical-align: middle;
  padding-right: 5px;
}
.integral {
  height: 40px;
  border-bottom: 1px solid rgb(223, 212, 212);
  padding-top: 10px;
  padding-left: 10px;
}
.integral img {
  width: 25px;
  height: 25px;
  vertical-align: middle;
  padding-right: 5px;
}
.member {
  height: 40px;
  border-bottom: 20px solid rgb(223, 212, 212);
  box-sizing: content-box;
  padding-top: 10px;
  padding-left: 10px;
}
.member img {
  width: 25px;
  height: 25px;
  vertical-align: middle;
  padding-right: 5px;
}
.shop {
  height: 40px;
  border-bottom: 1px solid rgb(223, 212, 212);
  padding-top: 10px;
  padding-left: 10px;
}
.shop img {
  width: 25px;
  height: 25px;
  vertical-align: middle;
  padding-right: 5px;
}
.download {
  height: 40px;
  border-bottom: 1px solid rgb(223, 212, 212);
  padding-top: 10px;
  padding-left: 10px;
}
.download img {
  width: 25px;
  height: 25px;
  vertical-align: middle;
  padding-right: 5px;
}
</style>
