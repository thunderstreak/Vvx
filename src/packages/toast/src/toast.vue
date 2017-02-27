<template lang="html">
    <transition name="fade">
        <section class="toast">
            {{msg}}
        </section>
    </transition>
</template>

<script>
export default {
    name:'Toast',
    data(){
        return{
            msg:'Toast',
        }
    },
    created(){
        console.log(this.isshow);
    },
    mounted(){

    },
    methods:{

    }
}
</script>

<style lang="css">
.fade-enter-active, .fade-leave-active {
    transition: .2s
}
.fade-enter, .fade-leave-active {
    opacity: 0
}
</style>
