/*! kcharts - v1.2 - 2013-10-17 10:53:19 AM
* Copyright (c) 2013 数据可视化小组; Licensed  */
KISSY.add("gallery/kcharts/1.2/tools/graphtool/index",function(t){var l=Math.sqrt,e={},r=function(t,e,r,i,n){var a,s=["M"+[e,r-i].join(","),"L"+[e-i*l(3)/2,r-0+1*i/2].join(","),[e-0+i*l(3)/2,r-0+1*i/2].join(","),"Z"].join(" ");return t&&t.path?(a=t.path(s).attr({cx:e,cy:r}),a.rotate(n,e,r),a):void 0},i=function(t,l,e,r,i,n){var a,s=["M"+[l,e-i/2].join(","),"L"+[l-0+r/2,e].join(","),[l,e-0+i/2].join(","),[l-r/2,e].join(","),"Z"].join(",");return t&&t.path?(a=t.path(s).attr({cx:l,cy:e}),a.rotate(n,l,e),a):void 0};return e=t.merge(e,{triangle:r,rhomb:i})},{requires:["gallery/kcharts/1.2/raphael/index"]});