<template>
  <div class="tel-update">
    <van-cell-group class="field-wrapper">
      <van-field
        v-model="form.old_phone"
        type="text"
        readonly
        :border="false"
        label="原号码 -"
        placeholder
      >
        <van-button class="van-update-btn" slot="button" size="small" type="primary">短信验证</van-button>
      </van-field>
      <van-field v-model="form.code" type="text" :border="false" label="验证码 -" placeholder="-">
        <van-button class="van-update-btn" slot="button" size="small" type="primary">确认解绑</van-button>
      </van-field>
      <van-field v-model="form.new_phone" type="text" :border="false" label="新号码 -" placeholder="-">
        <van-button
          :class="['van-update-btn',disabled?'van-disabled-true-btn':'van-disabled-false-btn']"
          :disabled="disabled"
          slot="button"
          size="small"
          type="primary"
        >短信验证</van-button>
      </van-field>
      <van-field v-model="form.name" type="text" :border="false" label="验证码 -" placeholder="-">
        <van-button
          style="visibility: hidden;opacity: 0;"
          disabled
          class="van-update-btn"
          slot="button"
          size="small"
          type="default"
        ></van-button>
      </van-field>
      <div class="submit-btn">
        <van-button
          :class="['van-update-btn',disabled?'van-disabled-true-btn':'van-disabled-false-btn']"
          :disabled="disabled"
          type="primary"
          size="small"
        >确认添加</van-button>
      </div>
    </van-cell-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        old_phone: "",
        code: "",
        new_phone: ""
      },
      disabled: true
    };
  },
  mounted() {
        this.p(2).then(res => {
            console.log(res)
        }).then(res => {
            console.log(res)
        }).catch(error => {
            console.log(error)
        })
  },
  methods: {
   
  }
};
</script>
<style type="text/css">
.tel-update .van-cell,
.tel-update .van-cell-group {
  background-color: transparent;
}
.tel-update .van-field__label {
  line-height: 29px;
}
.tel-update .van-cell {
  font-size: 16px;
  color: #653e47;
  font-weight: bold;
  padding: 6px 16px;
}
.tel-update .van-field__control {
  font-size: 14px;
  font-weight: normal;
  background-color: #fff;
  border-radius: 3px;
  text-align: center;
  height: 29px;
  /*line-height: 29px;*/
  padding: 7.5px 0;
}
.tel-update .van-hairline--top-bottom:after,
.tel-update .van-hairline-unset--top-bottom:after {
  display: none;
}
.tel-update .van-button--small {
  min-width: 90px;
  height: 30px;
}
.tel-update .van-update-btn {
  background-color: #633842;
  min-width: 75px;
  height: 30px;
  font-size: 12px;
  font-weight: normal;
  width: 75px;
}
.tel-update .van-disabled-true-btn {
  background-color: #ccc;
  border-color: #ccc;
}
.tel-update .van-disabled-false-btn {
  background-color: #633842;
  border-color: #633842;
}
</style>
<style scoped>
.field-wrapper {
  padding-top: 91px;
}
.submit-btn {
  padding: 40px 0;
  text-align: center;
}
</style>