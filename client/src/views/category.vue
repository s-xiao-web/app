<template>
  <div class="wrapper">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">
        <div>
          <el-row :gutter="20">
            <el-col :span="11">
              <el-input v-model="input" placeholder="请输入内容"></el-input>
            </el-col>
            <el-col :span="10">
              <el-button type="primary" @click="addMenuFn(0)">添加菜单</el-button>
            </el-col>
          </el-row>
        </div>

        <el-tree :data="category">
          <div class="list" slot-scope="{node, data}">
            <span>{{data.name}}</span>
            <div class="handel_line">
              <el-button type="text">添加分类</el-button>
              <span class="line">|</span>
              <el-button type="text">修改</el-button>
              <span class="line">|</span>
              <el-button type="text">删除</el-button>
            </div>
          </div>
        </el-tree>
      </el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import axios from "axios";
@Component
export default class Category extends Vue {
  activeName: string = "first";
  input: string = "";
  category: any[] = [];
  handleClick() {
    // console.log( tab, event )
  }
  async addMenuFn(pid: number) {
    let { data } = await axios.post("/api/admin/category/addCategory", {
      pid,
      name: this.input
    });
    if (data.code == 201) {
      this.$notify({
        title: "警告",
        message: data.data,
        type: "warning"
      });
    } else {
      this.$notify({
        title: "成功",
        message: "这是一条成功的提示消息",
        type: "success"
      });
      this.getCategoryData();
    }
  }
  async getCategoryData() {
    let { data } = await axios.get("/api/admin/category");
    this.category = data;
    console.log(data);
  }
  async created() {
    this.getCategoryData();
  }
}
</script>
<style lang="less" scoped>
.el-tree {
  margin-top: 20px;
}
.list {
  display: flex;
  flex: 1;
  align-self: center;
  justify-content: space-between;
  .handel_line .line{
    color: #eee;
    padding: 0 10px;
  }
  .el-button {
    padding: 0;
  }
}
</style>