<template lang="html">
    <div class="demo">



        <p class="demo-list" v-on:click="showPickerTime1">显示默认时间：{{currTime}} <span>{{resTime1}}</span></p>

        <p class="demo-list" v-on:click="showPickerTime2">显示设置时间：2016-2-29 <span>{{resTime2}}</span></p>

        <p class="demo-list" v-on:click="showPickerTime3">设置时间段：[Min:2015-5]-[Max2018-5] <span>{{resTime3}}</span></p>




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
            resTime1:'',
            resTime2:'',
            resTime3:''
        }
    },
    components:{
        PickerTime      :pickertime,
    },
    methods:{

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
