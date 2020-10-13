<template>
  <el-dialog :title="!form.id ?'新建' :'编辑' " :visible.sync="visible">
      <el-form ref="form" :model="form" :rules="rules" label-width="150px" class="demo-ruleForm">
        <el-form-item label="资源文件日期" prop="sourcefilescreatetime">
        <el-input v-model="form.sourcefilescreatetime"></el-input>
      </el-form-item>
     <el-form-item label="人员姓名" prop="personname">
        <el-input v-model="form.personname"></el-input>
      </el-form-item>
       <el-form-item label="分类标题" prop="categorytitle">
        <el-input v-model="form.categorytitle"></el-input>
      </el-form-item>
      <el-form-item label="视频名称" prop="name">
        <el-input v-model="form.name" clearable></el-input>
      </el-form-item>
       <el-form-item label="日期标题" prop="datetitle">
        <el-input v-model="form.datetitle"></el-input>
      </el-form-item>
      <el-form-item label="日常证道" prop="dailycategory">
        <el-select v-model="form.dailycategory" placeholder="请选是否为日常证道">
          <el-option label="是" value="1"></el-option>
          <el-option label="否" value="0"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="查经证道" prop="biblecategory">
        <el-select v-model="form.biblecategory" placeholder="请选是否为查经证道">
          <el-option label="是" value="1"></el-option>
          <el-option label="否" value="0"></el-option>
        </el-select>
      </el-form-item>
       <el-form-item label="福音证道" prop="gospelcategory">
        <el-select v-model="form.gospelcategory" placeholder="请选是否为福音证道">
          <el-option label="是" value="1"></el-option>
          <el-option label="否" value="0"></el-option>
        </el-select>
      </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('form')">保存</el-button>
        </el-form-item>
      </el-form>
  </el-dialog>
</template>


<script>
  import {
    getData
  } from "@api/public";
  export default {
    name: "UserForm",
    data() {
      return {
        visible:false,
        form: {
          sourcefilescreatetime:"",
          personname: "",
          categorytitle:"",
          name:"",
          datetitle:"",
          dailycategory: "",
          biblecategory:"",
          gospelcategory:""
        },
        rules: {
          sourcefilescreatetime: [{
              required: true,
              message: '请输入资源文件日期',
              trigger: 'blur'
            }],
         personname: [{
              required: true,
              message: '请输入人员姓名',
              trigger: 'blur'
            }],
          categorytitle: [{
              required: true,
              message: '请输入分类标题',
              trigger: 'blur'
            }],
          name: [{
              required: true,
              message: '请输入视频名称',
              trigger: 'blur'
            }],
          datetitle: [{
              required: true,
              message: '请输入日期标题',
              trigger: 'blur'
            }],
          dailycategory: [{
            required: true,
            message: '请选是否为日常证道',
            trigger: 'blur'
          }],
          biblecategory: [{
            required: true,
            message: '请选是否为查经证道',
            trigger: 'blur'
          }],
          gospelcategory: [{
            required: true,
            message: '请选是否为福音证道',
            trigger: 'blur'
          }]
        }
      };
    },
    methods: {
      init(row){
        this.form.id=row.ID;
        this.visible=true;
        this.$nextTick(()=>{
          this.form.sourcefilescreatetime=row.SourceFilesCreateTime;         
          this.form.personname=row.PersonName;
          this.form.name=row.Name;
          this.form.categorytitle=row.CategoryTitle;
          this.form.datetitle=row.DateTitle;
          this.form.dailycategory=row.DailyCategory;
          this.form.biblecategory=row.BibleCategory;
          this.form.gospelcategory=row.GospelCategory;
          this.form.id=row.ID;
        })
      },
      submitForm(form) {
        this.$refs[form].validate((valid) => {
          if (valid) {
            // 校验通过～formParams为填写的信息;
            let formParams = this.form;
            let params = {
              "jsonorder": {
                "token": "3456dfklj3443ldsfd435",
                "objectName": "dictionary",
                "functionName": this.form.id ?"update" : "insert",
                "data": formParams,
              }
            };
            //getArticleBanner这是接口地址，参数params
            getData(params)
              .then(res => {
                if (res.status == 200) {
                  this.$message({
                    message: '恭喜你～，成功啦',
                    type: 'success'
                  });
                   window.location.reload();
                } 
              })
              .catch(function (error) {
                this.$message.error('Oops~，网络错误了，请刷新重试～');
                
              });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  };
</script>

<style scoped>
</style>