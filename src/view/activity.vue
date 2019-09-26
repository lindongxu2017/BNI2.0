<template>
  <div class="activity">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list
        class="list"
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="getlist"
      >
        <div class="item">
          <item :status="sign_status" :info="list" @sign="sign" @share="share"></item>
        </div>
      </van-list>
    </van-pull-refresh>
    <van-popup v-model="show" class="sign-wrapper">
      <div class="sign-tips">请扫码签到</div>
      <div class="code-wrapper">
        <img class="code" v-if="!code_loading" :src="code_QR" />
        <van-loading v-else type="spinner" />
      </div>
      <img class="close-icon" src="@/assets/close.png" @click="closed" />
    </van-popup>
    <van-popup v-model="shareVisible" class="share-wrapper" @click="shareVisible = false">
      <div class="content">
        <img class="share-icon" src="@/assets/share.png" />
        <div class="share-tips">
          <div>分享该页面链接即可邀</div>
          <div>请嘉宾参与早会</div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import item from "@/components/activity";
export default {
  name: "activity",
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      isLoading: false,
      show: false,
      code_loading: true,
      shareVisible: false,
      userInfo: {},
      code_QR: "",
      timer:undefined,
      sign_status:false, // 签到状态
    };
  },
  mounted() {},
  methods: {
    sign(id) {
      // var id = options.id;

      // 获取生成的签到二维码
      this.fn.ajax("post", { id }, "api/active_info/create_qrcode", res => {
        console.log(res);
        //
        if (res.code == "5000") {
          // 未激活
          var userType = JSON.parse(localStorage.userinfo).type;
          if (userType == "3" || userType == "2") {
            // 活动报名激活
            this.fn.ajax("post", { id }, "api/active_info/activate", result => {
              console.log(result);
              if (result.code == "5001") {
                // 没有可支付的付费订单
                // 创建会费订单
                this.fn.ajax(
                  "post",
                  {},
                  "api/active_info_order/create_order",
                  result1 => {
                    console.log(result1);
                    // 创建支付订单
                    this.fn.ajax(
                      "post",
                      {
                        target_type: 1,
                        target_id: result1.data.id,
                        pay_method: 3
                      },
                      "api/order/create_order",
                      result2 => {
                        console.log(result2);

                        // 生成支付信息
                        this.fn.ajax(
                          "post",
                          {
                            order_id: result2.data.id,
                            pay_method: 3
                          },
                          "api/order/pay_order",
                          result3 => {
                            console.log(result3);
                            this.fn.wxPay(result3);
                          }
                        );
                      }
                    );
                  }
                );
              } else {
                // 说明有订单,重新调用生成二维码接口
              }
            });
          }
        } else {
          this.show = true;
          this.code_QR = res.data;
          this.code_loading = true;
          setTimeout(() => {
            this.code_loading = false;
          }, 500);

          this.timer = setInterval(() => {
            this.fn.ajax("post",{id},"api/active_info/info",res =>{
              console.log(res)
              if (res.data.sign_status == "1") {
                this.sign_status = true;
                this.closed()
              }else{

              }
            })
          }, 2000);
        }
      });
    },
    share() {
      this.shareVisible = true;
    },
    // 关闭扫二维码弹窗,清除定时器
    closed(){
      this.show = false;
      clearInterval(this.timer)
    },
    // 创建订单
    getPaymentMsg() {
      this.fn.ajax("post", {}, "api/active_info_order/create_order", res => {});
    },
    // 获取活动列表
    getlist() {
      this.fn.ajax(
        "get",
        {
          store_id: 13,
          page: 1,
          name: ""
        },
        "api/active/index",
        res => {
          this.loading = false;
          this.isLoading = false;
          console.log(res);
          this.list = this.list.concat(res.data.data);
          if (this.list.length >= res.data.total) {
            this.finished = true;
          }
        }
      );
    },
    // 检测是否微信授权
    checkWxAuth(){
      this.fn.ajax("get",{},"api/order/check_pay_auth",res =>{
        console.log(res)
        
      })
    },
    onRefresh() {
      this.list = [];
      this.loading = true;
      this.finished = false;
      this.getlist();
    }
  },
  components: {
    item
  },
  created() {
    this.userInfo = JSON.parse(localStorage.userinfo);
    clearInterval(this.timer);
    this.checkWxAuth()
  }
};
</script>

<style type="text/css">
.activity .van-overlay {
  background-color: transparent;
}
</style>

<style scoped>
.list {
  /*padding: 20px;*/
}
.item {
  /* background-color: #fff; */
  margin-bottom: 2px;
  /*padding: 20px;*/
}
.code-wrapper {
  width: 330px;
  height: 330px;
  text-align: center;
  line-height: 330px;
  /*margin: auto;*/
  margin-bottom: 100px;
}
.code-wrapper img {
  width: 100%;
  height: 100%;
  display: block;
}
.share-wrapper {
  left: 0;
  top: 0;
  transform: translate(0, 0, 0);
  background-color: transparent;
  text-align: right;
  color: #fff;
  font-size: 36px;
  /*padding: 20px 20px 0 0;*/
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  position: absolute;
}
.share-wrapper img {
  width: 49px;
  height: 49px;
  margin-right: 43px;
  margin-top: 53px;
}
.share-tips {
  position: absolute;
  text-align: left;
  right: 123px;
  top: 144px;
  font-size: 28px;
}
.share-icon {
  width: 150px;
}
.sign-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
}
.sign-tips {
  font-size: 28px;
  color: #fff;
  text-align: center;
  margin-bottom: 30px;
}
.close-icon {
  position: absolute;
  right: 10px;
  top: 20px;
  width: 30px;
  height: 30px;
  padding: 20px;
}
</style>