/**
 * Created by Administrator on 2017/2/4 0004.
 */
$(document).ready(function () {

    //头部
    $(".nav li").hover(function () {

        $(this).children("ul").slideToggle();
    });
    $(".nav li").on('mouseover',function () {
        $(this).addClass('active').siblings('li').removeClass('active');

    });
//    头部结束

//    小轮播图


    $('.cor li').on('mouseover', function () {
        var $this = $(this);
        var index = $this.index();
        //alert(index);
        $(this).addClass('current').siblings('li').removeClass('current');
        $('.big li').eq(index).addClass('select').siblings('li').removeClass('select');

    });


    //pro

});

