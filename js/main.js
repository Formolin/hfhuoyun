/**
 * Created by Administrator on 2017/2/4 0004.
 */
$(document).ready(function () {

    //ͷ��
    $(".nav li").hover(function () {

        $(this).children("ul").slideToggle();
    });
    $(".nav li").on('mouseover',function () {
        $(this).addClass('active').siblings('li').removeClass('active');

    });
//    ͷ������

//    С�ֲ�ͼ


    $('.cor li').on('mouseover', function () {
        var $this = $(this);
        var index = $this.index();
        //alert(index);
        $(this).addClass('current').siblings('li').removeClass('current');
        $('.big li').eq(index).addClass('select').siblings('li').removeClass('select');

    });


    //pro

});

