<template>
    <div class="userinfo">
        <van-cell-group class="field-wrapper">
            <van-field v-model="form.name" type="text" :border="false" label="名字" placeholder="请输入名字" />
            <van-field v-model="form.industry" readonly type="text" :border="false" label="代表行业" placeholder="请输入代表行业"/>
            <van-field v-model="form.identity" type="text" :border="false" label="身份" placeholder="请输入身份" />
            <van-field v-model="form.union" readonly type="text" :border="false" label="所属联盟" placeholder="请选择所属联盟"  @click="show = true">
                <div class="van-select-btn" slot="button">
                    <img src="@/assets/icon_select.png">
                </div>
            </van-field>

            <van-field v-model="form.contact" type="text" :border="false" label="当前电话" placeholder="">
                <van-button  class="van-update-btn" slot="button" size="small" type="primary">更新</van-button>
            </van-field>
            <van-field v-model="form.company_name" type="text" :border="false" label="公司名称" placeholder="请输入公司名称" />
            <van-field v-model="form.company_addr" type="text" :border="false" label="公司地址" placeholder="请输入公司地址" />
            <!-- <van-field v-model="form.recommend" type="textarea" :border="false" label="需要引荐" placeholder="请输入需要引荐" /> -->
            <!-- <van-field v-model="form.case" type="textarea" :border="false" label="成功案例" placeholder="请输入成功案例" /> -->
            <div class="van-field-box">
                <div class="van-field-lable">成功案例</div>
                <div class="field-value">
                    <textarea placeholder="请输入成功案例" v-model="form.case"></textarea>
                </div>
            </div>
            <div class="van-field-box">
                <div class="van-field-lable">行业介绍</div>
                <div class="field-value">
                    <textarea placeholder="请输入行业介绍" v-model="form.introduction"></textarea>
                </div>
            </div>
        </van-cell-group>
        <van-popup round v-model="show" position="bottom">
            <van-picker show-toolbar @cancel="show=false" @confirm="select" :columns="columns" value-key="name"/>
        </van-popup>
        <div class="submit-btn">
            <van-button style="backgroundColor: #633842;" type="primary" size="small">保存修改</van-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'userinfo',
        data () {
            return {
                form: {
                    name: '',
                    identity: '',
                    union: '',
                    industry: '',
                    contact: '',
                    company_name: '',
                    company_addr: '',
                    recommend: '',
                    case: '', // 
                    introduction:"" // 行业介绍
                },
                show: false,
                columns: [
                    {name: '建筑联盟', value: 1},
                    {name: '产品联盟', value: 2},
                    {name: '企业服务', value: 3}
                ]
            }
        },
        methods: {
            select (picker, index) {
                this.form.union = picker.name
                this.show = false
            }
        }
    }
</script>

<style type="text/css">
    .userinfo .van-cell, .userinfo .van-cell-group {
        background-color: transparent;
    }
    .userinfo .van-field__label {
        line-height: 29px;
    }
    .userinfo .van-cell {
        font-size: 16px;
        color: #653E47;
        font-weight: bold;
    }
    .userinfo .van-field__control {
        font-size: 14px;
        font-weight: normal;
        background-color: #fff;
        border-radius: 3px;
        text-align: center;
        height: 29px;
        /*line-height: 29px;*/
        padding: 7.5px 0;
    }
    .userinfo .van-hairline--top-bottom:after,
    .userinfo .van-hairline-unset--top-bottom:after {
        display: none;
    }
    .userinfo .van-button--small {
        min-width: 90px;
        height: 30px;
    }
    .userinfo .van-update-btn{
        background-color: #633842;
        min-width: 52px;
        width: 52px;
    }
</style>

<style scoped>
    .submit-btn {
        text-align: center;
        padding: 40px 0;
    }
    .field-wrapper {
        padding-top: 81px;
    }
    .van-select-btn {
        position: absolute;
        width: 31.5px;
        height: 29px;
        right: 0;
        top: 0;
        background-color: #633B44;
        text-align: center;
        line-height: 25px;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
    }
    .van-select-btn img {
        width: 13px;
    }

    .van-field-box {
        padding: 10px 16px;
    }
    .van-field-lable {
        font-size: 16px;
        color: #653E47;
        font-weight: bold;
        margin-bottom: 14px;
    }
    .field-value {
        padding: 20px 30px;
        box-sizing: border-box;
        background-color: #fff;
        border-radius: 6px;
    }
    .field-value textarea {
        font-size: 28px; 
        color: #ccc;
        width: 100%;
        border: 0;
        appearance: none;
        min-height: 150px;
    }
</style>