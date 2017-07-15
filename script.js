
    let aPromoLi = $('.promo-trigger').children()
    let width = $('.promo-item')[0].offsetWidth
    let timer = null
    let index = -1
   
    for(let i=0;i<aPromoLi.length;i++){ 
        aPromoLi[i].onmouseover=function(){
            index = i 
            aPromoLi.removeClass('on')
            $(this).addClass('on');
            $('.promo-list')[0].style.marginLeft = -width*index +'px';
            
        }
        
    }
    
    function autoPlay(){
        index++
        if(index===aPromoLi.length){
            index=0
        }
        $('.promo-list')[0].style.marginLeft = -width*index +'px';
        aPromoLi.removeClass('on').eq(index).addClass('on')
        timer=setTimeout(autoPlay,2000)
    }
    autoPlay()
    $('.promo').on('mouseover',function(){
        clearInterval(timer)
    })
    $('.promo').on('mouseout',function(){
        clearInterval(timer)
        timer=setTimeout(autoPlay,2000)
    })
    
    function tab(oNav,oContent,oEvent){
        oContent.hide().eq(0).show()
        var aLi = oNav.children()
        aLi.each(function(index){
            $(this).on(oEvent,function(){
                aLi.removeClass('current').eq(index).addClass('current')
                oContent.hide().eq(index).show()
            })
        })
    }

    tab($('.news-nav'),$('.news-content'),'mouseover')
    tab($('.hero-nav'),$('.hero-content'),'mouseover')
    tab($('.recommend-nav'),$('.recommend-content'),'mouseover')
