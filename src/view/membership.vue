<template>
    <div class="membership">
        <div class="info">
            <van-cell-group>
                <van-cell title="姓名" value="林哲宇" />
                <van-cell title="入会时间" value="2019/09/10" />
                <van-cell title="到期时间" value="2020/09/10" />
                <van-cell title="会费" value="￥3000" />
            </van-cell-group>
        </div>
        <div class="gains-btn">
            <van-button type="primary" size="large" @click="renew">续费</van-button>
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

<style scoped>
    .gains-btn {
        text-align: center;
        padding: 30px;
    }
</style>
