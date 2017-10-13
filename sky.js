/**
 * Created by asus on 2017/10/12.
 */

//-------sky沙盒模块start---------------------------------------
//sky构造函数，通过info传入具体要创建的那个sky对象参数
;(function (window) {
    function Sky(info) {
        this.image = info.image;
        this.x = info.x;
        this.speed = 2;
        this.canvas = info.canvas;
        this.context = info.context;
    }

    Sky.prototype = {
        constructor: Sky,//为何加这个？？？？？？？？？？？？？？？？？
        draw: function () {
            //    a 每一帧往左边移动2个像素
            this.x -= this.speed;
            //    b 当一个画布移出舞台是，自动接到右边的对象后面,因为天空跟画布一样大，
            // 所以需要2张才能实现循环播放天空
            if (this.x <= -this.canvas.width) {
                this.x = this.canvas.width;
            }
            //    c 把自己画在画布上
            this.context.drawImage(this.image, this.x, 0, this.image.width, this.image.height);
        }

    }
    window.Sky = Sky;
}(window))
//-------sky沙盒模块end---------------------------------------

//------land沙盒模块start
;(function (window) {
    function Land(info) {
        this.image = info.image;
        this.x=info.x;
        this.speed =2;
        this.canvas = info.canvas;
        this.context = info.context;
    }
    Land.prototype =  {
        constructor:Land,
        draw: function () {
            this.x -=this.speed;
        }
    }
}(window))