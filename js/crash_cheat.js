// 崩溃欺骗
const OriginTitle = document.title;
let titleTime;
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    $('[rel="icon"]').attr('href', "/images/cry.png");
    document.title = ' ╭(°A°`)╮ 页面崩溃啦 ~ ';
    clearTimeout(titleTime);
  }
  else {
    $('[rel="icon"]').attr('href', "/images/favicon-32x32-next.png");
    document.title = ' (ฅ>ω<*ฅ) 诶~ 又好了~ ' + OriginTitle;
    titleTime = setTimeout(function () {
      document.title = OriginTitle;
    }, 2000);
  }
});
