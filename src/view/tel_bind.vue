<template>
  <div class="tel-bind">
    <van-cell-group class="field-wrapper">
      <van-field
        v-model="form.phone"
        type="text"
        :border="false"
        label="当前电话 -"
        placeholder="请输入手机号码"
      >
        <van-button class="van-update-btn" slot="button" size="small" type="primary">短信验证</van-button>
      </van-field>
      <van-field
        v-model="form.code"
        type="text"
        :border="false"
        label="添加验证 -"
        placeholder="-"
      >
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
        <van-button style="backgroundColor: #633842;" type="primary" size="small">确认绑定</van-button>
      </div>
    </van-cell-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        phone:"",
        code: "", 
      }
    };
  }
};
</script>
<style type="text/css">
.tel-bind .van-cell,
.tel-bind .van-cell-group {
  background-color: transparent;
}
.tel-bind .van-field__label {
  line-height: 29px;
}
.tel-bind .van-cell {
  font-size: 16px;
  color: #653e47;
  font-weight: bold;
}
.tel-bind .van-field__control {
  font-size: 14px;
  font-weight: normal;
  background-color: #fff;
  border-radius: 3px;
  text-align: center;
  height: 29px;
  /*line-height: 29px;*/
  padding: 7.5px 0;
}
.tel-bind .van-hairline--top-bottom:after,
.tel-bind .van-hairline-unset--top-bottom:after {
  display: none;
}
.tel-bind .van-button--small {
  min-width: 90px;
  height: 30px;
}
.tel-bind .van-update-btn {
  background-color: #633842;
  min-width: 75px;
  height: 30px;
  width: 75px;
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