<template lang="html">
    <div class="demo">

        <p class="demo-list">自动播放:3000</p>
        <Swiper v-bind:auto="3000" v-bind:imgArr="swiper" >

            <!-- <a v-bind:href="item.url" v-for="(item,index) in swiper" v-bind:data-item="index">
                <img v-bind:src="item.src" v-bind:alt="item.alt">
            </a> -->

        </Swiper>

        <p class="demo-list">显示圆点位置：left</p>
        <Swiper v-bind:imgArr="swiper" v-bind:align="'left'"></Swiper>
        <p class="demo-list">显示圆点位置：right</p>
        <Swiper v-bind:imgArr="swiper" v-bind:align="'right'"></Swiper>
        <br>
    </div>
</template>

<script>
export default {
    name:'swiper',
    data(){
        return{
            msg:'swiper',
            swiper:[
                {src:"https://static.vux.li/demo/1.jpg",alt:"top_banner1",url:"https://static.vux.li/demo/1.jpg"},
                {src:"https://static.vux.li/demo/2.jpg",alt:"top_banner2",url:"https://static.vux.li/demo/2.jpg"},
                {src:"https://static.vux.li/demo/3.jpg",alt:"top_banner3",url:"https://static.vux.li/demo/3.jpg"},
            ]
        }
    },
    components:{
    },
    beforeCreate(){

    },
    created(){

    },
    mounted(){

    },
    computed:{

    },
    methods:{

    }
}
</script>

<style lang="css">

</style>
