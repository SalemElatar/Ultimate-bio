$(function(){"use strict";function e(){$(".sidebar-settings-menu .dark-btn").hasClass("dark-toggle")?$("html, body").css({color:"#fff","background-color":"#182038"}):$("html, body").css({color:"#000","background-color":"#fff"})}$(".content-area .toggle-sidebar, .page .sidebar .fa-times").on("click",function(){$(".page .sidebar, .page .content-area").toggleClass("show-sidebar")}),$(".sidebar-pages-menu li a").on("click",function(){$(this).next(".sidebar-subPages-menu").slideToggle(),$(this).find(".fa-angle-right").toggleClass("toggle-subPages")}),e(),$(".sidebar-settings-menu .dark-btn").on("click",function(){$(this).toggleClass("dark-toggle"),e()});var t=document.documentElement;$(".header .fa-expand").on("click",function(){$(this).toggleClass("toggle-full-scrn"),$(this).hasClass("toggle-full-scrn")?t.requestFullscreen?t.requestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.msRequestFullscreen&&t.msRequestFullscreen():document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()}),document.getElementById("Dropdown").addEventListener("click",function(e){e.stopPropagation()}),document.getElementById("Dropdown2").addEventListener("click",function(e){e.stopPropagation()}),document.getElementById("Dropdown3").addEventListener("click",function(e){e.stopPropagation()}),$(".to-do-list .txtb").on("keyup",function(e){var t,n,s;13==e.keyCode&&""!=$(".to-do-list .txtb").val()&&(t=$('<div class="task"></div>').text($(".to-do-list .txtb").val()),n=$('<i class="fas fa-trash-alt"></i>').click(function(){var e=$(this).parent();e.fadeOut(function(){e.remove()})}),s=$('<i class="fas fa-check"></i>').click(function(){var e=$(this).parent();e.fadeOut(function(){$(".comp-tasks").append(e),e.fadeIn()}),$(this).remove()}),t.append(s,n),$(".to-do-list .to-do-tasks").append(t),$(".to-do-list .txtb").val(""))}),$(".to-do-tasks .pomo-tasks i").on("click",function(){$(this).parent().append('<div class="new-pomo"><span>25:00</span></div>')})});