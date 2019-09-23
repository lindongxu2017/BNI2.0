<template>
  <div class="gains">
    <div class="section">
      <div class="cell-title">刘浩天的自我介绍</div>
      <textarea class="cell-control" :disabled="disabled" placeholder v-model="form.introduction"></textarea>
    </div>
    <div class="section">
      <div class="cell-title cell-he">他的Gains表</div>
      <p class="cell-module">G-我的目标</p>
      <textarea class="cell-control" :disabled="disabled" placeholder v-model="form.business_goals"></textarea>
    </div>
    <div class="section">
      <p class="cell-module">A-我的成就</p>
      <textarea class="cell-control" :disabled="disabled" placeholder v-model="form.cause"></textarea>
    </div>
    <div class="section">
      <p class="cell-module">I-我的兴趣</p>
      <textarea class="cell-control" :disabled="disabled" placeholder v-model="form.interest"></textarea>
    </div>
    <div class="section">
      <p class="cell-module">N-我的人脉</p>
      <textarea class="cell-control" :disabled="disabled" placeholder v-model="form.contacts"></textarea>
    </div>
    <div class="section">
      <p class="cell-module">S-我的技能</p>
      <textarea class="cell-control" :disabled="disabled" placeholder v-model="form.skills"></textarea>
    </div>
    <div class="submit-btn" v-show="!disabled">
      <button @click="saveGains" class="cell-save">保存修改</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "gains",
  data() {
    return {
      ids: "",
      form: {
        introduction: "",
        business_goals: "",
        cause: "",
        interest: "",
        contacts: "",
        skills: ""
      },
      disabled: true,
      user_id: ""
    };
  },
  created() {
    this.ids = this.$route.params.id;
    this.user_id = JSON.parse(localStorage.userinfo).id;
    if (this.ids == this.user_id) {
      this.disabled = false;
    }
    this.getUserGains();
  },
  methods: {
    // 获取
    getUserGains() {
      var data = {
        id: this.ids
      };
      // TODO
      this.fn.ajax("get", data, "api/index/user_gains", res => {
        this.form = res.data;
      });
    },
    // 保存
    saveGains() {
      this.fn.ajax(
        "post",
        {
          business_goals: this.form.business_goals,
          introduction: this.form.introduction,
          cause: this.form.cause,
          life: "",
          interest: this.form.interest,
          contacts: this.form.contacts,
          skills: this.form.skills,
          store_id: 13
        },
        "api/user/gains",
        res => {
          this.$toast('保存成功')
          setTimeout(() => {
            this.$router.back()
          }, 1500);
        }
      );
    }
  }
};
</script>

<style scoped>
.gains {
  background-color: #fff;
  padding-bottom: 30px;
}
.section {
  padding: 20px 30px 0;
  margin-bottom: 20px;
}
.cell-title {
  margin-bottom: 20px;
  color: #631833;
  font-size: 32px;
  font-weight: bold;
}
.cell-he {
  margin-bottom: 30px;
}
.cell-control {
  width: 100%;
  resize: none;
  min-height: 380px;
  font-size: 28px;
  padding: 10px;
  box-sizing: border-box;
  border: none;
  color: #333;
  background-color: #f8f8f8;
  text-indent: 60px;
}
.cell-module {
  color: #333;
  font-size: 24px;
  line-height: 1;
  margin-bottom: 25px;
  font-weight: bold;
}
.submit-btn {
  /* padding: 30px 30px 0; */
  text-align: center;
  margin-top: 40px;
}
.submit-btn:active {
  opacity: 0.9;
}
.cell-save {
  border: none;
  outline: none;
  text-align: center;
  width: 180px;
  height: 50px;
  background-color: #631833;
  font-size: 24px;
  color: #fff;
  line-height: 50px;
  border-radius: 10px;
}
</style>