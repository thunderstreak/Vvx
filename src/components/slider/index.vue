<template lang="html">
    <section class="">

        <Slider
            v-bind:PropList="list"
            v-on:accept-result="acceptResultSlider"
        ></Slider>

    </section>
</template>

<script>
export default {
    name:'slider',
    data(){
        return{
            msg:'slider',
            list:[
                {title:'slider1',data:1},
                {title:'slider2',data:2},
                {title:'slider3',data:3},
                {title:'slider4',data:4},
            ]
        }
    },
    created(){

    },
    mounted(){

    },
    methods:{
        acceptResultSlider(data){
            console.log(data);
        }
    }
}
</script>

<style lang="less">
html{background: #f4f4f4;}

</style>
