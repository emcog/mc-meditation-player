!function i(s,o,d){function c(e,t){if(!o[e]){if(!s[e]){var n="function"==typeof require&&require;if(!t&&n)return n(e,!0);if(l)return l(e,!0);var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}var a=o[e]={exports:{}};s[e][0].call(a.exports,function(t){return c(s[e][1][t]||t)},a,a.exports,i,s,o,d)}return o[e].exports}for(var l="function"==typeof require&&require,t=0;t<d.length;t++)c(d[t]);return c}({1:[function(t,e,n){"use strict";var r=document.getElementById("play-pause");function a(){this.classList.contains("js-amp__is-playing")?this.classList.remove("js-amp__is-playing"):this.classList.add("js-amp__is-playing")}function i(){for(var t=0;t<s.length;t++)s[t].classList.remove("js__track_is-active");this.classList.add("js__track_is-active"),console.log("this is ",this)}r.addEventListener("click",a),r.addEventListener("touchstart",a);var s=document.querySelectorAll(".audio-track__name");function o(){console.log(this.dataset.amplitudeSongIndex),Amplitude.playSongAtIndex(this.dataset.amplitudeSongIndex)}s.forEach(function(t){return t.addEventListener("click",o)}),s.forEach(function(t){return t.addEventListener("touchstart",o)}),s.forEach(function(t){return t.addEventListener("click",i)}),s.forEach(function(t){return t.addEventListener("touchstart",i)});document.getElementById("song-played-progress").addEventListener("click",function(t){var e=this.getBoundingClientRect(),n=t.pageX-e.left;Amplitude.setSongPlayedPercentage(parseFloat(n)/parseFloat(this.offsetWidth)*100)});Amplitude.init({songs:[{name:"Three-step reset",artist:"Mark Leonard",album:"MBOE Meditations",url:"https://d1ymcygi52lphf.cloudfront.net/three-step-reset.mp3"},{name:"Bodyscan",artist:"Mark Leonard",album:"MBOE Meditations",url:"https://d1ymcygi52lphf.cloudfront.net/bodyscan.mp3"},{name:"Posture and breath",artist:"Mark Leonard",album:"MBOE Meditations",url:"https://d1ymcygi52lphf.cloudfront.net/posture-and-breath.mp3"},{name:"Stretching and sitting",artist:"Mark Leonard",album:"MBOE Meditations",url:"https://d1ymcygi52lphf.cloudfront.net/stretching-and-sitting.mp3"},{name:"Mindfulness of feelings",artist:"Mark Leonard",album:"MBOE",url:"https://d1ymcygi52lphf.cloudfront.net/mindfulness-of-feelings.mp3"},{name:"Concentration and allowing the mind to wander",artist:"Mark Leonard",album:"MBOE",url:"https://d1ymcygi52lphf.cloudfront.net/concentration-and-wandering-mind.mp3.mp3"}],continue_next:!1,debug:!0})},{}]},{},[1]);