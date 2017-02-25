<template lang="html">
    <div class="demo">
        <p class="demo-list">设置标题：这是一个标题<span></span></p>
        <Switchs
            v-bind:title="'这是一个标题'"
        ></Switchs>

        <p class="demo-list">设置初始：true<span>{{onoff}}</span></p>
        <Switchs
            v-bind:title="'这是另外一个标题'"
            v-bind:Active='true'
            v-on:accept-result="acceptResultSwitch"
        ></Switchs>

    </div>
</template>

<script>
// import switchs from '../../packages/switch/index.js';

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
        // Switchs:switchs
    },
    methods:{
        acceptResultSwitch(val){
            this.onoff = val;
        }
    }

}
</script>
