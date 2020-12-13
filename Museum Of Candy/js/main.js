$(document).scroll(function(){
	"use strict";
	$("#mynav").toggleClass("scrolled", $(this).scrollTop() > $("#mynav").height() );
});