<template>
    <div class="payrecord">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <van-list class="list" v-model="loading" :finished="finished" finished-text="没有更多了" @load="getlist">
                <div class="item" v-for="(item, index) in list" :key="index">
                    <img class="avatar" src="@/assets/avatar.jpg">
                    <div class="info">
                        <div>
                            <span>林哲宇</span>
                            <span class="status-text">（未签到）</span>
                        </div>
                        <div class="date">2019/09/10</div>
                    </div>
                    <van-button v-if="index%2==0" type="primary" size="small">替TA缴费</van-button>
                    <div v-else class="status-text">已缴费</div>
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

<style scoped>
    .item {
        margin-bottom: 10px;
    }
    .item {
        padding: 30px 20px;
        background-color: #fff;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
    }
    .avatar {
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
    .info {
        flex: 1;
        padding: 0 20px;
        font-size: 32px;
    }
    .date {
        font-size: 28px;
        margin-top: 10px;
        color: #666;
    }
    .status-text {
        font-size: 28px;
        color: #666;
    }
</style>
