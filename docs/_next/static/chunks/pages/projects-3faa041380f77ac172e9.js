_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{"/ian":function(e,t,r){e.exports={figure:"style_figure__2iJQM",number:"style_number__IqYAR",caption:"style_caption__2sTqa",yellowColor:"style_yellowColor__wwrOq",orangeColor:"style_orangeColor__17DNj",redColor:"style_redColor__2IDDL",purpleColor:"style_purpleColor__3d7Z4",blueColor:"style_blueColor__2Gov1",greenColor:"style_greenColor__1NFPT",blackColor:"style_blackColor__2KuB_",mineshaftColor:"style_mineshaftColor__29CKX",carbonColor:"style_carbonColor__1dEmW",mercuryColor:"style_mercuryColor__aReyp",whiteColor:"style_whiteColor__2XCrh"}},"120z":function(e,t,r){e.exports={filter:"style_filter__2xPKL"}},M8b6:function(e,t,r){"use strict";var o=r("nKUr"),c=(r("Aiso"),r("BkDe")),n=r("lIlD"),a=r("mpBp");t.a=function(e){var t=e.title,r=e.image,s=e.color;return Object(o.jsxs)("header",{className:"".concat(a.header," ").concat(r&&a.featuredImage," ").concat(Object(c.a)(s)," ").concat(Object(n.a)(s)),children:[Object(o.jsx)("section",{className:a.content,children:Object(o.jsx)("h1",{className:a.title,children:t})}),r&&Object(o.jsx)("section",{className:a.image,children:Object(o.jsx)("img",{src:"".concat("/pages/OSP/comcast.github.io").concat(r),alt:"",preload:"true",layout:"fill",objectfit:"cover",objectposition:"center"})})]})}},"ZVd/":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return r("hoZb")}])},gVCr:function(e,t,r){e.exports={dataTable:"style_dataTable__1jYtA"}},hVla:function(e,t,r){"use strict";var o=r("nKUr"),c=r("rb/R"),n=function(e,t,r){for(var n=0,a=[];n<t;)(e>=4&&1===n||n>4&&e<=t-5&&(n+1)%5===0||n>=e+2&&n<=e-2)&&a.push(Object(o.jsx)("span",{className:c.page,children:"\u2026"},"span_".concat(n))),(0===n||n<5&&e<3||n<=e+2&&n>=e-2||(n+1)%5===0||n>4&&e>=t-4)&&a.push(Object(o.jsx)("button",{type:"button",onClick:function(e){return r(e)},value:n,className:"".concat(c.page," ").concat(e===n?c.selected:null),children:n+1},"button_".concat(n))),n+=1;return a},a=function(e){var t=e.itemType,r=e.count,a=e.currentPage,s=e.onPageSelect;return Object(o.jsxs)("div",{className:c.pagination,children:[Object(o.jsxs)("p",{className:c.repoCount,children:[r," ",1===r?t[0]:t[1]]}),r>10&&Object(o.jsxs)("p",{className:c.paginationButtons,children:["\u2190",n(parseInt(a,10),Math.ceil(r/10),s),"\u2192"]}),Object(o.jsxs)("p",{className:c.pagesCount,children:["page ",parseInt(a,10)+1," of ",Math.ceil(r/10)]})]})},s=r("120z");t.a=function(e){var t=e.data,r=e.itemType,c=e.categoryTitle,n=e.categoryList,l=void 0===n?[]:n,i=e.currentPage,d=e.onPageSelect,u=e.onSelect,j=e.onSearch;return Object(o.jsxs)("section",{className:s.filter,children:[Object(o.jsxs)("div",{children:[Object(o.jsxs)("label",{htmlFor:"projectSearch",children:["Search ",r[1].charAt(0).toUpperCase()+r[1].slice(1)]}),Object(o.jsx)("input",{id:"projectSearch",type:"text",placeholder:"search term",onChange:function(e){return j(e)}})]}),!!l.length&&Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"categorySelect",children:"Select Category"}),Object(o.jsxs)("select",{id:"categorySelect",onChange:function(e){return u(e)},children:[Object(o.jsxs)("option",{value:"",children:["All ",c]}),l.map((function(e){return Object(o.jsx)("option",{value:e.toLowerCase(),children:e},e)}))]})]}),Object(o.jsx)(a,{itemType:r,count:t.length,currentPage:i,onPageSelect:d})]})}},hoZb:function(e,t,r){"use strict";function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function c(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.r(t),r.d(t,"__N_SSG",(function(){return S}));var n=r("nKUr"),a=r("q1tI"),s=r("8Kt/"),l=r.n(s),i=r("ntAx"),d=r("M8b6"),u=r("/ian"),j=function(e){var t=e.caption,r=e.number,o=e.color,c=void 0===o?"red":o,a=u.blackColor;switch(c){case"yellow":a=u.yellowColor;break;case"orange":a=u.orangeColor;break;case"red":a=u.redColor;break;case"purple":a=u.purpleColor;break;case"blue":a=u.blueColor;break;case"green":a=u.greenColor;break;case"black":a=u.blackColor;break;case"mineshaft":a=u.mineshaftColor;break;case"carbon":a=u.carbonColor;break;case"mercury":a=u.mercuryColor;break;case"white":a=u.whiteColor;break;default:a=u.blackColor}return Object(n.jsxs)("figure",{className:u.figure,children:[Object(n.jsx)("div",{className:"".concat(u.number," ").concat(a),children:r}),Object(n.jsx)("figcaption",{className:u.caption,children:t})]})},b=r("j+x7"),p=r("qFvh"),m=function(e){var t=e.color,r=void 0===t?"blue":t,o=e.title,c=e.description,a=e.url,s=e.stars,l=e.forks,i=void 0===l?"":l,d=e.created,u=e.updated;return Object(n.jsxs)("article",{className:p.project,children:[Object(n.jsx)("h4",{className:p.title,children:Object(n.jsx)("a",{href:a,className:Object(b.a)(r),children:o})}),Object(n.jsx)("p",{className:p.description,children:c||"An Open Source project from Comcast."}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"".concat(p.numbers," ").concat(Object(b.a)(r)),children:[s>=0&&Object(n.jsxs)("div",{className:p.number,children:[s,Object(n.jsx)("img",{height:"24",width:"24",src:"".concat("/pages/OSP/comcast.github.io","/images/star.svg"),alt:"stargazers"})]}),i>=0&&Object(n.jsxs)("div",{className:p.number,children:[i,Object(n.jsx)("img",{height:"24",width:"24",src:"".concat("/pages/OSP/comcast.github.io","/images/fork.svg"),alt:"forks"})]})]}),d&&Object(n.jsxs)("p",{className:p.date,children:["created on: ",d]}),u&&Object(n.jsxs)("p",{className:p.date,children:["updated on: ",u]})]})]})},h=r("mf9k"),g=function(e){var t=e.title,r=e.url,o=e.stars,c=void 0===o?"":o,a=e.forks,s=void 0===a?"":a;return Object(n.jsx)("article",{className:h.project,children:Object(n.jsxs)("figure",{className:h.content,children:[c&&Object(n.jsxs)("div",{className:h.number,children:[c,Object(n.jsx)("img",{height:"32",width:"32",src:"".concat("/pages/OSP/comcast.github.io","/images/star.svg"),alt:"stargazers"})]}),s&&Object(n.jsxs)("div",{className:h.number,children:[s,Object(n.jsx)("img",{height:"32",width:"32",src:"".concat("/pages/OSP/comcast.github.io","/images/fork.svg"),alt:"forks"})]}),Object(n.jsx)("figcaption",{className:h.title,children:Object(n.jsx)("a",{href:r,children:t})})]})})},_=r("EgWX"),O=r("JC/g"),f=r("hVla"),x=r("gVCr"),y=["January","February","March","April","May","June","July","August","September","October","November","December"],C=function(e){var t=new Date(e);return"".concat(y[t.getMonth()]," ").concat(t.getDate(),", ").concat(t.getFullYear())},v=function(e){var t=e.data;return Object(n.jsxs)("table",{className:x.dataTable,children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Name"}),Object(n.jsx)("th",{children:"Description"}),Object(n.jsx)("th",{children:Object(n.jsx)("img",{height:"24",width:"24",src:"".concat("/pages/OSP/comcast.github.io","/images/star.svg"),alt:"stargazers"})}),Object(n.jsx)("th",{children:Object(n.jsx)("img",{height:"24",width:"24",src:"".concat("/pages/OSP/comcast.github.io","/images/fork.svg"),alt:"forks"})})]})}),Object(n.jsx)("tbody",{children:t.map((function(e){return Object(n.jsxs)("tr",{children:[Object(n.jsxs)("th",{children:[Object(n.jsx)("p",{children:Object(n.jsx)("a",{href:e.node.url,children:e.node.name})}),Object(n.jsxs)("p",{style:{fontSize:".9rem",fontWeight:300,marginBottom:0},children:["updated: ",C(e.node.updatedAt)]}),Object(n.jsxs)("p",{style:{fontSize:".9rem",fontWeight:300},children:["created: ",C(e.node.createdAt)]})]}),Object(n.jsxs)("td",{children:[Object(n.jsx)("p",{style:{marginBottom:"2rem"},children:e.node.description||"An Open Source project from Comcast."}),!!e.node.repositoryTopics.edges.length&&Object(n.jsxs)("p",{style:{fontSize:".9rem",marginBottom:0},children:[" ",Object(n.jsx)("strong",{style:{fontWeight:400},children:"tags:"})," ",e.node.repositoryTopics.edges.map((function(t,r){return"".concat(t.node.topic.name).concat(r<e.node.repositoryTopics.edges.length-1?", ":"")}))]}),!!e.node.languages.edges.length&&Object(n.jsxs)("p",{style:{fontSize:".9rem"},children:[Object(n.jsx)("strong",{style:{fontWeight:400},children:"languages:"})," ",e.node.languages.edges.map((function(t,r){return"".concat(t.node.name).concat(r<e.node.languages.edges.length-1?", ":"")}))]})]}),Object(n.jsx)("td",{children:e.node.stargazerCount}),Object(n.jsx)("td",{children:e.node.forkCount})]},"updated_".concat(e.node.name))}))})]})},w=r("qtb/"),k=["January","February","March","April","May","June","July","August","September","October","November","December"],N=function(e){var t=new Date(e);return"".concat(k[t.getMonth()]," ").concat(t.getDate(),", ").concat(t.getFullYear())},S=!0;t.default=function(e){var t,r=e.staticToday,o=e.allRepos,s=e.newRepos,u=e.updateRepos,b=e.mostStarred,p=e.mostForked,h=e.totalRepos,x=e.totalSourceRepos,y=e.totalForkedRepos,C=e.totalMembers,k=Object(a.useState)(null),S=k[0],A=k[1],P=Object(a.useState)(0),T=P[0],B=P[1],L=Object(a.useState)(null),R=L[0],M=L[1];function z(e,t,r){return r.indexOf(e)===t}var D=(t=[]).concat.apply(t,c(o.map((function(e){return e.node.languages.edges.map((function(e){return e.node.name}))})))).filter(z).sort(),F=o.filter((function(e){return".github"!==e.node.name})).filter((function(e){return S&&R?e.node.languages.edges.map((function(e){return e.node.name.toLowerCase()===(null===R||void 0===R?void 0:R.toLowerCase())})).includes(!0)&&(e.node.name.toLowerCase().includes(null===S||void 0===S?void 0:S.toLowerCase())||e.node.repositoryTopics.edges.map((function(e){return e.node.topic.name.toLowerCase().includes(null===S||void 0===S?void 0:S.toLowerCase())})).includes(!0)||e.node.languages.edges.map((function(e){return e.node.name.toLowerCase().includes(null===S||void 0===S?void 0:S.toLowerCase())})).includes(!0)):S&&!R?e.node.name.toLowerCase().includes(null===S||void 0===S?void 0:S.toLowerCase())||e.node.repositoryTopics.edges.map((function(e){return e.node.topic.name.toLowerCase().includes(null===S||void 0===S?void 0:S.toLowerCase())})).includes(!0)||e.node.languages.edges.map((function(e){return e.node.name.toLowerCase().includes(null===S||void 0===S?void 0:S.toLowerCase())})).includes(!0):!S&&R?e.node.languages.edges.map((function(e){return e.node.name.toLowerCase()===(null===R||void 0===R?void 0:R.toLowerCase())})).includes(!0):e}));return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(l.a,{children:[Object(n.jsxs)("title",{children:["Open Source Software ",w.f," at Comcast"]}),Object(n.jsx)("meta",{name:"description",content:w.d||w.b}),Object(n.jsx)("meta",{rel:"canonical",content:"https://comcast.github.io/"}),Object(n.jsx)("meta",{property:"og:type",content:"website"}),Object(n.jsx)("meta",{property:"og:url",content:"https://comcast.github.io/"}),Object(n.jsx)("meta",{property:"og:title",content:w.f}),Object(n.jsx)("meta",{property:"og:description",content:w.d||w.b}),Object(n.jsx)("meta",{property:"og:image",content:"".concat("/pages/OSP/comcast.github.io").concat(w.c)}),Object(n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),Object(n.jsx)("meta",{name:"twitter:site",content:"@comcast"}),Object(n.jsx)("meta",{name:"twitter:creator",content:"@comcast"}),Object(n.jsx)("meta",{name:"twitter:image",content:"".concat("/pages/OSP/comcast.github.io").concat(w.c)}),Object(n.jsx)("meta",{name:"twitter:image:alt",content:w.f})]}),Object(n.jsxs)(i.a,{children:[Object(n.jsx)(d.a,{title:w.f,image:w.c,color:w.a}),Object(n.jsxs)("section",{children:[w.d&&Object(n.jsx)("p",{className:"overview",children:w.d}),w.b&&Object(n.jsx)("p",{children:w.b})]}),Object(n.jsxs)("section",{className:"repo",children:[Object(n.jsx)("h2",{children:"Overall Statistics"}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("p",{children:["as of ",r]}),Object(n.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(n.jsx)(j,{color:"yellow",number:h,caption:"Total Public Repos"}),Object(n.jsx)(j,{color:"green",number:x,caption:"Total Source Repos"}),Object(n.jsx)(j,{color:"blue",number:y,caption:"Total Forked Repos"}),Object(n.jsx)(j,{color:"purple",number:C,caption:"Total Members"})]})]}),Object(n.jsx)(_.a,{type:"atom",color:"yellow",label:"View All Comcast Repos on GitHub",url:"https://github.com/Comcast/"}),Object(n.jsx)("hr",{className:"rainbowSegment"})]}),Object(n.jsxs)("section",{children:[Object(n.jsx)("h2",{children:w.e.featuredProjects.title}),w.e.featuredDescription&&Object(n.jsx)("p",{children:w.e.featuredProjects.description}),Object(n.jsx)(O.a,{items:w.e.featuredProjects.list.sort((function(e,t){return new Date(e.date)-new Date(t.date)}))})]}),Object(n.jsxs)("section",{className:"repo",children:[Object(n.jsx)("h2",{id:"projects",children:w.e.title}),w.e.description&&Object(n.jsx)("p",{children:w.e.description}),Object(n.jsx)(f.a,{data:F.filter(z),itemType:["project","projects"],categoryTitle:"languages",categoryList:D,currentPage:T,onPageSelect:function(e){B(e.target.value)},onSearch:function(e){A(e.target.value),B(0)},onSelect:function(e){M(e.target.value),B(0)}}),Object(n.jsx)(v,{data:F.slice(10*T,10*T+10)})]}),Object(n.jsxs)("section",{className:"repo",children:[Object(n.jsx)("h2",{children:"Project Statistics"}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h4",{children:"Most Starred"}),Object(n.jsxs)("p",{children:["as of ",r]})]}),b.map((function(e){return Object(n.jsx)(g,{title:e.name,url:e.url,stars:e.stargazerCount},"star_".concat(e.name))}))]}),Object(n.jsxs)("section",{className:"repo",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("h4",{children:"Most Forked"}),Object(n.jsxs)("p",{children:["as of ",r]})]}),p.map((function(e){return Object(n.jsx)(g,{title:e.name,url:e.url,forks:e.forkCount},"fork_".concat(e.name))}))]}),Object(n.jsx)("hr",{className:"rainbowSegment"}),Object(n.jsxs)("section",{className:"repo",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("h4",{children:"Newest Repos"}),Object(n.jsxs)("p",{children:["as of ",r]})]}),s.map((function(e){return Object(n.jsx)(m,{color:"purple",title:e.name,description:e.description,url:e.url,forks:e.forkCount,stars:e.stargazerCount,created:N(e.createdAt)},"new_".concat(e.name))}))]}),Object(n.jsxs)("section",{className:"repo",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("h4",{children:"Recently Updated Repos"}),Object(n.jsxs)("p",{children:["as of ",r]})]}),u.map((function(e){return Object(n.jsx)(m,{color:"orange",title:e.name,description:e.description,url:e.url,forks:e.forkCount,stars:e.stargazerCount,updated:N(e.updatedAt)},"updated_".concat(e.name))}))]})]})]})}},lIlD:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var o=r("d8q0"),c=function(e){var t=o.blackBorder;switch(e){case"yellow":t=o.yellowBorder;break;case"orange":t=o.orangeBorder;break;case"red":t=o.redBorder;break;case"purple":t=o.purpleBorder;break;case"blue":t=o.blueBorder;break;case"green":t=o.greenBorder;break;case"black":t=o.blackBorder;break;case"mineshaft":t=o.mineshaftBorder;break;case"carbon":t=o.carbonBorder;break;case"mercury":t=o.mercuryBorder;break;case"white":t=o.whiteBorder;break;default:t=o.blackBorder}return t}},mf9k:function(e,t,r){e.exports={project:"style_project__37dJU",content:"style_content__28-nf",number:"style_number__3iVEJ",title:"style_title__3sGfx"}},mpBp:function(e,t,r){e.exports={header:"style_header__1YNcn",featuredImage:"style_featuredImage__1dX_Z",content:"style_content__2dN1a",image:"style_image__16_NC","zoom-out":"style_zoom-out__26qrI","image--header-image":"style_image--header-image__AcnZu",category:"style_category__1mhUu",details:"style_details__28oyp",date:"style_date__vws_R",author:"style_author__18b5d"}},qFvh:function(e,t,r){e.exports={project:"style_project__3CMot",title:"style_title__2twW8",description:"style_description__3qUHG",numbers:"style_numbers__5WTlY",number:"style_number__W9XR3",date:"style_date__IqX7A",yellowColor:"style_yellowColor__2ezXx",orangeColor:"style_orangeColor__34s5Z",redColor:"style_redColor__w_6Li",purpleColor:"style_purpleColor__OG5Ah",blueColor:"style_blueColor__2liOM",greenColor:"style_greenColor__3wSg5",blackColor:"style_blackColor__2wEAa",mineshaftColor:"style_mineshaftColor__z-XWS",carbonColor:"style_carbonColor__2BpG1",mercuryColor:"style_mercuryColor__1R5su",whiteColor:"style_whiteColor__2iMRZ"}},"rb/R":function(e,t,r){e.exports={pagination:"style_pagination__2n-iW",repoCount:"style_repoCount__2xxqm",paginationButtons:"style_paginationButtons__Yn3tR",pagesCount:"style_pagesCount__26j9H",page:"style_page__JkEk-",selected:"style_selected__20Fxz"}}},[["ZVd/",0,2,1,3,4]]]);