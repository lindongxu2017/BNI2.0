<template>
  <div
    class="register"
    :style="{minHeight: clientHeight + 'px',paddingTop:(form.identity == 1?218:161)+'px',backgroundImage:'url(' + (form.identity == 1?styles.memberImg:styles.observerImg) + ')'}"
  >
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
      <div class="cell-form">
        <label class="cell-label" style="vertical-align: middle;" for>参会身份 -</label>

        <p @click="show = true" class="cell-select">{{form.identity_text}}</p>
        <div @click="show = true" class="cell-popup">
          <img src="@/assets/L-popup.png" alt />
        </div>
      </div>

      <div v-if="form.identity == 1">
        <div class="cell-form">
          <label class="cell-label" for>手机号 -</label>
          <input class="cell-tel cell-input" type="text" v-model="form.tel" placeholder="请输入手机号码" />
        </div>
        <div class="cell-form">
          <label class="cell-label" style="vertical-align: middle;" for>验证码 -</label>
          <input class="cell-code cell-input" type="text" v-model="form.code" placeholder="请输入验证码" />
          <button :disabled="code_text != '获取'" class="cell-get" @click="getcode">{{code_text}}</button>
          <!-- <van-button :disabled="code_text != '获取'" type="primary" size="small">{{code_text}}</van-button> -->
        </div>
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
      </div>

      <div v-else>
        <div class="cell-form">
          <label class="cell-label" for>个人姓名 -</label>
          <input class="cell-input" type="text" v-model="form.username" placeholder="请输入参会人姓名" />
        </div>
        <div class="cell-form">
          <label class="cell-label" for>代表行业 -</label>
          <input class="cell-input" type="text" v-model="form.username" placeholder="请输入参会人姓名" />
        </div>
        <div class="cell-form">
          <label class="cell-label" for>联系电话 -</label>
          <input class="cell-input" type="text" v-model="form.username" placeholder="请输入参会人姓名" />
        </div>
        <div class="cell-form">
          <label class="cell-label" for>所在区域 -</label>
          <input class="cell-input" type="text" v-model="form.username" placeholder="请输入参会人姓名" />
        </div>
        <div class="cell-form">
          <label class="cell-label" for>分会名称 -</label>
          <input class="cell-input" type="text" v-model="form.username" placeholder="请输入参会人姓名" />
        </div>

        <!-- <van-field
          v-model="form.username"
          label-align="right"
          label="参会人姓名 -"
          placeholder="请输入参会人姓名"
        />
        <van-field
          v-model="form.username"
          label-align="right"
          label="代表行业 -"
          placeholder="请输入代表行业"
        />
        <van-field
          v-model="form.username"
          label-align="right"
          label="联系电话 -"
          placeholder="请输入联系电话"
        />
        <van-field
          v-model="form.username"
          label-align="right"
          label="所在区域 -"
          placeholder="请输入所在区域"
        />
        <van-field
          v-model="form.username"
          label-align="right"
          label="分会名称 -"
          placeholder="请输入分会名称"
        />-->
      </div>

      <div class="btn-wrapper">
        <van-button type="primary" size="large" class="confirm">提交</van-button>
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
        username: "",
        tel: "",
        code: "",
        identity: "1",
        identity_text: "会员"
      },
      code_text: "获取",
      clientHeight: 603,
      columns: [
        { name: "会员", value: 1 },
        { name: "观察员", value: 2 },
        { name: "大使", value: 3 }
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
      this.form.identity = picker.value;
      this.form.identity_text = picker.name;
      this.show = false;
    },
    getcode() {
      if (
        this.form.tel == "" ||
        !/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.form.tel)
      ) {
        this.$toast("请输入正确的手机号码");
        return;
      }
      var time = 60;
      this.code_text = time + "s";
      var timer = setInterval(() => {
        if (parseInt(time) == 0) {
          this.code_text = "获取";
          clearInterval(timer);
          return;
        }
        time = parseInt(time) - 1;
        this.code_text = time + "s";
      }, 1000);
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
  /* padding: 200px 68px 0; */
  /* padding: 200px 172px 0 74px; */
  /* background-color: #fff; */
  background-size: 100%;
  background-repeat: no-repeat;
  box-sizing: border-box;
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
  vertical-align: middle
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