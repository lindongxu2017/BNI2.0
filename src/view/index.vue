<template>
  <div class="index">
    <!-- <van-search placeholder="请输入搜索关键词" class="search-wrapper" show-action v-model="keyword" @search="onSearch">
            <div slot="action" @click="show = true" style="line-height: 1;">
                <van-icon name="wap-nav" size="25px" color="#7C384F" />
            </div>
    </van-search>-->
    <div class="search_bar">
      <div class="search_box">
        <input
          placeholder="会员名称模糊搜索"
          @keyup.13="onSearch"
          v-model="keyword"
          class="search_input"
          type="text"
        />
        <dir class="search_btn">
          <img src="../assets/L-search_btn.png" @click="onSearch" />
        </dir>
      </div>
      <div class="side_btn" @click="show = true">
        <img src="../assets/L-side_btn.png" alt />
      </div>
    </div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list
        class="list"
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="getlist"
      >
        <div class="item" v-for="(item, index) in list" :key="index">
          <user :info="item"></user>
        </div>
      </van-list>
    </van-pull-refresh>
    <van-popup class="popup-riht" v-model="show" position="right">
      <p class="title">选择要搜索的联盟</p>
      <van-grid :border="false" :column-num="2">
        <van-grid-item v-for="(value, index) in type" :key="index">
          <img :src="value.image" class="imgs" slot="icon" alt />
          <p class="texts" slot="text">{{value.name}}</p>
        </van-grid-item>
      </van-grid>
    </van-popup>
  </div>
</template>

<script>
import user from "@/components/user_item";
export default {
  name: "index",
  data() {
    return {
      keyword: "",
      finished: false,
      loading: false,
      list: [],
      show: false,
      type: [
        // { name: "全部", icon: require("@/assets/L-all.png") },
        // { name: "建筑联盟", icon: require("@/assets/L-all.png") },
        // { name: "产品联盟", icon: require("@/assets/L-product.png") },
        // { name: "企业服务", icon: require("@/assets/L-service.png") }
      ],
      isLoading: false
    };
  },
  watch: {
    keyword: function() {
      if (this.keyword === "") {
        this.list = [];
        this.getlist();
      }
    }
  },
  methods: {
    onSearch() {
      if (this.keyword) {
        this.list = [];
        this.getlist();
        this.getAllianceList();
      }
    },
    // 获取会员列表
    getlist() {
      this.fn.ajax(
        "get",
        {
          store_id: 13,
          keyword: this.keyword,
          page: Math.ceil(this.list.length / 10) + 1
        },
        "api/index/index",
        res => {
          this.isLoading = false;
          this.loading = false;
          this.list = this.list.concat(res.data.data);
          if (this.list.length >= res.data.total) {
            this.finished = true;
          }
        }
      );
    },
    // 获取联盟列表
    getAllianceList() {
      this.fn.ajax(
        "get",
        {
          store_id: 13,
          keyword: this.keyword,
          page: 1
        },
        "api/index/user_category",
        res => {
          console.log(res);
          this.type = res.data;
        }
      );
    },
    onRefresh() {
      this.list = [];
      this.loading = true;
      this.finished = false;
      this.getlist();
    }
  },
  components: {
    user
  },
  created() {
    this.getAllianceList();
  }
};
</script>


<style scoped>
.index {
  padding-bottom: 100px;
}
.search-wrapper {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 3;
}
.search_bar {
  padding: 31px 0;
  background-color: #631833;
  position: relative;
  margin-bottom: 16px;
}
.search_box {
  margin: 0 auto;
  display: flex;
  width: 400px;
}
.search_input {
  outline: none;
  border: none;
  height: 58px;
  width: 322px;
  border-radius: 29px 0 0 29px;
  background-color: #f8f8f8;
  font-size: 24px;
  text-indent: 66px;
}
.search_input::-webkit-input-placeholder {
  color: #cccccc;
  text-align: left;
}
.search_input::-moz-placeholder {
  color: #cccccc;
  text-align: left;
} /* firefox 19+ */
.search_input:-ms-input-placeholder {
  color: #cccccc;
  text-align: left;
} /* Internet Explorer 10+ */
.search_input:-moz-placeholder {
  color: #cccccc;
  text-align: left;
} /* firefox 14-18 */

.search_btn {
  width: 78px;
  height: 58px;
  display: flex;
  border-radius: 0 29px 29px 0;
  background-color: #fff;
  box-shadow: -3px 0px 5px #ccc;
  justify-content: center;
  align-items: center;
  padding-right: 4px;
}
.search_btn img {
  width: 30px;
  height: 30px;
}
.side_btn {
  width: 46px;
  height: 54px;
  position: absolute;
  top: 50%;
  right: 31px;
  transform: translateY(-50%);
}
.side_btn img {
  width: 100%;
  height: 100%;
}
.list {
  padding: 10px 0;
  /*border-top: 1px solid #eee;*/
}
.item {
  padding: 20px 0 20px 30px;
  margin-bottom: 2px;
  background-color: #fff;
}
.title {
  font-size: 28px;
  color: #666;
  text-align: center;
  line-height: 1;
  margin: 35px 0;
}
.popup-riht {
  height: 100%;
  width: 50%;
}
.imgs {
  width: 58px;
  height: 58px;
  border-right: 50%;
  margin-bottom: 20px;
}
.texts {
  font-size: 28px;
  color: #666;
}
</style>