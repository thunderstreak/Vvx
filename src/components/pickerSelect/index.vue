<template lang="html">
    <section class="demo">
        <p class="demo-list" v-on:click="showPickerSelect1">默认的select:<span>{{resSelect1}}</span></p>

        <p class="demo-list" v-on:click="showPickerSelect1">设置初始select:[城东区]<span>{{resSelect1}}</span></p>




        <pickerSelect
            v-bind:PropData="initData"
            v-bind:PropSelect="initSelected"
            v-on:accept-result="acceptResultSeletc1"
            ref="pickerSelect1"
        ></pickerSelect>
    </section>
</template>

<script>

export default {
    data(){
        return{
            msg:'pickerSelect',
            initData:['select1','select2','select3','select4',],
            initSelected:['select2'],
            resSelect1:'',
        }
    },
    methods:{
        // 默认选择
        showPickerSelect1(){
            this.$refs.pickerSelect1.open();
        },
        acceptResultSeletc1(val){
            this.resSelect1 = val.toString();
        },
    }
}
</script>

<style lang="css">
</style>
