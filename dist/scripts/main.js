!function s(o,a,u){function c(t,e){if(!a[t]){if(!o[t]){var r="function"==typeof require&&require;if(!e&&r)return r(t,!0);if(l)return l(t,!0);var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}var i=a[t]={exports:{}};o[t][0].call(i.exports,function(e){return c(o[t][1][e]||e)},i,i.exports,s,o,a,u)}return a[t].exports}for(var l="function"==typeof require&&require,e=0;e<u.length;e++)c(u[e]);return c}({1:[function(e,t,r){"use strict";var n=document.getElementbyId("amplitude-play-pause");function i(){this.classList.contains("player_is-playing")?this.classList.remove("player_is-playing"):this.classList.add("player_is-playing")}n.addEventListener("mousedown",i),n.addEventListener("touchstart",i)},{}]},{},[1]);