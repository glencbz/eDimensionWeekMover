// ==UserScript==
// @name         eDimension Week Mover
// @namespace    https://github.com/glencbz/edimensionWeekMover
// @version      0.6
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
$current.css("background-color", "rgb(215, 229, 255)");
var copy = $current.clone();
$("ul.weeks").prepend(copy);
