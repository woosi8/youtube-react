(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{21:function(e,t,a){e.exports={videos:"video_list_videos__1S5So"}},3:function(e,t,a){e.exports={container:"video_item_container__jhLI6",list:"video_item_list__3_1I2",grid:"video_item_grid__2SSUI",video:"video_item_video__3fi64",thumbnail:"video_item_thumbnail__i2Ngg",metadata:"video_item_metadata__3OCcz",title:"video_item_title__1ycgq",channel:"video_item_channel__3Ljwu"}},30:function(e,t,a){},4:function(e,t,a){e.exports={header:"search_header_header__1-aPI",logo:"search_header_logo__3OG7H",input:"search_header_input__3eyZD",button:"search_header_button__N2-5o",buttonImg:"search_header_buttonImg__2IKxn"}},5:function(e,t,a){e.exports={app:"app_app__2LlZO",content:"app_content__2CN41",detail:"app_detail__1H3bc",list:"app_list__1Q2Tk"}},50:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a(1),c=a.n(i),s=a(20),r=a.n(s),o=(a(30),a(10)),l=a(5),u=a.n(l),d=a(3),p=a.n(d),h=Object(i.memo)((function(e){var t=e.video,a=e.video.snippet,i=e.onVideoClick,c="list"===e.display?p.a.list:p.a.grid;return Object(n.jsx)("li",{className:"".concat(p.a.container," ").concat(c),onClick:function(){return i(t)},children:Object(n.jsxs)("div",{className:p.a.video,children:[Object(n.jsx)("img",{className:p.a.thumbnail,src:a.thumbnails.medium.url,alt:"video thumbnail"}),Object(n.jsxs)("div",{className:p.a.metadata,children:[Object(n.jsx)("p",{className:p.a.title,children:a.title}),Object(n.jsx)("p",{className:p.a.channel,children:a.channelTitle})]})]})})})),_=a(21),m=a.n(_),j=function(e){var t=e.videos,a=e.onVideoClick,i=e.display;return Object(n.jsx)("ul",{className:m.a.videos,children:t.map((function(e){return Object(n.jsx)(h,{video:e,onVideoClick:a,display:i},e.id)}))})},b=a(4),v=a.n(b),O=Object(i.memo)((function(e){var t=e.onSearch,a=Object(i.useRef)(),c=function(){var e=a.current.value;t(e)};return Object(n.jsxs)("header",{className:v.a.header,children:[Object(n.jsxs)("div",{className:v.a.logo,children:[Object(n.jsx)("img",{className:v.a.img,src:"/images/logo.png",alt:"logo"}),Object(n.jsx)("h1",{className:v.a.title,children:"Youtube"})]}),Object(n.jsx)("input",{ref:a,className:v.a.input,type:"search",placeholder:"Search...",onKeyPress:function(e){"Enter"===e.key&&c()}}),Object(n.jsx)("button",{className:v.a.button,type:"submit",onClick:function(){c()},children:Object(n.jsx)("img",{className:v.a.buttonImg,src:"/images/search.png",alt:"search"})})]})})),x=a(7),f=a.n(x),g=function(e){var t=e.video,a=e.video.snippet;return Object(n.jsxs)("section",{className:f.a.detail,children:[Object(n.jsx)("iframe",{className:f.a.video,type:"text/html",title:"youtuve video player",width:"100%",height:"500px",src:"https://www.youtube.com/embed/".concat(t.id),frameBorder:"0",allowFullScreen:!0}),Object(n.jsx)("h2",{children:a.title}),Object(n.jsx)("h3",{children:a.channelTitle}),Object(n.jsx)("pre",{className:f.a.description,children:a.description})]})};var y=function(e){var t=e.youtube,a=Object(i.useState)([]),c=Object(o.a)(a,2),s=c[0],r=c[1],l=Object(i.useState)(null),d=Object(o.a)(l,2),p=d[0],h=d[1],_=Object(i.useCallback)((function(e){h(null),t.search(e).then((function(e){return r(e)}))}),[t]);return Object(i.useEffect)((function(){t.mostPopular().then((function(e){return r(e)}))}),[t]),Object(n.jsxs)("div",{className:u.a.app,children:[Object(n.jsx)(O,{onSearch:_}),Object(n.jsxs)("section",{className:u.a.content,children:[p&&Object(n.jsx)("div",{className:u.a.detail,children:Object(n.jsx)(g,{video:p})}),Object(n.jsx)("div",{className:u.a.list,children:Object(n.jsx)(j,{videos:s,onVideoClick:function(e){h(e)},display:p?"list":"grid"})})]})]})},N=a(11),k=a(6),w=a.n(k),S=a(9),I=a(22),C=a(23),P=function(){function e(t){Object(I.a)(this,e),this.youtube=t}return Object(C.a)(e,[{key:"mostPopular",value:function(){var e=Object(S.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("videos",{params:{part:"snippet",chart:"mostPopular",maxResults:25}});case 2:return t=e.sent,e.abrupt("return",t.data.items);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"search",value:function(){var e=Object(S.a)(w.a.mark((function e(t){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("search",{params:{part:"snippet",maxResults:25,type:"video",q:t}});case 2:return a=e.sent,e.abrupt("return",a.data.items.map((function(e){return Object(N.a)(Object(N.a)({},e),{},{id:e.id.videoId})})));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),V=a(24),D=new P(a.n(V).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{key:"AIzaSyDrnkGUQDzgHrAdkFYoT1aGE7Ds_Go3P94"}}));r.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(y,{youtube:D})}),document.getElementById("root"))},7:function(e,t,a){e.exports={detail:"video_detail_detail__1dV7O",description:"video_detail_description__1yK-P"}}},[[50,1,2]]]);
//# sourceMappingURL=main.8f8b1902.chunk.js.map