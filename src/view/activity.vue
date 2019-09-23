<template>
    <div class="activity">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <van-list class="list" v-model="loading" :finished="finished" finished-text="没有更多了" @load="getlist">
                <div class="item" v-for="(item, index) in list" :key="index">
                    <item :info="item" @sign="sign" @share="share"></item>
                </div>
            </van-list>
        </van-pull-refresh>
        <van-popup v-model="show" class="sign-wrapper">
            <div class="sign-tips">请扫码签到</div>
            <div class="code-wrapper">
                <img class="code" v-if="!code_loading" src="@/assets/code.png">
                <van-loading v-else type="spinner" />
            </div>
            <img class="close-icon" src="@/assets/close.png" @click="show = false">
        </van-popup>
        <van-popup v-model="shareVisible" class="share-wrapper" @click="shareVisible = false">
            <div class="content">
                <img class="share-icon" src="@/assets/share.png">
                <div class="share-tips">
                    <div>分享该页面链接即可邀</div>
                    <div>请嘉宾参与早会</div>
                </div>
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
                shareVisible: false,
                userInfo:{}
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
                        is_sign: true,
                        is_replace: false,
                        replace_name: '',
                        fee: false,
                        limit_time: '2019/09/30 9:00',
                    },
                    {
                        title: '威信9月13日早会',
                        status_text: '已结束',
                        status: 2,
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
        },
        created() {
            this.userInfo = JSON.parse(localStorage.userinfo)
        },
    }
</script>

<style type="text/css">
    .activity .van-overlay {
        background-color: transparent;
    }
</style>

<style scoped>
    .list {
        /*padding: 20px;*/
    }
    .item {
        background-color: #fff;
        margin-bottom: 2px;
        /*padding: 20px;*/
    }
    .code-wrapper {
        width: 330px;
        height: 330px;
        text-align: center;
        line-height: 330px;
        /*margin: auto;*/
        margin-bottom: 100px;
    }
    .code-wrapper img {
        width: 100%;
        height: 100%;
        display: block;
    }
    .share-wrapper {
        left: 0;   
        top: 0;
        transform: translate(0,0,0);
        background-color: transparent;
        text-align: right;
        color: #fff;
        font-size: 36px;
        /*padding: 20px 20px 0 0;*/
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.8);
        -webkit-backdrop-filter: blur(5px);
        backdrop-filter: blur(5px);
        position: absolute;
    }
    .share-wrapper img {
        width: 49px;
        height: 49px;
        margin-right: 43px;
        margin-top: 53px;
    }
    .share-tips {
        position: absolute;
        text-align: left;
        right: 123px;
        top: 144px;
        font-size: 28px;
    }
    .share-icon {
        width: 150px;
    }
    .sign-wrapper {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgba(0,0,0,0.4);
        -webkit-backdrop-filter: blur(5px);
        backdrop-filter: blur(5px);
    }
    .sign-tips {
        font-size: 28px;
        color: #fff;
        text-align: center;
        margin-bottom: 30px;
    }
    .close-icon {
        position: absolute;
        right: 10px;
        top: 20px;
        width: 30px;
        height: 30px;
        padding: 20px;
    }
</style>