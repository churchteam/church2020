<template>
  <div class="church-header">
    <!-- pc -->
    <div class="container clearfix">
      <h3 class="logo fl">
        <img src="@assets/images/logo.png" />
      </h3>
      <div class="nav fl">
        <router-link :to="item.url" class="item" :class="{ on: item.url === $route.path }"
          v-for="(item, index) in footerList" :key="index">
          {{ item.name }}
        </router-link>
      </div>
      <el-autocomplete  popper-class="my-autocomplete" v-model="state" :fetch-suggestions="querySearch"
        placeholder="请输入内容" @select="handleSelect">
        <template slot-scope="{ item }">
          <a :href="'/activity/' + item.ID + '/video'">
            <div class="name">{{ item.Name }}</div>
          </a>
        </template>
      </el-autocomplete>
    </div>
     
  </div>
</template>
<script>
  import {
    getData
  } from "@api/public";
  export default {
    name: "Header",
    props: {},
    data: function () {
      return {
        restaurants: [],
        state: "",
        footerList: [{
            name: "日常证道",
            url: "/"
          },
          {
            name: "直播",
            url: "/activity/live"
          },
          {
            name: "福音",
            url: "/activity/fuyin"
          }
          ,
          {
            name: "查经",
            url: "/activity/chajing"
          }
        ]
      };
    },
    methods: {
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ?
          restaurants.filter(this.createFilter(queryString)) :
          restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return restaurant => {
          return (
            restaurant.Name.toLowerCase().indexOf(queryString.toLowerCase()) != -1
          );
        };
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    mounted: function () {
      let that = this;
      let params = {
        jsonorder: {
          token: "3456dfklj3443ldsfd435",
          objectName: "video",
          functionName: "getdata",
          data:{}
        }
      };
      getData(params)
        .then(res => {
          console.log(res.status);
          that.$set(that, "restaurants", res.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
</script>
<style scoped>
</style>