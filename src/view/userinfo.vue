<template>
    <div class="userinfo">
        <van-cell-group>
            <van-field v-model="form.name" type="text" label="名字" placeholder="请输入名字" />
            <van-field v-model="form.identity" type="text" label="身份" placeholder="请输入身份" />
            <van-field v-model="form.union" readonly type="text" label="所属联盟" placeholder="请输入所属联盟"  @click="show = true" right-icon="arrow-down" @click-right-icon="show = true" />
            <van-field v-model="form.industry" type="text" label="代表行业" placeholder="请输入代表行业" />
            <van-field v-model="form.contact" type="text" label="联系方式" placeholder="请输入联系方式" />
            <van-field v-model="form.company_name" type="text" label="公司名称" placeholder="请输入公司名称" />
            <van-field v-model="form.company_addr" type="text" label="公司地址" placeholder="请输入公司地址" />
            <van-field v-model="form.recommend" type="textarea" label="需要引荐" placeholder="请输入需要引荐" />
            <van-field v-model="form.case" type="textarea" label="成功案例" placeholder="请输入成功案例" />
        </van-cell-group>
        <van-popup round v-model="show" position="bottom">
            <van-picker show-toolbar @cancel="show=false" @confirm="select" :columns="columns" value-key="name"/>
        </van-popup>
        <div class="submit-btn">
            <van-button type="primary" size="large">保存</van-button>
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
                    case: ''
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

<style scoped>
    .submit-btn {
        text-align: center;
        padding: 30px;
    }
</style>