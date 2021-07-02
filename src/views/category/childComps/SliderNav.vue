<template>
  <div class="slider-nav">
    <ul
      v-for="(item, index) in list"
      class="slider-item"
      @click="itemClick(index)"
      :class="{ active: index === currentIndex }"
    >
      <li>
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      console.log(index);
    },
  },
};
</script>

<style scoped>
.slider-item {
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: center;
  list-style: none;
}
.active {
  background-color: #fff;
  border-left: 3px solid var(--color-tint);
}
</style>
