<template>
  <div class="category">
    <nav-bar class="nav-bar">
      <div slot="center">分类列表</div>
    </nav-bar>
    <div class="contain">
      <div class="slider-bar">
        <scroll class="content" ref="scroll">
          <slider-nav :list="list"></slider-nav>
        </scroll>
      </div>

      <!-- <div class="slider-bar"></div>
      <div class="category-show"></div> -->
    </div>
  </div>
  <!-- <div class="wrapper" ref="aaa"></div> -->
</template>
<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import SliderNav from "./childComps/SliderNav.vue";

import BScroll from "better-scroll";

import { getCategoryData } from "../../network/category";
import Scroll from "../../components/common/scroll/Scroll.vue";

export default {
  name: "Category",
  data() {
    return {
      scroll: null,
      list: [],
    };
  },
  components: { NavBar, SliderNav, Scroll },
  activated() {
    this.$refs.scroll.refresh();
  },

  created() {
    getCategoryData().then((res) => {
      console.log(res.data.category.list);
      this.list = res.data.category.list;
    });
  },
};
</script>

<style scoped>
.contain {
  display: flex;
  height: calc(100vh - 93px);
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}

.slider-bar {
  background-color: rgb(194, 188, 188);
  /* height: calc(100vh - 93px); */
  width: 22%;
  overflow: hidden;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 2.75rem;
  bottom: 49px;
  left: 0;
  right: 0;
  width: 22%;
}
</style>
