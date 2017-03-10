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
                        v-bind:PropData="province"
                        v-bind:setIndex="setProvinceCurrIndex"
                        v-on:accept-result="acceptResultProvince"></Picker>
                        <Picker
                        v-bind:PropData="city"
                        v-bind:setIndex="setCityCurrIndex"
                        v-on:accept-result="acceptResultCity"></Picker>
                        <Picker

                        v-if="!setProcity"
                        v-bind:PropData="area"
                        v-bind:setIndex="setAreaCurrIndex"
                        v-on:accept-result="acceptResultArea"></Picker>
                    </div>
                </div>
            </transition>
        </section>

    </transition>


</template>

<script>
import PropData from '../../../assets/AreaData.json';

export default {
    name:'PickerAddress',
    data(){
        return{
            msg                     :'PickerAddress',
            province                :null,//省
            selectedProvinceIndex   :0,
            city                    :null,//市
            selectedCityIndex       :0,
            area                    :null,//区
            selectedAreaIndex       :0,
            show                    :true,
        }
    },
    props:{
        initData:{
            type:Array,
            default:()=>{
                return [
                    {
                    "i":"11",
                    "n":"北京",
                    "c":[{
                            "i":"1101",
                            "n":"北京市",
                            "c":
                            [{"i":"110101","n":"东城区"},
                            {"i":"110102","n":"西城区"},
                            {"i":"110103","n":"崇文区"},
                            {"i":"110104","n":"宣武区"},
                            {"i":"110105","n":"朝阳区"},
                            {"i":"110106","n":"丰台区"},
                            {"i":"110107","n":"石景山区"},
                            {"i":"110108","n":"海淀区"},
                            {"i":"110109","n":"门头沟区"},
                            {"i":"110111","n":"房山区"},
                            {"i":"110112","n":"通州区"},
                            {"i":"110113","n":"顺义区"},
                            {"i":"110114","n":"昌平区"},
                            {"i":"110115","n":"大兴区"},
                            {"i":"110116","n":"怀柔区"},
                            {"i":"110117","n":"平谷区"},
                            {"i":"110228","n":"密云县"},
                            {"i":"110229","n":"延庆县"}]
                        }]
                    }
                ]
            }
        },
        setAddress:{
            type:Array,
            default:()=>{
                return ['北京','北京市','东城区'];
            }
        },
        setProcity:{
            type:Boolean,
            default:()=>{
                return false;
            }
        }
    },
    created(){
        // 如果没有设置省市区使用默认

            this.province   = PropData.map((v,k)=>{return v.n});
            for(let i = 0;i < PropData.length;i++){
                if(PropData[i].n == this.setAddress[0]){
                    this.selectedProvinceIndex = i;//选中省的下标
                    this.setProvinceCurrIndex = i;//设置当前省下标
                    break;
                }
            }
            let AreaDataCitys = PropData[this.selectedProvinceIndex].c;
            for(let i = 0;i < AreaDataCitys.length;i++){
                if(AreaDataCitys[i].n == this.setAddress[1]){
                    this.selectedCityIndex = i;//选中市的下标
                    this.setCityCurrIndex = i;//设置当前市下标
                    this.city       = AreaDataCitys.map((v,k)=>{return v.n});
                    break;
                }
            }
            let AreaDataAreas = PropData[this.selectedProvinceIndex].c[this.selectedCityIndex].c;
            for(let i = 0;i < AreaDataAreas.length;i++){
                if(AreaDataAreas[i].n == this.setAddress[2]){
                    this.selectedAreaIndex = i;//选中区的下标
                    this.setAreaCurrIndex = i;//设置当前区下标
                    this.area       = AreaDataAreas.map((v,k)=>{return v.n});
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
            let address = [
                PropData[this.selectedProvinceIndex].n,
                PropData[this.selectedProvinceIndex].c[this.selectedCityIndex].n,
                PropData[this.selectedProvinceIndex].c[this.selectedCityIndex].c[this.selectedAreaIndex].n
            ]
            let procity = [
                PropData[this.selectedProvinceIndex].n,
                PropData[this.selectedProvinceIndex].c[this.selectedCityIndex].n
            ]

            this.$emit('accept-result',this.setProcity ? procity : address);
        },
        acceptResultProvince(v){
            this.selectedProvinceIndex = v;
            // this.city        = AreaData[v].c;
            this.area        = PropData[v].c['0'].c.map((v,k)=>{
                return v.n
            });
        },
        acceptResultCity(v){
            this.selectedCityIndex = v;
            // this.area    = AreaData[this.selectedProvinceIndex].c[v].c;
        },
        acceptResultArea(v){
            this.selectedAreaIndex = v;
        }
    },
    watch:{
        selectedProvinceIndex(n,o){
            this.city = PropData[n].c.map((v,k)=>{
                return v.n;
            });
        },
        selectedCityIndex(n,o){
            this.area = PropData[this.selectedProvinceIndex].c[n].c.map((v,k)=>{
                return v.n;
            });
        },

    }
}
</script>

<style lang="less">

</style>
