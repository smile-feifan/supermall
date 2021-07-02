<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-botton
        class="check-button"
        :isChecked="isSelectAll"
        @click.native="checkClick"
      ></check-botton>
      <span>全选</span>
    </div>
    <div class="price">合计：{{ totalPrice }}</div>

    <div class="calculate" @click="calcClick">去计算({{ checkLength }})</div>
  </div>
</template>

<script>
import CheckBotton from "components/content/checkButton/CheckBotton.vue";
import { mapGetters } from "vuex";

export default {
  name: "CartBottomBar",
  components: { CheckBotton },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      return (
        "￥" +
        this.$store.state.cartList
          .filter((item) => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0)
          .toFixed(2)
      );
    },
    checkLength() {
      return this.$store.state.cartList.filter((item) => item.checked).length;
    },
    isSelectAll() {
      // 1.使用filter
      if (this.cartList.length === 0) return false;
      // 数字取反也是false!!!
      // 使用过滤函数返回一个不选中的数组的长度然后取反
      return !this.cartList.filter((item) => !item.checked).length;

      //当没有数据的时候
      // 2.使用find
      // return !this.cartList.find((item) => !item.checked);
      // 3.普通遍历
      // for (let item of this.cartList) {
      //   if (!item.checked) {
      //     return false;
      //   }
      //   return true;
      // }
    },
  },
  methods: {
    checkClick() {
      // console.log(1);
      if (this.isSelectAll) {
        this.cartList.forEach((item) => (item.checked = false));
      } else {
        //部分或全部不选中
        this.cartList.forEach((item) => (item.checked = true));
      }
    },
    calcClick() {
      let noSelect = this.cartList.filter((item) => !item.checked).length;
      if (this.cartList.length === 0 || noSelect == this.cartList.length) {
        this.$toast.show("请选择购买的商品", 2000);
      }
    },
  },
};
</script>

<style scoped>
.bottom-bar {
  display: flex;
  position: absolute;
  /* position: relative; */

  line-height: 40px;
  height: 40px;

  left: 0;
  right: 0;
  z-index: 1000;
  bottom: 49px;

  background-color: #eee;
}

.check-content {
  display: flex;
  align-items: center;
  margin-left: 15px;
  margin-right: 5px;
  width: 70px;
}

.check-button {
  margin-right: 5px;
  width: 20px;
  height: 20px;
  line-height: 18px;
}

.price {
  margin-left: 20px;
  flex: 1;
}
.calculate {
  width: 90px;
  /* margin-right: -20px; */
  /* padding-left: 8px; */
  text-align: center;
  background-color: pink;
}
</style>