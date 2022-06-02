"use strict";

            var elem = document.getElementById("myDiv");
            var dragging = false;
            var lastX, lastY;

            elem.addEventListener("mousedown", function(evt) {
                dragging = true;
                lastX = evt.clientX;
                lastY = evt.clientY;
            }, false);

            elem.addEventListener("mousemove", function(evt) {
                if (dragging) {
                    var style = window.getComputedStyle(elem, null);
                    var posx = parseInt(style.getPropertyValue("left"));
                    var posy = parseInt(style.getPropertyValue("top"));
                    var x = evt.clientX;
                    var y = evt.clientY;
                    var dx = x - lastX;
                    var dy = y - lastY;
                    elem.style.left = (posx + dx) + "px";
                    elem.style.top = (posy + dy) + "px";
                    lastX = x;
                    lastY = y;
                }   
            }, false);

            elem.addEventListener("mouseup", function(evt) {
                dragging = false;
            });