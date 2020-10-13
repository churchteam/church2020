<template>
  <div class="index home"  ref="container">
    <div class="nav clearfix">
      <div
        class="item"
        v-for="(item, index) in menus"
        :key="index"
        @click="goDetail(item)"
      >
        <div class="pictrue ">
          <img :src="'http://18.183.203.248/'+item.PictureURL" />
          <div class="title">{{ item.Name }}</div>
        </div>
      </div>
    </div>
    <Loading :loaded="loaded" :loading="loading"></Loading>
  </div>
</template>
<script>
import { getData } from "@api/public";
import Loading from "@components/Loading";
export default {
  name: "Richang",
  components: {
    Loading
  },
  data: function() {
    return {
      menus: [],
      page: 1,
      limit: 10,
      loading: false,
      loaded: false
    };
  },
  mounted: function() {
    this.getList();
    this.$scroll(this.$refs.container, () => {
      !this.loading && this.getList();
    });
  },
  methods: {
    // 获取数据
    getList(){
      // const { page, limit } = this;
       let that = this;
       if (that.loading) return; //阻止下次请求（false可以进行请求）；
      if (that.loaded) return; //阻止结束当前请求（false可以进行请求）；
      that.loading = true;
      let pagenum={"pagenumber":that.page};
      let params = {
        jsonorder: {
          token: "3456dfklj3443ldsfd435",
          objectName: "video",
          functionName: "getcurrentpages",
          data:pagenum
        }
      };
      getData(params)
        .then(res => {
          // that.$set(that, "menus", res.data);
          //  that.menus = that.menus.concat(res.data);
           that.menus.push.apply(that.menus, res.data);
           that.loading = false;
           that.loaded = res.data.length < that.limit;
           console.log(this.loading+"------"+this.loaded);
          that.page = that.page + 1;
        })
        .catch(function(error) {
          that.loading = false;
        });
    },
    // 跳转
    goDetail(item) {
      if (item.ID) {
        this.$router.push({
          path: "/activity/" + item.ID + "/video"
        });
      } else {
        this.$message({
          showClose: true,
          message: "获取视频资源错误啦～～，请刷新重试！",
          type: "error"
        });
      }
    }
  }
};
</script>
<style scoped>
[v-cloak] {
  display: none;
}
</style>
