<template>
    <div class="register" :style="{minHeight: clientHeight + 'px'}">
        <van-field v-model="form.identity_text" label="参会身份" readonly @click="show = true" right-icon="arrow-down" @click-right-icon="show = true"/>
        
        <div v-if="form.identity == 1">
            <van-field v-model="form.tel" label="手机号码" placeholder="请输入手机号码"/>
            <van-field v-model="form.code" label="验证码" placeholder="请输入验证码">
                <div slot="right-icon">
                    <van-button :disabled="code_text != '获取'" type="primary" size="small" @click="getcode">{{code_text}}</van-button>
                </div>
            </van-field>
        </div>
        
        <div v-else>
            <van-field v-model="form.username" label="参会人姓名" placeholder="请输入参会人姓名"/>
            <van-field v-model="form.username" label="代表行业" placeholder="请输入代表行业"/>
            <van-field v-model="form.username" label="联系电话" placeholder="请输入联系电话"/>
            <van-field v-model="form.username" label="所在区域" placeholder="请输入所在区域"/>
            <van-field v-model="form.username" label="分会名称" placeholder="请输入分会名称"/>
        </div>

        <div class="btn-wrapper">
            <van-button type="primary" size="large" class="confirm">提交</van-button>
        </div>
        <van-popup round v-model="show" position="bottom">
            <van-picker show-toolbar :default-index="0" @cancel="show=false" @confirm="select" :columns="columns" value-key="name"/>
        </van-popup>
    </div>
</template>

<script type="text/javascript">
    export default {
        name: 'register',
        data () {
            return {
                form: {
                    username: '',
                    tel: '',
                    code: '',
                    identity: '1',
                    identity_text: '会员',
                },
                code_text: '获取',
                clientHeight: 603,
                columns: [
                    {name: '会员', value: 1},
                    {name: '观察员', value: 2},
                    {name: '大使', value: 3}
                ],
                show: false
            }
        },
        mounted () {
            this.clientHeight = window.innerHeight || 603
        },
        methods: {
            select (picker, index) {
                this.form.identity = picker.value
                this.form.identity_text = picker.name
                this.show = false
            },
            getcode () {
                if (this.form.tel == '' || !(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.form.tel))) {
                    this.$toast('请输入正确的手机号码')
                    return
                }
                var time = 60
                this.code_text = time + 's'
                var timer = setInterval(() => {
                    if (parseInt(time) == 0) {
                        this.code_text = '获取'
                        clearInterval(timer)
                        return
                    }
                    time = parseInt(time) - 1
                    this.code_text = time + 's'
                }, 1000)
            }
        }
    }
</script>

<style>
    .register .van-cell {
        align-items: center;
    }
</style>

<style scoped>
    .register {
        padding: 200px 68px 0;
        background-color: #fff;
        box-sizing: border-box;
    }
    .btn-wrapper {
        padding: 0 32px;
        margin-top: 100px;
    }
</style>