<!--  -->
<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <h2>首页</h2>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {getHomeMultidata} from 'network/home'
export default {
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  components: {
    NavBar
  },
  created() {
    // 1. 请求多个数据
    getHomeMultidata().then(res => {
      // 响应拦截时 return res.data
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
  }
};
</script>
<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: white;
}
</style>