<template>
  <div class="wrapper">
    <el-table
      :data="user"
    >
    <el-table-column  align="center" header-align="center" label="id" prop="id" width="50"></el-table-column>
    <el-table-column  align="center" header-align="center" label="姓名" prop="username"></el-table-column>
    <el-table-column  align="center" header-align="center" label="状态" prop="disabled">
      <template slot-scope="scope">
        <div class="btn-wrap">
          <el-switch
            v-model="scope.row.static"
            active-text="启用"
            inactive-text="禁用"
            inactive-color="#ff4949"
            @change="handlestatus(scope.row)"
          >
          </el-switch>
        </div>
      </template>
    </el-table-column>
    <el-table-column align="center" header-align="center"  label="注册时间" prop="createdAt"></el-table-column>
    <el-table-column align="center" header-align="center"  label="注册Ip" prop="createdIpAt"></el-table-column>
    <el-table-column align="center" header-align="center"  label="最近登录时间" prop="updatedAt"></el-table-column>
    <el-table-column align="center" header-align="center"  label="最近登录Ip" prop="updatedIpAt"></el-table-column>

    <el-table-column label="操作" align="center" header-align="center" >
      <template slot-scope="scope">
        <div class="btn-wrap">
          <el-button type="primary" size="mini" plain>查看</el-button>
          <el-button type="danger" size="mini" plain>删除</el-button>
        </div>
      </template>
    </el-table-column>
    </el-table>

    <el-pagination
      background
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[2, 4, 6, 8]"
      :page-size="limit"
      layout="total, prev, pager, next, jumper"
      :total="count">
    </el-pagination>
  </div>
</template>

<script lang="ts">
import moment from 'moment'
import axios from "axios";
import { Vue, Component } from "vue-property-decorator";
@Component
export default class User extends Vue {
  user:any[] = []
  count:number = 0
  currentPage:number = 1
  limit:number = 5
  async handlestatus({id}:any) {
    let {data} = await axios.post('/api/admin/user/status',{id})
    console.log(data)
  }
  momentFn(time:string,format?:string) {
    return moment(time).format('YYYY年MM月DD日 HH:mm:ss')
  }
  async handleCurrentChange(val:any) {
    this.currentPage = val
    this.getUserList()
  }
  async getUserList() {
    let _this = this
    await axios.get("/api/admin/user",{
      params:{
        page: this.currentPage,
        limit: this.limit
      }
    }).then(res => {
      this.count = res.data.data.count
      this.user = res.data.data.rows.map((item:any) => {
        return Object.assign(item, {
          static: !item.disabled,
          createdAt: _this.momentFn(item.createdAt),
          updatedAt: _this.momentFn(item.updatedAt)
        })
      })
      console.log( this.user )
    })
  }
  async created() {
    this.getUserList()
  }
}
</script>
<style lang="less" scoped>
.btn-wrap {
  display: flex;
  justify-content: center;
}
</style>