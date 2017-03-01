
const libs={
    /**
    *数组去重
    *适用[string,number]类型
    *ES6 版 :Array.from(new Set(array));
    */
    unique:(arr)=>{
        let res = [];
        let json = {};
        for(let i = 0;i < arr.length;i++){
            if(!json[arr[i]]){
                res.push(arr[i]);
                json[arr[i]] = true;
            }
        }
        return res;
    },
    /**
    *圆弧进度条
    *@param:canvasParentEle(string:eleID) canvas外层div的ID
    *@param:canvasSelf(string:eleID) canvas的ID
    *@param:isTrueOrFalse(boolean) true为圆弧进度条，false为整园进度条
    *@param:progrColor(string) 绘制进度圆的颜色值
    *进度条的值设置在canvas的data-progress上，值区间0~100
    */
    drawCricle:(canvasParentEle,canvasSelf,isTrueOrFalse,progrColor)=>{

        if(!canvasParentEle && !canvasSelf && !isTrueOrFalse){
            console.error('arguments not meeting expectations');
            return
        };

        let canvasParent = document.getElementById(canvasParentEle);
        let canvas = document.getElementById(canvasSelf);
        let dataPorgress = Number(canvas.dataset.progress);
        // 字符串'%'替换处理
        if(isNaN(dataPorgress)){
            dataPorgress = Number(canvas.dataset.progress.replace('%',''));
        }

        let porgress = isTrueOrFalse ? 1.4*(dataPorgress)/100 : 2*(dataPorgress)/100;
        let CanvasWidth = (window.getComputedStyle(canvasParent).getPropertyValue('width')).replace(/px/g,'');
        let CanvasHeight = (window.getComputedStyle(canvasParent).getPropertyValue('height')).replace(/px/g,'');

        canvas.width = CanvasWidth*2;
        canvas.height = CanvasHeight*2;
        // canvas.style.width为canvas.width的一半用于避免绘制后出现模糊不清晰
        canvas.style.width = canvas.width/2+'px';
        canvas.style.height = canvas.height/2+'px';

        let res;// 绘制百分比所需的半径
        let lineWidth = CanvasWidth/12.5;// 绘制圆弧线宽
        let setData={
            x:canvas.width/2,
            y:canvas.height/2,
            r:(canvas.width-lineWidth-2)/2// 减2控制绘制的圆弧与canvas的边界紧密贴合，防止出现canvas边界出现模糊
        }

        let ctx = canvas.getContext('2d');
            ctx.lineCap="round";
            // 绘制底圆
            ctx.beginPath();
            if(isTrueOrFalse==true){
                ctx.arc(
                    setData.x,
                    setData.y,
                    setData.r,
                    0.8*Math.PI,//开始角
                    2.2*Math.PI,//结束角
                    false//False = 顺时针，true = 逆时针。
                );//绘制圆弧进度条所需的半径总共1.5PI
            }else if(isTrueOrFalse==false){
                ctx.arc(
                    setData.x,
                    setData.y,
                    setData.r,
                    0*Math.PI,//开始角
                    2*Math.PI,//结束角
                    false//False = 顺时针，true = 逆时针。
                );//绘制圆弧进度条所需的半径总共1.5PI
            }
            ctx.strokeStyle = '#e6e6e6';
            ctx.lineWidth = isTrueOrFalse ? lineWidth : lineWidth/3;
            ctx.stroke();
            ctx.closePath();

            if(porgress>100 || porgress==0){return}
            // 绘制进度圆
            ctx.beginPath();
            ctx.arc(
                setData.x,
                setData.y,
                setData.r,
                0.8*Math.PI,//开始角
                (0.8+porgress)*Math.PI,//结束角
                false
            );
            ctx.strokeStyle = progrColor || '#ff9331';
            ctx.lineWidth = lineWidth;
            ctx.stroke();
            ctx.closePath();
    },

    /**
    *@param:(promise) promise对象
    *@param:(string) 'json' 返回json格式
    *返回一个promise对象,可以使用.then来处理response参数
    */
    Fetch:(promise,type)=>{
        if(!promise && typeof promise !== 'object' && JSON.stringify(promise) != '{}') return 'arguments error!';
        return new Promise((resolve,reject) => {
            fetch(promise).then((response) => {
                if(response.status == 200){
                    // console.log(response.headers.get('Content-Type'));
                    // console.log(response.headers.get('Date'));
                    // resolve(response.json());
                    (type && type == 'json') ? resolve(response.json()) : resolve(response);
                }else{
                    reject(response);
                }
            }).catch((err) => {console.log(err);})
        })
    },
    /**
    *移动端手势判断
    *根据起点和终点返回方向 1：向上，2：向下，3：向左，4：向右,0：未滑动
    *@param:(startX) 开始坐标X轴
    *@param:(startY) 开始坐标Y轴
    *@param:(endX) 结束坐标X轴
    *@param:(endY) 结束坐标Y轴
    */
    GetSlideDirection:(startX,startY, endX, endY)=>{

        let dy = startY - endY;
        let dx = endX - startX;
        let result = 0;

        //如果滑动距离太短
        if (Math.abs(dx) < 2 && Math.abs(dy) < 2) {
            return result;
        }

        // 获取手势方向
        let angle = Math.atan2(dy,dx) * 180 / Math.PI;//返回角度
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
    },
    /**
    *根据传入的值获取当前时间YY-MM-DD or YY-MM-DD h:m:s
    *@param:strDate(String) 'max:最大时间 min:最小时间 cur:当前时间' 默认当前时间
    *@param:sizeDate(Number) '最大、小年数值' 默认为0
    */
    getFormDate:(str = 'cur',size = 0)=>{
        let date = new Date();
        let [splice1,splice2] = ["-",":"];

        let year    = date.getFullYear();
        let month   = date.getMonth() + 1;
        let day     = date.getDate();
        let hours   = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        let cur = [year , month , day];
        let max = [(year + size) , month , day];
        let min = [(year - size) , month , day];

        if(str == 'cur'){
            return cur;
        }else if(str == 'max'){
            return max;
        }else if(str == 'min'){
            return min;
        }else{
            return year + splice1 + month + splice1 + day + " " + hours + splice2 + minutes + splice2 + seconds;
        }
    },
    /**
    *根据传入的年和月份返回当月天数
    *@param:year(number)
    *@param:month(number)
    */
    getDaysInMonth(year,month){
        //parseInt(number,type)这个函数后面如果不跟第2个参数来表示进制的话，默认是10进制。
        month = parseInt(month,10);
        var temp = new Date(year,month,0);
        return temp.getDate();
    },
}

module.exports = libs;
