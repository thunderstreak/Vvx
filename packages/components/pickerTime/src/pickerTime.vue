<template lang="html">
    <transition name="fadeOut">


        <section class="pickerBox" v-on:click="show = true" v-show="!show">
            <transition name="fadeIn">
                <div class="picker-box" v-show="!show">
                    <div class="picker-box-tit">
                        <span v-on:click="show = true">取消</span>
                        <span v-on:click="enter">确定</span>
                    </div>
                    <div class="picker-box-content">
                        <Picker
                        v-bind:PropData="year"
                        v-bind:setIndex="setYearCurrIndex"
                        v-on:accept-result="acceptResultYear"></Picker>
                        <Picker
                        v-bind:PropData="month"
                        v-bind:setIndex="setMonthCurrIndex"
                        v-on:accept-result="acceptResultMonth"></Picker>
                        <Picker
                        v-bind:PropData="day"
                        v-bind:setIndex="setDayCurrIndex"
                        v-on:accept-result="acceptResultDay"></Picker>
                    </div>
                </div>
            </transition>
        </section>

    </transition>

</template>

<script>
import pickers from '../../picker/index.js';
/**
*根据传入的值获取当前时间YY-MM-DD or YY-MM-DD h:m:s
*@param:strDate(String) 'max:最大时间 min:最小时间 cur:当前时间' 默认当前时间
*@param:sizeDate(Number) '最大、小年数值' 默认为0
*/
function getFormDate(str = 'cur',size = 0){
    let date = new Date();
    let [splice1,splice2] = ["-",":"];

    let year    = date.getFullYear();
    let month   = date.getMonth() + 1;
    let day     = date.getDate();
    let hours   = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let cur = [year , month , day];
    let max = [(year + size) , month , day];
    let min = [(year - size) , month , day];

    if(str == 'cur'){
        return cur;
    }else if(str == 'max'){
        return max;
    }else if(str == 'min'){
        return min;
    }else{
        return year + splice1 + month + splice1 + day + " " + hours + splice2 + minutes + splice2 + seconds;
    }
}
/**
*根据传入的年和月份返回当月天数
*@param:year(number)
*@param:month(number)
*/
function getDaysInMonth(year,month){
    //parseInt(number,type)这个函数后面如果不跟第2个参数来表示进制的话，默认是10进制。
    month = parseInt(month,10);
    var temp = new Date(year,month,0);
    return temp.getDate();
}
export default {
    name:'PickerTime',
    data(){
        return{
            msg                 :'PickerTime',
            show                :true,
            year                :[],
            selectedYearIndex   :0,
            month               :[],
            selectedMonthIndex  :0,
            day                 :[],
            selectedDayIndex    :0,
        }
    },
    props:{
        setCurrDate:{
            type:Array,
            default:()=>{
                return getFormDate('cur',0);
            }
        },
        setMaxDate:{
            type:Array,
            default:()=>{
                return getFormDate('max',5);
            }
        },
        setMinDate:{
            type:Array,
            default:()=>{
                return getFormDate('min',5);
            }
        }
    },
    beforeCreate(){

    },
    created(){

        // setting years
        let comoutedYear = this.setMaxDate[0] - this.setMinDate[0] + 1;
        for(let i = 0;i< comoutedYear;i++){
            this.year.push(this.setMinDate[0]+i);
            if(this.setMinDate[0]+i == this.setCurrDate[0]){
                this.setYearCurrIndex = i;
                this.selectedYearIndex = i;
            }
        }

        for(let i = 1;i<= 12;i++){
            this.month.push(i);
            if(i == this.setCurrDate[1]){
                this.setMonthCurrIndex = i - 1;
                this.selectedMonthIndex = i - 1;
            }
        }

        let setDateDay = getDaysInMonth(this.year[this.setYearCurrIndex],this.month[this.setMonthCurrIndex]);

        for(let i = 1;i<= setDateDay;i++){
            this.day.push(i);
            if(i == this.setCurrDate[2]){
                this.setDayCurrIndex = i - 1;
                this.selectedDayIndex = i - 1;
            }
        }



    },
    components:{
        Picker:pickers
    },
    mounted(){

    },
    computed:{

    },
    methods:{
        open(){
            this.show = false;
        },
        enter(){
            this.show = true;
            let date = [
                this.year[this.selectedYearIndex],
                this.month[this.selectedMonthIndex],
                this.day[this.selectedDayIndex]
            ];
            this.$emit('accept-result',date);
        },
        acceptResultYear(v){
            this.selectedYearIndex = v;
            /*if(v == 0 && this.selectedMonthIndex == 0){
                this.day.length = 0;

            }else if(v == this.year.length-1 && this.selectedMonthIndex == this.month.length-1){
                this.day.length = 0;
                console.log(this.day);
            }else{
                this.setTargetDay();
            }*/
            this.setTargetDay();
        },
        acceptResultMonth(v){
            this.selectedMonthIndex = v;
            /*if(v == 0 && this.selectedYearIndex == 0){
                this.day.length = 0;
            }*/
            this.setTargetDay();
        },
        acceptResultDay(v){
            this.selectedDayIndex = v;
        },
        // 获取当前天数
        getTargetDay(){
            return  getDaysInMonth(this.year[this.selectedYearIndex],this.month[this.selectedMonthIndex]);
        },
        // 设置当前天数
        setTargetDay(){
            let days = getDaysInMonth(this.year[this.selectedYearIndex],this.month[this.selectedMonthIndex]);
            this.day.length = 0;
            for(let i = 1; i <= days; i++){
                this.day.push(i)
            }
        }
    },
    watch:{
        selectedYearIndex(n,o){
            if(n == 0){
                this.month.length = 0;
                for(let i = this.setMinDate[1]; i<=12;i++){
                    this.month.push(i)
                }
            }else if(n == this.year.length-1){
                this.month.length = 0;
                for(let i = 1; i<=this.setMaxDate[1];i++){
                    this.month.push(i)
                }
            }else{
                this.month.length = 0;
                for(let i = 1; i<=12;i++){
                    this.month.push(i)
                }
            }
            this.setTargetDay();
        }
    }
}
</script>

<style lang="less">

</style>
