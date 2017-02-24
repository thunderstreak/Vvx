<template lang="html">
    <section class="demo">
        {{msg}}
        <p class="demo-list" v-on:click="loding1">显示Loding</p>
        <p class="demo-list" v-on:click="loding2">显示Done</p>
    </section>
</template>

<script>
export default {
    name:'lodingDemo',
    data(){
        return{
            msg:'lodingDemo',

        }
    },
    created(){
        // console.log(this.$loding);
    },
    methods:{
        loding1(){
            this.$loding.loding();
        },
        loding2(){
            this.$loding.done({
                msg:'done'
            })
        }
    }
}
</script>

<style lang="css">
</style>
