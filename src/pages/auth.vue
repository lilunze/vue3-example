<!--
 * @Author: lilunze
 * @LastEditors: lilunze
 * @Desc: 登陆页面
-->
<template>
  <div class="auth_page">
    <div class="bare_header">
      <img src="" alt="" /> <span>Data Gallery</span>
    </div>
    <el-card class="box-card" shadow="never">
      <el-form :model="ruleForm">
        <el-col :span="12">
          <el-form-item prop="firstName">
            <el-input v-model="ruleForm.firstName" autocomplete="off"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="lastName">
            <el-input v-model="ruleForm.lastName" autocomplete="off"></el-input>
          </el-form-item>
        </el-col>
        <el-form-item label="Email" prop="email">
          <el-input v-model="ruleForm.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'home',
  props: {
    msg: String
  },
  data: () => {
    return {
      ruleForm: {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
      }
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.auth_page {
  width: 100%;
  height: 100%;
  background-color: #f9fafb;
}
.bare_header {
  padding: 80px 0 25px;
  text-align: center;
}
.box-card {
  width: 500px;
  margin: 0 auto;
}
</style>
