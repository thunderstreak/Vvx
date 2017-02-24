<template lang="html">
    <transition name="fade">

        <section v-if="!isshow">

                <section class="loding"></section>
                <section class="loding-center">
                    <i v-if="!loding" class="help"></i>
                    <i v-if="!done" class="icon-toast"></i>
                    <span class="icon-msg">{{msg}}</span>
                </section>

        </section>

    </transition>
</template>

<script>
export default {
    name:'loding',
    data(){
        return{
            msg     :'',
            callback:null,
            isshow  :true,
            done    :true,
            loding  :true,
        }
    },
    created(){

    },
    mounted(){
        if(!this.msg){
            console.log(this.msg);
            this.msg = 'loding...'
        }
    },
    methods:{

    }
}
</script>

<style lang="css">
.loding{
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
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
.icon-msg{
    font-size: .5rem;
    display: block;
    padding: .5rem 0 0 0;
}
.fade-enter-active, .fade-leave-active {
    transition: .2s
}
.fade-enter, .fade-leave-active {
    opacity: 0
}

.help{
    width: 30px;
    height: 30px;
    border: 1px #fff solid;
    border-radius: 50%;
    -webkit-animation: rotation 1s ease-in-out infinite;
       -moz-animation: rotation 1s ease-in-out infinite;
            animation: rotation 1s ease-in-out infinite;
    margin: 30px auto;
}
.help:after{
    width: 5px;
    height: 5px;
    background-color: rgba(255,255,255,1);
    border-radius: 100%;
    position: absolute;
    content: "";
}
@-webkit-keyframes rotation{
    0%{-webkit-transform: rotate(0deg);}
    100%{-webkit-transform: rotate(360deg);}
}
@-moz-keyframes rotation{
    0%{-moz-transform: rotate(0deg);}
    100%{-moz-transform: rotate(360deg);}
}
@keyframes rotation{
    0%{transform: rotate(0deg);}
    100%{transform: rotate(360deg);}
}</style>
