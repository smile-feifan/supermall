<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control
      :titles="titles"
      @tabClick="tabClick"
      ref="tabControl1"
      class="tab-control"
      v-show="isTabFixed"
    >
    </tab-control>
    <scroll
      class="content"
      ref="scroll"
      :probeType="3"
      @scroll="contentScroll"
      :pullUpLoad="true"
      @pullingLoad="loadMore"
    >
      <home-swiper
        :banners="banners"
        @swiperImageLoad="swiperImageLoad"
      ></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control :titles="titles" @tabClick="tabClick" ref="tabControl2">
      </tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommendView from "./childComps/RecommendView.vue";
import FeatureView from "./childComps/FeatureView.vue";

import Scroll from "components/common/scroll/Scroll.vue";
import NavBar from "components/common/navbar/NavBar.vue";
import TabControl from "components/content/tabControl/TabControl.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
// import BackTop from "components/content/backTop/BackTop.vue";

import { getHomeMultidata, getHomeGoods } from "network/home";
// import { debounce } from "../../common/utils";
import { itemListenerMixin, backTopMixin } from "../../common/mixins";
export default {
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    // BackTop,
  },
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      // isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0,
      // ItemImageListener: null,
    };
  },
  mixins: [itemListenerMixin, backTopMixin],
  created() {
    //数据请求是在组件创建好了就要全部请求过来所以使用created函数
    // 把主要的逻辑代码写到methods中
    //1.请求多个数据
    this.getHomeMultidata();
    //2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
    // console.log(1);
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  mounted() {
    //监听item中图片加载完成
    // const refresh = debounce(this.$refs.scroll.refresh, 500);
    // this.$bus.$on("itemImageLoad", () => {
    //   // this.$refs.scroll.refresh();
    //   // this.$refs.scroll.refresh();
    //   refresh();
    // });
    // 2.组件是没有offsetTop
    //需要获取到组件内部元素，元素才有offsetTop值
    //所有组件都一个属性$el：用于获取组件中的的元素
    // console.log(this.$refs.tabControl.$el.offsetTop);
    //当时此时拿到的offsetTop是不准确的，由于mounted函数，
    //是所有组件都挂载上来了，但图片不一定全都渲染上了
    //所以我们需要监听一下图片的加载完成
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
    // console.log(this.saveY);
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY();
    // console.log(this.saveY);
    // 取消全局事件的监听
    this.$bus.$off("itemImgLoad", this.ItemImageListener);
  },
  methods: {
    /* 事件监听相关方法 */

    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    // backClick() {
    //   // console.log(this.$refs.scroll);
    //   //可以直接封装一个方法在scroll组件中
    //   // this.$refs.scroll.scroll.scrollTo(0, 0, 300);
    //   this.$refs.scroll.scrollTo(0, 0, 300);
    // },
    contentScroll(position) {
      // console.log(position);
      // 1.判断BackTop是否显示
      this.isShowBackTop = -position.y > 1000;

      // 2.决定tabControl是否吸顶(position:fixed)
      this.isTabFixed = -position.y > this.tabOffsetTop;
    },
    loadMore() {
      // console.log(0);
      this.getHomeGoods(this.currentType);
      // this.$refs.scroll.finishPullUp();
    },
    swiperImageLoad() {
      // console.log(this.$refs.tabControl.$el.offsetTop);
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },

    /* 网络请求相关方法 */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        //数据请求过来了，我们需要一个data数据来保存数据
        //在函数里面打存函数调用过程中的所有变量(临时变量))
        // 函数调用结束 ->弹出函数栈(释放函数中的所有变量)
        //再调用一次，又重印数据，一旦函数执行完成后，请求过来的数据如果没有别的指向就会被回收
        //函数调用->压入到函数栈中(重新创建一次)
        //所以我们需要在数据被回收之前，保存起来
        // console.log(res);
        //函数中的this指向->向外层查找，找到created有一个this,并且这个this指向的是当前的组件对象
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },

    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        // console.log(res);
        //如何把一个数组直接放到另一个数组里面
        // 1.遍历
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp();
      });
    },
  },
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1; */
}
/* .tab-control {
  position: sticky;
  top: 40px;
  z-index: 1;
} */
.content {
  /* height: calc(100% - 44px - 49px); */
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.tab-control {
  position: relative;
  z-index: 1;
}
</style>
