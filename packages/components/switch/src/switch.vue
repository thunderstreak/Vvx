<template lang="html">
    <section class="switch">
        <div class="switch-tit">
            {{title}}
        </div>
        <div class="switch-tab" v-bind:class="[isActive ? 'switchTabOn' : 'switchTabOff']" v-on:click="onSwitch">
            <div class="switch-tab-o"></div>
        </div>
    </section>
</template>

<script>
export default {
    name:'Switchs',
    props:{
        title:{
            type:String,
            default(){
                return 'default title';
            }

        },
        Active:{
            type:Boolean,
            default(){
                return false;
            }
        }
    },
    data(){
        return{
            isActive:this.Active
        }
    },
    created(){

    },
    computed:{

    },
    methods:{
        onSwitch(){
            this.isActive = !this.isActive;
        }
    },
    watch:{
        isActive(newVal,oldVal){
            this.$emit('accept-result',newVal);
        }
    }
}
</script>

<style lang="less">
.switch{
    background: #fff;
    padding:  .25rem;
    height: .8rem;
    line-height: .8rem;
    display: box;
    display: -webkit-box;
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;;
	-webkit-justify-content: space-between;
    .switch-tit{
        box-flex: 1;
        -webkit-box-flex: 1;
        flex: 1;
        -webkit-flex: 1;
    }
    .switch-tab{
        border: 1px #e1e1e1 solid;
        width: 1.6rem;
        height: .8rem;
        border-radius: .8rem;
        position: relative;
        transition: .25s;
        .switch-tab-o{
            transition: .25s;
            width: .8rem;
            height: .8rem;
            background: #fff;
            border-radius: 50%;
            position: absolute;
        }
    }
    .switchTabOn{
        border: 1px #47da67 solid;
        background: #47da67;
        .switch-tab-o{
            left: .8rem;
        }
    }
    .switchTabOff{
        background: #e1e1e1;
        .switch-tab-o{
            left: 0rem;
        }
    }
}
</style>
