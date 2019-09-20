<template>
    <div class="payrecord">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <van-list class="list" v-model="loading" :finished="finished" finished-text="没有更多了" @load="getlist">
                <div class="item" v-for="(item, index) in list" :key="index">
                    <van-cell center title="2019/09/10" :border="true" >
                        <div class="value">
                            <span class="lable">会务费</span>
                            <span class="text">￥660.00元</span>
                        </div>
                    </van-cell>
                </div>
            </van-list>
        </van-pull-refresh>
    </div>
</template>

<script>
    export default {
        name: 'payrecord',
        data () {
            return {
                list: [],
                loading: false,
                finished: false,
                isLoading: false
            }
        },
        methods: {
            getlist() {
                var arr = ['','','','','','','','','','']
                setTimeout(() => {
                    this.loading = false
                    this.isLoading = false
                    this.list = this.list.concat(arr)
                    if (this.list.length > 30) {
                        this.finished = true
                    }
                }, 1000)
            },
            onRefresh () {
                this.loading = true
                this.finished = false
                this.list = []
                this.getlist()
            }
        }
    }
</script>

<style type="text/css">
    .payrecord .van-cell__value {
        flex: 2;
    }
    .payrecord .van-cell {
        padding: 11.5px 16px;
    }
</style>

<style scoped>
    .item {
        margin-bottom: 2px;
    }
    .value {
        color: #333;
        display: flex;
    }
    .value > span {
        flex: 1;
    }
    .value .lable {
        text-align: center;
        padding-left: 40px;
    }
    .value .text {
        text-align: right;
    }
</style>
