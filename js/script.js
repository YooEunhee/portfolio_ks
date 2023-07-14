$(function(){
    $('.gnb>ul>li').on('mouseover', function(){
        $('.bgGnb').slideDown();
        $('.gnb .sub').fadeIn()
    } )
$('.gnb').on('mouseleave', function() {
    $('.bgGnb').slideUp(10);
    $(' .gnb .sub').fadeOut(10)
})
 });
 