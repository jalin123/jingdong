$(function(){
//header
	$('header .xiabian').css({'background-color':'#f1f1f1','border':'1px solid #f1f1f1'})
	$('header .xiabian').each(function(i){
		$(this).hover(function(){
			$('header .xiabian:eq('+i+')').css({'background-color':'white','border-left':'1px solid #ccc'})
			$('header .xiabian:eq('+i+') .xiabian0').show()
		},function(){
			$('header .xiabian:eq('+i+') .xiabian0').hide()
		$('header .xiabian:eq('+i+')').css({'background-color':'#f1f1f1','border':'1px solid #f1f1f1'})
		})
	})
//che
	$('.top .gw').hover(function(){
		$('.top .things').show()
		$('.top .che').css({'background-color':'white','box-shadow':'1px 0px 1px 1px #ccc','border-bottom':'1px solid white'})
	},function(){
		$('.top .things').hide()
		$('.top .che').css({'background-color':'#f1f1f1','box-shadow':'none','border-bottom':'1px solid #ccc'})


	})
//main
	$('._main .center .tp img').hide()
	$('._main .center .tp img:eq(0)').fadeIn('slow')
    $("._main .center .an li:eq(0)").css({'background-color':'#c81623'})
	var nowpage=0
	var lunzhuan=setInterval(function(){
		nowpage++;
		if(nowpage>5){
			nowpage=0
		}
        $("._main .center .an li").css({'background-color':'#3E3E3E'})
        $("._main .center .an li:eq("+nowpage+")").css({'background-color':'#c81623'})
		$('._main .center .tp img:eq('+(nowpage-1)+')').fadeOut('slow')
		$('._main .center .tp img:eq('+nowpage+')').fadeIn('slow')
	},2000)
       $('._main .center').hover(function(){clearInterval(lunzhuan)},
       	function(){
       		lunzhuan=setInterval(function(){
		nowpage++;
		if(nowpage>5){
			nowpage=0
		}
        $("._main .center .an li").css({'background-color':'#3E3E3E'})
        $("._main .center .an li:eq("+nowpage+")").css({'background-color':'#c81623'})
		$('._main .center .tp img:eq('+(nowpage-1)+')').fadeOut('slow')
		$('._main .center .tp img:eq('+nowpage+')').fadeIn('slow')
	},2000)
       	})
	$('._main .center .zuo').click(function(){
		nowpage--;
		if(nowpage<0){
			nowpage=5
		}
		 $("._main .center .an li").css({'background-color':'#3E3E3E'})
        $("._main .center .an li:eq("+nowpage+")").css({'background-color':'#c81623'})
		$('._main .center .tp img:eq('+(nowpage+1)+')').fadeOut('slow')
		$('._main .center .tp img:eq('+nowpage+')').fadeIn('slow')
	})

	$('._main .center .you').click(function(){
		nowpage++;
		if(nowpage>5){
			nowpage=0
		}
		 $("._main .center .an li").css({'background-color':'#3E3E3E'})
        $("._main .center .an li:eq("+nowpage+")").css({'background-color':'#c81623'})
		$('._main .center .tp img:eq('+(nowpage-1)+')').fadeOut('slow')
		$('._main .center .tp img:eq('+nowpage+')').fadeIn('slow')
	})
	$('._main .center .an li').each(function(i){
			$(this).mouseover(function(){
        $("._main .center .an li").css({'background-color':'#3E3E3E'})
        $("._main .center .an li:eq("+i+")").css({'background-color':'#c81623'})
		$('._main .center .tp img').fadeOut('slow')
		$('._main .center .tp img:eq('+i+')').fadeIn('slow')
			})	
	})


	$('._main .right .nr .taby >span').each(function(i){
		$(this).mouseover(function(){
			$('._main .right .nr .taby >span >span').css({display:'none'})
			$('._main .right .nr .taby >span').css({'border-top':'2px solid white','height':'30px','line-height':'30px','padding-top':'0px'})
			$('._main .right .nr .taby >span:eq('+i+')').css({'border-top':'2px solid #c81623'})
			$('._main .right .yc li').hide()
			$('._main .right .yc li:eq('+i+')').show()
		})
	})

	// $('._main .right .yc li .gb').click(function(){
	// 	$('._main .right .yc li').hide()
	// 	$('._main .right .nr .taby >span >span').css({display:'block'})
	// 	$('._main .right .nr .taby >span').css({'border-top':'2px solid white'})

	// })
//todaytj
	$('.todytj .lz .rq').hover(function(){
        $('.todytj .lz .rq ._l').css('display','block')
        $('.todytj .lz .rq ._r').css('display','block')

	},function(){
		$('.todytj .lz .rq ._l').css('display','none')
        $('.todytj .lz .rq ._r').css('display','none')
	})
	var x=0
	$('.todytj .lz .rq ._l').click(function(){
         x++;
         if(x>3){
         	x=0
         }
         $('.todytj .lz .rq ul').animate({left:-995*x},'slow')
	})
	$('.todytj .lz .rq ._r').click(function(){
         x--;
         if(x<0){
         	x=3
         }
         $('.todytj .lz .rq ul').animate({left:-995*x},'slow')
	})
//like
	$('.like .redl').animate({'left':'917px'},'slow')
	$('.like .title .h').mouseover(function(){
	    $('.like .redl').css({'left':'-500px'})
		$('.like .redl').animate({'left':'917px'},'slow')

	})
//品质生活
	$('.pzsh .yd').each(function(i){
		$(this).hover(function(){
		   $('.pzsh .yd:eq('+i+') img').animate({left:'-10px'})
	   },function(){
		   $('.pzsh .yd:eq('+i+') img').animate({left:'0px'})		
	   })
	})
//section1
	$('.section1 .shang .daohang li').each(function(i){
		$(this).mouseover(function(){
		$('.section1 .shang .daohang li a').css({'border-right':'1px solid #ccc','color':'#666'})
			$('.section1 .shang .daohang li:eq('+(i-1)+') a').css({border:'none'})
			$('.section1 .shang .daohang li:eq('+i+') a').css({border:'none','color':'#C81623'})
			$('.section1 .shang .daohang .last a').css({border:'none'})
			$('.section1 .shang .daohang li').css({border:'none','border-top':'1px solid #ccc'})
            $('.section1 .shang .daohang .last').css({'border-right':'1px solid #ccc'})
            $('.section1 .shang .daohang .first').css({'border-left':'1px solid #ccc'})
            $(this).css({'border-bottom':'1px solid white','border-top':'2px solid #C81623','border-left':'1px solid #C81623','border-right':'1px solid #C81623',})
		    $('.section1 .xia .rq >ul').css({'display':'none'});
		    $('.section1 .xia .rq >ul:eq('+i+')').css({'display':'block'});

		})
	})
	    // 轮播
		$('.section1 .xia .u1 ._l ._c .zuo').hide()
		$('.section1 .xia .u1 ._l ._c .you').hide()
	$('.section1 .xia .u1 ._l ._c').hover(function(){
		$('.section1 .xia .u1 ._l ._c .zuo').show()
		$('.section1 .xia .u1 ._l ._c .you').show()
	},function(){
		$('.section1 .xia .u1 ._l ._c .zuo').hide()
		$('.section1 .xia .u1 ._l ._c .you').hide()
	})


		$('.section1 .xia .u1 ._l ._c .imgs img').css({right:'500px'})
		$('.section1 .xia .u1 ._l ._c .imgs img:eq(0)').animate({right:'0px'})
		// var nn=0
		// $('.section1 .xia .u1 ._l ._c .zuo').click(function(){
			
		// 	if(nn>3){
		// 		nn=0
		// 	}else{
		// 		nn++;
		// 	};
		// $('.section1 .xia .u1 ._l ._c .imgs img:eq('+(nn+1)+')').animate({right:'500px'})
		// $('.section1 .xia .u1 ._l ._c .imgs img').css({right:'500px','top':'0'})
		// $('.section1 .xia .u1 ._l ._c .imgs img:eq('+nn+')').animate({right:'0px'})

		// })

		// $('.section1 .xia .u1 ._l ._c .tags li:eq(0)').css({'background-color':'#C81623'})
	//     $('.section1 .xia .u1 ._l ._c .tags li').each(function(i){
	//     	$(this).mouseover(function(){
	//     $('.section1 .xia .u1 ._l ._c .imgs img').css({left:'500px'})
	//     $('.section1 .xia .u1 ._l ._c .imgs img:eq('+(i-1)+')').animate({left:'-500px'},'slow')
	//     $('.section1 .xia .u1 ._l ._c .imgs img:eq('+i+')').animate({left:'0px','top':'0'},'slow')
	// 	$('.section1 .xia .u1 ._l ._c .tags li').css({'background-color':'#333'})
	// 	$(this).css({'background-color':'#C81623'})
	// })
	//     })
//section2
    $('.section2 .shang .daohang li').each(function(i){
		$(this).mouseover(function(){
		$('.section2 .shang .daohang li a').css({'border-right':'1px solid #ccc','color':'#666'})
			$('.section2 .shang .daohang li:eq('+(i-1)+') a').css({border:'none'})
			$('.section2 .shang .daohang li:eq('+i+') a').css({border:'none','color':'#C81623'})
			$('.section2 .shang .daohang .last a').css({border:'none'})
			$('.section2 .shang .daohang li').css({border:'none','border-top':'1px solid #ccc'})
            $('.section2 .shang .daohang .last').css({'border-right':'1px solid #ccc'})
            $('.section2 .shang .daohang .first').css({'border-left':'1px solid #ccc'})
            $(this).css({'border-bottom':'1px solid white','border-top':'2px solid #C81623','border-left':'1px solid #C81623','border-right':'1px solid #C81623',})
		    $('.section2 .xia .rq >ul').css({'display':'none'});
		    $('.section2 .xia .rq >ul:eq('+i+')').css({'display':'block'});

		})
	})
//section3
 $('.section3 .shang .daohang li').each(function(i){
		$(this).mouseover(function(){
		$('.section3 .shang .daohang li a').css({'border-right':'1px solid #ccc','color':'#666'})
			$('.section3 .shang .daohang li:eq('+(i-1)+') a').css({border:'none'})
			$('.section3 .shang .daohang li:eq('+i+') a').css({border:'none','color':'#C81623'})
			$('.section3 .shang .daohang .last a').css({border:'none'})
			$('.section3 .shang .daohang li').css({border:'none','border-top':'1px solid #ccc'})
            $('.section3 .shang .daohang .last').css({'border-right':'1px solid #ccc'})
            $('.section3 .shang .daohang .first').css({'border-left':'1px solid #ccc'})
            $(this).css({'border-bottom':'1px solid white','border-top':'2px solid #C81623','border-left':'1px solid #C81623','border-right':'1px solid #C81623',})
		    $('.section3 .xia .rq >ul').css({'display':'none'});
		    $('.section3 .xia .rq >ul:eq('+i+')').css({'display':'block'});

		})
	})
$('.section4 .shang .daohang li').each(function(i){
		$(this).mouseover(function(){
		$('.section4 .shang .daohang li a').css({'border-right':'1px solid #ccc','color':'#666'})
			$('.section4 .shang .daohang li:eq('+(i-1)+') a').css({border:'none'})
			$('.section4 .shang .daohang li:eq('+i+') a').css({border:'none','color':'#C81623'})
			$('.section4 .shang .daohang .last a').css({border:'none'})
			$('.section4 .shang .daohang li').css({border:'none','border-top':'1px solid #ccc'})
            $('.section4 .shang .daohang .last').css({'border-right':'1px solid #ccc'})
            $('.section4 .shang .daohang .first').css({'border-left':'1px solid #ccc'})
            $(this).css({'border-bottom':'1px solid white','border-top':'2px solid #C81623','border-left':'1px solid #C81623','border-right':'1px solid #C81623',})
		    $('.section4 .xia .rq >ul').css({'display':'none'});
		    $('.section4 .xia .rq >ul:eq('+i+')').css({'display':'block'});

		})
	})
    $('.section5 .shang .daohang li').each(function(i){
		$(this).mouseover(function(){
		$('.section5 .shang .daohang li a').css({'border-right':'1px solid #ccc','color':'#666'})
			$('.section5 .shang .daohang li:eq('+(i-1)+') a').css({border:'none'})
			$('.section5 .shang .daohang li:eq('+i+') a').css({border:'none','color':'#C81623'})
			$('.section5 .shang .daohang .last a').css({border:'none'})
			$('.section5 .shang .daohang li').css({border:'none','border-top':'1px solid #ccc'})
            $('.section5 .shang .daohang .last').css({'border-right':'1px solid #ccc'})
            $('.section5 .shang .daohang .first').css({'border-left':'1px solid #ccc'})
            $(this).css({'border-bottom':'1px solid white','border-top':'2px solid #C81623','border-left':'1px solid #C81623','border-right':'1px solid #C81623',})
		    $('.section5 .xia .rq >ul').css({'display':'none'});
		    $('.section5 .xia .rq >ul:eq('+i+')').css({'display':'block'});

		})
	})
	 $('.section6 .shang .daohang li').each(function(i){
		$(this).mouseover(function(){
		$('.section6 .shang .daohang li a').css({'border-right':'1px solid #ccc','color':'#666'})
			$('.section6 .shang .daohang li:eq('+(i-1)+') a').css({border:'none'})
			$('.section6 .shang .daohang li:eq('+i+') a').css({border:'none','color':'#C81623'})
			$('.section6 .shang .daohang .last a').css({border:'none'})
			$('.section6 .shang .daohang li').css({border:'none','border-top':'1px solid #ccc'})
            $('.section6 .shang .daohang .last').css({'border-right':'1px solid #ccc'})
            $('.section6 .shang .daohang .first').css({'border-left':'1px solid #ccc'})
            $(this).css({'border-bottom':'1px solid white','border-top':'2px solid #C81623','border-left':'1px solid #C81623','border-right':'1px solid #C81623',})
		    $('.section6 .xia .rq >ul').css({'display':'none'});
		    $('.section6 .xia .rq >ul:eq('+i+')').css({'display':'block'});

		})
	})
	  $('.section7 .shang .daohang li').each(function(i){
		$(this).mouseover(function(){
		$('.section7 .shang .daohang li a').css({'border-right':'1px solid #ccc','color':'#666'})
			$('.section7 .shang .daohang li:eq('+(i-1)+') a').css({border:'none'})
			$('.section7 .shang .daohang li:eq('+i+') a').css({border:'none','color':'#C81623'})
			$('.section7 .shang .daohang .last a').css({border:'none'})
			$('.section7 .shang .daohang li').css({border:'none','border-top':'1px solid #ccc'})
            $('.section7 .shang .daohang .last').css({'border-right':'1px solid #ccc'})
            $('.section7 .shang .daohang .first').css({'border-left':'1px solid #ccc'})
            $(this).css({'border-bottom':'1px solid white','border-top':'2px solid #C81623','border-left':'1px solid #C81623','border-right':'1px solid #C81623',})
		    $('.section7 .xia .rq >ul').css({'display':'none'});
		    $('.section7 .xia .rq >ul:eq('+i+')').css({'display':'block'});

		})
	})
	   $('.section8 .shang .daohang li').each(function(i){
		$(this).mouseover(function(){
		$('.section8 .shang .daohang li a').css({'border-right':'1px solid #ccc','color':'#666'})
			$('.section8 .shang .daohang li:eq('+(i-1)+') a').css({border:'none'})
			$('.section8 .shang .daohang li:eq('+i+') a').css({border:'none','color':'#C81623'})
			$('.section8 .shang .daohang .last a').css({border:'none'})
			$('.section8 .shang .daohang li').css({border:'none','border-top':'1px solid #ccc'})
            $('.section8 .shang .daohang .last').css({'border-right':'1px solid #ccc'})
            $('.section8 .shang .daohang .first').css({'border-left':'1px solid #ccc'})
            $(this).css({'border-bottom':'1px solid white','border-top':'2px solid #C81623','border-left':'1px solid #C81623','border-right':'1px solid #C81623',})
		    $('.section8 .xia .rq >ul').css({'display':'none'});
		    $('.section8 .xia .rq >ul:eq('+i+')').css({'display':'block'});

		})
	})
	   $('.section9 .shang .daohang li').each(function(i){
		$(this).mouseover(function(){
		$('.section9 .shang .daohang li a').css({'border-right':'1px solid #ccc','color':'#666'})
			$('.section9 .shang .daohang li:eq('+(i-1)+') a').css({border:'none'})
			$('.section9 .shang .daohang li:eq('+i+') a').css({border:'none','color':'#C81623'})
			$('.section9 .shang .daohang .last a').css({border:'none'})
			$('.section9 .shang .daohang li').css({border:'none','border-top':'1px solid #ccc'})
            $('.section9 .shang .daohang .last').css({'border-right':'1px solid #ccc'})
            $('.section9 .shang .daohang .first').css({'border-left':'1px solid #ccc'})
            $(this).css({'border-bottom':'1px solid white','border-top':'2px solid #C81623','border-left':'1px solid #C81623','border-right':'1px solid #C81623',})
		    $('.section9 .xia .rq >ul').css({'display':'none'});
		    $('.section9 .xia .rq >ul:eq('+i+')').css({'display':'block'});

		})
	})
	  $('.section10 .shang .daohang li').each(function(i){
		$(this).mouseover(function(){
		$('.section10 .shang .daohang li a').css({'border-right':'1px solid #ccc','color':'#666'})
			$('.section10 .shang .daohang li:eq('+(i-1)+') a').css({border:'none'})
			$('.section10 .shang .daohang li:eq('+i+') a').css({border:'none','color':'#C81623'})
			$('.section10 .shang .daohang .last a').css({border:'none'})
			$('.section10 .shang .daohang li').css({border:'none','border-top':'1px solid #ccc'})
            $('.section10 .shang .daohang .last').css({'border-right':'1px solid #ccc'})
            $('.section10 .shang .daohang .first').css({'border-left':'1px solid #ccc'})
            $(this).css({'border-bottom':'1px solid white','border-top':'2px solid #C81623','border-left':'1px solid #C81623','border-right':'1px solid #C81623',})
		    $('.section10 .xia .rq >ul').css({'display':'none'});
		    $('.section10 .xia .rq >ul:eq('+i+')').css({'display':'block'});

		})
	})
	   $('.sections3 .shang .daohang li').each(function(i){
		$(this).mouseover(function(){
		$('.sections3 .shang .daohang li a').css({'border-right':'1px solid #ccc','color':'#666'})
			$('.sections3 .shang .daohang li:eq('+(i-1)+') a').css({border:'none'})
			$('.sections3 .shang .daohang li:eq('+i+') a').css({border:'none','color':'#C81623'})
			$('.sections3 .shang .daohang .last a').css({border:'none'})
			$('.sections3 .shang .daohang li').css({border:'none','border-top':'1px solid #ccc'})
            $('.sections3 .shang .daohang .last').css({'border-right':'1px solid #ccc'})
            $('.sections3 .shang .daohang .first').css({'border-left':'1px solid #ccc'})
            $(this).css({'border-bottom':'1px solid white','border-top':'2px solid #C81623','border-left':'1px solid #C81623','border-right':'1px solid #C81623',})
		    $('.sections3 .xia .rq >ul').css({'display':'none'});
		    $('.sections3 .xia .rq >ul:eq('+i+')').css({'display':'block'});

		})
	})
//cebian_l
    $('.cebian_l li').each(function(i){
    	$(this).hover(function(){
    		$('.cebian_l li:eq('+(i-1)+') >div').css({'border-bottom':'1px solid white'})
    	},function(){
    		$('.cebian_l li:eq('+(i-1)+') >div').css({'border-bottom':'1px solid #ccc','border-bottom-style':'dotted'})
    	})

    // 	$(this).click(function(n){
    // 		$('.cebian_l li .a1').css('display','block')
    // 		$('.cebian_l li .a2').css('display','none')
    // 		$('.cebian_l li:eq('+i+') .a1').css('display','none')
    // 		$('.cebian_l li:eq('+i+') .a2').css({'display':'block','color':'#C81623'})
    	    
	   //  	//     $('.cebian_l li').each(function(i){
	   //  	// $(this).hover(function(){
	   //  	// 	$('.cebian_l li .a1:eq('+i+')').css('display','none')
	   //  	// 	 $('.cebian_l li .a2:eq('+i+')').css('display','block')
	   //  	// },function(){
	   //  	// 	$('.cebian_l li .a2:eq('+i+')').css('display','none')
		  //   //    $('.cebian_l li .a1:eq('+i+')').css('display','block')    	
	   //  	// })
	   //  	// })
    // })
})
setInterval(function(){
		var y=$('body').scrollTop();



	if(y>1100&&y<9600){
		$('.cebian_l').show()
			
			if(y<1500){$('.cebian_l li:eq(0) .a1').css({'display':'none'})
					$('.cebian_l li:eq(0) .a2').css({'display':'block','color':'#C81623'})
}
    	}else{
			$('.cebian_l').hide()
	}
},1)


//天天低价

   $('.ttdj .img').each(function(i){
   		$(this).hover(function(){
   			$('.ttdj .img img:eq('+i+')').animate({left:'-10px'})
   		},function(){
   			$('.ttdj .img img:eq('+i+')').animate({left:'0px'})
   		})
   })
//热门晒单
  var jl=0;
   setInterval(function(){
   	    jl++;
   	    if(jl>2){
   	    	jl--
   	    }
   		$('.ttdj .five .fl').animate({top:140*(jl-2)})
   },2000)

})