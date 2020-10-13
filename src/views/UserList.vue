<template>
  <div class="user-wrap">
    <UserForm v-show="addOrUpdateVisible" ref="addOrUpdate" @refreshDataList="getDate"></UserForm>
    <el-table :data="tableData" stripe height="500" style="width: 100%">
      <el-table-column prop="SourceFilesCreateTime" label="资源文件日期" width="180" align="center">
      </el-table-column>
      <el-table-column prop="Name" label="视频名称"> </el-table-column>
      <el-table-column prop="CategoryTitle" label="分类标题"> </el-table-column>

      <el-table-column align="right">
        <template slot="header">
          <el-button size="mini" type="primary" @click="addOrUpdateHandle(0)">新建</el-button>
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="addOrUpdateHandle(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row.ID)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import UserForm from "@components/UserForm";
  import {
    getUserList
  } from "@api/public";
  export default {
    components: {
      UserForm
    },
    data() {
      return {
        tableData: [],
        addOrUpdateVisible: false
      };
    },
    mounted: function () {
      let that = this;
      let params = {
        jsonorder: {
          token: "3456dfklj3443ldsfd435",
          objectName: "video",
          functionName: "getdata"
        }
      };
      getUserList(params)
        .then(res => {
          that.$set(that, "tableData", res.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    methods: {
      addOrUpdateHandle(row) {
        this.addOrUpdateVisible = true;
        this.$refs.addOrUpdate.init(row);
      },
      handleDelete(id) {
        let that = this;
          let idJson = {
            id: id
          };
          let params = {
            jsonorder: {
              token: "3456dfklj3443ldsfd435",
              objectName: "dictionary",
              functionName: "delete",
              data: idJson
            }
          };
        this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(function () {   
          getUserList(params)
            .then(res => {
              //成功走这里
              window.location.reload();
            })
            .catch(function (error) {
             this.$message.error("Oops~，网络错误了，请刷新重试～");
            });

        }).catch(() => {
          console.log("取消删除");
        });
        // end
      }
    }
  };
</script>

<style scoped>
  .user-wrap {
    max-width: 800px;
    margin: 0 auto;
  }
</style>