<template>
    <div class="membership">
        <van-radio-group v-model="radio" :border="false">
            <van-cell-group>
                <van-cell title="一年会费" clickable @click="radio = '1'" label="￥3000">
                    <van-radio checked-color="#07c160" slot="right-icon" name="1" />
                </van-cell>
                <van-cell title="两年会费" clickable @click="radio = '2'" label="￥5000">
                    <van-radio checked-color="#07c160" slot="right-icon" name="2" />
                </van-cell>
                <van-cell title="三年会费" clickable @click="radio = '3'" label="￥6000">
                    <van-radio checked-color="#07c160" slot="right-icon" name="3" />
                </van-cell>
            </van-cell-group>
        </van-radio-group>
        <div class="gains-btn">
            <van-button type="primary" size="large" @click="pay">支付</van-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'membership',
        data () {
            return {
                radio: '1'
            }
        },
        methods: {
            pay () {}
        }
    }
</script>

<style scoped>
    .gains-btn {
        text-align: center;
        padding: 30px;
    }
</style>