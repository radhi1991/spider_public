_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"+QPN":function(e,t,o){e.exports={articleList:"style_articleList__U6uu0"}},"2R+C":function(e,t,o){e.exports={featureSection:"style_featureSection__4f-Kb",featureIntro:"style_featureIntro__3MA5D",featureTitle:"style_featureTitle__3wii9",featureImage:"style_featureImage__3jca8",featureItems:"style_featureItems__2-ylX",more:"style_more__1tmAE",yellowBg:"style_yellowBg__34zNW",orangeBg:"style_orangeBg__1tq7v",redBg:"style_redBg__20aJm",purpleBg:"style_purpleBg__R0OvE",blueBg:"style_blueBg__1Nucf",greenBg:"style_greenBg__2acpH",blackBg:"style_blackBg__bZIse",mineshaftBg:"style_mineshaftBg__1bDBL",carbonBg:"style_carbonBg__3Z7xg",mercuryBg:"style_mercuryBg__2_2pX",whiteBg:"style_whiteBg__EGDQR"}},CSpq:function(e){e.exports=JSON.parse('{"g":"Events","e":"Upcoming events, conferences.","b":"Comcast CEO Brian Roberts speaking with Steven Spielberg in the CTC?! When did this happen and why wasn\'t I invited?","d":"/images/events/featured_spielberg.jpg","a":"blue","h":"Upcoming Events","f":"Past Events","c":[{"title":"Hacktoberfest 2020","description":"Hacktoberfest is an event that takes place every year for the entire month of October to encourage open source contributions. Here at Comcast we produce and work on many open source projects.","location":{"online":true},"url":"https://comcast.github.io/hacktoberfest.html","start":"Oct 1 2020 00:00:00 GMT-0400","end":"Oct 31 2020 23:59:59 GMT-0400"},{"title":"Open Source Summit North America","description":"The Open Source Summit + Embedded Linux Conference North America 2020 Virtual Experience! We welcomed over 4000 attendees, from 109 countries \u2013 thank you to all the attendees, sponsors and speakers that joined us virtually this year.","location":{"online":true},"url":"https://events.linuxfoundation.org/open-source-summit-north-america/","start":"Jun 29 2020 00:00:00 GMT-0400","end":"July 2 2020 23:59:59 GMT-0400"},{"title":"Open Source World","description":"Hear the latest Open Source news and project updates, gain access to in-depth technical sessions, participate in networking opportunities, meet potential collaborators and review and discuss detailed case studies of Open Source projects.","location":{"city":"Miami","state":"FL","country":"USA"},"url":"https://www.opensourcesummit.com/east/","start":"Jun 22 2021 00:00:00 GMT-0500","end":"Jun 25 2021 23:59:59 GMT-0500"},{"title":"Comcast TXPO (Tech Expo)","description":"Hear from some premier thought leaders in technology. This interactive workshop is designed to give technology enthusiasts a closer look at the cutting edge innovations our company is developing, while learning more about the inclusive and diverse culture. Look for the Open Source Panel at 4 o\u2019clock!","location":{"online":true},"url":"https://comcast-txpo2020.splashthat.com/","start":"Nov 18 2020 13:00:00 GMT-0400","end":"Nov 18 2020 17:20:00 GMT-0400"},{"title":"Open Source 101","description":"A day of 45 and 90-minute sessions delivered by open source thought leaders from world-class companies and organizations","location":{"city":"Austin","state":"TX","country":"USA"},"url":"https://opensource101.com/events/austin-2021/","start":"Feb 24 2021 00:00:00 GMT-0600","end":"Feb 25 2021 23:59:59 GMT-0600"}]}')},Dtc0:function(e,t,o){"use strict";o.r(t),o.d(t,"__N_SSG",(function(){return S}));var a=o("nKUr"),n=o("8Kt/"),i=o.n(n),c=o("ntAx"),s=o("q1tI"),r=(o("Aiso"),o("YFqc")),l=o.n(r),u=o("kfej"),d=function(e){if(37===e.keyCode||39===e.keyCode){var t,o;if(37===e.keyCode)null===(t=e.target.previousElementSibling)||void 0===t||t.focus();if(39===e.keyCode)null===(o=e.target.nextElementSibling)||void 0===o||o.focus();e.preventDefault()}},m=function(e){var t=e.items,o=Object(s.useState)(1),n=o[0],i=o[1],c=function(e){return e.includes("http")?e:"".concat("/pages/OSP/comcast.github.io").concat(e)},r=t.map((function(e){return Object(a.jsx)("button",{"aria-controls":"panel".concat(e.id),"aria-selected":e.id===n,className:"".concat(u.jumbotronTab," ").concat(e.id===n?u.selected:""),id:"tab".concat(e.id),onClick:function(){return i(e.id)},onKeyDown:d,role:"tab",tabIndex:e.id===n?0:-1,type:"button",children:e.title},"tab".concat(e.id))})),m=t.map((function(e){return Object(a.jsxs)("article",{className:"".concat(u.jumbotronPanel," ").concat(e.id===n?u.selected:""),tabIndex:"0",role:"tabpanel",id:"panel".concat(e.id),"aria-labelledby":"tab".concat(e.id),children:[Object(a.jsxs)("div",{className:u.card,children:[Object(a.jsx)("h2",{className:u.cardTitle,children:e.title}),Object(a.jsx)("p",{className:"cardDescription",children:e.description}),e.cta&&Object(a.jsxs)("p",{className:"cardCta",children:[e.cta.lead,Object(a.jsx)(l.a,{href:c(e.cta.url),children:Object(a.jsx)("a",{href:c(e.cta.url),className:u.cta,children:e.cta.label})})]})]}),e.image&&Object(a.jsx)("div",{className:u.featuredImage,children:Object(a.jsx)("img",{src:"".concat("/pages/OSP/comcast.github.io").concat(e.image),alt:"",preload:"true",layout:"fill",objectfit:"cover",objectposition:"center"})})]},"panel".concat(e.id))}));return Object(a.jsx)("header",{className:u.jumbotron,children:Object(a.jsxs)("article",{role:"tablist","aria-label":"Features",children:[Object(a.jsx)("section",{className:u.jumbotronTabs,children:r}),Object(a.jsx)("section",{className:"platform",children:m})]})})},p=o("JC/g"),h=o("EgWX"),b=o("e/Q5"),g=o("Lnsi"),j=o("BkDe"),f=o("2R+C"),y=function(e){var t=e.title,o=e.description,n=e.color,i=e.image,c=e.alt,s=e.link,r=e.url,u=e.children,d=function(e){return e.includes("http")?e:"".concat("/pages/OSP/comcast.github.io").concat(e)};return Object(a.jsxs)("section",{className:"".concat(f.featureSection," ").concat(Object(j.a)(n)),children:[Object(a.jsxs)("div",{className:f.featureIntro,children:[t&&Object(a.jsx)("h3",{className:f.featureTitle,children:t}),i&&Object(a.jsx)("img",{className:f.featureImage,src:"".concat("/pages/OSP/comcast.github.io").concat(i),alt:c}),o&&Object(a.jsx)("p",{children:o})]}),Object(a.jsx)("div",{className:f.featureItems,children:u}),Object(a.jsx)("div",{children:s&&Object(a.jsx)("p",{children:Object(a.jsx)(l.a,{href:d(r),children:Object(a.jsx)("a",{className:f.more,href:d(r),"aria-label":s,title:s,children:"\u22ee"})})})})]})},O=o("YHDQ"),v=o("CSpq"),w=o("ro+b"),x=o("Rsnp"),_=o("qtb/"),S=!0;t.default=function(e){var t=e.comcastGithubIo,o=function(e){return e>1?"s":""};return t?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(i.a,{children:[Object(a.jsx)("title",{children:O.i}),Object(a.jsx)("meta",{name:"description",content:O.f||O.c}),Object(a.jsx)("meta",{rel:"canonical",content:"https://comcast.github.io/"}),Object(a.jsx)("meta",{property:"og:type",content:"website"}),Object(a.jsx)("meta",{property:"og:url",content:"https://comcast.github.io/"}),Object(a.jsx)("meta",{property:"og:title",content:O.i}),Object(a.jsx)("meta",{property:"og:description",content:O.f||O.c}),Object(a.jsx)("meta",{property:"og:image",content:"".concat("/pages/OSP/comcast.github.io","/images/favicon/android-chrome-512x512.png")}),Object(a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),Object(a.jsx)("meta",{name:"twitter:site",content:"@comcast"}),Object(a.jsx)("meta",{name:"twitter:creator",content:"@comcast"}),Object(a.jsx)("meta",{name:"twitter:image",content:"".concat("/pages/OSP/comcast.github.io","/images/favicon/android-chrome-512x512.png")}),Object(a.jsx)("meta",{name:"twitter:image:alt",content:O.i})]}),Object(a.jsxs)(c.a,{children:[Object(a.jsx)(m,{items:O.e}),Object(a.jsxs)("section",{children:[Object(a.jsxs)("section",{children:[O.f&&Object(a.jsx)("p",{className:"overview",children:O.f}),O.c&&Object(a.jsx)("p",{children:O.c})]}),Object(a.jsxs)(y,{image:"/comcast_open_source_profile.svg",alt:"Comcast Open Source Site Details",color:"mercury",children:[Object(a.jsxs)("div",{className:"bug",children:[Object(a.jsx)("h3",{children:"GitHub Repo"}),Object(a.jsx)("p",{children:Object(a.jsx)("a",{href:t.url,children:t.name})})]}),Object(a.jsxs)("div",{className:"bug",children:[Object(a.jsx)("h3",{children:function(e){var t=new Date,n=new Date(e),i=Math.floor((t-n)/1e3/60/60),c=i;return i>=8760?(c=Math.floor(i/24/365),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("strong",{children:c})," year",o(c)," ago"]})):i>=744?(c=Math.floor(i/24/31),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("strong",{children:c})," month",o(c)," ago"]})):i>=24?(c=Math.floor(i/24),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("strong",{children:c})," day",o(c)," ago"]})):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("strong",{children:i})," hour",o(i)," ago"]})}(t.updatedAt)}),Object(a.jsx)("p",{children:"last updated"})]}),Object(a.jsxs)("div",{className:"bug",children:[Object(a.jsx)("h3",{children:Object(a.jsx)("strong",{children:t.mentionableUsers.totalCount})}),Object(a.jsx)("p",{children:"users involved"})]}),Object(a.jsxs)("div",{className:"bug",children:[Object(a.jsx)("h3",{children:Object(a.jsx)("strong",{children:t.commit.history.totalCount})}),Object(a.jsx)("p",{children:"commits"})]}),Object(a.jsxs)("div",{className:"bug",children:[Object(a.jsxs)("h3",{children:["Aug 23 ",Object(a.jsx)("strong",{children:"2017"})]}),Object(a.jsx)("p",{children:"initial launch"})]}),Object(a.jsxs)("div",{className:"bug",children:[Object(a.jsx)("h3",{children:t.licenseInfo.name}),Object(a.jsx)("p",{})]}),Object(a.jsxs)("div",{className:"bug",children:[Object(a.jsx)("h3",{children:"Tags"}),Object(a.jsx)("p",{children:t.repositoryTopics.edges.map((function(e,o){return"".concat(e.node.topic.name).concat(o<t.repositoryTopics.edges.length-1?", ":"")}))})]})]})]}),Object(a.jsxs)("section",{className:"repo",children:[Object(a.jsx)("h2",{id:"projects",children:O.h.title}),Object(a.jsx)(p.a,{items:_.e.featuredProjects.list.sort((function(e,t){return new Date(e.date)-new Date(t.date)}))}),Object(a.jsx)(h.a,{type:"chip",color:"yellow",label:O.h.cta.label,url:O.h.cta.url}),Object(a.jsx)("hr",{className:"rainbowSegment"})]}),Object(a.jsxs)("section",{children:[Object(a.jsx)("h2",{id:"people",children:O.g.title}),O.g.blurb&&Object(a.jsx)("p",{children:O.g.blurb}),Object(a.jsx)(h.a,{type:"avatar",color:"orange",label:O.g.cta.label,url:O.g.cta.url})]}),Object(a.jsxs)("section",{children:[Object(a.jsx)("h2",{id:"community",children:O.b.title}),O.b.blurb&&Object(a.jsx)("p",{children:O.b.blurb}),Object(a.jsx)("div",{style:{padding:"4rem",backgroundColor:"#ccc"},children:"[Get Involved? CommunityFeature? Video?]"}),Object(a.jsx)(h.a,{type:"people",color:"red",label:O.b.cta.label,url:O.b.cta.url}),Object(a.jsx)(y,{title:O.b.feature.title,description:O.b.feature.description,color:O.b.feature.color,link:O.b.feature.link.label,url:O.b.feature.link.url,children:w.a.list.slice(0,3).map((function(e){return Object(a.jsxs)("div",{className:"{item}",children:[Object(a.jsx)("img",{src:"".concat("/pages/OSP/comcast.github.io").concat(e.image),alt:""}),Object(a.jsx)("p",{children:Object(a.jsx)("a",{href:e.url,children:e.title})})]},e.url)}))})]}),Object(a.jsxs)("section",{children:[Object(a.jsx)("h2",{id:"events",children:O.d.title}),O.d.blurb&&Object(a.jsx)("p",{children:O.d.blurb}),Object(a.jsx)(g.a,{content:v.c.filter((function(e){return new Date(e.end)>=Date.parse(new Date)})).sort((function(e,t){return new Date(e.end)-new Date(t.end)})).slice(0,1)}),Object(a.jsx)(h.a,{type:"calendar",color:"purple",label:O.d.cta.label,url:O.d.cta.url})]}),Object(a.jsxs)("section",{children:[Object(a.jsx)("h2",{id:"posts",children:O.a.title}),O.a.blurb&&Object(a.jsx)("p",{children:O.a.blurb}),Object(a.jsx)(b.a,{content:x.a.sort((function(e,t){return new Date(t.date)-new Date(e.date)})).slice(0,O.a.featureCount)}),Object(a.jsx)(h.a,{type:"messages",color:"blue",label:O.a.cta.label,url:O.a.cta.url})]})]})]}):Object(a.jsx)("p",{children:"Loading..."})}},H0SL:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return o("Dtc0")}])},Lnsi:function(e,t,o){"use strict";var a=o("nKUr"),n=o("q1tI"),i=o("aUes"),c=function(e){var t=e.start,o=e.end,c=function(e){var t=Date.parse(e)-Date.parse(new Date),o=Math.floor(t/1e3%60),a=Math.floor(t/1e3/60%60),n=Math.floor(t/36e5%24);return{total:t,days:Math.floor(t/864e5),hours:n,minutes:a,seconds:o}},s=Object(n.useState)(t),r=s[0],l=s[1];return Object(n.useEffect)((function(){var e;return e=setInterval((function(){l(c(r).seconds-1e3)}),1e3),function(){return clearInterval(e)}}),[r]),Object(a.jsx)("div",{className:i.countdown,children:function(e,t){var o=Object(a.jsx)("p",{children:"This event has passed."});return c(e).total>=0&&c(t).total>=0&&(o=Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("span",{className:i.column,children:[Object(a.jsx)("strong",{children:c(e).days})," days"]}),Object(a.jsxs)("span",{className:i.column,children:[Object(a.jsx)("strong",{children:c(e).hours})," hours"]}),Object(a.jsxs)("span",{className:i.column,children:[Object(a.jsx)("strong",{children:c(e).minutes})," minutes"]}),Object(a.jsxs)("span",{className:i.column,children:[Object(a.jsx)("strong",{children:c(e).seconds})," seconds"]})]})),c(e).total<=0&&c(t).total>=0&&(o=Object(a.jsx)("p",{children:"This event is going on now!"})),o}(t,o)})},s=o("rL7K"),r=["January","February","March","April","May","June","July","August","September","October","November","December"];t.a=function(e){var t=e.content.map((function(e){var t,o,n,i,l,u,d,m=e.title,p=e.description,h=e.location,b=e.start,g=e.end,j=e.url,f=Date.parse(new Date),y=Date.parse(b),O=new Date(b),v=new Date(g),w=(t=O.getDate(),o=v.getDate(),n=O.getMonth(),i=v.getMonth(),l=O.getFullYear(),u=v.getFullYear(),l!==u?"".concat(r[n]," ").concat(t,", ").concat(l,"-").concat(r[i]," ").concat(o,", ").concat(u):n!==i?"".concat(r[n]," ").concat(t,"-").concat(r[i]," ").concat(o,", ").concat(l):t!==o?"".concat(r[n]," ").concat(t,"-").concat(o,", ").concat(l):"".concat(r[n]," ").concat(t,", ").concat(l)),x=function(e){return"".concat(e.city,", ").concat(e.state,", ").concat(e.country)};return Object(a.jsx)("article",{className:s.event,children:Object(a.jsxs)("div",{className:s.eventInfo,children:[Object(a.jsxs)("header",{children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{className:s.eventTitle,children:Object(a.jsx)("a",{className:s.link,href:j,children:m})}),Object(a.jsxs)("p",{className:s.eventDate,children:[w," ",(d=h,d.online?Object(a.jsx)("span",{className:s.location,children:Object(a.jsx)("a",{className:s.link,href:j,children:"online"})}):Object(a.jsxs)(a.Fragment,{children:[" in ",Object(a.jsx)("a",{className:s.link,href:j,children:x(d)})]}))]})]}),(y-f)/1e3/60/60/24>90&&Object(a.jsxs)("div",{className:s.daysAway,children:[Object(a.jsx)("strong",{children:Math.round((y-f)/1e3/60/60/24)})," days away"]})]}),Object(a.jsx)("p",{className:s.eventDescription,children:p}),(y-f)/1e3/60/60/24<90&&Object(a.jsx)(c,{start:b,end:g})]})},"events".concat(m))}));return Object(a.jsx)("section",{className:s.eventList,children:t})}},Rsnp:function(e){e.exports=JSON.parse('{"g":"Comcast Open Source Blog","f":"The Comcast Labs blog is a place where Comcast technologists talk about the work they are doing, the products, infrastructure, and services they are building, and the trends and developments that are changing how we experience entertainment.","d":"","e":"/images/blog/featured.jpg","c":"green","b":"Blogs posts","a":[{"title":"Comparing the Similarities and Differences between InnerSource and Open Source by Nithya Ruff","date":"November 27, 2020","url":"https://opensource.com/article/20/11/inner-source","image":"/images/blog/posts/whiteboard-brainstorming-brainmapping-design-thinking-postits-kanban.jpg"},{"title":"RealLIST Engineers 2020: Meet 21 influential technologists building a better Philadelphia by Paige Gross","date":"November 17, 2020","url":"https://technical.ly/philly/2020/11/17/reallist-engineers-2020-influential-technologists-philadelphia/","image":"/images/blog/posts/RealLIST-Engineers-Philly-2020.jpg"},{"title":"Open Source For Business Podcast with Nithya Ruff, Chair of The Linux Foundation & Head of Comcast\u2019s Open Source Program Office","date":"November 17, 2020","url":"https://podcasts.apple.com/us/podcast/e08-nithya-ruff-chair-linux-foundation-head-comcasts/id1525973271?i=1000498842461","image":"/images/blog/posts/mza_15502101781722997149.jpg"},{"title":"Expert advice on open source from Google, Microsoft, and Comcast by Matt Asay","date":"November 16, 2020","url":"https://www.techrepublic.com/article/expert-advice-on-open-source-from-google-microsoft-and-comcast/","image":"/images/blog/posts/open-source-linux-code.jpg"},{"title":"Three ways managers can build a team culture around open source by Shishir Kamboj","date":"November 13, 2020","url":"https://opensource.com/article/20/11/selfless-culture","image":"/images/blog/posts/handshake_teamwork_meeting_office_space.jpg"},{"title":"Google\'s Kelsey Hightower offers tips on how to centralize and evolve IT practices by Matt Asay","date":"October 16, 2020","url":"https://www.techrepublic.com/article/googles-kelsey-hightower-offers-tips-on-how-to-centralize-and-evolve-it-practices/","image":"/images/blog/posts/femaleengineer-istock-1146417905-metamorworks.jpg"},{"title":"Podcast: The Business of Cloud Native with Emily Omier and Nithya Ruff","date":"October 14, 2020","url":"https://open.spotify.com/show/5ZGTCyhjpnyZk5RDVH4WjS","image":""},{"title":"GPL Initiative Grows Over 40%; More Than 60 Companies Have Joined the Campaign for Greater Predictability in Open Source Licensing","date":"September 11, 2020","url":"https://www.redhat.com/en/about/press-releases/gpl-initiative-grows-over-40-more-60-companies-have-joined-campaign-greater-predictability-open-source-licensing?sc_cid=701f2000000tyBjAAI","image":""},{"title":"Meet these 12 tech companies and see who\u2019s hiring at the Sept. 23 Developers Conference","date":"September 10, 2020","url":"https://technical.ly/philly/2020/09/10/meet-11-tech-companies-hiring-september-23-developers-conference-philly-tech-week-2020/","image":""},{"title":"The Linux Foundation Announces the Full Line-up of Sessions for the Open Source Summit + Embedded Linux Conference Europe 2020 Virtual Experience, October 26 - 29 Open for all - Anytime. Anywhere.","date":"September 3, 2020","url":"https://www.prnewswire.com/news-releases/the-linux-foundation-announces-the-full-line-up-of-sessions-for-the-open-source-summit--embedded-linux-conference-europe-2020-virtual-experience-october-26---29-open-for-all---anytime-anywhere-301123877.html","image":""},{"title":"Why Comcast open sourced its DNS management tool by Paul James Cleary","date":"August 28, 2020","url":"https://opensource.com/article/20/9/open-source-dns","image":""},{"title":"Why Your OSPO Needs to Invest in More Than Compliance","date":"August 19, 2020","url":"https://www.finos.org/blog/posts/why-your-ospo-needs-to-invest-in-more-than-compliance-nithya-ruff-comcast","image":""},{"title":"Code for Philly\u2019s new technical fellowship offers paid skills development and mentorship by Michael Butler","date":"August 17, 2020","url":"https://technical.ly/philly/2020/08/17/code-for-philly-new-technical-fellowship-paid-skills-development-mentorship/","image":""},{"title":"Modernize network function development with this Rust-based framework by Zeeshan Lakhani","date":"August 5, 2020","url":"https://opensource.com/article/20/8/capsule-networking","image":""},{"title":"Why You Should Consider Establishing an Open Source Program Office by Myles Fenlon","date":"July 30, 2020","url":"https://thenewstack.io/why-you-should-consider-establishing-an-open-source-program-office/","image":""},{"title":"Open source contributions face friction over company IP","date":"July 6, 2020","url":"https://searchitoperations.techtarget.com/news/252485541/Open-source-contributions-face-friction-over-company-IP","image":""},{"title":"Comcast\'s Larry Maccherone on driving digital transformation by Sean Galea-Pace","date":"July 2, 2020","url":"https://www.mobileworldmagazine.com/interviews/comcasts-larry-maccherone-driving-digital-transformation","image":""},{"title":"Comcast: Introducing DevSecOps at Scale by Sean Galea-Pace","date":"July 1, 2020","url":"https://www.mobileworldmagazine.com/company/comcast-introducing-devsecops-scale","image":""},{"title":"K8s KPIs with Kuberhealthy by Joshulyne Park, Eric Greer","date":"May 29, 2020","url":"https://kubernetes.io/blog/posts/2020/05/29/k8s-kpis-with-kuberhealthy/","image":""},{"title":"A Big Thank You to OSS Summit + Embedded Linux Conference NA 2020 Program Committee Members!","date":"May 12, 2020","url":"https://events.linuxfoundation.org/2020/05/12/a-big-thank-you-to-our-open-source-summit-embedded-linux-conference-north-america-2020-program-committee-members/","image":""},{"title":"Committing to innovation: Comcast\u2019s Nithya Ruff talks Open Source with GitHub COO Erica Brescia","date":"May 6, 2020","url":"https://www.linkedin.com/pulse/committing-innovation-comcasts-nithya-ruff-talks-open-erica-brescia/?trackingId=05hzrZWrTW%2B0Nl2FMcRpDg%3D%3D","image":""},{"title":"Collaboration for a Cause by Shilla Saebi","date":"March 27, 2020","url":"https://medium.com/@ShillaSaebi/collaboration-for-a-cause-beedfab787ca","image":""},{"title":"Black History Month: Hear from 5 Technology Innovators by Shilla Saebi","date":"February 28, 2020","url":"https://medium.com/@ShillaSaebi/black-history-month-hear-from-5-technology-innovators-ec6954ca2d61","image":""},{"title":"4 technologists on careers in tech for minorities by Shilla Saebi","date":"February 28, 2020","url":"https://opensource.com/article/20/2/careers-tech-minorities","image":""},{"title":"Meet the Community Devroom Speakers Alison & Shilla by Leslie Hawthorn & Laura Czajkowsk","date":"January 29, 2020","url":"https://medium.com/@leslielauralive/meet-the-community-devroom-speakers-alison-shilla-28f9a8b129e9","image":""}]}')},YHDQ:function(e){e.exports=JSON.parse('{"i":"Open Source Software at Comcast","f":"Comcast NBCUniversal is committed to open source software. We use it to build products, attract talent, and evolve the technology we use to improve the customer experience.","c":"Beyond using open-source technologies to build our products, we contribute actively to a wide range of open-source and open-standards groups including the Linux Foundation, OpenStack Foundation, Apache Foundation, Cloud Foundry Foundation and Internet Engineering Task Force, to name just a few. We also encourage and support our software engineers in open-sourcing the projects they develop at Comcast. \xb6 We know the collective development ethos behind robust open source projects makes our products better and more powerful and we\u2019re committed to being part of the global open source community now and into the future.","e":[{"id":1,"title":"Comcast Open Source","description":"Comcast NBCUniversal is committed to open source software. We use it to build products, attract talent, and evolve the technology we use to improve the customer experience.","image":"/images/jumbotron/ctc_eng.jpg"},{"id":2,"title":"Hacktoberfest 2020","description":"Hacktoberfest is back again! It\u2019s an exciting way to contribute to Open Source projects at Comcast!","image":"/images/jumbotron/hacktoberfest2020.svg","cta":{"url":"/hacktoberfest.html","lead":"Find out more about ","label":"Hacktoberfest at Comcast"}},{"id":3,"title":"Open Source Grants","description":"The Comcast Innovation Fund provides grants for both open source and educational research. The Open Source Development Grants fund development of open source software in areas benefiting cable, internet and broadband industries.","image":"/images/jumbotron/comcast_open_source_grants001.jpg","cta":{"url":"http://innovationfund.comcast.com/","lead":"","label":"Visit the Comcast Innovation Fund"}},{"id":4,"title":"Careers at Comcast","description":"At Comcast, we are always looking for new talent to join our diverse and growing teams. [What tech could I work on at Comcast?: Machine Learning for proactive customer support! VR in X1 consoles! Assistive Technologies on Xfinity! Internal education opportunies: Labweek, Knowledgefest, and Comcast University]","image":"/images/jumbotron/careers_comcast001.jpg","cta":{"url":"https://jobs.comcast.com/","lead":"Create the future with us at ","label":"jobs.comcast.com"}}],"h":{"title":"Featured Projects","blurb":"We should say something about our featured projects.","cta":{"label":"Browse through the Comcast Open Source Projects","url":"/projects"}},"g":{"title":"Featured People","blurb":"Our people who speak on the subject of Open Source and Open Source technologies. Experts, mentors, and community leaders. Come see their latest talks in our quarterly virtual conference digest.","cta":{"label":"Meet our people","url":"/people"},"feature":""},"b":{"title":"Community Involvement","blurb":"Catch up with us \u2014 at events, online, and on social media \u2014 to ask us about what we\u2019re doing to support the Open Source community. Or, get involved on one of our Open Source projects.","cta":{"label":"Check out our contributions to the Open Source community","url":"/community"},"feature":{"title":"Affiliates","description":"Comcast is proud to support a variety of organizations in the Open Source community.","color":"blue","link":{"label":"View the complete list of Open Source affiliates","url":"/community#affiliates"}}},"d":{"title":"Upcoming Events","blurb":"Upcoming Open Source events and events where we\u2019ll be discussing Open Source technologies, standards, and the philosophy of Open Source.","cta":{"label":"See the entire list of Events","url":"/events"}},"a":{"title":"Latest Blog Posts","cta":{"label":"Read the Comcast Open Source Blog posts","url":"/blog"},"featureCount":3}}')},aBFz:function(e,t,o){"use strict";var a=o("nKUr"),n=(o("Aiso"),o("jMQc"));t.a=function(e){var t=e.title,o=e.author,i=e.description,c=e.date,s=e.image,r=e.url,l=e.defaultImage,u=function(e){return e.split("").reduce((function(e,t){var o=(e<<5)-e+t.charCodeAt(0);return o&o}),0)},d=function(e){var t=(16777215&e).toString(16).toUpperCase();return"00000".substring(0,6-t.length)+t},m=!s&&"linear-gradient(0deg, #".concat(d(u(t)),"ee 0%, #").concat(d(u(t)),'aa 100%), url("').concat("/pages/OSP/comcast.github.io").concat(l||"/images/blog/featured.jpg",'")');return Object(a.jsxs)("article",{className:n.article,children:[Object(a.jsx)("div",{className:n.articleImage,style:{backgroundImage:m},children:s&&Object(a.jsx)("img",{src:"".concat("/pages/OSP/comcast.github.io").concat(s),alt:"",layout:"fill",objectfit:"cover",objectposition:"center",loading:"lazy"})}),Object(a.jsxs)("div",{className:n.articleMessage,children:[Object(a.jsx)("h3",{className:n.articleTitle,children:Object(a.jsx)("a",{className:n.articleLink,href:r,children:t})}),Object(a.jsx)("p",{className:n.articleDate,children:c}),o&&Object(a.jsxs)("p",{className:n.articleAuthor,children:["by ",o]}),i&&Object(a.jsx)("p",{className:n.articleDescription,children:i})]})]},"articles".concat(t))}},aUes:function(e,t,o){e.exports={countdown:"style_countdown__3yxJu",column:"style_column__30hKm"}},"e/Q5":function(e,t,o){"use strict";var a=o("nKUr"),n=o("aBFz"),i=o("+QPN");t.a=function(e){var t=e.content,o=e.defaultImage;return Object(a.jsx)("section",{className:i.articleList,children:t.map((function(e){var t=e.title,i=e.author,c=e.description,s=e.date,r=e.image,l=e.url;return Object(a.jsx)(n.a,{title:t,author:i,description:c,date:s,image:r,url:l,defaultImage:o},l)}))})}},jMQc:function(e,t,o){e.exports={article:"style_article__G2F_K",articleLink:"style_articleLink__LVN4J",articleTitle:"style_articleTitle__1iMT-",articleDate:"style_articleDate__2XXYW",articleMessage:"style_articleMessage__3IXRk",articleDescription:"style_articleDescription__1JuJ0",articleImage:"style_articleImage__3WIEC"}},kfej:function(e,t,o){e.exports={jumbotron:"style_jumbotron__FTgCH",jumbotronTabs:"style_jumbotronTabs__1-jTz",jumbotronTab:"style_jumbotronTab__3_5oh",selected:"style_selected__aKOR0",next:"style_next__e5vdE",prev:"style_prev__3jC2F",jumbotronPanel:"style_jumbotronPanel__3TWZt",card:"style_card__1h0aH",cardTitle:"style_cardTitle__R_BJq",featuredImage:"style_featuredImage__2yCJH","zoom-out":"style_zoom-out__1sa-0",cta:"style_cta__kqL4B"}},rL7K:function(e,t,o){e.exports={event:"style_event__3PBpk",link:"style_link__hn8lN",eventTitle:"style_eventTitle__1ziN7",eventDate:"style_eventDate__104_u",location:"style_location__35WPi",daysAway:"style_daysAway__2VXX2",eventImage:"style_eventImage__3GwgO"}},"ro+b":function(e){e.exports=JSON.parse('{"i":"Community","g":"We foster people and projects in the Open Source community.","c":"Beyond using open-source technologies to build our products, we contribute actively to a wide range of open-source and open-standards groups including the Linux Foundation, OpenStack Foundation, Apache Foundation, Cloud Foundry Foundation and Internet Engineering Task Force, to name just a few. You\u2019ve just stopped being a developer group. You\u2019ve now become something unstoppable. I hereby pronounce you a Community.","d":"/images/community/featured.jpg","b":"purple","f":{"title":"Get Involved","description":"Contribute to the Comcast Open Source community. We\u2019re always seeking to encourage new contributors. If you\u2019re an open source developer, we hope you\u2019ll visit our site, check out the projects we\u2019re working on and consider contributing back. Not all contributions have to be code. Documentation improvements are also valuable, and so are bug reports. Check back often for the latest developments. If our projects pique your interest, check out our open jobs and come work at Comcast."},"e":{"title":"Open Source Grants","description":"The Comcast Innovation Fund provides grants for both open source and educational research. The Open Source Development Grants fund development of open source software in areas benefiting cable, internet and broadband industries.","image":"/images/community/comcast_innovation_fund.png","cta":{"url":"http://innovationfund.comcast.com/","lead":"","label":"Visit the Comcast Innovation Fund"}},"h":{"title":"Social Media","description":"See what\u2019s happening on social media with Open Source. Follow the activity Comcast Open Source Projects, Open Source community, or Comcast Open Source Program Office and our people active in the Open Source community."},"a":{"title":"Affiliates","description":"We contribute actively to a wide range of open-source and open-standards groups.","list":[{"title":"Apache","type":"Platinum","description":"The mission of the Apache Software Foundation (ASF) is to provide software for the public good. We do this by providing services and support for many like-minded software project communities consisting of individuals who choose to participate in ASF activities.","url":"https://www.apache.org/","image":"/images/community/affiliates/apache.svg"},{"title":"Cloud Foundry","type":"Silver","description":"The Cloud Foundry Foundation exists to drive the global awareness and adoption of the Cloud Foundry open source project, to grow a vibrant community of contributors, and to create coherence in strategy and action across all member companies for the sake of the project.","url":"https://www.cloudfoundry.org/","image":"/images/community/affiliates/cloud_foundry.svg"},{"title":"Cloud Native Computing Foundation","type":"Silver","description":"Cloud native technologies empower organizations to build and run scalable applications in modern, dynamic environments such as public, private, and hybrid clouds. Containers, service meshes, microservices, immutable infrastructure, and declarative APIs exemplify this approach.","url":"https://www.cncf.io/","image":"/images/community/affiliates/cncf.svg"},{"title":"The Linux Foundation","type":"silver","description":"The Linux Foundation is dedicated to building sustainable ecosystems around open source projects to accelerate technology development and industry adoption.","url":"https://www.linuxfoundation.org/","image":"/images/community/affiliates/linux_foundation.svg"},{"title":"RDK","type":"preferred","description":"Reference Design Kit, is a fully modular, portable, and customizable open source software solution that standardizes core functions used in video, broadband and IoT devices.","url":"https://rdkcentral.com/","image":"/images/community/affiliates/rdk.svg"},{"title":"Yocto Project","type":"members","description":"The Yocto Project (YP) is an open source collaboration project that helps developers create custom Linux-based systems regardless of the hardware architecture.","url":"https://www.yoctoproject.org","image":"/images/community/affiliates/yocto_project.svg"},{"title":"OpenStack","type":"members","description":"OpenStack software controls large pools of compute, storage, and networking resources throughout a datacenter, managed through a dashboard or via the OpenStack API. OpenStack works with popular enterprise and open source technologies making it ideal for heterogeneous infrastructure.","url":"https://www.openstack.org/","image":"/images/community/affiliates/openstack.svg"},{"title":"OpenChain","type":"members","description":"The OpenChain Project builds trust in open source by making open source license compliance simpler and more consistent.","url":"https://www.openchainproject.org","image":"/images/community/affiliates/openchain.svg"},{"title":"ToDo Group","type":"members","description":"TODO is an open group of companies who want to collaborate on practices, tools, and other ways to run successful and effective open source projects and programs.","url":"https://todogroup.org","image":"/images/community/affiliates/todo_group.svg"}]}}')}},[["H0SL",0,2,1,3,4]]]);