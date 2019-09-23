<template>
    <div class="user" @click="go_detail">
        <img class="avatar" :src="info.avatar">
        <div class="info">
            <div class="cell name">{{info.username}}</div>
            <div class="cell">分会职务：{{info.job_name}}</div>
            <div class="cell">代表行业：{{info.industry}}</div>
            <div class="cell">联系电话：{{info.mobile}}</div>
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
        props:['info'],
        methods: {
            go_detail() {
                this.$router.push({name: 'member', params: {id: this.info.id}})
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