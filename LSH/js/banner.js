/**
 * Created by DELL-USER on 2016/9/10.
 */
var img = ["img/banner1.jpg","img/banner2.jpg","img/banner3.jpg","img/banner4.jpg"];
var i = 0;
function banner(){
    i++;
    if(i >= img.length){
        i = 0;
    }
    $(".banner img").attr("src",img[i]);
    var li = $(".pot li a").removeClass("potR");
    $(li[i]).addClass("potR");
}
var t = setInterval("banner()",3000);
/* banner small roll */
function banner1(b){
    clearInterval(t);
    banner();
    $(".banner img").attr("src",img[b]);
    var li = $(".pot li a").removeClass("potR");
    $(li[b]).addClass("potR");
}
function banner2(c){
    i = c;
    t = setInterval("banner()",3000);
}
function btnB(){
    $(".btnLeft").css("display","block");
    clearInterval(t);
}
function btnN(){
    $(".btnLeft").css("display","none");
    t = setInterval("banner()",3000);
}
function LeftBtn(){
    if( i == 0){
        i = img.length-1;
        $(".banner img").attr("src",img[i]);
    }else{
        i--;
        $(".banner img").attr("src",img[i]);
    }
    var li = $(".pot li a").removeClass("potR");
    $(li[i]).addClass("potR");
}
function RightBtn(){
    if( i == img.length-1){
        i = 0;
        $(".banner img").attr("src",img[i]);
    }else{
        i++;
        $(".banner img").attr("src",img[i]);
    }
    var li = $(".pot li a").removeClass("potR");
    $(li[i]).addClass("potR");
}
