<template>
    <div class="renew">
        <van-radio-group v-model="radio" :border="false">
            <van-cell-group>
                <van-cell v-for="(item, index) in list" :key="index" :title="item.name + '￥' + item.fee" clickable @click="radio = item.id">
                    <van-radio checked-color="#07c160" slot="right-icon" :name="item.id">
                        <div class="check-icon-wrapper" slot="icon" slot-scope="props">
                            <img class="check-box" src="@/assets/icon_check_box.png">
                            <img class="checked-icon" v-if="props.checked" src="@/assets/icon_check.png">
                        </div>
                    </van-radio>
                </van-cell>
            </van-cell-group>
        </van-radio-group>
        <div class="gains-btn">
            <van-button type="primary" size="small" @click="pay">支付</van-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'renew',
        data () {
            return {
                radio: 1,
                list: [
                    {id: 1, name: '一年会费', fee: 3000},
                    {id: 2, name: '二年会费', fee: 5000},
                    {id: 3, name: '三年会费', fee: 6000}
                ]
            }
        },
        methods: {
            pay () {}
        }
    }
</script>

<style type="text/css">
    .renew .van-cell:not(:last-child):after {
        left: 0;
    }
    .renew .van-cell {
        flex-direction: row-reverse;
        padding: 16px;
    }
    .renew .van-radio {
        margin-right: 11px;
    }
    .renew .van-button--small {
        min-width: 90px;
        height: 30px;
    }
    
</style>

<style scoped>
    .gains-btn {
        text-align: center;
        padding: 79px 0;
    }
    .check-icon-wrapper {
        width: 42px;
        height: 42px;
        position: relative;
    }
    .check-box {
        width: 100%;
        height: 40px;
    }
    .checked-icon {
        width: 30px;
        height: 20px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin: -10px 0 0 -15px;
    }
</style>