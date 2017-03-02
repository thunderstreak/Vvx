<template lang="html">
    <transition name="fade">

        <section v-if="!isshow">

                <section class="layer" v-on:click="or"></section>
                <section class="loding-center">
                    <img v-if="!loding" class="spin" src="../../../assets/tail-spin.svg">
                    <i v-if="!done" class="icon-toast"></i>
                    <span class="icon-msg">{{msg}}</span>
                </section>

        </section>

    </transition>
</template>

<script>
export default {
    name:'Loding',
    data(){
        return{
            msg     :'Loding',
            callback:null,
            isshow  :true,
            done    :true,
            loding  :true,
            callback:Function
        }
    },
    created(){

    },
    mounted(){

    },
    methods:{
        or(){
            this.callback(this.isshow);
        }
    },
    destroyed(){

    }
}
</script>

<style lang="css">
.layer{
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(40,40,40,.75);
}
.loding-center{
    position: fixed;
    z-index: 5000;
    width: 3rem;
    height: 3rem;
    top: 50%;
    left: 50%;
    margin: -1.5rem 0 0 -1.5rem;

    background: rgba(40,40,40,.75);
    text-align: center;
    border-radius: .15rem;
    color: #fff;
}
.icon-toast{
    width: .87rem;
    height: .125rem;
    margin-top:1.5rem;
    margin-left: .5rem;
    margin-bottom: .5rem;
    display: block;
    background: #fff;
    line-height: 0;
    font-size:0;
    vertical-align: middle;
    -webkit-transform: rotate(45deg);

}
.icon-toast::before{
    content:'/';
    display:block;
    width: 1.75rem;
    height:.125rem;
    background: #fff;
    -webkit-transform: rotate(-90deg) translateY(-50%) translateX(50%);
}
.spin{
    width: 1.5rem;
    height: 1.5rem;
    margin-top: .25rem;margin-bottom: .25rem;
}
.icon-msg{
    font-size: .5rem;
    display: block;
}
.fade-enter-active, .fade-leave-active {
    transition: .2s
}
.fade-enter, .fade-leave-active {
    opacity: 0
}


</style>
