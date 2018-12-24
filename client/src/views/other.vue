<template>
  <div class="wrapper">
    <el-button @click="register">注册</el-button>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%">
      <div>
        <el-row>
          <el-col :span="24">
              <el-input v-model="FormData.username" placeholder="请输入用户名" style="margin-bottom:20px;"></el-input>
              <el-input v-model="FormData.password" placeholder="请输入密码" style="margin-bottom:20px;"></el-input>
              <el-input v-model="FormData.repassword" placeholder="请再次输入密码"></el-input>
          </el-col>
        </el-row>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="sendAddUser">确 定</el-button>
      </span>
    </el-dialog>
    <div style="margin-top:30px;">
      <el-input placeholder="用户名" v-model="loginData.username"></el-input>
      <el-input placeholder="密码" v-model="loginData.password"></el-input>
      <el-button @click="loginFn">登录</el-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { Vue, Component } from "vue-property-decorator";
@Component
export default class other extends Vue {
  dialogVisible = false
  input = ''
  FormData = {
    username:null,
    password: null,
    repassword:null
  }
  loginData = {
    username: null,
    password: null 
  }
  async sendAddUser() {
    this.dialogVisible = !this.dialogVisible
    await axios.post('/api/main/user/register',{...this.FormData}).then(res => {
      if (!res) alert('你现在已经注册成功了') 
    })
  }
  async loginFn() {
    axios.post('/api/main/user/login',{...this.loginData}).then(res => {
      let {data} = res
      
    })
  }

  register() {
    this.dialogVisible = !this.dialogVisible
  }
}
</script>