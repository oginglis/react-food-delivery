(this["webpackJsonpreact-food-delivery"]=this["webpackJsonpreact-food-delivery"]||[]).push([[0],{24:function(e,t,a){e.exports=a(43)},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var s=a(4),l=a(5),n=a(7),i=a(6),r=a(8),o=a(0),c=a.n(o),m=a(14),u=a.n(m),p=a(2),h=a(3),d=a(9),f=function(e){function t(){return Object(s.a)(this,t),Object(n.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(r.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"navbar",id:"nav"},c.a.createElement("div",{className:"navbar-search"},c.a.createElement("div",{className:"navbar-logo"},c.a.createElement("div",{className:this.props.burgerActive?"hamburger hamburger--collapse is-active":"hamburger hamburger--collapse",onClick:this.props.changePopoutState},c.a.createElement("div",{className:"hamburger-box"},c.a.createElement("div",{className:"hamburger-inner"}))),c.a.createElement("h1",{className:"site-title"},c.a.createElement(d.Link,{activeClass:"active",to:"carousel",spy:!0,smooth:!0,hashSpy:!0,offset:-180,duration:1e3,isDynamic:!0,ignoreCancelEvents:!1,className:"site-title-ollie"},"FOOD DASH"))),c.a.createElement("div",{className:"navbar-searchbar"},c.a.createElement("input",{type:"text",name:"search",placeholder:"What are you looking for?",autoComplete:"off"}),c.a.createElement("label",{htmlFor:"search"},c.a.createElement(p.a,{className:"search-icon",icon:h.c,onClick:this.props.toggleModalActive}))),c.a.createElement("h3",{className:"delivery-time sub"},"48 Hour Delivery"),c.a.createElement(p.a,{className:"navbar-basket",icon:h.d,onClick:this.props.toggleModalActive})),c.a.createElement("div",{className:"navbar-navitems"},c.a.createElement("ul",{className:"navbar-navitems-list"},c.a.createElement("li",{className:"nav-list-item menu-text"},c.a.createElement(d.Link,{activeClass:"active",to:"carousel",spy:!0,smooth:!0,hashSpy:!0,offset:-180,duration:1e3,isDynamic:!0,ignoreCancelEvents:!1,className:"site-title"},"Home")),c.a.createElement("li",{className:"nav-list-item menu-text",onClick:this.props.handleShopClick},"Shop",c.a.createElement(p.a,{className:"drop-down-shop",icon:h.a})),c.a.createElement("li",{className:"nav-list-item menu-text"},c.a.createElement(d.Link,{to:"fact-banner",smooth:!0,hashSpy:!0,offset:-450,duration:1e3,isDynamic:!0,ignoreCancelEvents:!1},"Samples")),c.a.createElement("li",{className:"nav-list-item menu-text"},c.a.createElement(d.Link,{to:"products",smooth:!0,hashSpy:!0,offset:-180,duration:1e3,isDynamic:!0,ignoreCancelEvents:!1},"My Products")),c.a.createElement("li",{className:"nav-list-item menu-text"},c.a.createElement(d.Link,{to:"fact-banner",smooth:!0,hashSpy:!0,offset:-180,duration:1e3,isDynamic:!0,ignoreCancelEvents:!1},"Helpful Hints")),c.a.createElement("li",{className:"nav-list-item menu-text"},c.a.createElement(d.Link,{to:"footer",smooth:!0,hashSpy:!0,offset:-450,duration:1e3,isDynamic:!0,ignoreCancelEvents:!1},"Contact Us")),c.a.createElement("li",{className:"nav-list-item menu-text",onClick:this.props.toggleModalActive},"Login"))))}}]),t}(o.Component),g=a(10),b=(a(41),function(e){function t(){var e,a;Object(s.a)(this,t);for(var l=arguments.length,r=new Array(l),o=0;o<l;o++)r[o]=arguments[o];return(a=Object(n.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(r.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement(g.a,{className:"carousel-to-move",naturalSlideWidth:200,naturalSlideHeight:60,totalSlides:3,isPlaying:!0,id:"carousel"},c.a.createElement(g.c,{className:"slider-black-wrapper"},c.a.createElement(g.b,{index:0,className:"carousel-image-bg-one"},c.a.createElement("div",{className:"slide-text-div"},c.a.createElement("h2",{className:"slide-title"},"eco friendly packaging"),c.a.createElement("p",{className:"slide-paragraph"},"We stock a range of biodegradable packaging and our pulp based products are sourced from sustainable forests. Each product is rated on its impact on the environment."))),c.a.createElement(g.b,{index:1,className:"carousel-image-bg-two"},c.a.createElement("div",{className:"slide-text-div"},c.a.createElement("h2",{className:"slide-title"},"food packaging made easy"),c.a.createElement("p",{className:"slide-paragraph"},"Want to take the hassle out of ordering packaging for your restaurant? We\u2019ve selected the best packaging to make that choice easy for you."))),c.a.createElement(g.b,{index:2,className:"carousel-image-bg-three"},c.a.createElement("div",{className:"slide-text-div"},c.a.createElement("h2",{className:"slide-title"},"hassle-free, stress-free"),c.a.createElement("p",{className:"slide-paragraph"},"We'll deliver within 48 hours \u2013 and orders over \xa3100 are free.")))))}}]),t}(o.Component)),E=function(e){function t(){var e,a;Object(s.a)(this,t);for(var l=arguments.length,r=new Array(l),o=0;o<l;o++)r[o]=arguments[o];return(a=Object(n.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={closeActive:!1},a}return Object(r.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:this.props.popoutActive?"popout-wrapper":"popout-wrapper close-pop"},c.a.createElement(p.a,{className:"pop-exit",icon:h.f,onClick:this.props.changePopoutState}),c.a.createElement("ul",{className:"popout-list"},c.a.createElement("li",{className:"menu-text pop-item"},"Home"),c.a.createElement("li",{className:"menu-text pop-item",onClick:this.handleShopClick},"Shop",c.a.createElement(p.a,{className:"drop-down-shop",icon:h.a})),c.a.createElement("li",{className:"menu-text pop-item"},"Samples"),c.a.createElement("li",{className:"menu-text pop-item"},"My Products"),c.a.createElement("li",{className:"menu-text pop-item"},"Helpful Hints"),c.a.createElement("li",{className:"menu-text pop-item"},"Contact Us"),c.a.createElement("li",{className:"menu-text pop-item"},"Login")))}}]),t}(o.Component),v=function(e){function t(){var e,a;Object(s.a)(this,t);for(var l=arguments.length,r=new Array(l),o=0;o<l;o++)r[o]=arguments[o];return(a=Object(n.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={closeActive:!1},a}return Object(r.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"facts-section-wrapper"},c.a.createElement("div",{className:"fact"},c.a.createElement(p.a,{icon:h.e,className:"fact-icon"}),c.a.createElement("div",{className:"fact-text"},c.a.createElement("h2",{className:"fact-title"},"free delivery"),c.a.createElement("p",{className:"fact-paragraph"},"We offer next day delivery as standard"))),c.a.createElement("div",{className:"fact"},c.a.createElement(p.a,{icon:h.b,className:"fact-icon"}),c.a.createElement("div",{className:"fact-text"},c.a.createElement("h2",{className:"fact-title"},"price promise"),c.a.createElement("p",{className:"fact-paragraph"},"Any profit we make we put back into giving you better pricing"))),c.a.createElement("div",{className:"fact"},c.a.createElement(p.a,{icon:h.g,className:"fact-icon"}),c.a.createElement("div",{className:"fact-text"},c.a.createElement("h2",{className:"fact-title"},"independently tested"),c.a.createElement("p",{className:"fact-paragraph"},"We thoroughly test all our packaging - see our 'Dash Rating' on every product"))))}}]),t}(o.Component),N=function(e){function t(){var e,a;Object(s.a)(this,t);for(var l=arguments.length,r=new Array(l),o=0;o<l;o++)r[o]=arguments[o];return(a=Object(n.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=function(){},a}return Object(r.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"square-info-wrapper",id:"products"},c.a.createElement("img",{className:"square-info-image",src:this.props.image,alt:""}),c.a.createElement("div",{className:"square-info-text"},c.a.createElement("h2",{className:"square-info-title"},this.props.titleItem),c.a.createElement("ul",{className:"square-info-list"},this.props.listItem.map((function(e){return c.a.createElement("li",{className:"square-info-list-item",key:e},e)})))))}}]),t}(o.Component),y=function(e){return c.a.createElement("div",{className:"sub-menu"},c.a.createElement("h2",{className:"sub-menu-title sub"},e.subMenuTitle),c.a.createElement("ul",{className:"sub-menu-list"},e.listItem.map((function(e,t){return c.a.createElement("li",{className:"sub-menu-list-item lil",key:t},e)}))))},x=function(e){return c.a.createElement("div",{className:e.shopActive?"sub-menus":"sub-menus isHidden"},c.a.createElement(y,{listItem:["All Essentials","Best Sellers","New In","All products"],subMenuTitle:"Packaging Essentials"}),c.a.createElement(y,{listItem:["Burger / Chips solutions","Pizza boxes","Hot food - board","Hot food - plastic","Soup / hot liquid containers","Salad / hot liquid containers"],subMenuTitle:"Type"}),c.a.createElement(y,{listItem:["Bowls and lids","Clamshells","Soup containers","Hot food boxes","Cutlery","Straws","Platters","View all"],subMenuTitle:"Eco"}),c.a.createElement(y,{listItem:["American / Burgers","Pan-Asian","Italian / Pasta / Pizza","British","Mexican / Tacos","Middle-Eastern Food","View all"],subMenuTitle:"Cuisine"}),c.a.createElement(y,{listItem:["Bags","Pizza Boxes","Greaseproof","Burger boxes"],subMenuTitle:"Taste Branded"}),c.a.createElement(y,{listItem:["All products","Internal Signage","External Signage"],subMenuTitle:"Signage"}))},A=function(e){var t,a,s={backgroundImage:"linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(".concat(e.bgImage,")")};return t=e.extraText?c.a.createElement("p",{className:"optional-text-banner"},e.extraText):null,a=e.bannerButton?c.a.createElement("p",{className:"info-banner-paragraph"},e.bannerButton):null,c.a.createElement("div",{className:"info-banner-wrapper",style:s},c.a.createElement("div",{className:"info-banner-text-wrapper"},c.a.createElement("h1",{className:"info-banner-title"},e.bannerTitle),t,a))},k=function(e){return c.a.createElement("div",{className:"fact-banner-wrapper",id:"fact-banner"},c.a.createElement("div",null,c.a.createElement("h1",{className:"fact-banner-title"},e.factTitle)))},w=function(e){var t={backgroundImage:"linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(".concat(e.bgImage,")")};return c.a.createElement("div",{className:"search-banner-wrapper",style:t,id:"search-banner"},c.a.createElement("h1",{className:"search-banner-title"},"now go and find what you need..."),c.a.createElement("div",{className:"search-banner-searchbar"},c.a.createElement("input",{type:"text",name:"search",placeholder:"What are you looking for?",autoComplete:"off"}),c.a.createElement("label",{htmlFor:"search"},c.a.createElement(p.a,{className:"search-banner-search-icon",icon:h.c,onClick:e.toggleModalActive}))))},I=function(e){function t(){return Object(s.a)(this,t),Object(n.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(r.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"footer-wrapper",id:"footer"},c.a.createElement("div",{className:"footer-all-section-wrapper"},c.a.createElement("div",{className:"footer-section-wrapper"},c.a.createElement("h2",{className:"footer-section-title"},"Customer Service"),c.a.createElement("ul",{className:"footer-section-list"},c.a.createElement("li",{className:"footer-section-list-item",onClick:this.props.toggleModalActive},"Delivery"),c.a.createElement("li",{className:"footer-section-list-item",onClick:this.props.toggleModalActive},"FAQs"),c.a.createElement("li",{className:"footer-section-list-item",onClick:this.props.toggleModalActive},"Contact Us"),c.a.createElement("li",{className:"footer-section-list-item",onClick:this.props.toggleModalActive},"Privacy Policy"),c.a.createElement("li",{className:"footer-section-list-item",onClick:this.props.toggleModalActive},"Terms & Conditions"),c.a.createElement("li",{className:"footer-section-list-item",onClick:this.props.toggleModalActive},"Cookie"))),c.a.createElement("div",{className:"footer-section-wrapper"},c.a.createElement("h2",{className:"footer-section-title"},"Subscribe"),c.a.createElement("p",null,"We'd love to keep you up-to-date with our latest offers and products \u2013 just join our mailing list."),c.a.createElement("input",{type:"text",placeholder:"Email address"}),c.a.createElement("h4",{className:"footer-sign-up",onClick:this.props.toggleModalActive},"Sign Up")),c.a.createElement("div",{className:"footer-section-wrapper"},c.a.createElement("h2",{className:"footer-section-title"},"Registered Address"),c.a.createElement("p",null,"FOOD DASH Limited The Dash Building - Level 40 Ballon Bridge House 1 Food Lane ECSR 3WE")),c.a.createElement("div",{className:"footer-section-wrapper"},c.a.createElement("h2",{className:"footer-section-title"},"Questions about your order?"),c.a.createElement("p",null,"We're here to help! Email us at pag@foodrun.com or call 231086 521 1264. "))),c.a.createElement("h1",{className:"site-title-footer"},c.a.createElement(d.Link,{activeClass:"active",to:"carousel",spy:!0,smooth:!0,hashSpy:!0,offset:-180,duration:1e3,isDynamic:!0,ignoreCancelEvents:!1,className:"site-title-footer-linked"},"FOOD DASH")))}}]),t}(o.Component),O=function(e){return c.a.createElement("div",{className:e.modalActive?"modal-wrapper-black active":"modal-wrapper-black",onClick:e.toggleModalActive},c.a.createElement("div",{className:"modal-wrapper"},c.a.createElement(p.a,{className:"modal-close-icon",icon:h.f,onClick:e.toggleModalActive}),c.a.createElement("h1",{className:"modal-title"},"Sorry - This Feature Has Not Been Implemented Yet")))},S=(a(42),function(e){function t(){var e,a;Object(s.a)(this,t);for(var l=arguments.length,r=new Array(l),o=0;o<l;o++)r[o]=arguments[o];return(a=Object(n.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={popoutActive:!1,burgerActive:!1,shopActive:!1,squareInfoTitle:["All Essentials","Shop by Type","Shop by Cuisine","Signage"],sqaureInfoImages:["https://images.unsplash.com/photo-1564419434663-c49967363849?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=802&q=80","https://images.unsplash.com/photo-1583359290631-79950e6f0837?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80","https://images.unsplash.com/photo-1568327738723-947b3f0b9efd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2698&q=80","https://images.unsplash.com/photo-1583228888368-d9cc94613a36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"],squareInfoListItem:[["All essentials","Best sellers","New in","All products"],["Pizza boxes","Hot food - board","Hot food - plastic","Soup / hot liquid containers","Salad bowls and portion pots"]],modalActive:!1},a.changePopoutState=function(){a.state.popoutActive?(a.setState({popoutActive:!1}),a.setState({burgerActive:!1})):(a.setState({popoutActive:!0}),a.setState({burgerActive:!0}))},a.handleShopClick=function(){a.state.shopActive?a.setState({shopActive:!1}):a.setState({shopActive:!0})},a.toggleModalActive=function(){a.state.modalActive?a.setState({modalActive:!1}):a.setState({modalActive:!0})},a}return Object(r.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(E,{popoutActive:this.state.popoutActive,changePopoutState:this.changePopoutState}),c.a.createElement("div",{className:this.state.popoutActive?"darkener active":"darkener"}),c.a.createElement(f,{burgerActive:this.state.burgerActive,changePopoutState:this.changePopoutState,handleShopClick:this.handleShopClick,toggleModalActive:this.toggleModalActive}),c.a.createElement(x,{shopActive:this.state.shopActive}),c.a.createElement(b,null),c.a.createElement(v,null),c.a.createElement("div",{className:"square-grid-container"},c.a.createElement(N,{titleItem:this.state.squareInfoTitle[0],listItem:this.state.squareInfoListItem[0],image:this.state.sqaureInfoImages[0]}),c.a.createElement(N,{titleItem:this.state.squareInfoTitle[1],listItem:this.state.squareInfoListItem[1],image:this.state.sqaureInfoImages[1]}),c.a.createElement(N,{titleItem:this.state.squareInfoTitle[2],listItem:this.state.squareInfoTitle,image:this.state.sqaureInfoImages[2]}),c.a.createElement(N,{titleItem:this.state.squareInfoTitle[3],listItem:this.state.squareInfoTitle,image:this.state.sqaureInfoImages[3]})),c.a.createElement(A,{id:"samples",bannerButton:"ORDER HERE",bannerTitle:"test us out with free samples",bgImage:"https://images.unsplash.com/photo-1583369105080-4337ce9e917d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"}),c.a.createElement(k,{factTitle:"free next day delivery availble",factBody:"test"}),c.a.createElement("div",{className:"info-banner-grid-one"},c.a.createElement(A,{extraText:"Why not try our packagin 101? It could be what you're looking for.",bannerButton:"MORE INFO",bannerTitle:"expert recommendations",bgImage:"https://images.unsplash.com/photo-1583354608715-177553a4035e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"}),c.a.createElement(A,{extraText:"Any questions you have about our service, we'll do our best to answer.",bannerButton:"MORE INFO",bannerTitle:"frequently asked questions",bgImage:"https://images.unsplash.com/photo-1583354838252-2ed5c78ba103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"})),c.a.createElement("div",{className:"info-banner-grid-two"},c.a.createElement(A,{extraText:"We want you to have the best packaging for your needs \u2013 that's why we test for heat retention, toughness and stability.",bannerTitle:"quality assured packaging",bgImage:"https://images.unsplash.com/photo-1519393890420-f28727375fa5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"}),c.a.createElement(A,{extraText:"Any questions you have about our service, we'll do our best to answer.",bannerTitle:"best prices, guaranteed",bgImage:"https://images.unsplash.com/photo-1487266659293-c4762f375955?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"}),c.a.createElement(A,{extraText:"Any questions you have about our service, we'll do our best to answer.",bannerTitle:"hassle-free, stress-free",bgImage:"https://images.unsplash.com/photo-1454117096348-e4abbeba002c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"})),c.a.createElement(w,{toggleModalActive:this.toggleModalActive,bgImage:"https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80"}),c.a.createElement(O,{modalActive:this.state.modalActive,toggleModalActive:this.toggleModalActive}),c.a.createElement(I,{toggleModalActive:this.toggleModalActive}))}}]),t}(o.Component)),C=document.getElementById("root");u.a.render(c.a.createElement(S,{name:"Ollie"}),C)}},[[24,1,2]]]);
//# sourceMappingURL=main.88e7c345.chunk.js.map