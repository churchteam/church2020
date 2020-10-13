<template>
  <div class="index">
    <div class="nav clearfix" v-if="this.menus.length ">
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
    <div class="nav" v-else>
      什么也没有发现～
    </div>
  </div>
</template>
<script>
  import {
    getData
  } from "@api/public";
  export default {
    name: "ChaJing",
    data: function () {
      return {
        menus: []
      };
    },
    mounted: function () {
      let that = this;
      let params = {
        "jsonorder": {"token":"3456dfklj3443ldsfd435","objectName":"video","functionName":"GetFuyinData"} 
      };
     getData(params)
      .then(res => {
        console.log(res.status);
        that.$set(that, "menus", res.data);
      })
      .catch(function(error) {
        console.log(error);
      });
    },
    methods: {
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