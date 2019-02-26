// TODO. 硬编码吗?
export const coinTypes = [
    'BTC',
    'EOS',
    'ETH',
    'MCNY',
    'USDT',
    'TCNY',
    'XRP',
    'BCH',
    'LTC',
    'ETC',
    'ONT',
    'DASH',
    'NEO'
  ]
  
  export const tradeTypes = [
    { label: `Buy`, value: `0` },
    { label: `Sell`, value: `1` },
    { label: `TransferIn`, value: `2` },
    { label: `TransferOut`, value: `3` },
    { label: `DepositCoin`, value: `4` },
    { label: `Withdraw`, value: `5` },
    { label: `ChainIn`, value: `6` },
    { label: `REFUND_FEE`, value: `7` },
    { label: `EOSOpenAccount`, value: `8` },
    { label: `FLASH_EXCHANGE`, value: `9` },
  ]
  
  export const orderSTatus = [
    { label: `Success`, value: 0 },
    { label: `Fail`, value: 1 },
    { label: `Uncomplete`, value: 2 },
    { label: `Cancel`, value: 3 },
    { label: `CancelExpired`, value: 4 },
    { label: `CancelChannelMaintenance`, value: 5 },
    { label: `Confirm`, value: 6 },
    { label: `Packing`, value: 7 },
    { label: `Expired`, value: 8 },
    { label: `Refunded`, value: 9 },
  ]
  
  //交易类型
  export const tradeTypeText = {
    0: `买币`,
    1: `卖币`,
    2: `转入`,
    3: `转出`,
    4: `充币`,
    5: `提币`,
    6: `链上转入`,
    7: `退款`,
    8: `EOS开户`,
    9: `闪兑`
  };
  
  
  //订单状态
  export const orderStatusText = {
    0: `成功`,
    1: `失败`,
    2: `未完成(已接收到请求)`,
    3: `用户取消`,
    4: `订单超时`,
    5: `通道维护(订单取消)`,
    6: `订单已确认`,
    7: `打包中(正在处理中)`,
    8: `链上交易过期`,
    9: `服务费已退回`
  }
  
  //支付方式
  export const paymentMethodText = {
    0: `支付宝`,
    1: `微信`,
    2: `QQ`,
    3: `银联`,
    4: `京东`,
    5: `银行卡`,
    6: `VIP`
  }
  // 登录状态
  export const loginStatus = {
    0: '未知',
    1: '登录中',
    2: '未登录',
  }
  
  