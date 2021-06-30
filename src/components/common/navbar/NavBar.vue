<template>
  <!-- 多个地方可能会用到导航栏，设置id的话可能会乱，所以直接给个class属性 -->
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* 导航栏布局 弹性布局，使用line-height撑高 */
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 2px 2px rgba(100, 100, 100, 0.1);
}
.left,
.right {
  width: 60px;
}

.center {
  flex: 1;
}
</style>