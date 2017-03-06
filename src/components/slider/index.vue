<template lang="html">
    <section class="">
        <ul class="slider" ref='slider'>
            <li v-for="(item,$index) in 3">
                <div class="slider-left"
                v-on:touchstart.stop.prevent='touchStart($event)'
                v-on:touchmove.stop.prevent='touchMove($event)'
                v-on:touchend.stop.prevent='touchEnd($event)'>
                    {{msg}}
                </div>
                <div class="slider-right" >
                    <div class="mark" v-on:click='setMark($event,$index)'>备注</div>
                    <div class="delete" v-on:click='delMark($event,$index)'>删除</div>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    name:'slider',
    data(){
        return{
            msg:'silder'
        }
    },
    created(){

    },
    mounted(){
        console.log();
        this.markWidth = this.$tool.getUnit(this.$refs.slider.querySelector('.slider-right'),'width');
    },
    methods:{
        setMark(e,idx){
            console.log(idx);
        },
        delMark(e,idx){
            console.log(idx);
        },
        touchStart(e){
            if(this.prevEle!=null){
                this.prevEle.style.transform='translate3d(0, 0, 0)';
            }
            this.prevEle = e.target;
            let etouch = e.changedTouches[0];
            [this.startX,this.startY] = [etouch.pageX,etouch.pageY];
        },
        touchMove(e){
            let etouch = e.changedTouches[0];
            let endX,endY;
            // 解构赋值
            [this.endX,endX,this.endY,endY] = [etouch.pageX,etouch.pageX,etouch.pageY,etouch.pageY];

            // 计算手指移动方位
            this.direction = this.$tool.GetSlideDirection(this.startX,this.startY,endX,endY);

            // 计算滑动距离
            this.offsetX = endX - this.startX < -this.markWidth ? -this.markWidth :  endX - this.startX;

            if(this.direction==3){// left
                if(this.offsetX < -(this.markWidth/2)){
                    e.target.style.transform=`translate3d(${-this.markWidth}px, 0, 0)`;
                }else{
                    e.target.style.transform=`translate3d(${this.offsetX}px, 0, 0)`;
                }
            }else if(this.direction==4){// right
                if(this.offsetX > 0 && this.offsetX < this.markWidth){
                    e.target.style.transform=`translate3d(0, 0, 0)`;
                }
            }
        },
        touchEnd(e){
            // 判断touchend时候手指位置并重置元素位置
            if(this.offsetX > -(this.markWidth/2)){
                e.target.style.transform=`translate3d(0, 0, 0)`;
            }
        },
    }
}
</script>

<style lang="less">
html{background: #f4f4f4;}
.slider{
    font-size: 0.5rem;
    >li{
        margin: 0.25rem 0rem;
        height: 1.65rem;
        line-height: 1.65rem;
        font-size: 0.35rem;
        width: 100%;
        position: relative;
        overflow: hidden;
    }
}
.slider-left{
    // border:1px #fff solid;
    transition: .25s ease;
    width: 100%;
    background: #fff;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
}
.slider-right{
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
    width: 4rem;
    text-align: center;
    display: box;
	display: -webkit-box;
	display: flex;
	display: -webkit-flex;
    justify-content: space-between;
	-webkit-justify-content: space-between;
}
.mark{
    background: #ccc;
    width: 60%;
    // float: left;
}
.delete{
    background: red;
    width: 40%;
    // float: right;
}
</style>
