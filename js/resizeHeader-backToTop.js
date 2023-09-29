(function () {
  var backTop = document.getElementsByClassName("js-sz-top")[0],
    offset = 0,
    offsetOpacity = 1200,
    scrollDuration = 0,
    scrolling = false;

  if (backTop) {
    window.addEventListener("scroll", function (event) {
      if (!scrolling) {
        scrolling = true;
        !window.requestAnimationFrame
          ? setTimeout(checkBackToTop, 250)
          : window.requestAnimationFrame(checkBackToTop);
      }
    });
  }

  function checkBackToTop() {
    var windowTop = window.scrollY || document.documentElement.scrollTop;
    windowTop > offset
      ? Util.addClass(backTop, "sz-top--is-visible")
      : Util.removeClass(backTop, "sz-top--is-visible sz-top--fade-out");
    windowTop > offsetOpacity && Util.addClass(backTop, "sz-top--fade-out");
    scrolling = false;
  }
})();
