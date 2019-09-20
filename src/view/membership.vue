<template>
    <div class="membership">
        <div class="info">
            <van-cell-group>
                <van-cell center>
                    <img class="icon-left" src="@/assets/icon_username.png" slot="icon">
                    <span class="title-lable" slot="title">姓名<i></i></span>
                    <span>林哲宇</span>
                </van-cell>
                <van-cell center>
                    <img class="icon-left" src="@/assets/icon_start_time.png" slot="icon">
                    <span class="title-lable" slot="title">入会时间<i></i></span>
                    <span>2019/09/10</span>
                </van-cell>
                <van-cell center>
                    <img class="icon-left" src="@/assets/icon_end_time.png" slot="icon">
                    <span class="title-lable" slot="title">到期时间<i></i></span>
                    <span>2019/09/10</span>
                </van-cell>
                <van-cell center>
                    <img class="icon-left" src="@/assets/icon_fee.png" slot="icon">
                    <span class="title-lable" slot="title">会费<i></i></span>
                    <span>￥3000</span>
                </van-cell>
            </van-cell-group>
        </div>
        <div class="gains-btn">
            <van-button type="primary" size="small" @click="renew">续费</van-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'membership',
        data () {
            return {
                
            }
        },
        methods: {
            renew () {
                this.$router.push({name: 'renew'})
            }
        }
    }
</script>

<style type="text/css">
    .membership .van-cell:not(:last-child):after {
        left: 0;
    }
    .membership .van-cell {
        padding: 11.5px 16px;
    }
    .membership .van-cell__title {
        flex: none;
        min-width: 60px;
        height: 24px;
    }
    .membership .van-cell__value {
        text-align: left;
        padding-left: 13px;
        color: #333;
    }
    .membership .van-button--small {
        min-width: 90px;
        height: 30px;
    }
</style>

<style scoped>
    .gains-btn {
        text-align: center;
        padding: 61px 30px 0;
    }
    .icon-left {
        width: 38px;
        height: 38px;
        margin-right: 22px;
        object-fit: contain;
    }
    .title-lable {
        width: 100%;
        display: inline-block;
        text-align:justify;
        /*overflow: hidden;*/
        position: relative;
    }
    .title-lable::after {
        content: ":";
        position: absolute;
        right: -12px;
        top: 0;
        font-size: 28px;
    }
    .title-lable i {
        display:inline-block;
        width:100%;
        height:0;
        line-height: 0;
    }
</style>
