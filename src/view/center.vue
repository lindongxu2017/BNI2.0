<template>
    <div class="center">
        <div class="header-wrapper">
            <img class="avatar" src="@/assets/avatar.jpg">
            <div class="username">林哲宇</div>
            <div class="industry">室内空间设计</div>
            <div class="position">活动统筹组员</div>
        </div>
        <van-cell :title="item.name" v-for="(item, index) in link" :key="index" :to="item.path" is-link />
    </div>
</template>

<script>
    export default {
        name: 'center',
        data () {
            return {
                link: [
                    {name: '个人资料', path: '/userinfo'},
                    {name: '会籍管理', path: '/membership'},
                    {name: '缴费记录', path: '/payrecord'},
                    {name: '我的嘉宾', path: '/guest'}
                ]
            }
        }
    }
</script>

<style scoped>
    .header-wrapper {
        padding: 30px 20px;
        text-align: center;
        position: relative;
        background-color: #fff;
        font-size: 0;
        margin-bottom: 10px;
    }
    .avatar {
        width: 150px;
        height: 150px;
        object-fit: cover;
        border-radius: 50%;
        margin-bottom: 20px;
    }
    .position {
        position: absolute;
        top: 30px;
        right: 20px;
        font-size: 28px;
    }
    .username {
        font-size: 32px;
        line-height: 1;
        margin-bottom: 20px;
    }
    .industry {
        color: #666;
        font-size: 28px;
        line-height: 1;
    }
</style>