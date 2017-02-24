<template lang="html">
    <section class="demo">
        <p class="demo-list" v-on:click="showPickerSelect1">默认的select:<span>{{resSelect1}}</p>

        <p class="demo-list" v-on:click="showPickerSelect1">设置初始select:[城东区]<span>{{resSelect1}}</p>




        <pickerSelect
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
