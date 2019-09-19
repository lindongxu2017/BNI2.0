<template>
    <div class="payrecord">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <van-list class="list" v-model="loading" :finished="finished" finished-text="没有更多了" @load="getlist">
                <div class="item" v-for="(item, index) in list" :key="index">
                    <van-cell center title="会务费" value="660.00元" size="large" label="2019/09/10" />
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
</style>
