<template>
  <div class="form-page">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="用户名" prop="user">
    <el-input type="text" v-model="ruleForm.user" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
  </div>
</template>


<script>
  import cookie from "@utils/store/cookie";
  import localStorage from "@utils/store/cookie";
  export default {
    data() {
      return {
        ruleForm: {
          user: '',
          pass: ''
        },
        rules: {
          user: [{
              required: true,
              message: '请输入用户名',
              trigger: 'blur'
            }],
         pass: [{
              required: true,
              message: '请输入密码',
              trigger: 'blur'
            }]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.ruleForm)
            const CACHE_KEY = "CHURCH_USER";
            if (this.ruleForm.user == "church123" && this.ruleForm.pass== "123456") {
              //这里cookie单位是分钟
              cookie.set(CACHE_KEY,this.ruleForm.user,1440);
              window.location.href = "/userlist";
            } else {
              this.$message.error('亲～，账号或密码输入有误。');
              cookie.remove(CACHE_KEY);
            }
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
  .form-page {
    background: #fff;
    max-width: 4rem;
    margin: 0.2rem auto;
    padding: 0.2rem;
  }
</style>