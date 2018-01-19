<template lang="html">
    <div class="demo">

        <p class="demo-list" v-on:click="showPickerAddress1">显示默认地址：['北京', '北京', '东城区'] <span>{{resAddress1}}</span></p>

        <p class="demo-list" v-on:click="showPickerAddress2">显示设置地址：['湖南省', '长沙市', '岳麓区'] <span>{{resAddress2}}</span></p>

        <p class="demo-list" v-on:click="showPickerAddress3">显示省市：['北京', '北京'] <span>{{resAddress3}}</span></p>

        <!-- 显示默认地址： -->
        <pickerAddress
            v-bind:Metadata="Metadata"
            v-on:accept-result="acceptResultAddress1"
            ref="pickerAddress1"
        ></pickerAddress>

        <!-- 显示设置地址： -->
        <pickerAddress
            v-bind:Metadata="Metadata"
            v-bind:setAddress="['湖南省', '长沙市', '岳麓区']"
            v-on:accept-result="acceptResultAddress2"
            ref="pickerAddress2"
        ></pickerAddress>

        <!-- 显示省市： -->
        <pickerAddress
            v-bind:Metadata="Metadata"
            v-bind:setProcity="true"
            v-on:accept-result="acceptResultAddress3"
            ref="pickerAddress3"
        ></pickerAddress>




    </div>
</template>

<script>

import metadata from '../../assets/AreaData.json';

export default {
    name:'picker',
    data(){
        return{
            msg:'picker',
            Metadata:metadata,
            address:['湖南省', '长沙市', '岳麓区'],
            date:[2015,5,5],
            resAddress1:'省/市/区',
            resAddress2:'省/市/区',
            resAddress3:'省/市',
        }
    },
    components:{
    },
    methods:{
        // 默认地址选择
        showPickerAddress1(){
            this.$refs.pickerAddress1.open();
        },
        acceptResultAddress1(val){
            this.resAddress1 = val.toString();
        },

        // 设置地址选择
        showPickerAddress2(){
            this.$refs.pickerAddress2.open();
        },
        acceptResultAddress2(val){
            this.resAddress2 = val.toString();
        },

        // 设置省市地址选择
        showPickerAddress3(){
            this.$refs.pickerAddress3.open();
        },
        acceptResultAddress3(val){
            this.resAddress3 = val.toString();
        },


    }
}
</script>
