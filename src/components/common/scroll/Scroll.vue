<template>
  <div class="wrapper" ref="wrapper">
    <div class="content"><slot></slot></div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
// import ObserveDom from "better-scroll";
// BScroll.use(ObserveDom);
export default {
  components: {},
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    // 1.创建BScroll对象
    //不要通过document.querySelector来拿，可能会拿到其它地方相同的class
    // this.scroll = new BScroll(document.querySelector(".wrapper"),{
    // });
    // 通过ref可以直接拿到确定的元素
    this.scroll = new BScroll(this.$refs.wrapper, {
      // observeDOM: true,
      click: true,
      // 为了提高性能：因为位置监听可能有些地方需要用，
      //有些地方不需要用，还是让用户传入参数决定用不用
      // probeType: 3,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    });
    // 2.监听滚动的位置
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", (position) => {
        // console.log(position);
        this.$emit("scroll", position);
      });
    }

    // 3.监听上拉加载更多
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingLoad");
      });
    }
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    refresh() {
      // console.log(1);
      this.scroll && this.scroll.refresh();
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0;
    },
  },
};
</script>

<style scoped>
</style>
