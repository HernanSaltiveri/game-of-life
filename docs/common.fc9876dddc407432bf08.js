(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[function(t,e,i){"use strict";e.__esModule=!0,e.renderLife=void 0;var n=i(3);e.renderLife=function(t,e,i,o){if("undefined"!=typeof document)if(1!==t.reduce((function(t,e){return t+e.reduce((function(t,e){return t+e}),0)}),0)){var r=new n.GameOfLifeEngine(t,e,i,o);document.body.appendChild(r.canvas),r.startLife()}else{var s=document.createElement("p");s.textContent="This pattern is not complete yet!";var a=document.createElement("a");a.target="_blank",a.href="https://github.com/TroyTae/game-of-life/contribute",a.textContent="Please help us :)",document.body.appendChild(s),document.body.appendChild(a)}}},function(t,e,i){"use strict";e.__esModule=!0,e.BACKGROUND_COLOR=e.DOTS_STYLE=void 0,function(t){t[t.WIDTH=16]="WIDTH",t[t.HEIGHT=16]="HEIGHT",t[t.MARGIN=2]="MARGIN",t.DEAD_COLOR="#FFF",t.SURVIVE_COLOR="#000"}(e.DOTS_STYLE||(e.DOTS_STYLE={})),e.BACKGROUND_COLOR="#FFF"},,function(t,e,i){"use strict";e.__esModule=!0,e.GameOfLifeEngine=void 0;var n=i(1),o=i(4),r=function(){function t(t,e,i,r){var s=document.createElement("canvas"),a=s.getContext("2d");if(!a)throw"Failed to create context";s.width=o.getCoordinateX(t[0].length),s.height=o.getCoordinateY(t.length),this.life=t,this.canvas=s,this.context=a,this.deadColor=e||n.DOTS_STYLE.DEAD_COLOR,this.surviveColor=i||n.DOTS_STYLE.SURVIVE_COLOR,this.backgroundColor=r||n.BACKGROUND_COLOR}return t.prototype.clear=function(){this.context.fillStyle=this.backgroundColor,this.context.fillRect(0,0,this.canvas.width,this.canvas.height)},t.prototype.startLife=function(){var t=this;this.intervalKey||(this.drawDots(),this.intervalKey=window.setInterval((function(){t.life=t.life.map((function(e,i){return e.map((function(e,n){return t.nextLife(n,i,e)}))})),t.drawDots()}),500))},t.prototype.stopLife=function(){null!==this.intervalKey&&(clearInterval(this.intervalKey),this.intervalKey=null)},t.prototype.drawDot=function(t,e){this.context.fillRect(o.getCoordinateX(t),o.getCoordinateY(e),n.DOTS_STYLE.WIDTH,n.DOTS_STYLE.HEIGHT)},t.prototype.drawDots=function(){var t=this;this.clear(),this.life.forEach((function(e,i){e.forEach((function(e,n){t.context.fillStyle=e?t.surviveColor:t.deadColor,t.drawDot(n,i)}))}))},t.prototype.isSurvive=function(t,e){return this.life[e]&&this.life[e][t]?1:0},t.prototype.nextLife=function(t,e,i){var n=this.isSurvive(t-1,e-1)+this.isSurvive(t,e-1)+this.isSurvive(t+1,e-1)+this.isSurvive(t-1,e)+this.isSurvive(t+1,e)+this.isSurvive(t-1,e+1)+this.isSurvive(t,e+1)+this.isSurvive(t+1,e+1);return 3===n||i&&2===n?1:0},t}();e.GameOfLifeEngine=r},function(t,e,i){"use strict";e.__esModule=!0,e.getCoordinateY=e.getCoordinateX=void 0;var n=i(1);e.getCoordinateX=function(t){return(n.DOTS_STYLE.MARGIN+n.DOTS_STYLE.WIDTH)*t+n.DOTS_STYLE.MARGIN},e.getCoordinateY=function(t){return(n.DOTS_STYLE.MARGIN+n.DOTS_STYLE.HEIGHT)*t+n.DOTS_STYLE.MARGIN}}]]);