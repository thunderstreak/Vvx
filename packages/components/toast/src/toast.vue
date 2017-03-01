<template lang="html">
    <transition name="fade">
        <section v-if="!isshow" v-on:click="isshow = !isshow" class="layer">
            <section class="toast-center"
            v-bind:class="{
                'toast-top':position == 'top',
                'toast-bottom':position == 'bottom',
                'toast-middle':position == 'middle',
            }">
                {{msg}}
            </section>
        </section>
    </transition>
</template>

<script>
export default {
    name:'Toast',
    data(){
        return{
            msg     :'Toast',
            isshow  :true,
            position:'middle'
        }
    },
    created(){

    },
    mounted(){

    },
    methods:{

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

    /*display: flex;
    display: -webkit-flex;
    justify-content: center;
    -webkit-justify-content: center;
    align-items: center;
    -webkit-align-items: center;*/

}
.toast-center{

    /*width:auto;
    height: auto;*/
    font-size: .5rem;
    padding: .2rem .25rem;
    border-radius: .1rem;
    background: rgba(40,40,40,.75);
    color: #fff;
    position: relative;
    top: 50%;
    left: 50%;
    transform:translate(-50%,-50%);
    transform-origin:50% 50%;
    -webkit-transform:translate(-50%,-50%);
    -webkit-transform-origin:50% 50%;
}
.toast-top{
    position: absolute;
    top: .5rem;
}
.toast-bottom{
    position: absolute;
    bottom: .5rem;
}
.toast-middle{
    position: absolute;
}
.fade-enter-active, .fade-leave-active {
    transition: .2s
}
.fade-enter, .fade-leave-active {
    opacity: 0
}
</style>
