<template>
    <div class="transaction">
      <div class='transaction_select'>
        交易类型：
        <el-select size="medium" v-model="selectType" placeholder="请选择交易类型">
          <el-option
            v-for="item in typeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        币种：
        <el-select size="medium" v-model="selectCoin" placeholder="请选择币种">
          <el-option
            v-for="item in coinOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <el-table
        :data="filterData"
        :cell-style="{ textAlign:'center'}"
        :header-cell-style="{ textAlign:'center'}"
        border
        style="width: 100%;">
        <el-table-column
          prop="create_time"
          :formatter="formatDatetime"
          label="日期">
        </el-table-column>
        <template>
          <el-table-column
            prop="user_id"
            label="用户ID">
          </el-table-column>
          <el-table-column
            prop="phone"
            label="手机号">
          </el-table-column>
        </template>
        <el-table-column label="交易类型" :formatter="formatTradeType"></el-table-column>
        <el-table-column
          prop="coin_type"
          :formatter="formatCoinType"
          label="币种">
        </el-table-column>
        <el-table-column
          prop="exchange_rate"
          label="汇率">
        </el-table-column>
        <el-table-column
          prop="amount"
          label="交易数量">
            <template slot-scope="scope">{{ scope.row.amount }}</template>
        </el-table-column>
        <el-table-column
          prop="unit_price"
          label="购买/卖出单价(CNY)">
            <template slot-scope="scope">{{ scope.row.unit_price }}</template>
        </el-table-column>
        <el-table-column
          prop="price"
          label="购买/卖出金额(CNY)">
            <template slot-scope="scope">{{ scope.row.price }}</template>
        </el-table-column>
        <el-table-column
          prop="tip"
          label="服务费">
            <template slot-scope="scope">{{ scope.row.tip }}</template>
        </el-table-column>
        <el-table-column
          prop="payAmount"
          label="支付/到账金额/兑换数量">
            <template slot-scope="scope">{{ scope.row.payAmount }}</template>
        </el-table-column>
        <el-table-column
          prop="payment_channel_type"
          label="支付方式">
        </el-table-column>
        <el-table-column
          prop="finish_time"
          :formatter="formatDatetime"
          label="到账时间">
        </el-table-column>
        <el-table-column
          prop="transBalance"
          label="交易后余额">
            <template slot-scope="scope">{{ scope.row.transBalance }}</template>
        </el-table-column>
        <el-table-column
          prop="rollOut"
          label="转出钱包">
        </el-table-column>
        <el-table-column
          prop="receive"
          label="接收钱包">
        </el-table-column>
        <el-table-column
          prop="order_id"
          label="订单编号">
        </el-table-column>
        <el-table-column label="订单状态" :formatter="formatOrderStatus"></el-table-column>
      </el-table>
      <div class="pagination" v-show="total > 0">
        <el-pagination layout="total, prev, pager, next" :current-page.sync="pageNum" :page-size="pageSize" :total="total" @current-change="handleCurrentChange"></el-pagination>
      </div>
    </div>
</template>

<script>
import { coinTypes, tradeTypeText, orderStatusText } from "@/const";
import {tradeOrder} from "./datas.js";

export default {
  data() {
    let coinTypeOptions = coinTypes.map(item => {
      return { label: item, value: item.toLowerCase() };
    });
    return {
      selectType: "",
      selectCoin: "",
      pageNum: 1,
      pageSize: 15,
      total: '',
      typeOptions: [{ label: "全部", value: "" }],
      coinOptions: [{ label: "全部", value: "" }, ...coinTypeOptions]
    };
  },
  computed: {
    list() {
      let orders = [];
      console.log(1)
      if (this.selectType == "" && this.selectCoin == "") {
        orders = tradeOrder;
      } else if (this.selectType == "") {
        orders = this.doFilter(tradeOrder, [
          { key: "coin_type", value: this.selectCoin }
        ]);
      } else if (this.selectCoin == "") {
        orders = this.doFilter(tradeOrder, [
          { key: "trade_type", value: this.selectType }
        ]);
      } else {
        orders = this.doFilter(tradeOrder, [
          { key: "coin_type", value: this.selectCoin },
          { key: "trade_type", value: this.selectType }
        ]);
      }
      return orders;
    },
    filterData() {
      return this.list;
      // return this.list.slice(start, end);
    }
  },
  created() {
    this.total = tradeOrder.length
    // let helper = {};
    for (let key in tradeTypeText) {
      this.typeOptions.push({ label: tradeTypeText[key], value: key });
    }
    // tradeOrder.forEach(item => {
    //   if (!helper[item.coin_type]) {
    //     helper[item.coin_type] = 1;
    //     this.coinOptions.push({
    //       value: item.coin_type,
    //       lable: item.coin_type.toUpperCase()
    //     });
    //   }
    // });
  },
  watch: {
    selectType() {
      this.pageNum = 1;
    },
    selectCoin() {
      this.pageNum = 1;
    },
    list(list) {
      this.total = list.length;
    }
  },
  methods: {
    formatDatetime(row, _, value) {
      return value;
    },

    formatCoinType(row, _, coinType) {
      return coinType.toUpperCase();
    },

    formatTradeType(row) {
      return tradeTypeText[row.trade_type];
    },

    formatOrderStatus(row) {
      return orderStatusText[row.order_status];
    },
    doFilter(data, cases) {
      console.log('cases', cases)
      return data.filter(row => {
        return cases.every(item => {
          // return row[item.key] == item.value;
          let x = row[item.key];
          if (String(x) === x) {
            // 如果是字符串，则使用 indexOf
            return x.toLowerCase().indexOf(item.value) !== -1;
          } else {
            // 否则使用 ===
            return x == item.value;
          }
        });
      });
    },

    handleCurrentChange(val) {
      this.pageNum = val;
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
