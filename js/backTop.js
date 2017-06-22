/**
 * Created by rong on 2017/6/20.
 */
window.onload=function () {
    var backTop = document.getElementById("backTop");
    var timer = null;
    var isTop = true;
    //获取页面可视区高度
    var clientHeight = document.documentElement.clientHeight;
    var fix = document.getElementsByClassName("fix-m");
    var fix2 = document.getElementById("fix");
    //滚动条滚动时出发
    window.onscroll = function () {
        /*获取浏览器*/
        var ossTop = document.documentElement.scrollTop||document.body.scrollTop;
        if(ossTop>=clientHeight){
            //fix.style.display='block';
            fix2.style.display='block';
        }else{
            //fix.style.display='none ';
            fix2.style.display='none';
        }
        if(!isTop){
            clearInterval(timer)
        }
        isTop=false;
    }
    onclick=function () {
        timer = setInterval(function () {
            var ossTop = document.documentElement.scrollTop||document.body.scrollTop;
            var  speed = Math.floor(-ossTop/15);
            document.documentElement.scrollTop=document.body.scrollTop=ossTop+speed;
            isTop = true;
            console.log(ossTop);
            if (ossTop==0){
                clearInterval(timer);
            }
        },30)

    }


    }


