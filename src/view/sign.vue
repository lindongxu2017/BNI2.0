<template>
  <div class="register" :style="{minHeight: clientHeight + 'px'}">
    <div>
      <!-- <van-field
        v-model="form.identity_text"
        label-align="right"
        label="参会身份 -"
        readonly
        @click="show = true"
        right-icon="arrow-down"
        @click-right-icon="show = true"
      />-->

      <!-- 选择身份 -->
      <div v-if="status" class="cell-form">
        <label class="cell-label" style="vertical-align: middle;">参会身份 -</label>

        <p @click="show = true" class="cell-select">{{form.identity}}</p>
        <div @click="show = true" class="cell-popup">
          <img src="@/assets/L-popup.png" alt />
        </div>
      </div>

      <!-- <div class="cell-form">
          <label class="cell-label" for>手机号 -</label>
          <input class="cell-tel cell-input" type="text" v-model="form.tel" placeholder="请输入手机号码" />
        </div>
        <div class="cell-form">
          <label class="cell-label" style="vertical-align: middle;" for>验证码 -</label>
          <input class="cell-code cell-input" type="text" v-model="form.code" placeholder="请输入验证码" />
          <button :disabled="code_text != '获取'" class="cell-get" @click="getcode">{{code_text}}</button>
      </div>-->
      <!-- <van-field v-model="form.tel" label-align="right" label="手机号码 -" placeholder="请输入手机号码" />
      <van-field v-model="form.code" label-align="right" label="验证码 -" placeholder="请输入验证码">-->

      <!-- <div slot="right-icon">
          <van-button
            :disabled="code_text != '获取'"
            type="primary"
            size="small"
            @click="getcode"
          >{{code_text}}</van-button>
      </div>-->

      <div>
        <div class="cell-form">
          <label class="cell-label" for>个人姓名 -</label>
          <input class="cell-input" type="text" v-model="form.name" placeholder="请输入参会人姓名" />
        </div>
        <div class="cell-form">
          <label class="cell-label" for>代表行业 -</label>
          <input class="cell-input" type="text" v-model="form.industry" placeholder="请输入代表行业" />
        </div>
        <div class="cell-form">
          <label class="cell-label" for>联系电话 -</label>
          <input
            class="cell-input number"
            type="number"
            v-model="form.mobile"
            placeholder="请输入联系电话"
          />
        </div>
        <div v-if="status" class="cell-form">
          <label class="cell-label" for>所在区域 -</label>
          <input class="cell-input" type="text" v-model="form.address" placeholder="请输入所在区域" />
        </div>
        <div v-if="status" class="cell-form">
          <label class="cell-label" for>分会名称 -</label>
          <input class="cell-input" type="text" v-model="form.bin_name" placeholder="请输入分会名称" />
        </div>
      </div>

      <div class="btn-wrapper">
        <van-button type="primary" @click="confirms" size="large" class="confirm">提交</van-button>
      </div>
      <van-popup round v-model="show" position="bottom">
        <van-picker
          show-toolbar
          :default-index="0"
          @cancel="show=false"
          @confirm="select"
          :columns="columns"
          value-key="name"
        />
      </van-popup>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "register",
  data() {
    return {
      form: {
        name: "", // 签到人
        mobile: "", // 签到的手机号
        industry: "", // 行业(可以为空)
        address: "", // 区域(可以为空)
        user_type: "1", // 签到类型 1、嘉宾 2、会员 3、观察员 4、大使
        bin_name: "", // 分会名字(可以为空)
        remark: "", // 备注(可以为空)=)
        replace_mobile: "", // 替代人手机号码(可以为空)
        referrer_uid: "", // 引荐人(可以为空)
        identity: "嘉宾"
      },
      status: true, // 为会员时隐藏

      code_text: "获取",
      clientHeight: 603,
      columns: [
        { name: "嘉宾", value: 1 },
        { name: "观察员", value: 3 },
        { name: "大使", value: 4 }
      ],
      show: false,
      styles: {
        observerImg: require("@/assets/L-observerBg.png"),
        memberImg: require("@/assets/L-memberBg.png")
      }
    };
  },
  mounted() {
    this.clientHeight = window.innerHeight || 603;
  },
  methods: {
    select(picker, index) {
      this.form.identity = picker.name;
      this.form.user_type = picker.value;
      this.show = false;
    },

    confirms() {
      if (!this.form.name.trim()) {
        this.$toast("请输入参会人姓名");
      } else if (
        this.form.mobile == "" ||
        !/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.form.mobile)
      ) {
        this.$toast("请输入正确的手机号");
      }
      var data = {
        name: this.form.name,
        mobile: this.form.mobile,
        industry: this.form.industry,
        address: this.form.address,
        name: this.form.name,
        user_type: this.form.user_type,
        remark: this.form.remark,
        replace_mobile: this.form.replace_mobile,
        referrer_uid: this.form.referrer_uid,
        active_id: this.$route.params.id
      };

      this.fn.ajax("post", data, "api/active_info/join", res => {
        console.log(res);
        this.$toast(res.msg);
        setTimeout(res=> {
          this.$router.push({
            path: "/activity"
          });
          console.log(123)
        }, 2000);
      });
    }
  },
  created() {
    if (JSON.parse(localStorage.userinfo).type == "3") {
      this.status = false;
    }
  }
};
</script>

<style>
.register .van-cell {
  align-items: center;
}
</style>

<style scoped>
.register {
  padding-top: 300px;
  background-size: 100%;
  background-repeat: no-repeat;
  box-sizing: border-box;
  background-image: url("../assets/L-observerBg.png");
}
.cell-box {
  display: flex;
  align-items: center;
  display: inline-block;
}
.cell-form {
  margin-top: 40px;
  padding-left: 73px;
  font-size: 0;
}
.cell-select {
  width: 293px;
  height: 64px;
  text-align: center;
  line-height: 64px;
  background-color: #eee;
  color: #333;
  font-size: 28px;
  border-radius: 10px 0 0 10px;
  vertical-align: middle;
  display: inline-block;
}
.cell-popup {
  background-color: #633842;
  height: 64px;
  width: 67px;
  border-radius: 0 10px 10px 0;
  text-align: center;
  line-height: 64px;
  box-sizing: border-box;
  vertical-align: middle;
  display: inline-block;
}
.cell-popup img {
  width: 26px;
  height: 16px;
  vertical-align: middle;
}
.cell-label {
  color: #fff;
  font-size: 28px;
  min-width: 140px;
  display: inline-block;
  text-align: right;
  padding-right: 13px;
}
.cell-input {
  width: 363px;
  height: 64px;
  line-height: 64px;
  border-radius: 10px;
  text-align: center;
  font-size: 28px;
  color: #333;
  background-color: #eee;
  appearance: none;
}
input.cell-tel {
  width: 293px;
}
input.cell-code {
  width: 206px;
  border-radius: 10px 0 0 10px;
  vertical-align: middle;
}
.cell-get {
  width: 87px;
  height: 64px;
  border-radius: 0 10px 10px 0;
  background-color: #633842;
  color: #fff;
  font-size: 20px;
  line-height: 64px;
  text-align: center;
  outline: none;
  border: none;
  vertical-align: middle;
}
input {
  border: none;
}
.btn-wrapper {
  margin-top: 60px;
  text-align: center;
}
.confirm {
  width: 162px;
  height: 64px;
  line-height: 64px;
  border-radius: 10px;
  font-size: 28px;
  color: #633b44;
  background-color: #f2decb;
  margin: 0 auto;
}
</style>