<template>
    <div class="activity_item" v-if="info">
        <!-- <div class="title-status">
            <div class="title" v-html="info.title"></div>
            <div :class="['status-name', info.status == 1 ? 'red' : info.status == 2 ? 'green' : '']" v-html="info.status_text"></div>
        </div>
        <div class="content" v-html="info.content"></div>
        <div class="sign_user">
            <span v-html="info.is_replace ? '临时签到人：' : '签到人：'"></span>
            <span v-html="(!info.is_replace ? info.username : info.replace_name) + (info.is_sign ? '(已签到)' : '')"></span>
        </div>
        <div class="fee" v-if="!info.fee">
            <span>会议费：未交费</span>
        </div>
        <div class="operation-btn-wrapper">
            <van-button type="primary" v-if="!info.is_sign" @click="sign" size="small">签到</van-button>
            <van-button type="primary" v-if="!info.is_replace" size="small">临时替代</van-button>
            <van-button type="primary" v-if="!info.is_sign" @click="share" size="small">邀请嘉宾</van-button>
        </div> -->
        <div class="list">
            <div class="current" v-if="info.status == 1">
                <div class="title">
                    <div class="text" v-text="info.title"></div>
                    <div class="time">
                        请<span v-text="info.limit_time"></span>准时参加早会
                    </div>
                </div>
                <div class="username" v-text="info.username"></div>
                <div class="sign">
                    <span @click="sign" :class="[info.is_sign ? 'signed' : '']" v-text="info.is_sign ? '已签到' : '签到'"></span>
                    <div class="operation">
                        <div @click="share">邀请嘉宾</div>
                        <div>临时替代</div>
                    </div>
                </div>
            </div>
            <div class="cell" v-else>
                <div class="title">
                    <span class="text" v-text="info.title"></span>
                    <span class="status" v-text="'('+info.status_text+')'"></span>
                </div>
                <div class="username" v-text="info.username"></div>
                <div class="fee-status" v-text="info.fee ? '已交费' : '未交费'"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'activity_item',
        data () {
            return {
                
            }
        },
        props: ['info'],
        methods: {
            sign () {
                this.$emit('sign', {id: 1})
            },
            share () {
                this.$emit('share', {id: 1})
            }
        },
      
    }
</script>

<style scoped>
    .cell {
        padding: 39px 29px 30px 33px;
        line-height: 1;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        font-size: 24px;
        color: #333;
    }
    .title .status {
        color: #ccc;
    }
    .current {
        margin-bottom: 15px;
        padding: 30px;
        box-sizing: border-box;
    }
    .current .title {
        display: flex;
        justify-content: space-between;
        font-size: 32px;
        align-items: flex-end;
        margin-bottom: 70px;
    }
    .current .title .time {
        font-size: 24px;
    }
    .current .title .time span {
        color: #99375A;
    }
    .current .username {
        text-align: center;
        color: #631833;
        line-height: 1;
        margin-bottom: 40px;
    }
    .sign {
        text-align: center;
        position: relative;
    }
    .sign span {
        display: inline-block;
        font-size: 24px;
        color: #fff;
        background-color: #9A3459;
        width: 142px;
        height: 142px;
        line-height: 142px;
        border-radius: 50%;
    }
    .sign span.signed {
        background-color: #ccc;
        color: #fff;
    }
    .operation {
        position: absolute;
        right: 110px;
        top: 10px;
    }
    .operation div {
        width: 130px;
        text-align: center;
        font-size: 20px;
        background-color: #F2DECB;
        border-radius: 10px;
        margin-bottom: 22px;
        height: 50px;
        line-height: 50px;
    }
    .sign span:active, .operation div:active {
        opacity: 0.85;
    }
</style>