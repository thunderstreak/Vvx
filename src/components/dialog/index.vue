<template lang="html">
    <div class="dialog">
        <p class="list" v-on:click="tips1">弹出提示</p>
    </div>
</template>

<script>
export default {
    name:'dialog',
    data(){
        return{
            msg:'dialog',
        }
    },
    created(){

    },
    mounted(){

    },
    components:{

    },
    methods:{
        tips1(){
            let self = this;
            test.confirm({
                tit:'测试标题',
                msg:'测试信息',
                callback:function(data){
                    console.log(data);
                    self.resetStatus();
                }
            })
        }
    }
}
</script>

<style lang="css">

</style>
