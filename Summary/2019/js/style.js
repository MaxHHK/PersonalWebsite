// popover
$(function() {
    $("[data-toggle='popover']").popover({
        html : true,
        delay: {show:100, hide:100},
        trigger: 'focus hover'
    });
});

function content() {
    var data = $(
        "<div>弗里德里希·尼采</div>"
    );
    return data;
}

$('.popover-dismiss').popover({
    trigger: 'focus'
})


// collapse
$('#collapseBooks').on('show.bs.collapse', function () {
    var btnUp = document.getElementById('show_btn_up');
    var btnDown = document.getElementById('show_btn_down');
    var path = 'img/show/close_'
    btnUp.src = path + 'up' + '.png';
    btnDown.src = path + 'down' + '.png';
})

$('#collapseBooks').on('hide.bs.collapse', function () {
    var btnUp = document.getElementById('show_btn_up');
    var btnDown = document.getElementById('show_btn_down');
    var path = 'img/show/show_'
    btnUp.src = path + 'up' + '.png';
    btnDown.src = path + 'down' + '.png';
})

$('#collapseMusic').on('show.bs.collapse', function () {
    var btnUp = document.getElementById('show_btn_up2');
    var btnDown = document.getElementById('show_btn_down2');
    var path = 'img/show/close_'
    btnUp.src = path + 'up2' + '.png';
    btnDown.src = path + 'down2' + '.png';
})

$('#collapseMusic').on('hide.bs.collapse', function () {
    var btnUp = document.getElementById('show_btn_up2');
    var btnDown = document.getElementById('show_btn_down2');
    var path = 'img/show/show_'
    btnUp.src = path + 'up2' + '.png';
    btnDown.src = path + 'down2' + '.png';
})

// collapse
$('#collapseLife').on('show.bs.collapse', function () {
    var btnUp = document.getElementById('show_btn_up3');
    var btnDown = document.getElementById('show_btn_down3');
    var path = 'img/show/close_'
    btnUp.src = path + 'up' + '.png';
    btnDown.src = path + 'down' + '.png';
})

$('#collapseLife').on('hide.bs.collapse', function () {
    var btnUp = document.getElementById('show_btn_up3');
    var btnDown = document.getElementById('show_btn_down3');
    var path = 'img/show/show_'
    btnUp.src = path + 'up' + '.png';
    btnDown.src = path + 'down' + '.png';
})

// collapse
$('#collapsePhoto').on('show.bs.collapse', function () {
    var btnUp = document.getElementById('show_btn_up4');
    var btnDown = document.getElementById('show_btn_down4');
    var path = 'img/show/close_'
    btnUp.src = path + 'up2' + '.png';
    btnDown.src = path + 'down2' + '.png';
})

$('#collapsePhoto').on('hide.bs.collapse', function () {
    var btnUp = document.getElementById('show_btn_up4');
    var btnDown = document.getElementById('show_btn_down4');
    var path = 'img/show/show_'
    btnUp.src = path + 'up2' + '.png';
    btnDown.src = path + 'down2' + '.png';
})


// show more
var show_height = 300;//定义原始显示高度
var btn1 = document.getElementById('get_ct_more1');
var obj1 = document.getElementById('hide_content1');
var total_height1 = obj1.scrollHeight;//文章总高度
if(total_height1>show_height){
    btn1.style.display = 'block';
    btn1.onclick = function(){
        obj1.style.height = total_height1 + 'px';
        btn1.style.display = 'none';
    }
}
var btn2 = document.getElementById('get_ct_more2');
var obj2 = document.getElementById('hide_content2');
var total_height2 = obj2.scrollHeight;//文章总高度
if(total_height2>show_height){
    btn2.style.display = 'block';
    btn2.onclick = function(){
        obj2.style.height = total_height2 + 'px';
        btn2.style.display = 'none';
    }
}
var btn3 = document.getElementById('get_ct_more3');
var obj3 = document.getElementById('hide_content3');
var total_height3 = obj3.scrollHeight;//文章总高度
if(total_height3>show_height){
    btn3.style.display = 'block';
    btn3.onclick = function(){
        obj3.style.height = total_height3 + 'px';
        btn3.style.display = 'none';
    }
}
var btn4 = document.getElementById('get_ct_more4');
var obj4 = document.getElementById('hide_content4');
var total_height4 = obj4.scrollHeight;//文章总高度
if(total_height4>show_height){
    btn4.style.display = 'block';
    btn4.onclick = function(){
        obj4.style.height = total_height4 + 'px';
        btn4.style.display = 'none';
    }
}
var btn5 = document.getElementById('get_ct_more5');
var obj5 = document.getElementById('hide_content5');
var total_height5 = obj5.scrollHeight;//文章总高度
if(total_height5>show_height){
    btn5.style.display = 'block';
    btn5.onclick = function(){
        obj5.style.height = total_height5 + 'px';
        btn5.style.display = 'none';
    }
}
var btn6 = document.getElementById('get_ct_more6');
var obj6 = document.getElementById('hide_content6');
var total_height6 = obj6.scrollHeight;//文章总高度
if(total_height6>show_height){
    btn6.style.display = 'block';
    btn6.onclick = function(){
        obj6.style.height = total_height6 + 'px';
        btn6.style.display = 'none';
    }
}
var btn7 = document.getElementById('get_ct_more7');
var obj7 = document.getElementById('hide_content7');
var total_height7 = obj7.scrollHeight;//文章总高度
if(total_height7>show_height){
    btn7.style.display = 'block';
    btn7.onclick = function(){
        obj7.style.height = total_height7 + 'px';
        btn7.style.display = 'none';
    }
}
var btn8 = document.getElementById('get_ct_more8');
var obj8 = document.getElementById('hide_content8');
var total_height8 = obj8.scrollHeight;//文章总高度
if(total_height8>show_height){
    btn8.style.display = 'block';
    btn8.onclick = function(){
        obj8.style.height = total_height8 + 'px';
        btn8.style.display = 'none';
    }
}
var btn9 = document.getElementById('get_ct_more9');
var obj9 = document.getElementById('hide_content9');
var total_height9 = obj9.scrollHeight;//文章总高度
if(total_height9>show_height){
    btn9.style.display = 'block';
    btn9.onclick = function(){
        obj9.style.height = total_height9 + 'px';
        btn9.style.display = 'none';
    }
}
var btn10 = document.getElementById('get_ct_more10');
var obj10 = document.getElementById('hide_content10');
var total_height10 = obj10.scrollHeight;//文章总高度
if(total_height10>show_height){
    btn10.style.display = 'block';
    btn10.onclick = function(){
        obj10.style.height = total_height10 + 'px';
        btn10.style.display = 'none';
    }
}
var btn11 = document.getElementById('get_ct_more11');
var obj11 = document.getElementById('hide_content11');
var total_height11 = obj11.scrollHeight;//文章总高度
if(total_height11>show_height){
    btn11.style.display = 'block';
    btn11.onclick = function(){
        obj11.style.height = total_height11 + 'px';
        btn11.style.display = 'none';
    }
}