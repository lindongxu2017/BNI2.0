<template>
    <div class="center">
        <div class="header-wrapper">
            <img class="bg" src="@/assets/center_bg.png">
            <div class="info-wrapper">
                <img class="avatar" src="@/assets/avatar.jpg">
                <div class="username">林哲宇</div>
                <div class="industry">室内空间设计</div>
                <div class="position">活动统筹组员</div>
            </div>
        </div>
        <van-cell center :title="item.name" v-for="(item, index) in link" :key="index" :to="item.path" is-link>
            <van-image fit="contain" class="cell-icon" :src="item.icon" slot="icon"/>
        </van-cell>
    </div>
</template>

<script>
    export default {
        name: 'center',
        data () {
            return {
                link: [
                    {name: '个人资料', path: '/userinfo', icon: require('@/assets/icon_userinfo.png')},
                    {name: '会籍管理', path: '/membership', icon: require('@/assets/icon_membership.png')},
                    {name: '缴费记录', path: '/payrecord', icon: require('@/assets/icon_payrecord.png')},
                    {name: '我的嘉宾', path: '/guest', icon: require('@/assets/icon_guest.png')},
                    {name: '我的Gains', path: '/gains/1', icon: require('@/assets/icon_gains.png')},
                ]
            }
        }
    }
</script>

<style type="text/css">
    .center .van-cell:not(:last-child):after {
        left: 0;
    }
    .center .van-cell {
        padding: 16px;
    }
    .center .van-cell__right-icon {
        color: #ccc;
        font-size: 20px;
    }
</style>

<style scoped>
    .header-wrapper {
        /*padding: 30px 20px;*/
        text-align: center;
        position: relative;
        background-color: #fff;
        font-size: 0;
        margin-bottom: 15px;
    }
    .info-wrapper {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        box-sizing: border-box;
        padding: 60px 0 40px;
    }
    .header-wrapper .bg {
        width: 100%;
    }
    .avatar {
        width: 160px;
        height: 160px;
        object-fit: cover;
        border-radius: 50%;
        margin-bottom: 26px;
    }
    .position {
        position: absolute;
        top: 28px;
        right: 30px;
        font-size: 24px;
    }
    .username {
        font-size: 32px;
        line-height: 1;
        margin-bottom: 15px;
        font-weight: bold;
    }
    .industry {
        font-size: 24px;
        line-height: 1;
    }
    .cell-icon {
        width: 37px;
        margin-right: 22px;
    }
</style>