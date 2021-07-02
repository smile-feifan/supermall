<template>
  <div class="cart_list_item">
    <div class="item-selector">
      <check-botton :isChecked="item.checked" @click.native="checkClick">
      </check-botton>
    </div>
    <div class="item_img">
      <img :src="item.image" alt="" />
    </div>
    <div class="item_info">
      <p class="item_title">{{ item.title }}</p>
      <p class="item_desc">{{ item.desc }}</p>
      <span class="item_price">{{ item.price }}</span>
      <span class="item_count">x{{ item.count }}</span>
    </div>
  </div>
</template>

<script>
import CheckBotton from "components/content/checkButton/CheckBotton.vue";
export default {
  name: "CartListItem",
  components: { CheckBotton },
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    checkClick() {
      this.item.checked = !this.item.checked;
      console.log(11);
      console.log(this.item.checked);
    },
  },
};
</script>

<style scoped>
.cart_list_item {
  width: 100%;
  border-bottom: 0.04rem solid rgba(128, 128, 128, 0.4);
  display: flex;
  padding: 0.4rem;
  padding-left: 0rem;
}
.item_img {
  width: 3.5rem;
  height: 100%;
}

.item_img img {
  width: 100%;
  height: 100%;
  border-radius: 0.4rem;
}

.item_info {
  position: relative;
  width: calc(100% - 3.5rem - 1.2rem - 0.4rem);
  margin-left: 0.4rem;
}

.item_info p {
  display: inline-block;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.item_title {
  font-size: 0.75rem;
  padding-bottom: 0.5rem;
}
.item_desc {
  font-size: 0.75rem;
  color: gray;
}
.item_price {
  position: absolute;
  left: 0;
  bottom: 0.4rem;
  font-size: 0.75rem;
  color: orangered;
}
.item_count {
  position: absolute;
  right: 0.4rem;
  bottom: 0.4rem;
  font-size: 0.75rem;
}
.item-selector {
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
