<template lang="html">
    <transition name="fadeOutAddress">


        <section class="pickerAddress" v-on:click="show = true" v-show="!show">
            <transition name="fadeInAddress">
                <div class="picker-address" v-show="!show">
                    <div class="picker-address-tit">
                        <span v-on:click="show = true">取消</span>
                        <span v-on:click="enter">确定</span>
                    </div>
                    <div class="picker-address-content">
                        <Picker
                        v-bind:PropData="select"
                        v-bind:setIndex="selectedIndex"
                        v-on:accept-result="acceptResultSelect"></Picker>
                    </div>
                </div>
            </transition>
        </section>

    </transition>


</template>

<script>
import pickers from '../../picker/index.js';

export default {
    name:'pickerSelect',
    data(){
        return{
            msg                     :'pickerSelect',
            select                  :null,
            selectedIndex           :0,
            show                    :true,
        }
    },
    props:{
        PropSelect:{
            type:Array,
            default:()=>{
                return ['东城区'];
            }
        },
        PropData:{
            type:Array,
            default:()=>{
                return ['北京','北京市','东城区'];
            }
        }
    },
    components:{
        Picker:pickers
    },
    created(){

            this.select   = this.PropData;
            for(let i = 0;i < this.PropData.length;i++){
                if(this.PropData[i] == this.PropSelect[0]){
                    this.selectedIndex = i;//选中省的下标
                    // this.setProvinceCurrIndex = i;//设置当前省下标
                    break;
                }
            }

    },
    mounted(){

    },
    methods:{
        open(){
            this.show = false;
        },
        enter(){
            this.show = true;

            let selected = this.PropData[this.selectedIndex];

            this.$emit('accept-result', selected);
        },
        acceptResultSelect(v){
            this.selectedIndex = v;
        },

    },

}
</script>

<style lang="less">
.pickerAddress{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background: rgba(0,0,0,.5);
    overflow-y: hidden;
}
.picker-address{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 6rem;
    background: #fff;
    z-index: 9999;
    .picker-address-tit{
        height: calc(1rem);
        line-height: 1rem;
        border-bottom: 1px #ccc solid;

        display: box;
        display: -webkit-box;
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        -webkit-justify-content: space-between;
        text-align: center;
        font-size: .45rem;
        >span{
            width: 20%;
        }
    }
    .picker-address-content{
        height: 5rem;
        width: 100%;
        overflow: hidden;
        position: relative;

        display: box;
        display: -webkit-box;
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        -webkit-justify-content: space-between;

        .picker-address-list{
            width: 33.33%;
            float: left;
            text-align: center;
            transition: all .3s ease-out;
            >li{
                height: 1rem;
                line-height: 1rem;
                font-size: .5rem;
            }

        }
    }
}
.fadeOutAddress-enter-active, .fadeOutAddress-leave-active {
    transition: .5s;
}
.fadeOutAddress-enter, .fadeOutAddress-leave-active {
    opacity: 0;
}
.fadeInAddress-enter-active, .fadeInAddress-leave-active {
    transition: .25s;
}
.fadeInAddress-enter, .fadeInAddress-leave-active {
    opacity: 0;
    transform: translateY(6rem);
}
</style>
