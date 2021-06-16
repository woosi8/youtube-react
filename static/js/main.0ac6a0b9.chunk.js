(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{21:function(e,t,a){e.exports={videos:"video_list_videos__2tp-h"}},3:function(e,t,a){e.exports={container:"video_item_container__26-1t",list:"video_item_list__1ibCZ",grid:"video_item_grid__C6z7R",video:"video_item_video__2sim7",thumbnail:"video_item_thumbnail__DfErP",metadata:"video_item_metadata__3woBf",title:"video_item_title__3Md8k",channel:"video_item_channel__1AkBR"}},30:function(e,t,a){},4:function(e,t,a){e.exports={header:"search_header_header__PGX8f",logo:"search_header_logo__31h8s",input:"search_header_input__yL6N5",button:"search_header_button__UND1N",buttonImg:"search_header_buttonImg__370Wf"}},5:function(e,t,a){e.exports={app:"app_app__3EZmK",content:"app_content___zj-K",detail:"app_detail__3BEA6",list:"app_list__3XMjg"}},50:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a(1),c=a.n(n),s=a(20),r=a.n(s),o=(a(30),a(10)),l=a(5),u=a.n(l),d=a(3),_=a.n(d),p=Object(n.memo)((function(e){var t=e.video,a=e.video.snippet,n=e.onVideoClick,c="list"===e.display?_.a.list:_.a.grid;return Object(i.jsx)("li",{className:"".concat(_.a.container," ").concat(c),onClick:function(){return n(t)},children:Object(i.jsxs)("div",{className:_.a.video,children:[Object(i.jsx)("img",{className:_.a.thumbnail,src:a.thumbnails.medium.url,alt:"video thumbnail"}),Object(i.jsxs)("div",{className:_.a.metadata,children:[Object(i.jsx)("p",{className:_.a.title,children:a.title}),Object(i.jsx)("p",{className:_.a.channel,children:a.channelTitle})]})]})})})),h=a(21),m=a.n(h),b=function(e){var t=e.videos,a=e.onVideoClick,n=e.display;return Object(i.jsx)("ul",{className:m.a.videos,children:t.map((function(e){return Object(i.jsx)(p,{video:e,onVideoClick:a,display:n},e.id)}))})},j=a(4),v=a.n(j),O=Object(n.memo)((function(e){var t=e.onSearch,a=Object(n.useRef)(),c=function(){var e=a.current.value;t(e)};return Object(i.jsxs)("header",{className:v.a.header,children:[Object(i.jsxs)("div",{className:v.a.logo,children:[Object(i.jsx)("img",{className:v.a.img,src:"/youtube-react/images/logo.png",alt:"logo"}),Object(i.jsx)("h1",{className:v.a.title,children:"Youtube"})]}),Object(i.jsx)("input",{ref:a,className:v.a.input,type:"search",placeholder:"Search...",onKeyPress:function(e){"Enter"===e.key&&c()}}),Object(i.jsx)("button",{className:v.a.button,type:"submit",onClick:function(){c()},children:Object(i.jsx)("img",{className:v.a.buttonImg,src:"/youtube-react/images/search.png",alt:"search"})})]})})),f=a(7),x=a.n(f),y=function(e){var t=e.video,a=e.video.snippet;return Object(i.jsxs)("section",{className:x.a.detail,children:[Object(i.jsx)("iframe",{className:x.a.video,type:"text/html",title:"youtuve video player",width:"100%",height:"500px",src:"https://www.youtube.com/embed/".concat(t.id),frameBorder:"0",allowFullScreen:!0}),Object(i.jsx)("h2",{children:a.title}),Object(i.jsx)("h3",{children:a.channelTitle}),Object(i.jsx)("pre",{className:x.a.description,children:a.description})]})};var g=function(e){var t=e.youtube,a=Object(n.useState)([]),c=Object(o.a)(a,2),s=c[0],r=c[1],l=Object(n.useState)(null),d=Object(o.a)(l,2),_=d[0],p=d[1],h=Object(n.useCallback)((function(e){p(null),t.search(e).then((function(e){return r(e)}))}),[t]);return Object(n.useEffect)((function(){t.mostPopular().then((function(e){return r(e)}))}),[t]),Object(i.jsxs)("div",{className:u.a.app,children:[Object(i.jsx)(O,{onSearch:h}),Object(i.jsxs)("section",{className:u.a.content,children:[_&&Object(i.jsx)("div",{className:u.a.detail,children:Object(i.jsx)(y,{video:_})}),Object(i.jsx)("div",{className:u.a.list,children:Object(i.jsx)(b,{videos:s,onVideoClick:function(e){p(e)},display:_?"list":"grid"})})]})]})},N=a(11),k=a(6),w=a.n(k),E=a(9),S=a(22),C=a(23),P=function(){function e(t){Object(S.a)(this,e),this.youtube=t}return Object(C.a)(e,[{key:"mostPopular",value:function(){var e=Object(E.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("videos",{params:{part:"snippet",chart:"mostPopular",maxResults:25}});case 2:return t=e.sent,e.abrupt("return",t.data.items);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"search",value:function(){var e=Object(E.a)(w.a.mark((function e(t){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("search",{params:{part:"snippet",maxResults:25,type:"video",q:t}});case 2:return a=e.sent,e.abrupt("return",a.data.items.map((function(e){return Object(N.a)(Object(N.a)({},e),{},{id:e.id.videoId})})));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),R=a(24),T=new P(a.n(R).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{key:Object({NODE_ENV:"production",PUBLIC_URL:"/youtube-react",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_YOUTUBE_API_KEY}}));r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(g,{youtube:T})}),document.getElementById("root"))},7:function(e,t,a){e.exports={detail:"video_detail_detail__1sjw5",description:"video_detail_description__2P8vZ"}}},[[50,1,2]]]);
//# sourceMappingURL=main.0ac6a0b9.chunk.js.map