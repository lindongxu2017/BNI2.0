<template>
    <div class="user" @click="go_detail">
        <img class="avatar" src="@/assets/avatar.jpg">
        <div class="info">
            <div class="cell name">林哲宇</div>
            <div class="cell">分会职务：活动统筹组员</div>
            <div class="cell">代表行业：室内空间设计</div>
            <div class="cell">联系电话：18718571732</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'user',
        data () {
            return {
                
            }
        },
        methods: {
            go_detail() {
                this.$router.push({name: 'member', params: {id: 1}})
            }
        }
    }
</script>

<style scoped>
    .user {
        display: flex;
        align-items: stretch;
        margin-bottom: 2px;
    }
    .avatar {
        width: 190px;
        height: 190px;
        object-fit: cover;
        -webkit-object-fit: cover;
    }
    .info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 27px;
        flex: 1;
    }
    .cell {
        font-size: 28px;
        color: #666;
    }
    .name {
        font-size: 32px;
        color: #666;
        font-weight: bold;
    }
</style>