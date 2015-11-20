// ==UserScript==
// @name         eDimension Week Fixer
// @namespace    https://github.com/glencbz/edimensionWeekFixer
// @version      0.1
// @description  Moves the current course to the top of the
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
$current.css("background-color", "#9CBAF1");
var copy = $current.clone();
$("ul.weeks").prepend(copy);