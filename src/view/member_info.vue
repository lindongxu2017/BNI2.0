<template>
  <div class="member">
    <div class="header-wrapper">
      <img class="avatar" :src="userInfo.avatar" />
      <div class="username">{{userInfo.nickname}}</div>
      <div class="industry">{{userInfo.industry}}</div>
      <div class="position">活动统筹组员</div>
    </div>
    <div class="section">
      <div class="cell-title">联系方式</div>
      <div class="cell-box">
        <img class="cell-imgs1" src="@/assets/L-phone.png" alt />
        <p class="cell-value">{{userInfo.mobile}}</p>
      </div>
      <div class="cell-box">
        <img class="cell-imgs2" src="@/assets/L-address.png" alt />
        <p class="cell-value">{{userInfo.addr}}</p>
      </div>
      <div class="cell-box">
        <img class="cell-imgs3" src="@/assets/L-company.png" alt />
        <p class="cell-value">{{userInfo.company_name}}</p>
      </div>
    </div>
    <div class="section">
      <div class="cell-title">行业介绍</div>
      <div class="cell-value cell-text">{{userInfo.introduction}}</div>
    </div>
    <div class="section">
      <div class="cell-title">需要的引荐</div>
      <div class="cell-value cell-text">{{userInfo.need_recommend}}</div>
    </div>
    <div class="gains-btn">
      <van-button
        style="background:#631030;border-radius: 4px"
        type="primary"
        size="small"
        @click="gains"
      >他的GAINS表</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "member",
  data() {
    return {
      ids: "",
      userInfo: {}
    };
  },
  mounted() {},
  methods: {
    gains() {
      this.$router.push({ name: "gains", params: { id: this.ids } });
    }
  },
  created() {
    this.ids = this.$route.params.id;
    console.log(this.ids);
    this.fn.ajax(
      "get",
      {
        store_id: 13,
        id: this.ids
      },
      "api/index/user_detail",
      res => {
        console.log(res);
        this.userInfo = res.data;
      }
    );
  }
};
</script>

<style scoped>
.header-wrapper {
  padding: 60px 20px 30px;
  text-align: center;
  position: relative;
  background: linear-gradient(
    0deg,
    rgba(253, 253, 253, 1) 30%,
    rgba(216, 191, 196, 1)
  );
  font-size: 0;
  /* margin-bottom: 10px; */
}
.avatar {
  width: 160px;
  height: 160px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 20px;
}
.position {
  position: absolute;
  top: 30px;
  right: 20px;
  font-size: 24px;
}
.username {
  font-size: 32px;
  line-height: 1;
  margin-bottom: 20px;
  color: #000;
  font-weight: bold;
}
.industry {
  color: #333;
  font-size: 24px;
  line-height: 1;
}
.section {
  padding: 30px 20px;
  background-color: #fff;
  margin-bottom: 10px;
}
.cell-title {
  margin-bottom: 40px;
  font-weight: bold;
  font-size: 32px;
}
.cell-value {
  font-size: 28px;
  padding-left: 20px;
  color: #666;
}
.gains-btn {
  text-align: center;
  padding: 30px;
  font-size: 24px;
}
.cell-box {
  display: flex;
  align-items: center;
  padding-left: 37px;
  margin-bottom: 28px;
}
.cell-text {
  color: #333;
  font-size: 20px;
  line-height: 1.5;
}
.cell-imgs1,
.cell-imgs2,
.cell-imgs3 {
  vertical-align: middle;
}
.cell-imgs1 {
  width: 26px;
  height: 26px;
}
.cell-imgs2 {
  width: 28px;
  height: 28px;
}
.cell-imgs3 {
  width: 26px;
  height: 26px;
}
</style>
