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
export default {
    name:'PickerSelect',
    data(){
        return{
            msg                     :'PickerSelect',
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
    created(){
            this.select   = this.PropData;
            for(let i = 0;i < this.PropData.length;i++){
                if(this.PropData[i] == this.PropSelect[0]){
                    this.selectedIndex = i;//选的下标
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

</style>
