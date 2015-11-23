// ==UserScript==
// @name         eDimension Week Mover
// @namespace    https://github.com/glencbz/edimensionWeekMover
// @version      0.76
// @description  Moves the current course to the top of the page
// @author       Glen Choo
// @match        http://edimension.sutd.edu.sg/course/view.php?id=*
// @grant       GM_addStyle
// @require 	http://code.jquery.com/jquery-latest.js
// ==/UserScript==
/* jshint -W097 */
'use strict';

var $ = window.jQuery;
var $current = $(".current");

//Change the background color to whatever you like
var currentBackgroundColor = "#D7F0FF";

var styles = ["<style>h2.week-title{color: black; font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;}</style>"];
styles.push("<style>.current, #current-section{background-color:" + currentBackgroundColor + " !important;}</style>")
styles.push("<style>h3.sectionname{color: #505050;}</style>")

$("body").append(styles);

var copy = $current.clone();
copy.css("border", "2px solid #2FB1FF");
copy.css("border-radius", "4px");
copy.children(".content").prepend("<h2 class='week-title'>This Week</h2>");
copy.attr("id", "current-section");
copy.removeClass("current");

var $weeks = $("ul.weeks");
$weeks.prepend(copy);

$weeks.children().each(function(i, li){
	var $li = $(li);
	var id = $li.attr("id");
	if (id.indexOf("section-") === 0 ){
		var weekNumber = id.substring("section-".length);
		if (weekNumber == 0)
			return;
		$li.children(".content").prepend("<h2 class='week-title'>Week " + weekNumber +"</h2>");
	}
});

$(".current").click(function(){
	console.log($("#current-section").offset().top);
	$("body").animate({
		scrollTop: $("#current-section").offset().top
	},200);
});

$("#current-section").click(function(){
	console.log($(".current").offset().top);
	$("body").animate({
		scrollTop: $(".current").offset().top
	},200);
});

$(".current a, #current-section a").click(function(event){
	event.stopPropagation();
});