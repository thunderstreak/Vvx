<template lang="html">
    <div class="sliderRightClose">
        <div class="sliderRightClose-list" v-for="(item,$index) in items" ref="srcl" v-bind="{'data-el':$index}">
            <div class="list-l"
            v-on:touchstart.stop.prevent='touchStart($event,$index)'
            v-on:touchmove.stop.prevent='touchMove($event,$index)'
            v-on:touchend.stop.prevent='touchEnd($event,$index)'>
                {{item.remark}}
            </div>
            <div class="list-r">
                <div class="list-r-mark" v-on:touchstart='setMark($event,$index)'>
                    备注
                </div>
                <div class="list-r-del" v-on:touchstart='delMark($event,$index)'>
                    删除
                </div>
            </div>
        </div>
        {{direction}}--{{offsetX}}
        <!-- <test></test> -->
    </div>
</template>

<script>
import test from './testComponents/test.js';
export default {
    data(){
        return{
            msg:'sliderRightClose',
            startX:0,//第一次touch的x轴
            startY:0,//第一次touch的y轴
            endX:0,//最后一次touch的x轴
            endY:0,//最后一次touch的y轴
            direction:0,//滑动的方向
            offsetX:0,//x轴的偏移量
            prevEle:null,//上一个touch元素
            markWidth:null,//需要偏移的距离px
            items:[
                {
                    index:1,
                    title:'inxex1',
                    remark:'测试备注1'
                },
                {
                    index:2,
                    title:'inxex2',
                    remark:'测试备注2'
                },
                {
                    index:3,
                    title:'inxex3',
                    remark:'测试备注3'
                }
            ]
        }
    },
    components:{
        test:test
    },
    created(){

    },
    mounted(){
        this.prevEle = document.querySelector('.list-l');
        this.GetEleWidth;
    },
    computed:{
        // 获取目标元素的width
        GetEleWidth(){
            let tag = this.prevEle;
            let a = [];
            let p = tag.parentNode.children;
            for(let i = 0; i < p.length; i++){
                if(p[i] != tag){
                    a.push(p[i]);
                }
            }
            this.siblings = a[a.length-1];
            this.markWidth = (window.getComputedStyle(a[a.length-1]).width).replace('px','');
            return this.markWidth;
        },

    },
    methods:{
        setMark(ev,idx){
            let self = this;
            test.confirm({
                tit:'测试标题',
                msg:'测试信息',
                callback:function(data){
                    console.log(data);
                    self.resetStatus();
                }
            })

        },
        delMark(ev,idx){
            let self = this;
            test.alert({
                tit:'删除',
                msg:'确定删除？',
                callback:function(data){
                    console.log(data);
                    if(data){
                        self.items.splice(idx,1);
                    }
                    self.resetStatus();
                }
            })
        },
        // 重置上一个元素状态
        resetStatus(){
            // 重置上一个的状态
            if(this.prevEle!=null){
                this.prevEle.style.transform='translate3d(0, 0, 0)';
            }
        },
        touchStart(ev,idx){
            this.resetStatus();

            this.prevEle = ev.target;
            let etouch = ev.changedTouches[0];
            [this.startX,this.startY] = [etouch.pageX,etouch.pageY];
            // this.GetEleWidth;//计算宽
        },
        touchMove(ev,idx){
            // console.log(ev.currentTarget);
            let etouch = ev.changedTouches[0];

            let endX,endY;
            // 解构赋值
            [this.endX,endX,this.endY,endY] = [etouch.pageX,etouch.pageX,etouch.pageY,etouch.pageY];

            // 计算手指移动方位
            this.direction = this.GetSlideDirection(this.startX,this.startY,endX,endY);

            // 计算滑动距离
            this.offsetX = endX - this.startX < -this.markWidth ? -this.markWidth :  endX - this.startX;

            // console.log(direction,endX,offsetX);

            if(this.direction==3){// left
                if(this.offsetX < -(this.markWidth/2)){
                    ev.target.style.transform=`translate3d(${-this.markWidth}px, 0, 0)`;
                }else{
                    ev.target.style.transform=`translate3d(${this.offsetX}px, 0, 0)`;
                }
            }else if(this.direction==4){// right
                if(this.offsetX > 0 && this.offsetX < this.markWidth){
                    ev.target.style.transform=`translate3d(0, 0, 0)`;
                }
            }

        },
        touchEnd(ev,idx){
            // 判断touchend时候手指位置并重置元素位置
            if(this.offsetX > -(this.markWidth/2)){
                ev.target.style.transform=`translate3d(0, 0, 0)`;
            }
        },
        //返回角度
        GetSlideAngle(dx,dy){
            return Math.atan2(dy,dx) * 180 / Math.PI;
        },
        //根据起始点返回方向1：向上，2：向下，3：向左，4：向右,0：未滑动
        GetSlideDirection(startX,startY,endX,endY){
            let dy = startY - endY;
            let dx = endX - startX;
            let result = 0;

            // 如果滑动距离太短
            if(Math.abs(dx) < 2 && Math.abs(dy) < 2){
                return result;
            }
            // 计算角度返回方向
            let angle = this.GetSlideAngle(dx,dy);

            if (angle >= -45 && angle < 45) {
                result = 4;
            }else if (angle >= 45 && angle < 135) {
                result = 1;
            }else if (angle >= -135 && angle < -45) {
                result = 2;
            }else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
                result = 3;
            }

            return result;
        }
    }

}
</script>
