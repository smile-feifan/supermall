import {debounce} from './utils'
import {BACK_POSITION} from './const'
import BackTop  from "../components/content/backTop/BackTop.vue"

export const itemListenerMixin={
  data() {
    return {
      itemImgListener:null,
      refresh:null
    }
  },
  mounted() {
    this.refresh=debounce(this.$refs.scroll.refresh,500)
    this.itemImgListener=()=>{
      this.refresh();
    }
    this.$bus.$on('itemImageLoad',this.itemImgListener)
  }
}

export const backTopMixin={
  data() {
    return {
      isShowBackTop:false
    }
  },
  components:{
    BackTop
  },
  methods:{
    backClick() {
      this.$refs.scroll.scrollTo(0,0,300)
    },
    ListenerShowBackTop(position) {
    this.isShowBackTop=-position.y>BACK_POSITION?true:false
   }
  },
  

}