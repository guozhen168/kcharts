<<<<<<< HEAD
/*! kcharts - v1.2 - 2013-10-12 11:00:38 AM
=======
<<<<<<< HEAD
/*! kcharts - v1.2 - 2013-10-11 1:40:29 PM
=======
/*! kcharts - v1.2 - 2013-10-11 11:03:05 AM
>>>>>>> 8fdf0d9d33140c59605d302c62314e20e640cb8e
>>>>>>> 0f43453d3f6479d04b439b581e4c862651524e2a
* Copyright (c) 2013 数据可视化小组; Licensed  */
KISSY.add("gallery/kcharts/1.2/radar/index",function(l,e,t,i,n){function r(l,e,t){return l+(e-l)*t}function s(l){for(var e,t=0,i=l.length;i>t;t++){var n=l[t],r=n.x,s=n.y;t?e.push("L",r,s):e=["M",r,s]}return e.push("Z"),e.join(",")}function a(l,e){var t;t=e?"show":"hide",y(l,function(l){l[t]()})}function x(t){var i=l.get(t.renderTo);t.anim=l.merge(v,t.anim),this.set("container",i),this.set(t),this._animationInstance=0,this.dochk(t);var n;if(!i)throw Error("容器不能为空");n=e(i,t.width,t.height),this.set("paper",n),this.set("config",t),this.render(t)}Math.PI;var y=l.each,o=(l.map,l.filter,l.merge),c={text:{fill:"#222","max-chars":10,key:!0}},h={points:{fill:"#333","stroke-width":"0",size:4.5},text:{fill:"#222","text-anchor":"start"},lines:{"stroke-width":"1"}},v={easing:"linear",duration:800};return l.extend(x,l.Base,{dochk:function(l){var e=l.labels.length,i=t.width(this.get("container")),n=t.height(this.get("container"));this.set("sides",e),void 0==l.cx&&(l.cx=i/2),void 0==l.cy&&(l.cy=n/2);var r=this.get("scoreGroups");if(r[0]&&r[0].scores){var s=[];y(r,function(l){s=s.concat(l.scores)});var a=Math.max.apply(Math,s);l.max=a}if(void 0==l.r){var x=Math.min.apply(Math,[i,n]);l.r=x/2-30,0>l.r&&(l.r=x/2)}},drawPolygon:function(l){var e=this.get("paper"),t=s(l);return e.path(t)},drawFrame:function(l){var e=this.drawPolygon(l).attr({stroke:"#777"});this.set("framepath",e)},getOption:function(){var l=this.get("config"),e={text:{fill:"#222","max-chars":10,key:!0}};l.options;var t=o(e,l.options);return t},getGroupOption:function(e){var t={points:{fill:"#333","stroke-width":"0",size:4.5},text:{fill:"#222","text-anchor":"start"},lines:{"stroke-width":"1"}};return l.merge(t,e)},drawGroup:function(l,e,t){for(var i,n,s,a,x=this.get("config"),y=x.cx,o=x.cy,c=this.get("paper"),h=this.get("lines")||[],v=[],d=this.get("pts")||[],f=[],p=0;e.length>p;p++)i=r(y,e[p].x,l[p]),n=r(o,e[p].y,l[p]),f.push({x:i,y:n});s=this.drawPolygon(f),t&&t.lines&&s.attr(t.lines);for(var g=0;l.length>g;g++)i=r(y,e[g].x,l[g]),n=r(o,e[g].y,l[g]),a=c.circle(i,n,t.points.size).attr(t.points),v.push(a);d.push(v),h.push(s),this.get("lines")||(this.set("lines",h),this.set("pts",d))},getPoints:function(){for(var l,e,t=this.get("sides"),i=this.get("config"),n=-90,r=i.r,s=i.cx,a=i.cy,x=[],y=360/t,o=0;t>o;o++){var c=n/360*2*Math.PI;l=s+r*Math.cos(c),e=a+r*Math.sin(c),x.push({x:l,y:e}),n+=y}return x},getBBox:function(){var l=this.get("r"),e=2*l,t=2*l,i=this.get("cx"),n=this.get("cy");return{width:e,height:t,left:i-e/2,top:n-t/2}},drawLegend:function(l){var e=this.get("container"),t=this.getBBox(),i=this.get("legend")||{},r=o({interval:20,iconright:5,showicon:!0},i.globalConfig);delete i.globalConfig;var s=new n(o({container:e,paper:this.get("paper"),bbox:t,align:i.align||"bc",offset:i.offset||[0,20],globalConfig:r,config:l},i));s.on("click",function(l){if(!this.isRunning()){var e=l.index,t=(l.text,l.icon,l.el);1!=t.hide?(this.hideLine(e),t.hide=1,t.disable()):(this.showLine(e),t.hide=0,t.enable())}},this),this.set("legend",s)},hideLine:function(l){var e=this.get("lines"),t=this.get("pts");e[l]&&a([e[l]]),t[l]&&a(t[l])},showLine:function(l){var e=this.get("lines"),t=this.get("pts");e[l]&&a([e[l]],!0),t[l]&&a(t[l],!0)},drawLabels:function(e,t){for(var i,n,s=e,a=this.get("paper"),x=this.get("config"),y=x.cx,o=x.cy,c=(x.r,x.labels),h=0;s.length>h;h++){i=r(y,s[h].x,1.1),n=r(o,s[h].y,1.1);var v="middle";i>y&&(v="start"),y>i&&(v="end");var d=c[h];d.length>t.text["max-chars"]&&(d=d.replace(" ","\n")),a.text(i,n,d).attr(l.merge(t.text,{"text-anchor":v}))}},drawMeasureAndRuler:function(l){for(var e,t,i,n,s,a,x=this.get("paper"),y=this.get("config"),o=y.cx,c=y.cy,h=[],v=[],d=0;l.length>d;d++){e=l[d].x,t=l[d].y,h.push(x.path("M "+o+" "+c+" L "+e+" "+t).attr("stroke","#777"));for(var f=.025,p=1;5>p;p++){i=r(o,l[d].x,.2*p-f),n=r(c,l[d].y,.2*p-f),s=r(o,l[d].x,.2*p+f),a=r(c,l[d].y,.2*p+f);var g=x.path("M "+i+" "+n+" L "+s+" "+a).attr({stroke:"#777"});g.rotate(90),v.push(g)}}},getScoreFromGroup:function(l){var e=[],t=this.get("config"),i=t.max,n=t.labels;if(l.scores)for(var r=0;l.scores.length>r;r++)e.push(l.scores[r]/i);else for(var r=0;n.length>r;r++){var s=l[n[r]]||l[n[r].toLowerCase().replace(" ","_")];e.push(s/i)}return e},isRunning:function(){return this._animationInstance>0},render:function(e){e||(e=this.get("config"));var t=(this.get("paper"),this.get("cx")),i=this.get("cy"),n=(this.get("r"),this.get("labels"),this.get("max"),this.get("scoreGroups")),a=this.get("options"),x=this.get("anim"),v=this,d=l.merge(c,a),f=this.getPoints();if(this.drawMeasureAndRuler(f),this.drawFrame(f),this.get("lines")){for(var p,g,u=[],_=[],m=0;n.length>m;m++){for(var b=this.getScoreFromGroup(n[m]),w=[],k=0;b.length>k;k++)p=r(t,f[k].x,b[k]),g=r(i,f[k].y,b[k]),w.push({x:p,y:g});_.push(w);var L=s(w);u.push(L)}var C=this.get("lines"),S=this.get("pts");y(u,function(l,e){var t=S[e],i=_[e];y(t,function(l){l.hide()}),v._animationInstance+=1,C[e].animate({path:u[e]},x.duration,x.easing,function(){y(t,function(l,e){l.attr({cx:i[e].x,cy:i[e].y}),l.show()}),v._animationInstance-=1})})}else{for(var A=[],m=0;n.length>m;m++){var b=this.getScoreFromGroup(n[m]),M=n[m].title;o(h,n[m].draw_options);var T=this.getGroupOption(n[m].draw_options);this.drawGroup(b,f,T),A.push({text:M,DEFAULT:T.lines.stroke})}this.drawLabels(f,d),this.drawLegend(A)}}}),x},{requires:["gallery/kcharts/1.2/raphael/index","dom","event","gallery/kcharts/1.2/legend/index"]});