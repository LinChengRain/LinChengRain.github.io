window.__require=function t(e,n,i){function o(s,l){if(!n[s]){if(!e[s]){var a=s.split("/");if(a=a[a.length-1],!e[a]){var r="function"==typeof __require&&__require;if(!l&&r)return r(a,!0);if(c)return c(a,!0);throw new Error("Cannot find module '"+s+"'")}s=a}var u=n[s]={exports:{}};e[s][0].call(u.exports,function(t){return o(e[s][1][t]||t)},u,u.exports,t,e,n,i)}return n[s].exports}for(var c="function"==typeof __require&&__require,s=0;s<i.length;s++)o(i[s]);return o}({DialogLayer:[function(t,e){"use strict";cc._RF.push(e,"8b1b4Xrxh9G6KgL3qqWeYpU","DialogLayer"),cc.Class({extends:cc.Component,properties:{okBtn:{displayName:"\u786e\u5b9a\u6309\u94ae",default:null,type:cc.Node},cancelBtn:{displayName:"\u53d6\u6d88\u6309\u94ae",default:null,type:cc.Node},closeBtn:{displayName:"\u5173\u95ed\u6309\u94ae",default:null,type:cc.Node},tipsLabel:{displayName:"\u63d0\u793a\u8bed",default:null,type:cc.Label},_okCb:null,_cancelCb:null,_closeCb:null},onLoad:function(){},showTipsWithOkBtn:function(t,e,n,i){this.okBtn.active=!0,this.cancelBtn.active=!1,this.tipsLabel.string=t,this._okCb=e,this._cancelCb=n,this._closeCb=i},showTipsWithOkCancelBtn:function(t,e,n,i){this.okBtn.active=!0,this.cancelBtn.active=!0,this.tipsLabel.string=t,this._okCb=e,this._cancelCb=n,this._closeCb=i},setCloseBtnVisible:function(t){this.closeBtn.active=t},onClickBtnOk:function(){this._okCb&&this._okCb(),this.node&&this.node.destroy()},onClickBtnCancel:function(){this._cancelCb&&this._cancelCb(),this.node&&this.node.destroy()},onClickBtnClose:function(){this._closeCb&&this._closeCb(),this.node.destroy()}}),cc._RF.pop()},{}]},{},["DialogLayer"]);