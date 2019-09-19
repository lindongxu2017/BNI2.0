<template>
    <div class="index">
        <van-search placeholder="请输入搜索关键词" class="search-wrapper" show-action v-model="keyword" @search="onSearch">
            <div slot="action" @click="show = true" style="line-height: 1;">
                <van-icon name="wap-nav" size="25px" color="#7C384F" />
            </div>
        </van-search>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <van-list class="list" v-model="loading" :finished="finished" finished-text="没有更多了" @load="getlist">
                <div class="item" v-for="(item, index) in list" :key="index">
                    <user></user>
                </div>
            </van-list>
        </van-pull-refresh>
        <van-popup round class="popup-riht" v-model="show" position="right">
            <van-grid :border="false" :column-num="2">
              <van-grid-item v-for="(value, index) in type" :key="index" :icon="value.icon" :text="value.name"/>
            </van-grid>
        </van-popup>
    </div>
</template>

<script>
    var arr = []
    for (var i = 0; i < 10; i++) {
        arr.push(i)
    }
    import user from '@/components/user_item'
    export default {
        name: 'index',
        data () {
            return {
                keyword: '',
                finished: false,
                loading: false,
                list: [],
                show: false,
                type: [
                    {name: '全部', icon: 'apps-o'},
                    {name: '建筑联盟', icon: 'hotel-o'},
                    {name: '产品联盟', icon: 'wap-home'},
                    {name: '企业服务', icon: 'cluster-o'},
                ],
                isLoading: false
            }
        },
        methods: {
            onSearch () {
                console.log(this.keyword)
            },
            getlist () {
                setTimeout(() => {
                    this.isLoading = false
                    this.loading = false
                    this.list = this.list.concat(arr)
                    if (this.list.length > 30) {
                        this.finished = true
                    }
                }, 1000)
            },
            onRefresh () {
                this.list = []
                this.loading = true
                this.finished = false
                this.getlist()
            }
        },
        components: {
            user
        }
    }
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
    .list {
        padding: 10px 0;
        /*border-top: 1px solid #eee;*/
    }
    .item {
        padding: 20px;
        margin-bottom: 10px;
        background-color: #fff;
    }
    .popup-riht {
        height: 100%;
        width: 50%;
    }
</style>