(this["webpackJsonpreact-project"]=this["webpackJsonpreact-project"]||[]).push([[0],{32:function(e,t,a){e.exports=a(65)},37:function(e,t,a){},38:function(e,t,a){},57:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(28),c=a.n(o),s=(a(37),a(7)),l=a(1);a(38);var i=function(e){return console.log(e),r.a.createElement("div",{className:"about__container"},r.a.createElement("span",null,'"Freedom is the freedom to say that two plus two make four. If that is granted, all else fllows."'),r.a.createElement("span",null,"- George Orwell, 1984"))},m=a(15),u=a.n(m),v=a(29),p=a(10),d=a(11),f=a(13),E=a(12),h=a(30),y=a.n(h);a(57);var g=function(e){var t=e.year,a=e.title,n=e.summary,o=e.poster,c=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement(s.b,{to:{pathname:"/movie-detail",state:{year:t,title:a,summary:n,poster:o,genres:c}}},r.a.createElement("img",{src:o,alt:a,title:a}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},a),r.a.createElement("h5",{className:"movie__year"},t),r.a.createElement("ul",{className:"movie__genres"},c.map((function(e,t){return r.a.createElement("li",{className:"movie__genre",key:t},e)}))),r.a.createElement("p",{className:"movie__summary"},n.slice(0,180),"..."))))},_=(a(63),function(e){Object(f.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(v.a)(u.a.mark((function t(){var a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(g,{key:e.id,poster:e.medium_cover_image,summary:e.summary,year:e.year,title:e.title,genres:e.genres})}))))}}]),a}(n.Component));a(64);var b=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(s.b,{to:"/"},"Home"),r.a.createElement(s.b,{to:"/about"},"About"))},N=function(e){Object(f.a)(a,e);var t=Object(E.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?r.a.createElement("div",null,r.a.createElement("span",null,e.state.title)):null}}]),a}(n.Component);var j=function(){return r.a.createElement(s.a,null,r.a.createElement(b,null),r.a.createElement(l.a,{path:"/",exact:!0,component:_}),r.a.createElement(l.a,{path:"/about",component:i}),r.a.createElement(l.a,{path:"/movie-detail",component:N}))};c.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.db1737b7.chunk.js.map