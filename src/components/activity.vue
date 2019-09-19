<template>
    <div class="activity_item" v-if="info">
        <div class="title-status">
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
            <!-- <van-button type="primary" v-if="!info.fee" size="small">交费</van-button> -->
            <van-button type="primary" v-if="!info.is_sign" @click="sign" size="small">签到</van-button>
            <van-button type="primary" v-if="!info.is_replace" size="small">临时替代</van-button>
            <van-button type="primary" v-if="!info.is_sign" @click="share" size="small">邀请嘉宾</van-button>
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
        }
    }
</script>

<style scoped>
    .title-status {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
    .status-name, .content, .sign_user, .fee {
        font-size: 28px;
        color: #666;
    }
    .red {
        color: #F56C6C;
    }
    .green {
        color: #67C23A;
    }
    .operation-btn-wrapper {
        text-align: right;
        padding-top: 10px;
    }
</style>