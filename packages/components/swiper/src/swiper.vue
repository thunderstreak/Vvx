<template lang="html">
    <section class="silderbox">
        <div class="silderbox-img" ref="silderboxImg" v-bind="{'style' : 'width:' + boxWidth + 'px'}"
            v-on:touchstart.stop.prevent="touchstart($event)"
            v-on:touchmove.stop.prevent="touchmove($event)"
            v-on:touchend.stop.prevent="touchend($event)">

            <slot>
                <a v-bind:href="item.url" v-for="(item,idx) in imgs"  v-bind:data-item="idx">
                    <img v-bind:src="item.src" v-bind:alt="item.alt">
                </a>
            </slot>

        </div>
        <ul class="silderbox-item" ref="silderboxItem" v-bind="{'style' : 'text-align:' + align}">
            <li v-for="(i,idx) in imgs.length" v-bind:class="{'curr': idx === imgIndex}"></li>
        </ul>
    </section>
</template>

<script>
export default {
    name:'Swiper',
    data(){
        return {
            msg             :'silder',
            imgs            :this.imgArr,
            imgIndex        :0,//图片下标
            boxWidth        :0,//silderbox-img 的总宽度
            startOffset     :0,//上一个图片的offsetX值
            endOffset       :0,//最后一个图片的offsetX值
        }
    },
    props:{
        auto:{
            type:Number,
        },
        imgArr:{
            type:Array,
            default:()=>{
                return []
            }
        },
        align:{
            type:String,
            default:()=>{
                return 'center';
            }
        }
    },
    created(){
        let dpr = document.querySelector('html').dataset.dpr;
        if(dpr){
            this.windowWidth = window.screen.width * dpr;
        }else{
            this.windowWidth = window.screen.width;
        }
        this.boxWidth = this.imgs.length * this.windowWidth ;
    },
    mounted(){
        this.silderBox = this.$refs.silderboxImg;
        let silderItem = this.$refs.silderboxItem;
        this.autoPlay();
    },
    methods:{
        touchstart(e){
            this.startX = e.touches[0].clientX;
            this.startY = e.touches[0].clientY;
            this.silderBox.style.transition="none";
            clearInterval(this.Swiper)
        },
        touchmove(e){
            this.endX = e.touches[0].clientX;
            this.endY = e.touches[0].clientY;
            //根据起点和终点返回方向 1：向上，2：向下，3：向左，4：向右,0：未滑动
            this.direction = this.$tool.GetSlideDirection(this.startX, this.startY, this.endX, this.endY);
            this.startOffset =  -(this.startX - this.endX);

            let s = -this.imgIndex * this.windowWidth + e.touches[0].pageX - this.startX;

            this.silderBox.style.webkitTransform = `translate3d(${s}px,0,0)`;
        },
        touchend(e){
            this.endX = e.changedTouches[0].clientX;
            this.endY = e.changedTouches[0].clientY;
            this.imgIndex = Number(e.target.dataset.item);//第几张图片的下标

            // let str = this.$refs.silderboxImg.style.transform;
            // let curidx = Math.abs(str.substring(str.indexOf('(')+1,str.length-1).split(',')[0].replace('px',''));
            // this.imgIndex = Math.round(curidx / this.windowWidth);
            // console.log(curidx,this.imgIndex);

            this.$refs.silderboxImg.style.transition = ".5s";
            this.endOffset = Math.abs(this.startX - this.endX);
            this.autoPlay();

            if(this.direction === 1 || this.direction === 2){
                this.silderBox.style.webkitTransform =`translate3d(${-(this.imgIndex * this.windowWidth)}px, 0, 0)`;
                return;
            }
            // 如果是只是点击则不切换图片
            if(this.endOffset <= 50){
                this.silderBox.style.webkitTransform = `translate3d(${-(this.imgIndex * this.windowWidth)}px, 0, 0)`;
                return;
            }

            if(this.direction === 3){//向右
                if(this.imgIndex === this.imgs.length - 1){
                    this.silderBox.style.webkitTransform = `translate3d(${-(this.imgIndex * this.windowWidth)}px, 0, 0)`;
                    return;
                }

                this.silderBox.style.webkitTransform = `translate3d(${-((this.imgIndex + 1) * this.windowWidth)}px, 0, 0)`;
                this.imgIndex += 1;
            }else if(this.direction === 4){//向左
                let res;
                this.imgIndex -= 1;

                if(this.imgIndex <= 0){
                    this.imgIndex = 0;
                    res = 0;
                }else{
                    res = (this.imgIndex + 1) * this.windowWidth - this.windowWidth;
                }
                this.silderBox.style.webkitTransform = `translate3d(${-res}px,0,0)`;
            }

        },
        autoPlay(){
            if(this.auto){
                this.Swiper = setInterval(()=>{
                    this.silderBox.style.transition = ".5s";
                    if(this.imgIndex === this.imgs.length - 1){

                        this.silderBox.style.webkitTransform = `translate3d(${0}px,0,0)`;
                        this.imgIndex = 0;

                    }else{
                        this.silderBox.style.webkitTransform = `translate3d(${-((this.imgIndex + 1) * this.windowWidth)}px,0,0)`;
                        this.imgIndex += 1;
                    }
                }, this.auto);
            }
        },

    }
}
</script>

<style lang="less">
.silderbox{

    overflow: hidden;
    position: relative;
    .silderbox-img{
        // height: 4rem;
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        -webkit-justify-content: space-between;

        >a{
            width: 100%;
            display: block;
            overflow: hidden;
            img{
                pointer-events:none;
                width: 100%;
                height: 300px;
                float: left;
            }
        }
    }
    .silderbox-item{
        pointer-events:none;
        position: absolute;
        bottom: 0;
        left: 0;
        padding:.1rem 0;
        height: .25rem;
        line-height: .25rem;
        width: 100%;
        text-align: center;
        >li{
            display: inline-block;
            height: .25rem;
            width: .25rem;
            margin: 0 .05rem;
            border-radius: 50%;
            background: #ccc;
        }
        .curr{
            background: #fd9153;
        }
    }
}

</style>
