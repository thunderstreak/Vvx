<template lang="html">
    <section class="demo">
        <p class="demo-list" v-on:click="loding1">显示Loding <span></span></p>
        <p class="demo-list" v-on:click="loding2">显示Done <span></span></p>
        {{msg}}
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

    },
    methods:{
        loding1(){

            this.$loding.loding({
                msg:'loding',
                callback:(data)=>{
                    this.msg = data;
                }
            });

            setTimeout(()=>{
                this.$loding.hide();
            },3000);
        },
        loding2(){
            this.$loding.done({
                msg:'done'
            });
            setTimeout(()=>{
                this.$loding.hide();
            },3000);
        }
    }
}
</script>

<style scoped>

</style>
