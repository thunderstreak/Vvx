<template lang="html">
    <div class="demo">
        <br>
        <p class="demo-list" v-on:click="tips1">弹出confirm<span>{{tipsMsg1}}</span></p>
        <br>
        <p class="demo-list" v-on:click="tips2">弹出alert<span>{{tipsMsg2}}</span></p>
        <br>
        <p class="demo-list" v-on:click="tips3">弹出toast<span>{{tipsMsg3}}</span></p>
    </div>
</template>

<script>

export default {
    name:'dialog',
    data(){
        return{
            msg:'dialog',
            tipsMsg1:'',
            tipsMsg2:'',
            tipsMsg3:''
        }
    },
    created(){
        // console.log(this.$Dialog);
    },
    mounted(){

    },
    components:{

    },
    methods:{
        tips1(){
            let that = this;
            this.$dialog.confirm({
                tit:'测试标题',
                msg:'测试信息',
                callback:function(data){
                    that.tipsMsg1 = data;
                }
            })
        },
        tips2(){
            let that = this;
            this.$dialog.alert({
                tit:'删除',
                msg:'确定删除？',
                callback:function(data){
                    that.tipsMsg2 = data;
                }
            })
        },
        tips3(){
            let that = this;
            this.$dialog.toast({
                tit:'删除',
                msg:'确定删除？',
                callback:function(data){
                    that.tipsMsg3 = data;
                }
            })
        }
    }
}
</script>

<style lang="css">

</style>
