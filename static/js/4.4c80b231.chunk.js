(this.webpackJsonpdev=this.webpackJsonpdev||[]).push([[4],{100:function(e,a,t){e.exports=t.p+"static/media/defaultAvatar.075fe2c0.svg"},101:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAM1BMVEX///////8dtAD/AAD/PlcAAAD/39//n5//Pz//Hx//X1//v7//Vmz/5ur/hpb/tsD/boHXDnb5AAAAU0lEQVQYlYXK2QrAIAxEUYeEuNSo//+1ahdISqH3YQKHBHoVvgA7ickAUS6CaGGRIDmggsNDhni4bmBmgHcVutZAQ/egGAZq0/PhhpX2wQ+4/mEC6f0D6yW3InMAAAAASUVORK5CYII="},102:function(e,a,t){},103:function(e,a,t){},104:function(e,a,t){},107:function(e,a,t){"use strict";t.r(a);var n=t(3),l=t.n(n),c=(t(73),t(45)),r=t(49),s=t.n(r),o=t(80),m=t.n(o),i=(t(81),t(47)),E=t.n(i),u=(t(83),t(52)),d=t(105),p={current:null},v=Object(n.createContext)({current:"null",scrollChange:function(){}});function g(e,a){switch(a.type){case"CHANGE":return Object(d.a)(Object(d.a)({},e),{},{current:a.payload});default:return e}}function h(e){var a=Object(n.useReducer)(g,p),t=Object(u.a)(a,2),c=t[0],r=t[1];return l.a.createElement(v.Provider,Object.assign({value:{current:c.current,scrollChange:function(e){r({type:"CHANGE",payload:e})}}},e))}var f=t(13),b=t(48);var N=function(e){var a=e.heading;return l.a.createElement(c.Row,{center:"xs"},l.a.createElement(c.Col,{xs:8},l.a.createElement("div",{className:"banner-content"},l.a.createElement("h1",{style:{textShadow:"2px 2px #7f5af0"}}," ",l.a.createElement(E.a,{bottom:!0,big:!0,cascade:!0},a)))))};var A=function(){var e=Object(n.useContext)(v).scrollChange;return l.a.createElement(n.Fragment,null,b.isMobile&&l.a.createElement(N,{heading:"About"}),l.a.createElement("section",{className:"about_section section section2",id:"aboutSection",name:"about"},l.a.createElement(s.a,{onChange:function(a){a&&e("about")}},l.a.createElement(E.a,{bottom:!0,cascade:!0},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"device"},l.a.createElement("div",{className:"frame"},l.a.createElement("div",{className:"screen"},l.a.createElement("div",{className:"window-content"},l.a.createElement("h2",null,l.a.createElement(m.a,{cursor:{show:!0,hideWhenDone:!1,hideWhenDoneDelay:1e3},avgTypingSpeed:200,avgTypingDelay:20},l.a.createElement("p",{className:"line"}," ",f.a.admin,":",l.a.createElement("span",{style:{color:"#7f5af0"}},"~"),"$",f.a.firstCommand),l.a.createElement(m.a.Delay,{ms:1e3}),l.a.createElement("p",{className:"line"}," ",f.a.admin,":",l.a.createElement("span",{style:{color:"#7f5af0"}},"~"),"$",f.a.secondCommand),l.a.createElement("br",null),l.a.createElement("p",{className:"line"},f.a.about),l.a.createElement("span",null," ",f.a.admin,":",l.a.createElement("span",{style:{color:"#7f5af0"}},"~"),"$"," "))))))))))))},x=t(56),w=t.n(x),k=(t(85),t(64)),C=t.n(k);var y=function(){var e=Object(n.useContext)(v).scrollChange,a=f.h.skillsSet.map((function(e,a){return l.a.createElement(c.Col,{xs:2,key:a}," ",l.a.createElement("i",{className:"".concat(e.fontAwesomeClassname," skill_img")})," ")})),t=f.h.skillsTagLines.map((function(e,a){return l.a.createElement("h3",{className:"skills_section_skill",key:a},l.a.createElement("img",{draggable:"false",className:"emoji",alt:"\ud83d\udca0",src:"https://twemoji.maxcdn.com/v/13.0.0/72x72/26a1.png"}),e)}));return l.a.createElement(n.Fragment,null,b.isMobile&&l.a.createElement(N,{heading:"Skills",style:{marginBottom:"60px"}}),l.a.createElement("section",{className:"section section3",id:"skillsSection",name:"skills"},l.a.createElement("div",{className:"site-container"},l.a.createElement(s.a,{onChange:function(a){a&&e("skills")}},l.a.createElement(c.Row,{around:"xs",middle:"xs",center:"xs",start:"lg"},l.a.createElement(c.Col,{xs:12,lg:6},l.a.createElement(w.a,{left:!0}," ",l.a.createElement("img",{src:C.a,alt:"skills"})," ")),l.a.createElement(c.Col,{xs:12,lg:6},l.a.createElement(E.a,{bottom:!0,cascade:!0},l.a.createElement(c.Row,{around:"xs",middle:"xs",className:"skills_section_skillsSets"}," ",a," "),t)))))))};var H=function(e){var a=e.repo;return l.a.createElement(c.Col,{xs:12,lg:6},l.a.createElement("div",{className:"repo_card",key:a.node.id,onClick:function(){window.open(a.node.url,"_blank").focus()}},l.a.createElement("div",{className:"repo_title_container"},l.a.createElement("svg",{"aria-hidden":"true",className:"octicon repo-svg",height:"24",role:"img",viewBox:"0 0 12 16",width:"12",fill:"#94a1b2"},l.a.createElement("path",{fillRule:"evenodd",d:"M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"})),l.a.createElement("p",{className:"repo_title"},a.node.name)),l.a.createElement("p",{className:"repo_description"},a.node.description),l.a.createElement("div",{className:"repo_stats"},l.a.createElement("div",{className:"repo_stats_left"},l.a.createElement("span",null,l.a.createElement("div",{className:"language_color",style:{backgroundColor:a.node.primaryLanguage.color}}),l.a.createElement("p",null,a.node.primaryLanguage.name)),l.a.createElement("span",null,l.a.createElement("svg",{"aria-hidden":"true",className:"octicon repo-star-svg",height:"16",role:"img",viewBox:"0 0 10 16",width:"10",fill:"rgb(106, 115, 125)"},l.a.createElement("path",{fillRule:"evenodd",d:"M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"})),l.a.createElement("p",null,a.node.forkCount)),l.a.createElement("span",null,l.a.createElement("svg",{"aria-hidden":"true",className:"repo_stars octicon",height:"16",role:"img",viewBox:"0 0 14 16",width:"14",fill:"rgb(106, 115, 125)"},l.a.createElement("path",{fillRule:"evenodd",d:"M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"})),l.a.createElement("p",null,a.node.stargazers.totalCount))),l.a.createElement("div",{className:"repo_stats_right"},l.a.createElement("p",null,a.node.diskUsage," KB")))))},j=(t(86),t(87)),z=t(19);function S(){var e=Object(j.a)(["\n  query FetchQuery($login: String!, $first: Int!) {\n    user(login: $login) {\n      pinnedItems(first: $first, types: [REPOSITORY]) {\n        totalCount\n        edges {\n          node {\n            ... on Repository {\n              name\n              description\n              forkCount\n              stargazers {\n                totalCount\n              }\n              url\n              id\n              diskUsage\n              primaryLanguage {\n                name\n                color\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"]);return S=function(){return e},e}var T=Object(z.b)(S()),V=t(44);var O=function(e){var a=e.message;return l.a.createElement("div",{className:a.type},l.a.createElement("div",{className:"msg-".concat(a.type)},l.a.createElement("div",{className:"letter"})),l.a.createElement("div",{className:"shadow"}),l.a.createElement("h1",{className:"title"},a.title),a.desc&&l.a.createElement("p",{className:"message"},a.desc))};var R=function(){var e=Object(n.useContext)(v).scrollChange,a=f.f.githubUserName,t=f.f.numberOfRepos,r=t>4?4:t,o=Object(n.useState)(r),m=Object(u.a)(o,2),i=m[0],d=m[1],p=Object(V.a)(T,{variables:{login:a,first:i}}),g=p.loading,h=p.error,A=p.data;return l.a.createElement(n.Fragment,null,b.isMobile&&l.a.createElement(N,{heading:"Open Source",style:{marginBottom:"70px"}}),l.a.createElement("section",{className:"section section4",id:"githubSection",name:"openSources"},l.a.createElement(s.a,{onChange:function(a){a&&e("github")}},g?l.a.createElement(O,{message:{type:"success",title:"Loading..."}}):h?l.a.createElement(O,{message:{type:"error",title:"Error",desc:"Whoops! Sorry for the inconvenience, something went wrong."}}):l.a.createElement("div",{className:"site-container"},l.a.createElement(E.a,{bottom:!0},l.a.createElement(c.Row,{around:"xs",className:"githubRepoCards"},A.user.pinnedItems.edges.map((function(e,a){return l.a.createElement(H,{repo:e,key:e.node.id})}))),l.a.createElement(c.Row,{around:"xs"},l.a.createElement("div",{className:"banner-content"},l.a.createElement("div",{className:"banner-btns"},t>i?l.a.createElement("button",{className:"btn btn-1",onClick:function(){d(t)}},"View more"):l.a.createElement("a",{href:f.i.github,target:"_blank",rel:"noopener noreferrer",className:"btn btn-1"},"View more")," "))))))))},_=t(57);var L=function(){var e=Object(n.useState)(!1),a=Object(u.a)(e,2),t=a[0],c=a[1];return l.a.createElement(n.Fragment,null,l.a.createElement("li",null,l.a.createElement("div",{className:"ham",onClick:function(){c(!t)}},l.a.createElement("i",{className:"fas fa-bars hamBurger"}))),l.a.createElement("div",{className:"".concat(t&&"open"," overlay"),id:"overlay"},l.a.createElement("nav",{className:"overlay-menu"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(_.Link,{to:"home",spy:!0,smooth:!0,duration:1e3,onClick:function(){c(!t)}},l.a.createElement("p",null,"Home"))),l.a.createElement("li",null,l.a.createElement(_.Link,{to:"about",spy:!0,smooth:!0,duration:1e3,onClick:function(){c(!t)}},l.a.createElement("p",null,"About"))),l.a.createElement("li",null,l.a.createElement(_.Link,{to:"skills",spy:!0,smooth:!0,duration:1e3,onClick:function(){c(!t)}},l.a.createElement("p",null,"Skills"))),l.a.createElement("li",null,l.a.createElement(_.Link,{to:"openSources",spy:!0,smooth:!0,duration:1e3,onClick:function(){c(!t)}},l.a.createElement("p",null,"Open Source"))),l.a.createElement("li",null,l.a.createElement(_.Link,{to:"projects",spy:!0,smooth:!0,duration:1e3,onClick:function(){c(!t)}},l.a.createElement("p",null,"Project"))),l.a.createElement("li",null,l.a.createElement(_.Link,{to:"experiences",spy:!0,smooth:!0,duration:1e3,onClick:function(){c(!t)}},l.a.createElement("p",null,"Experiences"))),l.a.createElement("li",null,l.a.createElement(_.Link,{to:"contact",spy:!0,smooth:!0,duration:1e3,onClick:function(){c(!t)}},l.a.createElement("p",null,"Contact")))))))},U=l.a.createElement(E.a,{left:!0,big:!0,cascade:!0},f.c.username);var B=function(){return l.a.createElement(c.Col,{xs:4},l.a.createElement("div",{className:"brand"},l.a.createElement("h1",{className:"logo logo--stroke logo--shadow"},U)))},I=t(95);function J(e){var a=e.app;return l.a.createElement(I.a,null,l.a.createElement("meta",{charSet:"utf-8"}),l.a.createElement("meta",{name:"description",content:a.description}),l.a.createElement("title",null,a.title),l.a.createElement("link",{rel:"canonical",href:"http://mysite.com/example"}),l.a.createElement("link",{rel:"icon",type:"image/png",href:t(68)("./".concat(a.icon?a.icon:"icon.png")),sizes:"500x500"}))}var D=function(){return l.a.createElement("header",{className:"site-header"},l.a.createElement(J,{app:f.b}),l.a.createElement("div",{className:"site-container"},l.a.createElement(c.Row,{start:"lg",end:"xs"},l.a.createElement(B,null),l.a.createElement(c.Col,{lg:8,xs:8},l.a.createElement(c.Row,{around:"lg",end:"xs"},l.a.createElement(c.Col,{lg:9,xs:4}),l.a.createElement(c.Col,{lg:3,xs:8},l.a.createElement("ul",{className:"social-networks spin-icon"},l.a.createElement("li",null,l.a.createElement("a",{href:f.i.github,className:"icon-github social-network-link"},"github")),l.a.createElement(L,null))))))))};var G=function(e){var a=e.bannerSection;return l.a.createElement(c.Col,{lg:5,xs:12},l.a.createElement("div",{className:"banner-content"},l.a.createElement("h1",null," ",l.a.createElement(E.a,{bottom:!0,big:!0,cascade:!0},a.bannerHeading)),l.a.createElement(E.a,{bottom:!0,cascade:!0},l.a.createElement("p",null,a.bannerTagLine)),l.a.createElement("div",{className:"banner-btns"},l.a.createElement(_.Link,{to:"contact",spy:!0,smooth:!0,duration:1e3},l.a.createElement("button",{className:"btn btn-1"},"CONTACT")),l.a.createElement("a",{href:a.resumeLink,target:"_blank",rel:"noopener noreferrer",className:"btn btn-1"},"RESUME"))),l.a.createElement(c.Row,{center:"xs"},l.a.createElement(c.Col,{xs:2},b.isMobile?l.a.createElement("div",{className:"icon hidden-lg",onClick:function(){}},l.a.createElement("div",{className:"icon-wrapper"},l.a.createElement("div",{className:"hand-icon"},l.a.createElement("div",{className:"hand"},l.a.createElement("div",{className:"circle"}))))):l.a.createElement("div",{className:"icon hidden-sm hidden-md",onClick:function(){}},l.a.createElement("div",{className:"icon-wrapper"},l.a.createElement("div",{className:"mouse-icon"},l.a.createElement("div",{className:"mouse"}),l.a.createElement("span",{className:"arrow arrow-01"}),l.a.createElement("span",{className:"arrow arrow-02"}),l.a.createElement("span",{className:"arrow arrow-03"})))))))};var F=function(e){var a=e.bannerSection;return l.a.createElement(n.Fragment,null," ",l.a.createElement(c.Col,{lg:4,xs:12},l.a.createElement(w.a,{left:!0},l.a.createElement("div",{className:"hero-image shape"}," ",l.a.createElement("div",{className:"defaultAvatar.svg"===a.bannerAvatar?"wrap-default":"wrap-image"},l.a.createElement("img",{src:t(68)("./".concat(a.bannerAvatar)),alt:"",className:"hero-image_img"}))))),l.a.createElement(c.Col,{xs:1}))};var Y=function(){var e=Object(n.useContext)(v).scrollChange;return l.a.createElement("section",{className:"section section1",id:"bannerSection",name:"home"},l.a.createElement("div",{className:"site-container"},l.a.createElement(s.a,{onChange:function(a){a&&e("home")}},l.a.createElement(c.Row,{around:"xs",middle:"xs",center:"xs"},b.isMobile?l.a.createElement(n.Fragment,null," ",l.a.createElement(F,{bannerSection:f.c}),l.a.createElement(G,{bannerSection:f.c})," "):l.a.createElement(n.Fragment,null," ",l.a.createElement(G,{bannerSection:f.c}),l.a.createElement(F,{bannerSection:f.c})," ")))))};var X=function(e){var a=e.experience,t=Object(n.useContext)(v).scrollChange;return l.a.createElement("div",{id:"time_line_5cf90ca818f641",className:"time_line-item  item_show"},l.a.createElement("div",{className:"time_line-date_wrap"},l.a.createElement("div",{className:"seofy_hexagon"},l.a.createElement("svg",{style:{fill:" #7f5af0"},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 177.4 197.4"},l.a.createElement("path",{d:"M0,58.4v79.9c0,6.5,3.5,12.6,9.2,15.8l70.5,40.2c5.6,3.2,12.4,3.2,18,0l70.5-40.2c5.7-3.2,9.2-9.3,9.2-15.8V58.4 c0-6.5-3.5-12.6-9.2-15.8L97.7,2.4c-5.6-3.2-12.4-3.2-18,0L9.2,42.5C3.5,45.8,0,51.8,0,58.4z"}))),l.a.createElement("div",{className:"seofy_hexagon"},l.a.createElement("svg",{style:{fill:" #7f5af0",filter:"drop-shadow(4px 5px 4px #7f5af022)"},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 177.4 197.4"},l.a.createElement("path",{d:"M0,58.4v79.9c0,6.5,3.5,12.6,9.2,15.8l70.5,40.2c5.6,3.2,12.4,3.2,18,0l70.5-40.2c5.7-3.2,9.2-9.3,9.2-15.8V58.4 c0-6.5-3.5-12.6-9.2-15.8L97.7,2.4c-5.6-3.2-12.4-3.2-18,0L9.2,42.5C3.5,45.8,0,51.8,0,58.4z"}))),l.a.createElement(s.a,{onChange:function(e){e&&t("experiences")}},l.a.createElement("h4",{className:"time_line-date"},a.experienceDuration))),l.a.createElement("div",{className:"time_line-content"},l.a.createElement("h5",{className:"time_line-title"},a.experienceTitle),l.a.createElement("div",{className:"time_line-descr"},a.experienceDesc),l.a.createElement("div",{className:"languages"},l.a.createElement("div",{className:"languages-profile"},l.a.createElement("div",{className:"languages-name"},a.experienceTags.map((function(e,a){return l.a.createElement("span",{key:a},e)})))))))};t(102);var q=function(){var e=f.e.experiences.map((function(e,a){return l.a.createElement(X,{experience:e,key:a})}));return l.a.createElement(n.Fragment,null,b.isMobile&&l.a.createElement(N,{heading:"Experience"}),l.a.createElement("section",{className:"section section6",id:"experiencesSection",name:"experiences"},l.a.createElement("div",null,l.a.createElement(E.a,{bottom:!0},l.a.createElement("div",{className:"container experience-row-animation"},l.a.createElement("div",null,l.a.createElement("div",{"data-vc-full-width":"true","data-vc-full-width-init":"true",className:"vc_row wpb_row vc_row-fluid vc_custom_1542873226451 vc_row-has-fill experience-row-animation",style:{left:"-11.2px",boxSizing:"border-box",paddingLeft:"11.2px",paddingRight:"10.8px",position:"relative"}},l.a.createElement("div",{className:"experience_column vc_column_container vc_col-sm-12"},l.a.createElement("div",{className:"vc_column-inner "},l.a.createElement("div",{className:"wpb_wrapper"},l.a.createElement("div",{className:"experience_spacing"},l.a.createElement("div",{className:"spacing_size spacing_size-initial",style:{height:"30px"}})),l.a.createElement("div",{className:"experience_time_line_vertical appear_anim"},e),l.a.createElement("div",{id:"seofy_spacer_5cf90ca8190c4",className:"experience_spacing responsive_active"})))))))))))},M=t(72),Z=t.n(M);var K=function(e){var a=e.project,t=Object(n.useContext)(v).scrollChange;return l.a.createElement(s.a,{onChange:function(e){e&&t("projects")}},l.a.createElement("div",{className:"project-card"},l.a.createElement("div",{className:"content-wrapper"},l.a.createElement("img",{src:Z.a,alt:"",className:"project-card-img"}),l.a.createElement("div",{className:"card-content"},l.a.createElement("div",{className:"project-name"},a.projectName),l.a.createElement("div",{className:"card-bio"},a.projectBio))),l.a.createElement("div",{className:"languages"},l.a.createElement("div",{className:"languages-profile"},l.a.createElement("div",{className:"languages-name"},a.stackList.map((function(e,a){return l.a.createElement("span",{key:a},e)})))))))};t(103);var P=function(){var e=f.g.projects.map((function(e,a){return l.a.createElement(K,{project:e,key:a})})),a=e.length>2?2:e.length,t=Object(n.useState)(a),r=Object(u.a)(t,2),s=r[0],o=r[1];return l.a.createElement(n.Fragment,null,b.isMobile&&l.a.createElement(N,{heading:"Projects",style:{marginBottom:"30px"}}),l.a.createElement("section",{className:"section section5",name:"projects"},l.a.createElement("div",{className:"site-container"},l.a.createElement(E.a,{bottom:!0},l.a.createElement("div",{className:"project-cards"},e.slice(0,s)),l.a.createElement(c.Row,{around:"xs"},l.a.createElement("div",{className:"banner-content"},l.a.createElement("div",{className:"banner-btns"},e.length>s?l.a.createElement("button",{className:"btn btn-1",onClick:function(){o(e.length)}},"View more"):e.length<s?"":l.a.createElement("button",{className:"btn btn-1",onClick:function(){o(a)}},"View less")," ")))))))},W=(t(104),t(71)),Q=t.n(W);var $=function(){var e=Object(n.useContext)(v).scrollChange,a=f.i.github,t=f.i.linkden,r=f.i.instagram,o=f.i.facebook,m=f.i.twitter,i=f.d.contactList.map((function(e,a){return l.a.createElement(c.Col,{xs:12,key:a},l.a.createElement("h2",{className:"contact_section_contact"},l.a.createElement("img",{draggable:"false",className:"emoji",alt:"\ud83d\udca0",src:"https://twemoji.maxcdn.com/v/13.0.0/72x72/1f4d2.png"}),e))}));return l.a.createElement(n.Fragment,null,b.isMobile&&l.a.createElement(N,{heading:"Contact",style:{marginBottom:"60px"}}),l.a.createElement("section",{className:"section section7",id:"contactSection",name:"contact"},l.a.createElement("div",{className:"site-container"},l.a.createElement(s.a,{onChange:function(a){a&&e("contact")}},l.a.createElement(c.Row,{around:"xs",middle:"xs",center:"xs"},l.a.createElement(c.Col,{lg:6,xs:12},l.a.createElement(w.a,{left:!0}," ",l.a.createElement("img",{src:Q.a,alt:"skills",className:"portfolio_skill_section_img",style:{maxWidth:"100%"}})," ")),l.a.createElement(c.Col,{lg:6,xs:12},l.a.createElement(E.a,{bottom:!0,cascade:!0},l.a.createElement(c.Row,{around:"xs"},l.a.createElement(c.Col,{xs:12},l.a.createElement("h2",{className:"contact_section_tagline"},f.d.contactTagline)),l.a.createElement(c.Col,{xs:12},l.a.createElement("ul",{className:"social-networks spin-icon"},t&&l.a.createElement("li",null,l.a.createElement("a",{href:t,className:"icon-linkedin social-network-link",target:"_blank",rel:"noopener noreferrer"},"LinkedIn")),m&&l.a.createElement("li",null,l.a.createElement("a",{href:m,className:"icon-twitter social-network-link",target:"_blank",rel:"noopener noreferrer"},"Twitter")),o&&l.a.createElement("li",null,l.a.createElement("a",{href:o,className:"icon-facebook social-network-link",target:"_blank",rel:"noopener noreferrer"},"Facebook")),a&&l.a.createElement("li",null,l.a.createElement("a",{href:a,className:"icon-github social-network-link",target:"_blank",rel:"noopener noreferrer"},"GitHub")),r&&l.a.createElement("li",null,l.a.createElement("a",{href:r,className:"icon-instagram social-network-link",target:"_blank",rel:"noopener noreferrer"},"Instagram")))),i))))))))},ee=t(70),ae=t.n(ee),te=t(69),ne=t.n(te);var le=function(){return l.a.createElement("footer",null,l.a.createElement("div",{className:"content"},l.a.createElement(c.Row,{center:"xs",middle:"xs"},l.a.createElement(c.Col,{xs:4},l.a.createElement("img",{src:ne.a,className:"content_logo",alt:"ayin_qoph"}),l.a.createElement("img",{src:ae.a,className:"content_logo",alt:"Babusoft",style:{marginBottom:"30px"}})),l.a.createElement(c.Col,{xs:8,className:"techfolio_copyright"},"Techfolio \xa92020 Design by \u2013\u2013 Abdul Qadir"))))};var ce=function(){var e=Object(n.useContext)(v).current;return console.log(e),l.a.createElement("nav",{className:"nav__wrapper",id:"navbar-example"},l.a.createElement("ul",{className:"nav"},l.a.createElement("li",{role:"presentation",className:"home"===e?"active":""},l.a.createElement(_.Link,{to:"home",spy:!0,smooth:!0,duration:1e3},l.a.createElement("span",{className:"nav__counter"},"01"),l.a.createElement("h3",{className:"nav__title nav__title--stroke nav__title--shadow"},"Home"))),l.a.createElement("li",{role:"presentation",className:"about"===e?"active":""},l.a.createElement(_.Link,{to:"about",spy:!0,smooth:!0,duration:1e3},l.a.createElement("span",{className:"nav__counter"},"02"),l.a.createElement("h3",{className:"nav__title nav__title--stroke nav__title--shadow"},"About"))),l.a.createElement("li",{role:"presentation",className:"skills"===e?"active":""},l.a.createElement(_.Link,{to:"skills",spy:!0,smooth:!0,duration:1e3},l.a.createElement("span",{className:"nav__counter"},"03"),l.a.createElement("h3",{className:"nav__title nav__title--stroke nav__title--shadow"},"Skills"))),l.a.createElement("li",{role:"presentation",className:"github"===e?"active":""},l.a.createElement(_.Link,{to:"openSource",spy:!0,smooth:!0,duration:1e3},l.a.createElement("span",{className:"nav__counter"},"04"),l.a.createElement("h3",{className:"nav__title nav__title--stroke nav__title--shadow"},"Open Source"))),l.a.createElement("li",{role:"presentation",className:"projects"===e?"active":""},l.a.createElement(_.Link,{to:"projects",spy:!0,smooth:!0,duration:1e3},l.a.createElement("span",{className:"nav__counter"},"05"),l.a.createElement("h3",{className:"nav__title nav__title--stroke nav__title--shadow"},"Projects"))),l.a.createElement("li",{role:"presentation",className:"experiences"===e?"active":""},l.a.createElement(_.Link,{to:"experiences",spy:!0,smooth:!0,duration:1e3},l.a.createElement("span",{className:"nav__counter"},"06"),l.a.createElement("h3",{className:"nav__title nav__title--stroke nav__title--shadow"},"Experiences"))),l.a.createElement("li",{role:"presentation",className:"contact"===e?"active":""},l.a.createElement(_.Link,{to:"contact",spy:!0,smooth:!0,duration:1e3},l.a.createElement("span",{className:"nav__counter"},"07"),l.a.createElement("h3",{className:"nav__title nav__title--stroke nav__title--shadow"},"Contact")))))};a.default=function(){return l.a.createElement(h,null,l.a.createElement("div",{className:"wrapper"},l.a.createElement(D,null),l.a.createElement(c.Row,null,!b.isMobile&&l.a.createElement(c.Col,{lg:2},l.a.createElement(ce,null)),l.a.createElement(c.Col,{lg:10,xs:12},l.a.createElement(Y,null),l.a.createElement(A,null),l.a.createElement(y,null),l.a.createElement(R,null),l.a.createElement(P,null),l.a.createElement(q,null),l.a.createElement($,null))),l.a.createElement(le,null)))}},64:function(e,a,t){e.exports=t.p+"static/media/focused_working.9aece682.svg"},68:function(e,a,t){var n={"./avatar.JPG":98,"./avatar.jpeg":99,"./ayin_qoph.png":69,"./babusoft.png":70,"./contact.svg":71,"./defaultAvatar.svg":100,"./dummy-project.png":72,"./focused_working.svg":64,"./icon.png":101};function l(e){var a=c(e);return t(a)}function c(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}l.keys=function(){return Object.keys(n)},l.resolve=c,e.exports=l,l.id=68},69:function(e,a,t){e.exports=t.p+"static/media/ayin_qoph.f971dd94.png"},70:function(e,a){e.exports="data:image/png;base64,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"},71:function(e,a,t){e.exports=t.p+"static/media/contact.aea271b9.svg"},72:function(e,a,t){e.exports=t.p+"static/media/dummy-project.1976f27f.png"},73:function(e,a,t){},83:function(e,a,t){},85:function(e,a,t){},86:function(e,a,t){},98:function(e,a,t){e.exports=t.p+"static/media/avatar.41863aa0.JPG"},99:function(e,a,t){e.exports=t.p+"static/media/avatar.3e7b4ed4.jpeg"}}]);
//# sourceMappingURL=4.4c80b231.chunk.js.map