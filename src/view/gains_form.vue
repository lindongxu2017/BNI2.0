<template>
  <div class="gains">
    <div class="section">
      <div class="cell-title">刘浩天的自我介绍</div>
      <textarea class="cell-control" :disabled="disabled" placeholder v-model="form.intro"></textarea>
    </div>
    <div class="section">
      <div class="cell-title cell-he">他的Gains表</div>
      <p class="cell-module">G-我的目标</p>
      <textarea class="cell-control" :disabled="disabled" placeholder v-model="form.target"></textarea>
    </div>
    <div class="section">
      <p class="cell-module">A-我的成就</p>
      <textarea class="cell-control" :disabled="disabled" placeholder v-model="form.achievement"></textarea>
    </div>
    <div class="section">
      <p class="cell-module">I-我的兴趣</p>
      <textarea class="cell-control" :disabled="disabled" placeholder v-model="form.interest"></textarea>
    </div>
    <div class="section">
      <p class="cell-module">N-我的人脉</p>
      <textarea class="cell-control" :disabled="disabled" placeholder v-model="form.connections"></textarea>
    </div>
    <div class="section">
      <p class="cell-module">S-我的技能</p>
      <textarea class="cell-control" :disabled="disabled" placeholder v-model="form.skill"></textarea>
    </div>
    <div class="submit-btn" v-show="!disabled">
      <!-- <van-button class="cell-save" type="primary" size="large">保存修改</van-button> -->
      <button class="cell-save">保存修改</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "gains",
  data() {
    return {
      form: {
        intro:
          "本人性格开朗、稳重、有活力，待人热情、真诚；工作认真负责，积极主动，能吃苦耐劳，用于承受压力，勇于创新；有很强的组织能力和团队协作精神，具有较强的适应能力；纪律性强，工作积极配合；意志坚强，具有较强的无私奉献精神。",
        target: "",
        achievement: "",
        interest: "",
        connections: "",
        skill: ""
      },
      disabled: false
    };
  },
  created() {},
  methods: {}
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