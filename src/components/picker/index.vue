<template lang="html">
    <div class="pickers">

        <p class="pickers-p" v-on:click="showPickerAddress1">显示默认地址：['北京', '北京', '东城区'] <span>{{resAddress1}}</span></p>

        <p class="pickers-p" v-on:click="showPickerAddress2">显示设置地址：['湖南省', '长沙市', '岳麓区'] <span>{{resAddress2}}</span></p>

        <p class="pickers-p" v-on:click="showPickerAddress3">显示省市：['北京', '北京'] <span>{{resAddress3}}</span></p>

        <p class="pickers-p" v-on:click="showPickerTime1">显示默认时间：{{currTime}} <span>{{resTime1}}</span></p>

        <p class="pickers-p" v-on:click="showPickerTime2">显示设置时间：2016-2-29 <span>{{resTime2}}</span></p>

        <p class="pickers-p" v-on:click="showPickerTime3">设置时间段：[Min:2015-5]-[Max2018-5] <span>{{resTime3}}</span></p>


        <!-- 显示默认地址： -->
        <pickerAddress
            v-on:accept-result="acceptResultAddress1"
            ref="pickerAddress1"
        ></pickerAddress>

        <!-- 显示设置地址： -->
        <pickerAddress
            v-bind:setAddress="['湖南省', '长沙市', '岳麓区']"
            v-on:accept-result="acceptResultAddress2"
            ref="pickerAddress2"
        ></pickerAddress>

        <!-- 显示省市： -->
        <pickerAddress
            v-bind:setProcity="true"
            v-on:accept-result="acceptResultAddress3"
            ref="pickerAddress3"
        ></pickerAddress>

        <!-- 显示默认时间 -->
        <pickerTime
            v-on:accept-result="acceptResultTime1"
            ref="pickerTime1"
        ></pickerTime>

        <!-- 显示设置时间 -->
        <pickerTime
            v-bind:setCurrDate="[2016,2,29]"
            v-on:accept-result="acceptResultTime2"
            ref="pickerTime2"
        ></pickerTime>

        <!-- 设置时间段 -->
        <pickerTime
            v-bind:setMinDate="[2015,5,5]"
            v-bind:setMaxDate="[2018,5,5]"

            v-on:accept-result="acceptResultTime3"
            ref="pickerTime3"
        ></pickerTime>



    </div>
</template>

<script>

import pickertime from '../../packages/pickerTime/index.js';
import pickeraddress from '../../packages/pickerAddress/index.js';

function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();

    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + date.getHours() + seperator2 + date.getMinutes()
            + seperator2 + date.getSeconds();
    return currentdate;
}

export default {
    name:'picker',
    data(){
        return{
            msg:'picker',
            address:['湖南省', '长沙市', '岳麓区'],
            date:[2015,5,5],
            currTime:getNowFormatDate(),
            resAddress1:'省/市/区',
            resTime1:'',
            resAddress2:'省/市/区',
            resTime2:'',
            resAddress3:'省/市',
            resTime3:''
        }
    },
    components:{

        PickerTime      :pickertime,
        PickerAddress   :pickeraddress
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

        // 默认时间选择
        showPickerTime1(){
            this.$refs.pickerTime1.open();
        },
        acceptResultTime1(val){
            this.resTime1 = val.toString();
        },

        // 设置时间选择
        showPickerTime2(){
            this.$refs.pickerTime2.open();
        },
        acceptResultTime2(val){
            this.resTime2 = val.toString();
        },

        // 设置时间段
        showPickerTime3(){
            this.$refs.pickerTime3.open();
        },
        acceptResultTime3(val){
            this.resTime3 = val.toString();
        },

    }
}
</script>

<style lang="css">
.pickers{
    margin:0 .25rem;
}
.pickers-p{
    height: 1rem;
    line-height: 1rem;
    border-bottom: 1px #ccc solid;
    display: box;
    display: -webkit-box;
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    -webkit-justify-content: space-between;
    background: url('../../assets/setting_right.png') no-repeat right;
    background-size: 0.2rem 0.3466666666666667rem;
}
.pickers-p>span{
    padding-right: .5rem;
}
</style>
