/**
 * Created by DELL-USER on 2016/7/30.
 */
var i = 0;//banner
var arr = ["1F","2F","3F","4F","5F","6F","7F","8F","9F","10F","11F","12F"];//floor
var arr1 = ["服饰","美妆","手机","家电","数码","运动","居家","母婴","食品","图书","车品","服务"];//floor
var arr2 = [];//floor
var likeS = [
                ["img/likeS5.gif","img/likeS3.gif","img/likeS2.gif","img/likeS1.gif","img/likeS4.gif"],
                ["img/likeS4.gif","img/likeS5.gif","img/likeS3.gif","img/likeS2.gif","img/likeS1.gif"],
                ["img/likeS1.gif","img/likeS2.gif","img/likeS4.gif","img/likeS3.gif","img/likeS5.gif"],
                ["img/likeS3.gif","img/likeS2.gif","img/likeS5.gif","img/likeS4.gif","img/likeS1.gif"],
                ["img/likeS1.gif","img/likeS2.gif","img/likeS3.gif","img/likeS4.gif","img/likeS5.gif"]
            ];//换一批
var j = 1;//换一批
var p = 0;//楼层里的图片切换
var op = 0;//选择商品型号的展开收起（option）
/* top */
function topBlock1(a){
    if(a == 0){
        $("#site").css("display","block");
        var li = $("#site li a");
        li.click(function(){
            var site = $(this).html();
            $(li).removeClass("bg5");
            $(this).addClass("bg5");
            $("#span1").html(site);
        });
    }else{
        $("#topLi"+a).css("display","block");
    }
}
function topNone1(a){
    if(a == 0){
        $("#site").css("display","none");
    }else{
        $("#topLi"+a).css("display","none");
    }
}
/* 搜索自动补全 */
$(function(){
    var search = ["java","javas","javaScript","javascript-ui","easy","sleep","good","你好","短裙","长裙","半身裙","荷叶裙"];
    $(".input").autocomplete({
        source:search
    });
});
function search1() {
    $(".input").attr("value","");
}

var img = ["img/banner1.jpg","img/banner2.jpg","img/banner3.jpg","img/banner4.jpg","img/banner5.jpg","img/banner6.jpg"];
/* banner motion */
function banner(){
    i++;
    if(i >= img.length){
        i = 0;
    }
    $(".banner img").attr("src",img[i]);
    var li = $(".bli li a").removeClass();
    $(li[i]).addClass("bbg");
}
var t = setInterval("banner()",3000);
/* banner small roll */
function banner1(b){
    clearInterval(t);
    banner();
    $(".banner img").attr("src",img[b]);
    var li = $(".bli li a").removeClass();
    $(li[b]).addClass("bbg");
}
function ap(b){
    i = b;
    t = setInterval("banner()",3000);
}
/* banner left right */
function banner2(){
    $(".lTurn").css("display","block");
    clearInterval(t);
}
function banner3(){
    $(".lTurn").css("display","none");
    t = setInterval("banner()",3000)
}
function LeftBtn(){
    if( i == 0){
        i = img.length-1;
        $(".banner img").attr("src",img[i]);
    }else{
        i--;
        $(".banner img").attr("src",img[i]);
    }
    var li = $(".bli li a").removeClass();
    $(li[i]).addClass("bbg");
}
function RightBtn(){
    if( i == img.length-1){
        i = 0;
        $(".banner img").attr("src",img[i]);
    }else{
        i++;
        $(".banner img").attr("src",img[i]);
    }
    var li = $(".bli li a").removeClass();
    $(li[i]).addClass("bbg");
}
/* recommend */
function recommendB(){
    $(".rbtn").css("display","block");
}
function recommendN(){
    $(".rbtn").css("display","none");
}
$(function(){
    var list = document.getElementById("recommend");
    function animate(offset){
        var newLeft = parseInt(list.style.left)+offset;
        var time = 300;//划过一张图，要300ms
        var t = 10;//每次移动10ms；
        var temp = offset / (time / t); // 每次移动多少像素
        function go(){
            if((temp < 0 && parseInt(list.style.left) > newLeft) || (temp > 0 && parseInt(list.style.left) < newLeft)){
                list.style.left = parseInt(list.style.left) + temp +"px";
                setTimeout(go,t);
            }else{
                list.style.left = newLeft+"px";
                if(newLeft > -1004){
                    list.style.left = -4016 + "px";
                }else if(newLeft < -4016){
                    list.style.left = -1004+ "px";
                }
            }
        }
        go();
    }
    $("#rbtn1").click(function(){
        animate(1004);
    });
    $("#rbtn2").click(function(){
        animate(-1004);
    });
});

/* good kinds */
function kind(c){
    $("#kind"+c).css("display","block");

}
function kind1(c){
    $("#kind"+c).css("display","none");
}
/* huaFei */
/* huaFei ticket movie game */
function child1(d){
    $(".smallMenu").css("display","none");
    $(".huaFei").css("display","block");
    var div = $(".detail1");
    $(div[0]).css("display","block");
    $(".huaFei li").removeClass("huaFei1");
    $(".huaFei li").eq(d).addClass("huaFei1");
    $(".detail1").css("display","none");
    $(".detail1").eq(d).css("display","block");
}
function child2(){
    $(".huaFei").stop().hide(500);
    $(".smallMenu").stop().show(500);
}
/* floor */
$(function floor(){
    var floors = $(".cloth");
    $(floors).each(function(f){
        arr2[f] = $(floors[f]).offset().top;
        arr2[f] = arr2[f] + 230;
    });
});
$(window).scroll(function(){
    var top = $(window).scrollTop();
    var height = $(".life").offset().top;
    var maxHeight = $("#F12").offset().top;
    if(top < 200){
        $(".more1").css({position:"absolute", left:"209px"});
    }else if(top > 200 && top < height){
        $(".more1").css({position:"fixed", left:"279px"});
    }
    if(top >= height && top < maxHeight){
        $(".floor").show(500);
    }else{
        $(".floor").hide(500);
    }
    $(".floor li a").removeClass("floorColor");
    var Mark = $(".floorMark").removeClass("floorBg");
    for(var j = 0; j < arr.length; j++){
        $(".floor li a:eq("+ j +")").html(arr[j]);
    }
    for(var r = 0;r < arr2.length; r++){
        if(top <= arr2[r]){
            $(".floor li a:eq("+ r +")").addClass("floorColor");
            $(".floor li a:eq("+ r +")").html(arr1[r]);
            $(Mark[r]).addClass("floorBg");
            break;
        }
    }

});
function floor1(s){
    $(".floor li a:eq("+ s +")").html(arr1[s]);
    $(".floor li a:eq("+ s +")").addClass("floorBg1");
}
function floor2(s) {
    $("a[class='floorBg1']").html(arr[s]);
    $(".floor li a").removeClass("floorBg1");
    var Top = $(window).scrollTop();
    if(Top == arr2[s]){
        $("a[class='floorBg1']").html(arr1[s]);
    }
}
//function floor1(s){
//    $(".floor li a").removeClass("floorBg1");
//    for(var j = 0; j < arr.length; j++){
//        $(".floor li a:eq("+ j +")").html(arr[j]);
//    }
//    $(".floor li a:eq("+ s +")").html(arr1[s]);
//    $(".floor li a:eq("+ s +")").addClass("floorBg1");
//}
//function floor2() {
//    $(".floor li a").removeClass("floorBg1");
//    for (var j = 0; j < arr.length; j++) {
//        $(".floor li a:eq(" + j + ")").html(arr[j]);
//    }
//}
/* 楼层里的分类导航sort1 */
 function sort1(n,m){
     var sort = document.getElementById("sort"+n).getElementsByTagName("li");
     var matter = $("#matter"+n);
     var many = $(matter).find(".many");
     for(var h = 0; h < sort.length; h++){
         sort[h].className = "sortBg";
         $(many[h]).hide();
     }
     sort[m].className = "sort11";
     $(many[m]).show();
 }
/* 楼层主题图片震动 */
function shake(sha){
   $( ".height1" ).fadeTo(1000,0.3).delay(500).fadeTo(1000,1.0);

}
/* 楼层图片轮播 */
$(function(){
    //定义全局变量
    var curIndex = 0; //当前index
    var imgLen = $(".floorMotive li img").length; //图片总数

    //进行事件绑定

    //1.设置自动的定时器
    // 定时器自动变换2秒每次
    var autoChange = setInterval(function(){
        if(curIndex < imgLen-1){
            curIndex ++;
        }else{
            curIndex = 0;
        }
        //调用变换处理函数
        changeTo(curIndex);
    },2000);

    // ---------左箭头---开始--------//

    //左箭头滑入滑出事件处理
    $(".prev").hover(function(){
        //滑入清除定时器
        clearInterval(autoChange);
    },function(){
        //滑出则重置定时器
        autoChangeAgain();
    });


    //左箭头点击处理
    $(".prev").click(function(){
        //根据curIndex进行上一个图片处理
        curIndex = (curIndex > 0) ? (--curIndex) : (imgLen - 1);
        changeTo(curIndex);
    });
    // ---------左箭头---结束--------//

    // ---------右箭头---开始--------//

    //右箭头滑入滑出事件处理
    $(".next").hover(function(){
        //滑入清除定时器
        clearInterval(autoChange);
    },function(){
        //滑出则重置定时器
        autoChangeAgain();
    });
    //右箭头点击处理
    $(".next").click(function(){
        curIndex = (curIndex < imgLen - 1) ? (++curIndex) : 0;
        changeTo(curIndex);
    });

    // ---------右箭头---结束--------//
    //清除定时器时候的重置定时器--封装
    function autoChangeAgain(){
        autoChange = setInterval(function(){
            if(curIndex < imgLen-1){
                curIndex ++;
            }else{
                curIndex = 0;
            }
            //调用变换处理函数
            changeTo(curIndex);
        },2000);
    }

    //关键: 图片切换的处理函数
    function changeTo(num){
        var goLeft = num * 439;
        $(".floorMotive").animate({left: "-" + goLeft + "px"},1000);
        $(".bli2").find("li a").removeClass("hover1").eq(num).addClass("hover1");
    }

    //对右下角按钮index进行事件绑定处理等
    $(".bli2").find("li").each(function(item){
        $(this).hover(function(){
            clearInterval(autoChange);
            changeTo(item);
            curIndex = item;
        },function(){
            autoChangeAgain();
        });
    });
});
function prevB(){
    $(".prev").css("display","block");
    $(".next").css("display","block");
}
function nextN() {
    $(".prev").css("display", "none");
    $(".next").css("display", "none");
}
/* 品质生活 */
function like(){
    var img = $(".likeS li img");
    for(var l = 0; l < img.length; l++){
        img[l].src = likeS[j][l];
    }
    j++;
    if(j >= likeS.length){
        j = 0;
    }
}
function animate1(){
    $(".animate").hide(100).delay(500).show(1000);
}


/* convenient */
function con(con){
    var span = $(".cSpan1");
    var span1 = $(".cSpan2");
    for(var v = 0; v < span.length; v++){
        $(span[v]).css("background","#7c6e6d");
        $(span1[v]).css("display","none");
        $(span1[v]).css("background","#7c6e6d");
    }
    $(span[con]).css("background","#c81623");
    $(span1[con]).stop().show(500);
    $(span1[con]).css("background","#c81623");
}
function con1(w){
    var span = $(".cSpan1");
    var span1 = $(".cSpan2");
    $(span1[w]).css("background","#7c6e6d");
    $(span1[w]).stop().hide(500);
    $(span[w]).css("background","#7c6e6d");
}
/* GoodList */
/* 商品类型选择里所有列表隐藏与显示 */
function all1(all){
    var all1 = $(".all1");
    var brand = $(".brand");
    var bMore1 = $(".bMore1 a");
    var span = $(".bMore1 a span");
    var img = $(".bMore1 a span img");
    var total = $(".total");
    $(all1[all]).show(300);
    $(brand[all]).hide(200);
    $(bMore1[all]).css("color","#e4393c");
    $(bMore1[all]).css("color","#e4393c");
    $(span[all]).css("border","1px solid #e4393c");
    $(img[all]).attr("src","img/bMore2.gif");
    $(total[all]).css("borderBottom","none");
}
function all2(all){
    var all1 = $(".all1");
    var brand = $(".brand");
    var total = $(".total");
    $(all1[all]).css("display","none");
    $(brand[all]).css("display","block");
    $(total[all]).css("borderBottom","#ddd solid 1px");
}
/* 商品分类 */
function gKind(kind){
    $("#kList"+kind).css("display","block");
}
function gKind1(kind){
    $("#kList"+kind).css("display","none");
}
/* range1 */
function range1(ran){
    var range = $(".range1 li a");
    $(range).removeClass("borderL range1Li");
    $(range[ran]).addClass("range1Li");
}

function option(){
    $(".options1").css({borderTop:"1px solid #e4393c",borderRight:"1px solid #e4393c"});
    $(".options3").css({borderTop:"1px solid #e4393c",borderLeft:"1px solid #e4393c"});
    $(".options2").css({borderBottom:"1px solid #e4393c",background:"url(img/option2Bg1.gif) right 8px no-repeat"});
    $(".options2 a").css("color","#e4393c");
}
function option1(){
    if(op == 0){
        $(".options2 a").html("收起");
        $(".options1").css({width:"562px"});
        $(".options3").css({width:"562px"});
        $(".options1").css({borderTop:"1px solid #ddd",borderRight:"1px solid #ddd"});
        $(".options3").css({borderTop:"1px solid #ddd",borderLeft:"1px solid #ddd"});
        $(".options2").css({borderBottom:"1px solid #ddd",background:"url(img/option2Bg2.gif) right 8px no-repeat"});
        $(".brand:gt(4)").css({ display:"block"});
        $(".options2 a").css("color","#333");
        op = 1;
    }else{
        $(".options2 a").html("更多选项（变速档位、制动系统、前叉类型等）");
        $(".options1").css({width:"444px"});
        $(".options3").css({width:"445px"});
        $(".brand:gt(4)").css({ display:"none"});
        op = 0;
    }
}
function option4(){
    $(".options1").css({borderTop:"1px solid #ddd",borderRight:"1px solid #ddd"});
    $(".options3").css({borderTop:"1px solid #ddd",borderLeft:"1px solid #ddd"});
    $(".options2").css({borderBottom:"1px solid #ddd",background:"url(img/option2Bg.gif) right 8px no-repeat"});
    $(".options2 a").css("color","#333");
}
function bdd1(bd){
    var name = ["凤凰（phoenix)","永久(FOREVER)","喜德盛(xds)","邦德·富士达(BATTLE)","洛克菲勒(rockefeller)","韩美","凤凰（phoenix)","永久(FOREVER)","喜德盛(xds)","邦德·富士达(BATTLE)","洛克菲勒(rockefeller)"];
    var name1 = $(".bdd li a");
    var bli = $(".bdd li");
    $(bli[bd]).addClass("bdd2");
    $(name1[bd]).html(name[bd]);
}
function bdd2(bd2){
    var img1 = ['<img src="img/brand1.gif" alt="" title="凤凰（phoenix)" />','<img src="img/brand2.gif" alt="" title="凤凰（phoenix)" />','<img src="img/brand3.gif" alt="" title="凤凰（phoenix)" />','<img src="img/brand4.gif" alt="" title="凤凰（phoenix)" />','<img src="img/brand5.gif" alt="" title="凤凰（phoenix)" />','<img src="img/brand6.gif" alt="" title="凤凰（phoenix)" />','<img src="img/brand7.gif" alt="" title="凤凰（phoenix)" />','<img src="img/brand8.gif" alt="" title="凤凰（phoenix)" />','<img src="img/brand9.gif" alt="" title="凤凰（phoenix)" />','<img src="img/brand10.gif" alt="" title="凤凰（phoenix)" />','<img src="img/brand11.gif" alt="" title="凤凰（phoenix)" />','<img src="img/brand12.gif" alt="" title="凤凰（phoenix)" />','<img src="img/brand13.gif" alt="" title="凤凰（phoenix)" />','<img src="img/brand14.gif" alt="" title="凤凰（phoenix)" />','<img src="img/brand15.gif" alt="" title="凤凰（phoenix)" />','<img src="img/brand16.gif" alt="" title="凤凰（phoenix)" />'];
    var bli = $(".bdd li a");
    var bli1 = $(".bdd li");
    $(bli1[bd2]).removeClass("bdd2");
    $(bli[bd2]).html(img1[bd2]);
}
function bdd3(bd3){
    var name = ["凤凰（phoenix)","永久(FOREVER)","喜德盛(xds)","邦德·富士达(BATTLE)","洛克菲勒(rockefeller)","韩美","凤凰（phoenix)","永久(FOREVER)","喜德盛(xds)","邦德·富士达(BATTLE)","洛克菲勒(rockefeller)"];
    var name1 = $(".bdd1 li a");
    var bli = $(".bdd1 li");
    $(bli[bd3]).addClass("bdd2");
    $(name1[bd3]).html(name[bd3]);
}
function bdd4(bd4){
    var img1 = ['<img src="img/brand1.gif" alt="" title="凤凰（phoenix)" />','<img src="img/brand2.gif" alt="" title="凤凰（phoenix)" />','<img src="img/brand3.gif" alt="" title="凤凰（phoenix)" />','<img src="img/brand4.gif" alt="" title="凤凰（phoenix)" />','<img src="img/brand5.gif" alt="" title="凤凰（phoenix)" />','<img src="img/brand6.gif" alt="" title="凤凰（phoenix)" />','<img src="img/brand7.gif" alt="" title="凤凰（phoenix)" />','<img src="img/brand8.gif" alt="" title="凤凰（phoenix)" />','<img src="img/brand9.gif" alt="" title="凤凰（phoenix)" />','<img src="img/brand10.gif" alt="" title="凤凰（phoenix)" />','<img src="img/brand11.gif" alt="" title="凤凰（phoenix)" />','<img src="img/brand12.gif" alt="" title="凤凰（phoenix)" />','<img src="img/brand13.gif" alt="" title="凤凰（phoenix)" />','<img src="img/brand14.gif" alt="" title="凤凰（phoenix)" />','<img src="img/brand15.gif" alt="" title="凤凰（phoenix)" />','<img src="img/brand16.gif" alt="" title="凤凰（phoenix)" />'];
    var bli = $(".bdd1 li a");
    var bli1 = $(".bdd1 li");
    $(bli1[bd4]).removeClass("bdd2");
    $(bli[bd4]).html(img1[bd4]);
}

/* 商品列表里的点小图，大图显示该图 */
var bike = [
    ["img/bike1.jpg","img/bike2.jpg","img/bike4.jpg","img/bike3.jpg"],
    ["img/bike1.jpg","img/bike2.jpg","img/bike3.jpg","img/bike4.jpg"],
    ["img/bike2.jpg","img/bike3.jpg","img/bike3.jpg","img/bike4.jpg"],
    ["img/bike4.jpg","img/bike1.jpg","img/bike4.jpg","img/bike3.jpg"]
];
function bike1(bi,ke){
    var mBike = document.getElementById("mBike"+bi).getElementsByTagName("li");
    var bikes = document.getElementById("bike"+bi).getElementsByTagName("img");
    $(mBike).removeClass("mBike1");
    $(mBike[ke]).toggleClass("mBike1");
    $(bikes[0]).attr("src",bike[bi][ke]);
}
/* 弹出关注 */
function icon1B(icon){
    var icon1 = $(".icon1");
    $(icon1[icon]).css("display","block");

}
function icon1N(icon){
    var icon1 = $(".icon1");
    $(icon1[icon]).css("display","none");
}
/* 关注小红心 */
function heartRed(heart){
    var icon1 = $(".icon1 a");
    var img = $(".icon1 img");
    $(img[heart]).attr("src","img/icon2.gif");
    $(icon1[heart]).css("color","#da0f36");
}
function heartWhite(heart1){
    var icon1 = $(".icon1 a");
    var img = $(".icon1 img");
    $(img[heart1]).attr("src","img/icon1.gif");
    $(icon1[heart1]).css("color","#fff");
}
/* 商品详情的商品分类 */
function dKind(){
    $("#kImg").rotate({animateTo:180,time:100});
    $(".dKind").css("borderBottom","none");
    $(".dList").css("display","block");
    }
function dKind1(){
    $("#kImg").rotate({animateTo:-180});
    $(".dKind").css("borderBottom","1px solid #ddd");
    $(".dList").css("display","none");
    }
/* 商品详情放大镜 */
function mirror(obj,mi){
    $(".magnifying").css("display","block");
    var big1  = document.getElementById("big1");

    big1.src = obj.src;
    var x = mi.clientX;
    var y = mi.clientY;
    big1.style.left = -x+100+"px";
    big1.style.top = -y+70+"px";
}
function leave(){
    $(".magnifying").css("display","none");
}
/* 小图传到大图 */
var minB = ["img/detailBig.jpg","img/minBike2.jpg","img/minBike3.jpg","img/minBike4.jpg","img/minBike5.jpg","img/minBike6.jpg","img/minBike7.jpg","img/minBike8.jpg"];
function minBike(mb){
    var img = $(".detailBig img");
    var miimg = $(".dmList li").removeClass("dmlBorder");
    $(miimg[mb]).addClass("dmlBorder");
    $(img).attr("src",minB[mb]);
}
/* 换商品图 */
var other = 0;
function btn1(){
    var img = $(".dmList li a img");
    var left = $(".dmList").css("left");
    parseInt(left);
    if(other < img.length-5){
        other++;
        $(".dmList").animate({left:parseInt(left)-58+"px", border:"#fff solid 2px"})
    }
}
function btn2(){
    var right = $(".dmList").css("left");
    parseInt(right);
    if( other > 0){
        other--;
        $(".dmList").animate({left:parseInt(right)+58+"px"})
    }
}
/* 配送地址 */
function sendTo(to){
    if(to == 0){
        $(".to").css({"border":"#ddd solid 1px","borderBottom":"none"});
        $("#sImg").rotate({animateTo:0,time:100});
        $(".address2").css("display","block");
    }else{
        $(".to").css({"border":"#fff solid 1px","borderBottom":"none"});
        $("#sImg").rotate({animateTo:180});
        $(".address2").css("display","none");
    }
}
/* 选择商品样式 */
function wantTo(sty,le){
    var tog1 = $(".sdd1").removeClass("chooseStyle");
    var tog2 = $(".sdd2");
    var tog3 = $(".sdd3").removeClass("chooseStyle");
    if(sty == 0){
        $(tog1[le]).toggleClass("chooseStyle");
    }else if(sty == 1){
        $(tog2[le]).toggleClass("chooseStyle");
    }else {
        $(tog3[le]).toggleClass("chooseStyle");
    }

}
/* 购买数量 */
var count = 1;
function amount(am){
    if(am == 0){
        count ++;
        $("#minus").css("color","#666");
        $("#count").html(count);
    }else if(am == 1 && count > 1){
        count --;
        if(count == 1){
            $("#minus").css("color","#ccd2dc");
        }
        $("#count").html(count);
    }
}
/* 注册 */
function enrollB(en1) {
    var regs = $(".reg");
    var inp = $(".dl1");
    var input = $(".dl1 input");
    $(regs[en1]).css("display","block");
    $(inp[en1+1]).css("marginTop", 0 + "px");
    $(input[en1]).val("");

}
function enrollN(en2) {
    var reg1 = [/^[a-z-A-Z-0-9-\u4e00-\u9fa5-_]+$/,/^[a-z-A-Z-0-9-\W]+$/,/^[a-z-A-Z-0-9-\W]+$/,/^[0-9]+$/];
//   var values = ["您的账户名和登录名","建议至少使用两种字符组合","请再次输入密码","建议使用常用手机","请输入验证码","请输入手机验证码"];
    var regs = $(".reg");
    var inp = $(".dl1");
    var input = $(".dl1 input");
    var value = $(input[en2]).val();
    var test1 =reg1[en2].test(value);
    var T = $(".T");
    var value1 = $(input[1]).val();
    var huo1 = value.length >= 4 && value.length <= 20;
    var huo2 = value.length == 11;
    var huo3 = value == value1;
    if(en2 == 0){
        if(test1 == true && huo1) {
            $(T[en2]).show(100);
            $(regs[en2]).css("display", "none");
            $(inp[en2 + 1]).css("marginTop", 32 + "px");
            $(inp[en2]).css("border", "solid 1px #ddd");
        }else{
            $(inp[en2]).css("border","solid 1px #ee2222");
            $(regs[en2]).css({display:"block",background:"url(img/regBg2.gif) left 7px no-repeat",color:"#ee2222"});
            $(inp[en2+1]).css("marginTop", 0 + "px");
        }
    }else if(en2 == 1){
        if(test1 == true){
            if(value.length < 6 ){
                $(inp[en2]).css("border","solid 1px #ee2222");
                $(regs[en2]).css({display:"block",background:"url(img/regBg2.gif) left 7px no-repeat",color:"#ee2222"});
                $(inp[en2+1]).css("marginTop", 0 + "px");
            }else if(value.length >= 6 && value.length <= 10){
                $(T[en2]).show(100);
                $(regs[en2]).css({display:"block",background:"url(img/warn.gif) left 7px no-repeat"});
                $(inp[en2+1]).css("marginTop", 0 + "px");
            }else if(value.length >= 10 && value.length <= 14){
                $(T[en2]).show(100);
                $(regs[en2]).css({display:"block",background:"url(img/normal.gif) left 7px no-repeat"});
                $(inp[en2+1]).css("marginTop", 0 + "px");
            }else if(value.length > 14 && value.length <= 20 ){
                $(T[en2]).show(100);
                $(regs[en2]).css("display", "none");
                $(regs[en2]).css({display:"block",background:"url(img/strong.gif) left 7px no-repeat"});

            }
        }
    }else if(en2 == 2) {
        if (test1 == true && huo1 && huo3) {
            $(T[en2]).show(100);
            $(regs[en2]).css("display", "none");
            $(inp[en2 + 1]).css("marginTop", 32 + "px");
            $(inp[en2]).css("border", "solid 1px #ddd");
        } else {
            $(inp[en2]).css("border", "solid 1px #ee2222");
            $(regs[en2]).css({display: "block", background: "url(img/regBg2.gif) left 7px no-repeat", color: "#ee2222"});
            $(inp[en2 + 1]).css("marginTop", 0 + "px");
        }
    }else if(en2 == 3) {
        if (test1 == true && huo2) {
            $(T[en2]).show(100);
            $(regs[en2]).css("display", "none");
            $(inp[en2 + 1]).css("marginTop", 32 + "px");
            $(inp[en2]).css("border", "solid 1px #ddd");
        } else {
            $(inp[en2]).css("border", "solid 1px #ee2222");
            $(regs[en2]).css({display: "block", background: "url(img/regBg2.gif) left 7px no-repeat", color: "#ee2222"});
            $(inp[en2 + 1]).css("marginTop", 0 + "px");
        }
    }
}
/* 商品评价 */
/* 星星等级 */
var click = 0;
function star1(st){
    var stars = $(".star1 li a img");
    $(stars[st]).attr("src","img/starR.gif");
}

/* 提交并提醒注册成功 */
var add = 0;
function summit(){
    var star1 = $(".star1 li a img").attr("src");
    var color = $(".model input");
    var tip = $(".model span");
    var text = $(".text");
    var addChild = $("#client"+add);
    if(star1!= "img/starR.gif"){
        $(".starTip").show(500).delay(2000).hide(500);
    }else if(color[0].value == ""){
        $(tip[0]).show(500).delay(2000).hide(500);
    }else if(color[1].value == ""){
        $(tip[1]).show(500).delay(2000).hide(500);
    }else if(color[2].value == ""){
        $(tip[2]).show(500).delay(2000).hide(500);
    }else if(color[3].value == ""){
        $(tip[3]).show(500).delay(2000).hide(500);
    }else if(text[0].value == ""){
        $(tip[4]).show(500).delay(2000).hide(500);
    }else{
        var newChild = $(addChild).clone(true);
        var box1 = $("#client"+click);
        box1.prepend(newChild);
        click++;
        add++;
        $(newChild).attr("id","client"+add);
        var total = $("#total");
        $(total).html( 32135 + add);
        var time = new Date();
        var year = time.getFullYear();
        var month = time.getMonth()+1;
        var date = time.getDate();
        var hours = time.getHours();
        var minutes = time.getMinutes();
        var p1 =document.getElementById("client"+add).getElementsByTagName("p");
        var dd =document.getElementById("client"+add).getElementsByTagName("dd");
        $(p1[0]).html("收货"+color[2].value+"天后评论");
        $(p1[1]).html( year+"-"+month+"-"+date+" "+hours+":"+minutes);
        $(p1[2]).html(color[0].value);
        $(p1[3]).html(color[1].value);
        $(p1[4]).html(text[0].value);
        $(dd[0]).html("&nbsp;"+color[3].value);
        $(".Yes1").fadeIn(500).delay(1000).fadeOut(500);
    }
}
/* 清除所有填写的信息 */
function clearCont(){
    $(".star1 li a img").attr("src","img/starB.gif");
    $(".model input").val("");
    $(".text").val("");
}
