<template lang="html">
    <div class="">
        <p class="list">设置标题</p>
        <Switchs
            v-bind:title="'这是一个标题'"
        ></Switchs>

        <p class="list">设置初始：{{onoff}}</p>
        <Switchs
            v-bind:title="'这是一个标题'"
            v-bind:Active='true'
            v-on:accept-result="acceptResultSwitch"

        ></Switchs>

    </div>
</template>

<script>
import switchs from '../../packages/switch/index.js';

export default {
    name:'switch',
    data(){
        return{
            msg:'switch',
            onoff:true
        }
    },
    created(){

    },
    mounted(){

    },
    components:{
        Switchs:switchs
    },
    methods:{
        acceptResultSwitch(val){
            this.onoff = val;
        }
    }

}
</script>

<style lang="css">

</style>
