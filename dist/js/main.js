$(function(){"use strict";$(".content-area .show-sidebar").on("click",function(){$(".sidebar").animate({left:"0"},200),$(".content-area .full-scrn-overlay").css("display","block")}),$(".sidebar .fas.fa-times").on("click",function(){$(".sidebar").animate({left:"-250"},200),$(".content-area .full-scrn-overlay").css("display","none")}),$(".content-area .full-scrn-overlay").on("click",function(){$(".sidebar").animate({left:"-250"},200),$(this).css("display","none")}),$(".sidebar-settings-menu .dark-toggle").on("click",function(){$(".dark-toggle .toggle-btn-back").animate({width:"100%"},500),$(".dark-toggle .toggle-btn-front").animate({right:"0"},500)})});