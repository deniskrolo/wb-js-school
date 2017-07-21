// smooth scrolling
$(function() {
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 1000, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});


// sticky header
var stickyOffset = $('.page-header').offset().top;
$(window).scroll(function(){
  var sticky = $('.page-header'),
      scroll = $(window).scrollTop();

  if (scroll >= stickyOffset) sticky.addClass('is-fixed');
  else sticky.removeClass('is-fixed');
});


// anchor link active state
var topMenu = $(".page-header"),
    topMenuHeight = topMenu.outerHeight()+15,
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

$(window).scroll(function(){
   var fromTop = $(this).scrollTop()+topMenuHeight;

   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   menuItems
     .parent().removeClass("is-active")
     .end().filter("[href='#"+id+"']").parent().addClass("is-active");
})
