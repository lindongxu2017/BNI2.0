<template>
  <div class="register" :style="{minHeight: clientHeight + 'px'}">
    <p class="cell-text">
      您即将第8次成为本会会议的观察员/大使请等待系统后台人员审核…
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      clientHeight: 603
    };
  },
  mounted() {
    this.clientHeight = window.innerHeight || 603;
  }
};
</script>
<style scoped>
.register {
  background: url("../assets/L-auditBg.png") no-repeat center center;
  /* background-size: 100% 100%; */
  background-size: cover;
  padding:0 45px;

}
.cell-text {
  font-size: 34px;
  line-height: 1.5;
  color: #fff;
  padding-top: 176px;
}
</style>