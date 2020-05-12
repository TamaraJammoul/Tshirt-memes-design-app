(this["webpackJsonptshirt-mems-design"]=this["webpackJsonptshirt-mems-design"]||[]).push([[0],{27:function(e,t,a){e.exports=a(44)},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),c=a.n(l),o=(a(32),a(33),a(5)),i=a(6),s=a(9),m=a(8);a(34);function d(e){var t=e.display,a=e.textFormat;return r.a.createElement("div",{className:"card card-content"},r.a.createElement("div",{className:"imgTshirt text-center"},r.a.createElement("img",{className:"img-responsive",src:"https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/".concat(t.tshirtColor),alt:"img tshirt"})),r.a.createElement("div",{className:"text-center memeText"},r.a.createElement("div",{className:"upperText"},r.a.createElement("p",{style:{fontSize:a,color:t.textColor}},t.upperText)),r.a.createElement("img",{src:"".concat(t.url)||"http://via.placeholder.com/400x300",alt:"meme text"}),r.a.createElement("div",{className:"lowerText"},r.a.createElement("p",{style:{fontSize:a,color:t.textColor}},t.lowerText))))}var u="https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/";function h(e){var t=e.color,a=e.handelowerText,n=e.handeUpperText,l=e.handelmemimg,c=e.handelTextsize,o=e.handelTextcolor,i=e.save;return r.a.createElement("div",{className:"card bg-light-gray container"},r.a.createElement("h3",{className:"text-center"},"Settings"),r.a.createElement("h4",null,"Change T-shirt Color"),r.a.createElement("div",{className:"tshirt-color"},r.a.createElement("img",{onClick:t,src:"".concat(u,"white.png"),alt:"white tshirt",id:"white"}),r.a.createElement("img",{onClick:t,src:"".concat(u,"black.png"),alt:"black tshirt",id:"black"}),r.a.createElement("img",{onClick:t,src:"".concat(u,"grey.png"),alt:"grey tshirt",id:"grey"}),r.a.createElement("img",{onClick:t,src:"".concat(u,"red.png"),alt:"red tshirt",id:"red"}),r.a.createElement("img",{onClick:t,src:"".concat(u,"blue.png"),alt:"bluetshirt",id:"blue"})),r.a.createElement("hr",null),r.a.createElement("h4",null,"Write Text"),r.a.createElement("input",{type:"text",className:"form-control form-control-sm mb-2",placeholder:"upper text",onChange:n}),r.a.createElement("input",{type:"text",className:"form-control form-control-sm ",placeholder:"lower text",onChange:a}),r.a.createElement("hr",null),r.a.createElement("h4",null,"Add image"),r.a.createElement("div",{className:"form-group"}," ",r.a.createElement("input",{onChange:l,type:"file",className:"form-control-file mb-2"})),r.a.createElement("hr",null),r.a.createElement("h4",null,"Size Text"),r.a.createElement("input",{type:"range",onChange:c,min:"13",max:"30"}),r.a.createElement("hr",null),r.a.createElement("h4",null,"Text Color"),r.a.createElement("select",{className:"form-control form-control-sm mb-2",onChange:o},r.a.createElement("option",null,"White"),r.a.createElement("option",null,"Black"),r.a.createElement("option",null,"Grey"),r.a.createElement("option",null,"Red"),r.a.createElement("option",null,"Blue")),r.a.createElement("hr",null),r.a.createElement("button",{className:"btn btn-primary btn-sm ",id:"save",onClick:i}," ","Save"))}var p=a(15),g=a.n(p);a(45);g.a.initializeApp({apiKey:"AIzaSyB5h-rTBezUGVOwyg41K692fnhD2qBaLNA",authDomain:"mytshirtapp-311c5.firebaseapp.com",databaseURL:"https://mytshirtapp-311c5.firebaseio.com",projectId:"mytshirtapp-311c5",storageBucket:"mytshirtapp-311c5.appspot.com",messagingSenderId:"545981564081",appId:"1:545981564081:web:e3b01dc8c0456b58cfce90",measurementId:"G-0P4961NXPX"});var v=g.a.storage(),E=a(7),b=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={upperText:"this is upper text",lowerText:"this is lower text",tshirtColor:"black",memImg:"",url:"",textSize:40,textColor:""},e.handelUpperText=function(t){e.setState({upperText:t.target.value})},e.handelTextcolor=function(t){e.setState({textColor:t.target.value})},e.handelTextsize=function(t){e.setState({textSize:t.target.value})},e.handelowerText=function(t){e.setState({lowerText:t.target.value})},e.handelmemimg=function(t){if(t.target.files[0]){var a=t.target.files[0];v.ref("images/".concat(a.name)).put(a).on("state change",(function(e){console.log(e)}),(function(e){console.log(e)}),(function(){v.ref("images").child(a.name).getDownloadURL().then((function(t){e.setState({url:t})}))}))}},e.handelsavedesign=function(t){"save"===t.target.id&&e.props.createDesign(e.state)},e.handelTshirtColor=function(t){e.setState({tshirtColor:t.target.id})},e}return Object(i.a)(a,[{key:"formatSize",value:function(e){var t=this.state.textSize;return parseInt(t)}},{key:"render",value:function(){return r.a.createElement("div",{className:"container py-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-8"}," ",r.a.createElement(d,{display:this.state,textFormat:this.formatSize()})),r.a.createElement("div",{className:"col-lg-4"}," ",r.a.createElement(h,{color:this.handelTshirtColor,handeUpperText:this.handelUpperText,handelowerText:this.handelowerText,handelmemimg:this.handelmemimg,handelTextsize:this.handelTextsize,handelTextcolor:this.handelTextcolor,save:this.handelsavedesign}))))}}]),a}(n.Component),f=Object(E.b)(null,(function(e){return{savedesign:function(t){e(function(e){return function(t,a){t({type:"save product",design:e})}}(t))}}}))(b),x=a(10),y=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-primary"},r.a.createElement("div",{className:"container"},r.a.createElement(x.b,{to:"/",className:"navbar-brand text-white"},"Tshirt-memes-design"),r.a.createElement("button",{type:"button",className:"navbar-toggler","data-toggle":"collapse","data-target":"navbarNav"}),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"}," ",r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(x.b,{to:"/",className:"nav-link"},"Sign Up")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(x.b,{to:"/",className:"nav-link"},"LogIN"))))))}}]),a}(n.Component);function N(e){var t=e.design;return r.a.createElement("div",{className:"item text-center"},r.a.createElement("div",{className:"card card-body"},r.a.createElement("img",{className:"img-fluid",src:"".concat("https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/").concat(t.tshirtcolor),alt:"Tshirt"}),r.a.createElement("p",null,"design.name"),r.a.createElement("button",{className:"btn btn-sm btn-primary"},"View")))}var T=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.designs;return r.a.createElement("div",{className:"container mb-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"projectList"},e&&e.map((function(e){return r.a.createElement(N,{design:e,key:e.id})})))))}}]),a}(n.Component),w=Object(E.b)((function(e){return{design:e.design.designs}}))(T);var k=function(){return r.a.createElement(x.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(y,null),r.a.createElement(f,null),r.a.createElement(w,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=a(3),j={},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j;arguments.length>1&&arguments[1];return e},z={design:[{id:1,name:"project one",tshirtcolor:"black"},{id:2,name:"project tow",tshirtcolor:"blue"}]},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"save product":console.log("design",t.design)}return e},I=Object(C.c)({auth:S,design:O}),B=a(26),U=Object(C.d)(I,Object(C.a)(B.a));c.a.render(r.a.createElement(E.a,{store:U},r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.f9a05aed.chunk.js.map