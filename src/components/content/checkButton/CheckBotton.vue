<template>
  <div class="check-botton" :class="{ check: isChecked }">
    <img src="~assets/img/cart/tick.svg" alt="" />
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.check-botton {
  border-radius: 50%;
  border: 2px solid #aaa;
}
.check {
  background-color: red;
  border-color: red;
}
</style>
