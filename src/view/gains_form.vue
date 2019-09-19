<template>
    <div class="gains">
        <div class="section">
            <div class="cell-title">自我介绍</div>
            <textarea class="cell-control"  placeholder="多行输入" v-model="form.intro"></textarea>
        </div>
        <div class="section">
            <div class="cell-title">G-我的目标</div>
            <textarea class="cell-control"  placeholder="多行输入" v-model="form.target"></textarea>
        </div>
        <div class="section">
            <div class="cell-title">A-我的成就</div>
            <textarea class="cell-control"  placeholder="多行输入" v-model="form.achievement"></textarea>
        </div>
        <div class="section">
            <div class="cell-title">I-我的兴趣</div>
            <textarea class="cell-control"  placeholder="多行输入" v-model="form.interest"></textarea>
        </div>
        <div class="section">
            <div class="cell-title">N-我的人脉</div>
            <textarea class="cell-control"  placeholder="多行输入" v-model="form.connections"></textarea>
        </div>
        <div class="section">
            <div class="cell-title">S-我的技能</div>
            <textarea class="cell-control"  placeholder="多行输入" v-model="form.skill"></textarea>
        </div>
        <div class="submit-btn">
            <van-button type="primary" size="large">保存</van-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'gains',
        data () {
            return {
                form: {
                    intro: '',
                    target: '',
                    achievement: '',
                    interest: '',
                    connections: '',
                    skill: ''
                }
            }
        },
        methods: {
            
        }
    }
</script>

<style scoped>
    .gains {
        background-color: #fff;
        padding-bottom: 30px;
    }
    .section {
        padding: 20px 30px 0;
    }
    .cell-title {
        margin-bottom: 20px;
    }
    .cell-control {
        width: 100%;
        resize: none;
        min-height: 150px;
        font-size: 28px;
        padding: 10px;
        box-sizing: border-box;
        border-color: #ccc;
        color: #666;
    }
    .submit-btn {
        padding: 30px 30px 0;
    }
</style>