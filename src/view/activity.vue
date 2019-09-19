<template>
    <div class="activity">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <van-list class="list" v-model="loading" :finished="finished" finished-text="没有更多了" @load="getlist">
                <div class="item" v-for="(item, index) in list" :key="index">
                    <item :info="item" @sign="sign" @share="share"></item>
                </div>
            </van-list>
        </van-pull-refresh>
        <van-popup v-model="show">
            <div class="code-wrapper">
                <img class="code" v-if="!code_loading" src="@/assets/code.png">
                <van-loading v-else type="spinner" />
            </div>
        </van-popup>
        <van-popup v-model="shareVisible" class="share-wrapper">
            <div class="content">
                <img class="share-icon" src="@/assets/share.png">
                <div>分享该页面链接即可邀请嘉宾参与早会</div>
            </div>
        </van-popup>
    </div>
</template>

<script>
    import item from '@/components/activity'
    export default {
        name: 'activity',
        data () {
            return {
                list: [],
                loading: false,
                finished: false,
                isLoading: false,
                show: false,
                code_loading: true,
                shareVisible: false
            }
        },
        mounted () {

        },
        methods: {
            sign (options) {
                var id = options.id
                this.code_loading = true
                this.show = true
                setTimeout(() => {
                    this.code_loading = false
                }, 500)
            },
            share () {
                this.shareVisible = true
            },
            getlist () {
                var list = [
                    {
                        title: '威信9月13日早会',
                        status_text: '进行中',
                        status: 1,
                        content: '请您于9月13日早晨9点准时参加早会',
                        username: '林哲宇',
                        is_sign: false,
                        is_replace: false,
                        replace_name: '',
                        fee: false
                    },
                    {
                        title: '威信9月13日早会',
                        status_text: '已结束',
                        status: 2,
                        content: '请您于9月13日早晨9点准时参加早会',
                        username: '林哲宇',
                        is_sign: true,
                        is_replace: true,
                        replace_name: '林浩轩',
                        fee: true
                    }
                ]
                setTimeout(() => {
                    this.loading = false
                    this.isLoading = false
                    this.list = this.list.concat(list)
                    if (this.list.length >= 2) {
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
            item
        }
    }
</script>

<style scoped>
    .list {
        padding: 20px;
    }
    .item {
        background-color: #fff;
        margin-bottom: 20px;
        padding: 20px;
    }
    .code-wrapper {
        width: 400px;
        height: 400px;
        text-align: center;
        line-height: 400px;
    }
    .code-wrapper img {
        width: 100%;
        height: 100%;
        display: block;
    }
    .share-wrapper {
        right: 0;
        top: 0;
        transform: translate(0,0,0);
        background-color: transparent;
        text-align: right;
        color: #fff;
        font-size: 36px;
        padding: 20px 20px 0 0;
    }
    .share-icon {
        width: 150px;
    }
</style>