function dark(){
    $("html").addClass("dark");
    $("#theme-icon").addClass("fa-moon");
    $("#theme-icon").removeClass("fa-sun");
    console.log("dark")
}
function light(){
    $("html").removeClass("dark");
    $("#theme-icon").removeClass("fa-moon");
    $("#theme-icon").addClass("fa-sun");
    console.log("light")
}

// var theme_now = $.cookie('DARK')


// // 监听切换按钮的点击事件
// $("#toggle-theme").click(function(){
//     // $("html").addClass("dark");
//     // $("#theme-icon").removeClass("fa-sun");
//     // $("#theme-icon").addClass("fa-moon");

//     var theme = $('#theme-icon').attr('class');
//     // var theme = $.cookie('DARK')
//     console.log(theme);
//     if (theme == "fas fa-moon"){
//         $.cookie('DARK', '0',{path: '/*'});
//         light();
//     }else{
//         $.cookie('DARK', '1',{expires: 1,path: '/*'});
//         dark();
//     }

// });
// // 自动切换
// window.onload = function () {

//     if (theme_now == "1"){
//         dark()
//         console.log("is dark!")
//     }

//     var theme = $('#theme-icon').attr('class');
//     console.log(theme);

//     // 获取现在的模式
//     if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
//         $.cookie('DARK', '1',{expires: 1,path: '/*'});
//         dark();
//     } else {
//         light();
//     }
//     // 监听模式变更
//     window
//         .matchMedia("(prefers-color-scheme: dark)")
//         .addEventListener("change", (e) => {
//             const newColorScheme = e.matches ? "dark" : "light";
//             if (newColorScheme == "dark") {
//                 console.log("3.dark")
//                 $.cookie('DARK', '1',{expires: 1,path: '/*'});
//                 dark();
//             } else if (newColorScheme == "light") {
//                 light();
//             }
//         });
// };