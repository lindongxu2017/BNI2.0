<template>
    <div class="my-guest">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <van-list class="list" v-model="loading" :finished="finished" finished-text="没有更多了" @load="getlist">
                <div class="item" v-for="(item, index) in list" :key="index">
                    <img class="avatar" src="@/assets/avatar.jpg">
                    <div class="info">
                        <div>
                            <span>林哲宇</span>
                            <span :class="['status-text', index % 2 == 0 ? '' : 'unchecked']">（{{index % 2 == 0 ? '已签到' : '未签到'}}）</span>
                        </div>
                    </div>
                    <div class="date">2019/09/10</div>
                    <van-button v-if="index%2==0" type="primary" size="small">替TA缴费</van-button>
                    <van-button v-else type="primary" disabled size="small">已缴费</van-button>
                </div>
            </van-list>
        </van-pull-refresh>
    </div>
</template>

<script>
    export default {
        name: 'my-guest',
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
    .my-guest .van-button--small {
        min-width: 70px;
        font-size: 10px;
        padding: 0;
        width: 54px;
        height: 19px;
        line-height: 19px;
    }
    .my-guest .van-button--disabled {
        background-color: #ccc;
        border-color: #ccc;
    }
</style>

<style scoped>
    .item {
        padding: 28px 30px 28px 34px;
        background-color: #fff;
        margin-bottom: 2px;
        display: flex;
        align-items: center;
    }
    .avatar {
        width: 38px;
        height: 38px;
        border-radius: 50%;
    }
    .info {
        flex: 1;
        padding: 0 20px;
        font-size: 24px;
    }
    .date {
        font-size: 24px;
        margin-top: 10px;
        flex: 1;
        padding-left: 40px;
    }
    .status-text {
        font-size: 24px;
        color: #ccc;
    }
    .status-text.unchecked {
        color: #D85454;
    }
</style>
