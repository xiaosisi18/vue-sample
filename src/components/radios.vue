<template>
  <div class="radios">
    <div>
      <el-button type="primary" plain @click="add">添加按钮</el-button>
    </div>
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="comfirmDialog">确 定</el-button>
      </div>
    </el-dialog>

    <div v-for="(item,index) in list" :key="index">
      <div>{{item.title}}</div>
      <div>
        <span>添加账号限制：</span>
        <el-radio-group v-model="item.radio1">
          <el-radio :label="1">备选项</el-radio>
          <el-radio :label="2">备选项</el-radio>
          <el-radio :label="3">备选项</el-radio>
        </el-radio-group>
        <el-input v-model="item.input" placeholder="请输入内容" style="margin-left:20px;width: 300px"></el-input>
      </div>
      <div>
        <span>发文同步限制：</span>
        <el-radio-group v-model="item.radio2">
          <el-radio :label="4">备选项</el-radio>
          <el-radio :label="5">备选项</el-radio>
          <el-radio :label="6">备选项</el-radio>
        </el-radio-group>
      </div>
      <div>
        <span>智能采取发布限制：</span>
        <el-radio-group v-model="item.radio3">
          <el-radio :label="7">备选项</el-radio>
          <el-radio :label="8">备选项</el-radio>
          <el-radio :label="9">备选项</el-radio>
        </el-radio-group>
      </div>
    </div>

       <div>
      <el-button type="primary" plain @click="submit">提交按钮</el-button>
    </div>
  </div>
</template>

<script>
import { coinTypes, tradeTypeText, orderStatusText } from "@/const";
import { tradeOrder } from "./datas.js";

export default {
  data() {
    return {
      dialogFormVisible: false,
      form: {
        name: ""
      },
      formLabelWidth: "120px",
      list: [
        {
          title: "高级会员",
          radio1: 3,
          radio2: 3,
          radio3: 3,
          input:''
        }
      ]
    };
  },
  computed: {},
  watch: {},
  methods: {
    add() {
      this.dialogFormVisible = true;
    },
    comfirmDialog() {
      this.dialogFormVisible = false;
      this.list.push({title: this.form.name, radio1: 9,radio2: 3,radio3: 3,});
    },
    submit(){
      console.log(this.list)
    }
  }
};
</script>
<style scoped>
.mini-title {
  font-size: 14px;
  margin: 10px 0;
}

.transaction_select {
  font-size: 14px;
  margin: 16px 0;
}

.el-select {
  margin: 0 25px 0 0;
}

.pagination {
  margin: 20px auto;
}

.el-pagination {
  text-align: center;
}

.download {
  color: #409eff;
  padding-left: 10px;
  text-decoration: underline;
}
</style>
