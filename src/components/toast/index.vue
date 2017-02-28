<template lang="html">
    <div class="demo">
        <p class="demo-list" v-on:click="showToast1">显示自定义的toast</p>
        <p class="demo-list" v-on:click="showToast2">显示toast的位置</p>
        <p class="demo-list" v-on:click="hideToast1">延迟隐藏toast</p>

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

    },
    mounted(){

    },
    methods:{
        showToast1(){
            this.$toast.toast({
                msg:'这是一个toast',
                position:'middle',
            })
        },
        showToast2(){
            this.$toast.toast({
                position:'top',
            })
        },
        hideToast1(){
            this.$toast.toast({
                position:'middle',
            })
            setTimeout(()=>{
                this.$toast.hide();
            },2000)
        }
    }
}
</script>

<style lang="css">
</style>
