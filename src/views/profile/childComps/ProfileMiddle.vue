<template>
  <div class="profile-middle">
    <div class="left">
      <div class="money">0.00<span>元</span></div>
      <div>我的余额</div>
    </div>
    <div class="center">
      <div class="money">0<span>个</span></div>
      <div>我的优惠</div>
    </div>
    <div class="right">
      <div class="money">0<span>分</span></div>
      <div>我的积分</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.profile-middle {
  display: flex;
  text-align: center;
  /* align-items: center; */
  vertical-align: middle;
  /* justify-content: center; */
  height: 70px;
  box-sizing: content-box;
  border-bottom: 20px solid rgb(226, 215, 215);
}
.left {
  flex: 1;
  height: 70px;
  /* background-color: rgb(17, 16, 16); */
  border-right: 1px solid rgb(201, 192, 192);
  align-items: center;
  justify-content: center;
  padding-top: 15px;
}
.right {
  flex: 1;
  height: 70px;
  /* background-color: blue; */
  padding-top: 15px;
}
.center {
  flex: 1;
  height: 70px;
  /* background-color: pink; */
  border-right: 1px solid rgb(201, 192, 192);
  padding-top: 15px;
}

.money {
  color: rgb(235, 8, 8);
  margin-bottom: 5px;
}
.money span {
  margin-left: 5px;
  color: rgb(102, 102, 102);
}
</style>