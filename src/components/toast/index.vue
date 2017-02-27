<template lang="html">
    <div class="demo">
        <p class="demo-list" v-on:click="showToast1">显示toast</p>

    </div>
</template>

<script>
export default {
    name:'toastDemo',
    data(){
        return{
            msg:'toastDemo'
        }
    },
    created(){
        console.log(this.$toast);
    },
    mounted(){

    },
    methods:{
        showToast1(){
            this.$toast.toast()
        }
    }
}
</script>

<style lang="css">
</style>
