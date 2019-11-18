<template>
<div>
     

<!-- Form -->
<el-button type="text" @click="dialogFormVisible = true" style="color:black">登录</el-button>

<el-dialog title="登录" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="用户名" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码" :label-width="formLabelWidth">
        <el-input v-model="form.password" autocomplete="off"></el-input>
      
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>
</div>
 

</template>

<script>
export default {
       
        data() {
      return {
        dialogFormVisible: false,
        form: {
          name: '',
          password:'',
         
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '80px'
      };
    }
}
</script>

<style>

</style>