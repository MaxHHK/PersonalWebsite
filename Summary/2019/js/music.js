function play_pause() {
    var audio = document.getElementById('player');
    var btn = document.getElementById('player_btn');
    var btn2 = document.getElementById('player_btn2');
    if (audio.paused) {
        audio.play();
        btn.src = './img/btn/pause.png'
        btn2.src = './img/btn/pause2.png'
     } else {
        audio.pause();
        btn.src = './img/btn/play.png'
        btn2.src = './img/btn/play2.png'
     }
}

function play() {
    var audio = document.getElementById('player');
    var btn = document.getElementById('player_btn');
    var btn2 = document.getElementById('player_btn2');
    audio.play();
    btn.src = './img/btn/pause.png'
    btn2.src = './img/btn/pause2.png'
    is_played = true;
}

// multiple way to play automatically
// var is_played = false;
// if (!is_played) {
//     if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
//         play();
//     } else {
//         if (document.addEventListener) {
//             document.addEventListener("WeixinJSBridgeReady", function() {
//                 play();
                
//             }, false);
//         } else if (document.attachEvent) {
//             document.attachEvent("WeixinJSBridgeReady", function() {
//                 play();
//             });
//             document.attachEvent("onWeixinJSBridgeReady", function() {
//                 play();
//             });
//         }
//     }
// }

// document.addEventListener("touchstart", function(e) {
//     if (!is_played) {
//         play();
//     }
// }, false);

// window.onscroll = function() {
//     var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
//     console.log("滚动距离" + scrollTop);
//     if (!is_played && scrollTop > 5) {
//         play();
//     }
// }