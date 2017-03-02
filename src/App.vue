<template>
    <div id="app">
        <transition :name="transitionName" mode="out-in">
            <router-view class="child-view"></router-view>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'app',
    data(){
        return{
            msg             :'app',
            transitionName  : 'slide-left'
        }
    },
    watch: {
        '$route' (to, from) {
            const toDepth = to.path.split('/').length;
            const fromDepth = from.path.split('/').length;
            this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
        }
    },
}
</script>
<style lang="css">
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s ease;
}
.fade-enter, .fade-leave-active {
    opacity: 0
}
.child-view {
    transition: all .5s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-30px, 0);
    transform: translate(-30px, 0);
}
</style>
