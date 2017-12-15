// 轮播
window.onload=function(){
    var dFlag=document.getElementsByClassName("d-flag");
    var nav=document.getElementById("nav");
    var container=document.getElementById("container");
    var bannerImg=document.getElementById("banner-img").getElementsByTagName("a");
    var disc=document.getElementById("indicators").getElementsByTagName("li");
    var prev=document.getElementById("prev");
    var next=document.getElementById("next");
    var index=1;
    // 修改当前元素的class
    function animate(){
        for(var i=0;i<bannerImg.length;i++){
            if(bannerImg[i].className=="banner-active"){
                bannerImg[i].className="d-flag";
            }
        }
        bannerImg[index-1].className="banner-active";
    }
    //背景颜色
    function bgColor(){
        var clickIndex = parseInt(bannerImg[index-1].getAttribute('index'));
        if(clickIndex==1){
            container.style.backgroundColor="#f0f0f0";
        }else if(clickIndex==2){
            container.style.backgroundColor="#545B6B";                    
        }else if(clickIndex==3){
            container.style.backgroundColor="#DD532E";                    
        }else if(clickIndex==4){
            container.style.backgroundColor="#060702";                    
        }else if(clickIndex==5){
            container.style.backgroundColor="#F7F7F7";                    
        }else if(clickIndex==6){
            container.style.backgroundColor="#F4ABAF";                    
        }else if(clickIndex==7){
            container.style.backgroundColor="#E07C7C";                    
        }else if(clickIndex==8){
            container.style.backgroundColor="#000000";                    
        }
    }
    // 自动播放
    function play(){
        timer=setInterval(function(){
            next.onclick();
            bgColor();
        },2000);
    }
    // 点击上一页/下一页按钮跟随
    function buttonShow(){
        for(var i=0;i<disc.length;i++){
            if(disc[i].className=="inds-active"){
                disc[i].className="";
            }
        }
        disc[index-1].className="inds-active";
    }
    // 上一张
    prev.onclick=function(){
        index-=1;
        if(index<1){
            index=8;
        }
        animate();
        buttonShow();
        bgColor();
    }
    // 下一张
    next.onclick=function(){
        index+=1;
        if(index>8){
            index=1;
        }
        animate();
        buttonShow();
        bgColor();
    }
    // 点击按钮自动调至相应页数
    for (var i = 0; i < disc.length; i++) {
        (function (i) {
            disc[i].onclick = function (){
                var clickIndex = parseInt(bannerImg[i].getAttribute('index'));
                index=clickIndex;
                animate();                
                buttonShow();
                bgColor();
            }
        })(i)
    }
    play();
    nav.onmouseover=function(){
        clearInterval(timer);
        timer=null;
    };
    nav.onmouseout=function(){
        play();
    };
}
//下载窗口按钮颜色变化
var downImg=document.getElementById("down-img");
downImg.onmouseover=function(){
    var downBtn1=document.getElementById("down-btn1");
    downBtn1.style.display="block";
}
downImg.onmouseout=function(){
    var downBtn1=document.getElementById("down-btn1");
    downBtn1.style.display="none";
}
//二楼点击事件
function move(offset){
    var rollNew=document.getElementById("roll-new");
    var newLeft=parseInt(rollNew.style.left+offset)+offset;
    console.log(newLeft);
    rollNew.style.left=newLeft+'px';
    if(newLeft>-570){
        rollNew.style.left=-1140+'px';
    }
    if(newLeft<=-1710){
        rollNew.style.left=-570+'px';
    }
}
var rollPrev=document.getElementById("roll-btn-prev");
rollPrev.onclick=function(){
    move(570);
}
var rollNext=document.getElementById("roll-btn-next");
rollNext.onclick=function(){
    move(-570);
}

