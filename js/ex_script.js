// JavaScript Document
$(document).ready(function(){
	/*$(".subMenu>a").on({
		click:function(){
			$(this).next("ul").toggleClass("hide");
			
			var subMenu = $(this).next("ul");
			
			if(subMenu.is(":visible")){
				subMenu.slideUp("fast");
			}
			else {
				subMenu.slideDown("fast");
			}
		}	
	}); */
	 /*$(".menuNav>li").on({
      "click":function(){
         $(this).children(".submenu").slideToggle(500);
      }   
   });*/
	/*세로배너 (토글)*/
	$(".subMenu>a").click(function(){
		$(this).next(".hide").slideToggle(500);
	});  
	
	/*var cnt=0;
  	setInterval(function(){
  	$("#slide > ul>li").fadeOut();
  	cnt++;
  	if(cnt == $("#slide>ul>li").length) {
  		cnt = 0;
  	} 
     	$("#slide > ul>li").eq(cnt).fadeIn("1000");
  
  }, 3000);*/
	
	
	
	/*for( var i=2; i<=2; i--){
		$("#slide>ul>li").eq(i).animate({marginLeft:"-1200px"},2000);
	}*/
	
	/*콘텐츠 탭메뉴*/
	$(".tabmenu>a").click(function(){
    	console.log($(this.hash));
    	var target = $(this.hash);
    	$(".notice").children().not(":first-child").hide();
    	$(target).show();
		
		if($("#notice").is(":visible")){
			$(".tabmenu>a").eq(0).addClass("on");
			$(".tabmenu>a").eq(1).removeClass("on");
		}
		else {
			$(".tabmenu>a").eq(1).addClass("on");
			$(".tabmenu>a").eq(0).removeClass("on");
		}
  	});
	
	/*배너 탭메뉴*/
	$(".banner_tabmenu>a").on({
		click:function(){
			/*var target = $(this.hash);
			$("#banner").children().not(":first-child").hide();
			$(target).show();*/
			 var index = $(this).index();
			$(".banner_tabmenu>a").removeClass("set");
			$(this).addClass("set");
			$("#banner>section").hide();
			$("#banner>.banner_tabmenu").show();
      		$("#banner>section").eq(index+1).show();
		}
		
	});
	
	

	/* $('#imgsbar a').click(function(){
    $('#imgsbar a').removeClass('active');
    $(this).addClass('active');
    var imgLeft=$(this).attr('img-left');
    $('#imgs').animate({left:imgLeft},"fast");
 });*/
	
	/*자동배너(혼잡)*/
	var cnt = $("#slide>ul>li").length;
	setInterval(function(){	/*$("#slide>ul>li").animate({marginLeft:"-960px"},1500);*/	$("#slide>ul>li").eq(cnt).animate({marginLeft:"-960px"},500);
		$("#slide>ul>li").eq(cnt-1).animate({marginLeft:"960px"},500);

		if(cnt === 0){
			cnt = $("#slide>ul>li").length;
			/*$("#slide>ul>li").eq(cnt).animate({marginLeft:"960px"},500);*/
		}
		else {
			cnt--;	
			/*$("#slide>ul>li").eq(cnt).animate({marginLeft:"960px"},500);*/
		}		
	},1500); 
	
	/*배너2 (동글버튼)*/
	$("#imgsbar a").on({
		click:function(){
			/*$('#imgsbar a').removeClass('active');
			$(this).addClass('active');*/
			var imgState = $(this).attr('img-left');
			$('#imgs').animate({left:imgState},'fast');
		}
	});
	
	/*배너3(위아래)*/
	var now =0;
	var imgs = 2;
	start();
	function start(){
		$("#slide3>img").eq(0).siblings().animate({marginTop:"-700px"});
		setInterval(function(){slide();},1500);
	}
	function slide(){
		now = now == imgs?0:now+=1;
		$("#slide3>img").eq(now-1).animate({marginTop:"-700px"});
		$("#slide3>img").eq(now).animate({marginTop:"0px"});
		
	}
	
	/*배너4(좌우)*/
	var i =0;
	var max =2;
	start2();
	function start2(){	
		$("#slide4>img").eq(0).siblings().animate({marginLeft:"-960px"});
		setInterval(function(){slide2();},1500);
	}
	function slide2(){
		i = i == max ? 0: i+=1;
		$("#slide4>img").eq(now-1).animate({marginLeft:"-960px"});
		$("#slide4>img").eq(now).animate({marginLeft:"0px"});
	}
	
	/*배너5(이전,다음)*/
	$( ".btn_slides_next" ).click(function() {
    if(!$("#slides li").last().is(":visible")){
        $("#slides li:visible").hide().next("li").fadeIn("40");
        $(".btn_slides_prev").removeClass("off");
    }
    if($("#slides li").last().is(":visible")){
        $('.btn_slides_next').addClass('off');
    }
    return false;
});

$( ".btn_slides_prev" ).click(function() {
    if(!$("#slides li").first().is(":visible")){
        $("#slides li:visible").hide().prev("li").fadeIn("40");
        $(".btn_slides_next").removeClass("off");
    }
    if($("#slides li").first().is(":visible")){
        $('.btn_slides_prev').addClass('off');
    }
    return false;
});
	
	/*페이드인아웃*/
	var cnt2=0;
  	setInterval(function(){
  	$("#slide6 >#slides6>li").fadeOut();
  	cnt2++;
  	if(cnt2 == $("#slide6 >#slides6>li").length) {
  		cnt2 = 0;
  	} 
     	$("#slide6 >#slides6>li").eq(cnt2).fadeIn("1000");
  
  }, 3000);
	
	
	/*상위 메뉴 코드*/	
	$(".subMenus").on({
		mouseover:function(){
			$(this).children(".submenus").stop().slideDown(500);
		},
		mouseleave:function(){
			$(this).children(".submenus").stop().slideUp(500);
		},
		click:function(){
			$(".submenus").slideToggle();
		}
	
	});
	
	
	/*모달창*/
	$("#btn_close").click(function(){
		$("#modal").hide();
	});
	
	$("#partner").click(function(){
		$("#modal").show();
	});
	
	/*패밀리사이트*/
	$("form[name=rel_f]").on("submit",function(){
		var url = $("select",this).val();
		window.open(url);
		return false;
		/*retun false
			프로그램내에서 종료 
		*/
	});
  

	});	
