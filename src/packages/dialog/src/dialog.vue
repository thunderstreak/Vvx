<template lang="html">
    <transition name="fade">
    <div class="alert" v-if="!isshow">

            <div class="alert-box">

                <div class="" v-if="type == 'alert'">
                    <h2 class="alert-tit">{{tit}}</h2>
                    <p class="alert-content">{{msg}}</p>
                </div>

                <div class="" v-if="type == 'toast'">
                    <p class="alert-content">{{msg}}</p>
                </div>

                <div class="" v-if="type == 'confirm'">
                    <h2 class="alert-tit">{{tit}}</h2>
                    <p class="alert-content">
                        <input v-focus="type" ref='ipt' type="text" v-model='ipt' name="" value="">
                    </p>
                </div>

                <div class="alert-btn" v-if="type != 'toast'">
                    <span class="alert-close" v-on:click='alertClose'>取消</span>
                    <span class="alert-enter" v-on:click='alertEnter'>确定</span>
                </div>
            </div>

    </div>
    </transition>
</template>

<script>
export default {
    data(){
        return{
            type    :String,
            tit     :String,
            msg     :String,
            callback:null,
            isshow  :Boolean,
            ipt     :null,
        }
    },
    mounted(){

    },
    created(){

    },
    methods:{
        // 关闭按钮
        alertClose(){
            this.isshow=true;
            this.callback(false);
        },
        // 确定按钮
        alertEnter(){
            this.isshow=true;
            if(this.type=='confirm'){
                this.callback(this.ipt);
            }else{
                this.callback(true);
            }
        }
    },
    directives:{
        focus:{
            inserted:(el,binding) => {
                // console.log(binding);
                el.focus();
            }
        }
    }
}
</script>

<style lang="less">
.alert{
    width: 100%;
    height:100%;
    top: 0;
    left: 0;
    z-index: 9999;
    background: rgba(0,0,0,.5);
    position: fixed;
    transition: .25s;
    .alert-box{
        position: fixed;
        width: 82%;
        top: 50%;
        left: 50%;
        z-index: 9999;
        transform: translate3d(-50%,-50%,0);
        background-color: #FAFAFC;
        text-align: center;
        border-radius: 6px;
        overflow: hidden;
        .alert-tit{
            font-size: .5rem;
            line-height: 2;
        }
        .alert-content{
            padding:.25rem 0;
            font-size: .45rem;
            >input{
                width: 80%;
                height: .75rem;
                line-height: .75rem;
                font-size: .45rem;
                border: 1px #ccc solid;
            }
        }
        .alert-btn{
            display: box;
        	display: -webkit-box;
        	display: flex;
        	display: -webkit-flex;
            justify-content: space-between;
        	-webkit-justify-content: space-between;
            >span{
                width: 50%;
                font-size: .4rem;
                color:#247aea;
                padding: .25rem 0;
                border-top: 1px #ccc solid;
            }
            >span:first-child{
                border-right:1px #ccc solid;
            }
        }
    }
}

.fade-enter-active, .fade-leave-active {
    transition: .25s
}
.fade-enter, .fade-leave-active {
    opacity: 0
}
</style>
