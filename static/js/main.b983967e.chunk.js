(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){},31:function(e,t,n){},34:function(e,t,n){e.exports=n.p+"static/media/mappyPals.6203924a.svg"},40:function(e,t,n){e.exports=n(54)},45:function(e,t,n){},46:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(22),o=n.n(r),l=n(56),c=n(5),s=n(4),u=n(7),d=n(6),m=n(8),h=(n(45),n(55)),p=(n(46),n(34)),g=n.n(p),f=function(e){e.isUserLogged;var t=e.onLogin;return i.a.createElement(i.a.Fragment,null,i.a.createElement("header",null,i.a.createElement("div",{id:"logo-wrapper"},i.a.createElement(h.a,{to:"/"},i.a.createElement("img",{src:g.a,alt:"Mappy Pals"}))),i.a.createElement("div",{id:"nav-wrapper"},i.a.createElement(h.a,{className:"nav-item",to:"/"}," Home "),i.a.createElement(h.a,{className:"nav-item",to:"/about"}," About "),i.a.createElement(h.a,{className:"nav-item",to:"/contact"}," Contact us "),i.a.createElement(h.a,{className:"nav-item",to:"/login"}," ",i.a.createElement("p",{onClick:t}," Login ")," "))))},v=n(57),E=n(58),b=n(2),y=(n(31),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleChange=function(e){n.setState(Object(b.a)({},e.target.id,e.target.value))},n.handleSubmit=function(e){e.preventDefault()},n.state={email:"",password:""},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"validateForm",value:function(){return this.state.email.length>0&&this.state.password.length>0}},{key:"render",value:function(){return i.a.createElement("div",{className:"Login"},i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("input",{type:"email",placeholder:"Enter Username",value:this.state.email,onChange:this.handleChange,required:!0}),i.a.createElement("input",{type:"password",placeholder:"Enter Password",value:this.state.password,onChange:this.handleChange,required:!0}),i.a.createElement("button",{type:"submit",disabled:!this.validateForm()},"Login")))}}]),t}(a.Component)),w=(n(21),n(11)),k=n(18),j=n(9),O=function(e){var t=Object(a.useState)({name:!0,phone:!0,email:!0,postcode:!0}),n=Object(j.a)(t,2),r=n[0],o=n[1];return i.a.createElement("div",{id:"popup"},i.a.createElement("div",null,i.a.createElement("label",null,"Nickname"),i.a.createElement("input",{type:"text",placeholder:"Nickname",value:e.nickname,readOnly:!0})),e.name?i.a.createElement("div",null,r.name?i.a.createElement("label",null,"Name"):"",i.a.createElement("input",{type:"text",data:"name",placeholder:"Name",defaultValue:e.name,onBlur:function(e){e.target.value.length&&o(Object(w.a)({},r,{name:!0}))},onKeyPress:function(e){"Enter"===e.key&&e.target.blur()},onClick:function(e){console.log(e.target),e.target.value="",o(Object(w.a)({},r,{name:!1}))}})):"",e.phone?i.a.createElement("div",null,r.phone?i.a.createElement("label",null,"Phone"):"",i.a.createElement("input",{type:"text",data:"phone",placeholder:"Phone",defaultValue:e.phone,onBlur:function(e){e.target.value.length&&o(Object(w.a)({},r,{phone:!0}))},onKeyPress:function(e){"Enter"===e.key&&e.target.blur()},onClick:function(e){console.log(e.target),e.target.value="",o(Object(w.a)({},r,{phone:!1}))}})):"",e.email?i.a.createElement("div",null,r.email?i.a.createElement("label",null,"E-mail"):"",i.a.createElement("input",{type:"text",data:"email",placeholder:"E-mail",defaultValue:e.email,onBlur:function(e){e.target.value.length&&o(Object(w.a)({},r,{email:!0}))},onKeyPress:function(e){"Enter"===e.key&&e.target.blur()},onClick:function(e){console.log(e.target),e.target.value="",o(Object(w.a)({},r,{email:!1}))}})):"",e.postcode?i.a.createElement("div",null,r.postcode?i.a.createElement("label",null,"Zip-Postcode"):"",i.a.createElement("input",{type:"text",data:"postcode",placeholder:"Zip-Postcode",defaultValue:e.postcode,onBlur:function(e){e.target.value.length&&o(Object(w.a)({},r,{postcode:!0}))},onKeyPress:function(e){"Enter"===e.key&&e.target.blur()},onClick:function(e){console.log(e.target),e.target.value="",o(Object(w.a)({},r,{postcode:!1}))}})):"",e.editMode?i.a.createElement("div",{onClick:function(t){e.save(),t.target.parentNode.style.height="0px"}},"Save"):"")},C=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).anythingChanges=function(e){n.setState({data:Object(w.a)({},n.state.data,Object(b.a)({},e.target.id,e.target.value))})},n.state={data:!0===n.props.edit?n.props.data:{}},n.anythingChanges.bind(n.anythingChanges),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{id:"add-new"},i.a.createElement("button",{className:"close-btn",onClick:function(t){return e.props.onCloseClick()}},"x"),i.a.createElement("input",{type:"text",onChange:function(t){return e.anythingChanges(t)},value:this.state.data.nickname,placeholder:"Nickname",id:"nickname",required:!0}),i.a.createElement("input",{type:"email",onChange:function(t){return e.anythingChanges(t)},value:this.state.data.email,placeholder:"Email address",id:"email",required:!0}),i.a.createElement("input",{type:"text",onChange:function(t){return e.anythingChanges(t)},value:this.state.data.name,placeholder:"Full Namer",id:"name"}),i.a.createElement("input",{type:"tel",onChange:function(t){return e.anythingChanges(t)},value:this.state.data.phone,placeholder:"Phone Number",id:"phone"}),i.a.createElement("input",{type:"button",value:"Add Friend",id:"add",onClick:function(){e.props.onFriendLoaded(e.state)}}))}}]),t}(i.a.Component),x="pk.eyJ1Ijoic2Npb3J0aW5vbXJjIiwiYSI6ImNqc2RocmRzYTB2OGUzeWxuZDNmdDhrcDgifQ.txLXHEJPl4lYa8an6fcjuA",F=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={edit:!1,currentPin:{},newFriend:{long:null,lat:null,name:"",email:"",phone:"",postcode:"",country:"",nickname:""},friendsList:{},viewport:{width:"100vw",height:"100vh",latitude:37.7577,longitude:-122.4376,zoom:11},pinMe:{latitude:"",longitude:""}},n.getPostcode=function(){fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/"+n.state.newFriend.long+","+n.state.newFriend.lat+".json?access_token="+x).then(function(e){return e.json()}).then(function(e){return n.setState({newFriend:Object(w.a)({},n.state.newFriend,{postcode:e.features[1].text,country:e.features[6].text})})})},n.getLocation=function(e){var t=e.lngLat;n.setState({newFriend:Object(w.a)({},n.state.newFriend,{long:t[0],lat:t[1]})}),setTimeout(function(){return console.log(n.state.newFriend)},500)},n.showPopup=function(e){n.setState({currentPin:n.state.friendsList[e.target.id]}),setTimeout(function(){var e=document.getElementById("popup");e&&(e.style.height="180px")},500)},n.hidePopup=function(e){if(!n.state.edit){var t=document.getElementById("popup");console.log(n.state.currentPin),t.style.height="0px",setTimeout(function(){return n.setState({currentPin:{}})},600)}},n.nicknameExists=function(e,t){var a=document.getElementById("add-new"),i=Object.keys(n.state.friendsList),r=!1;if(e&&e.length&&!i.includes(e)?a.children[0].style.border="":(a.children[0].style.border="2px solid red",r=!0),t&&t.length?a.children[1].style.border="":(a.children[1].style.border="2px solid red",r=!0),Object.keys(n.state.friendsList)>0){var o=!0,l=!1,c=void 0;try{for(var s,u=n.state.friendsList[Symbol.iterator]();!(o=(s=u.next()).done);o=!0){var d=s.value;n.state.friendsList[d].email?(a.children[1].style.border="2px solid red",r=!0):a.children[1].style.border=""}}catch(m){l=!0,c=m}finally{try{o||null==u.return||u.return()}finally{if(l)throw c}}}return r},n.addFriendData=function(e){var t=e.data,a=t.nickname,i=t.name,r=t.email,o=t.phone;if(!n.nicknameExists(a,r)){var l=Object(w.a)({},n.state.newFriend,{nickname:a,name:i,email:r,phone:o});n.setState({newFriend:l}),setTimeout(function(){return n.addFriendToList()},1e3)}},n.addFriendToList=function(){n.setState({friendsList:Object(w.a)({},n.state.friendsList,Object(b.a)({},n.state.newFriend.nickname,n.state.newFriend)),newFriend:{long:null,lat:null,name:"",email:"",phone:"",postcode:"",country:"",nickname:""},edit:!1,show:!1})},n.newPin=function(e){n.getLocation(e),n.getPostcode()},n.allPins=function(){var e=[],t=n.state.friendsList;for(var a in t){var r=t[a],o=r.nickname,l=r.lat,c=r.long;e.push(i.a.createElement(k.a,{key:o,latitude:l,longitude:c},i.a.createElement("i",{id:o,key:o+"k",onClick:n.activateEditMode,onMouseOver:function(e){return n.showPopup(e)},onMouseLeave:function(e){return n.hidePopup(e)},className:"fas fa-map-marker-alt"})))}return e},n.activateEditMode=function(){n.setState({edit:!0})},n.closeEditMode=function(){n.setState({edit:!1})},n.handleEdit=function(e){n.setState({newFriend:e,edit:!0,show:!0})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.navigator.geolocation.getCurrentPosition(function(t){t.coords.latitude&&e.setState({viewport:Object(w.a)({},e.state.viewport,{latitude:t.coords.latitude,longitude:t.coords.longitude}),pinMe:{latitude:t.coords.latitude,longitude:t.coords.longitude}})}),window.addEventListener("resize",function(t){e.setState({viewport:Object(w.a)({},e.state.viewport,{width:t.target.innerWidth,height:t.target.innerHeight})})}),window.addEventListener("keydown",function(t){"Escape"===t.key&&(e.setState({newFriend:{long:null},currentPin:{}}),document.getElementById("add-new").style.height="")})}},{key:"renderForm",value:function(){return!0===this.state.show?i.a.createElement(C,{onFriendLoaded:this.addFriendData,data:this.state.newFriend,edit:this.state.edit,show:this.state.show,onCloseClick:this.onClose}):null}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{style:{height:"100vh"}},i.a.createElement(k.b,Object.assign({},this.state.viewport,{onViewportChange:function(t){return e.setState({viewport:t})},mapboxApiAccessToken:x,mapStyle:"mapbox://styles/mapbox/streets-v11",onClick:this.newPin}),Object.keys(this.state.friendsList).length>0?this.allPins():"",null!==this.state.newFriend.long?i.a.createElement(k.a,{latitude:this.state.newFriend.lat,longitude:this.state.newFriend.long},i.a.createElement("i",{id:"new-pin",className:"fas fa-map-marker-alt"})):"",this.state.pinMe.latitude?i.a.createElement(k.a,{key:"me",latitude:this.state.pinMe.latitude,longitude:this.state.pinMe.longitude},i.a.createElement("i",{id:"me",key:"me-pin",className:"fas fa-map-marker-alt"})):""),this.state.currentPin.nickname&&!this.state.newFriend.long?i.a.createElement(O,{editMode:this.state.edit,nickname:this.state.currentPin.nickname,name:this.state.currentPin.name,email:this.state.currentPin.email,phone:this.state.currentPin.phone,postcode:this.state.currentPin.postcode,save:this.closeEditMode,hideThis:this.hidePopup}):"",this.renderForm())}}]),t}(a.Component),P=function(e){return i.a.createElement("section",null,i.a.createElement(F,null))},S=(n(50),function(){return i.a.createElement("div",{className:"Contact"},i.a.createElement("form",{name:"contact",method:"POST"},i.a.createElement("fieldset",null,i.a.createElement("legend",null,"Send us a Message!"),i.a.createElement("div",{className:"Contact-item"},i.a.createElement("label",null,"Name"),i.a.createElement("br",null),i.a.createElement("input",{type:"text",name:"name"})),i.a.createElement("div",{className:"Contact-item"},i.a.createElement("label",null,"Email"),i.a.createElement("br",null),i.a.createElement("input",{type:"email",name:"name"})),i.a.createElement("div",{className:"Contact-item"},i.a.createElement("label",null,"Message"),i.a.createElement("br",null),i.a.createElement("textarea",{type:"text",rows:"6"})))))}),L=n(16),N=function(e){var t=e.children;return i.a.createElement(i.a.Fragment,null,t)},B=["Fontend","Backend","Fullstack","DevOps","Product","UI/UX","Project","Marketing"],M=["Nigeria","UK","US","Australia","India","Russia","Ghana"],I=[{avatar:null,name:"Mubarak Show",role:"".concat(B[4]+", "+B[5]),location:M[0],isEmployed:!1},{avatar:null,name:"Marco Sciortino",role:B[2],location:M[1],isEmployed:!1},{avatar:null,name:"Gouravjeet Singh",role:B[2],location:M[2],isEmployed:!0},{avatar:null,name:"Pavel Isp",role:B[2],location:M[5],isEmployed:!0},{avatar:null,name:"Devavrat Singh",role:B[2],location:M[4],isEmployed:!0}],q=n(17);n(51);function U(){var e=Object(L.a)([" \n  background-color: pink;\n  text-align: center;\n  width: 250px; \n  height: 400px;\n  margin-top: 20px;\n  padding: 10px;\n  border-radius: 10px;\n  box-shadow: 0 0 10px 1px lightgrey;\n  transition: all .4s ease-in-out;    \n  &:hover {\n    transform: scale(1.1); \n  }\n"]);return U=function(){return e},e}var T=q.a.div(U()),A=function(e){var t=e.id,n=e.name,a=e.role,r=e.location,o=e.isEmployed;return i.a.createElement(i.a.Fragment,null,i.a.createElement(T,null,i.a.createElement("div",{className:"user-photo"},i.a.createElement("img",{src:"https://robohash.org/".concat(t,"?size=200x200"),alt:"Team Avatars"})),i.a.createElement("h2",null,n),i.a.createElement("h3",null,a),i.a.createElement("h4",null,r),i.a.createElement("h4",null,o?"Employed":"Unemployed")))};function D(){var e=Object(L.a)(["\n  display: block;\n  font-size: 27px;\n  text-align: center;\n  width: 80vw;\n  height: 10rem;\n  padding: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 50px;\n"]);return D=function(){return e},e}function z(){var e=Object(L.a)(["\n  display: grid;\n  grid-template-columns: auto auto auto auto;\n  grid-column-gap: 20px;\n  margin-left: auto;\n  margin-right: auto;\n"]);return z=function(){return e},e}function W(){var e=Object(L.a)(["\n  display: grid;\n  grid-template-rows: auto auto;\n  margin-top: 5vh;\n"]);return W=function(){return e},e}var J=q.a.div(W()),V=q.a.div(z()),K=q.a.div(D()),R=function(){return i.a.createElement(N,null,i.a.createElement(J,null,i.a.createElement(K,null,i.a.createElement("h2",null,"Who We Are"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae accusantium exercitationem earum, accusamus magnam dignissimos vero suscipit fugit, ad ea impedit. Consequatur quasi veritatis modi eos quia dolorum ut distinctio?")),i.a.createElement(V,null,I.map(function(e,t){return i.a.createElement(A,{key:t,id:t,name:e.name,role:e.role,location:e.location,isEmployed:e.isEmployed})}))))},Z=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleChange=function(e){n.setState(Object(b.a)({},e.target.id,e.target.value))},n.handleSubmit=function(e){e.preventDefault()},n.state={name:"",zip:"",email:"",password:"",confrimPassword:""},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"verifiedEmail",value:function(){var e=this.state.email;return!!e.includes("@")&&!!e.split("@")[1].includes(".")}},{key:"validateForm",value:function(){var e=this.state,t=e.name,n=e.zip,a=e.email,i=e.password,r=e.confrimPassword;return""!==t&&""!==n&&""!==a&&""!==i&&""!==r&&(i===r&&!!this.verifiedEmail)}},{key:"render",value:function(){return i.a.createElement("div",{className:"Login"},i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("input",{type:"text",id:"name",placeholder:"Entrer Name",value:this.state.name,onChange:this.handleChange,required:!0}),i.a.createElement("input",{type:"text",id:"zip",placeholder:"Entrer Zip/Postcode",value:this.state.zip,onChange:this.handleChange,required:!0}),i.a.createElement("input",{type:"email",id:"email",placeholder:"Enter Username",value:this.state.email,onChange:this.handleChange,required:!0}),i.a.createElement("input",{type:"password",id:"password",placeholder:"Enter Password",value:this.state.password,onChange:this.handleChange,required:!0}),i.a.createElement("input",{type:"password",id:"confirmPassword",placeholder:"Confirm Password",value:this.state.confirmPassword,onChange:this.handleChange,required:!0}),i.a.createElement("button",{type:"submit",disabled:!this.validateForm()},"Login")))}}]),t}(a.Component),G=function(){return i.a.createElement("main",null,i.a.createElement(v.a,null,i.a.createElement(E.a,{exact:!0,path:"/",component:P}),i.a.createElement(E.a,{path:"/login",component:y}),i.a.createElement(E.a,{path:"/signup",component:Z}),i.a.createElement(E.a,{path:"/about",component:R}),i.a.createElement(E.a,{path:"/contact",component:S})))},H=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).loadFB=function(){window.fbAsyncInit=function(){window.FB.init({appId:"298824577401793",cookie:!0,xfbml:!0,version:"v3.2"}),window.FB.AppEvents.logPageView()},function(e,t,n){var a,i=e.getElementsByTagName(t)[0];e.getElementById(n)||((a=e.createElement(t)).id=n,a.src="https://connect.facebook.net/en_US/sdk.js",i.parentNode.insertBefore(a,i))}(document,"script","facebook-jssdk")},e.getFBLoginStatus=function(){window.FB.getLoginStatus(function(e){"connected"===e.status&&this.setState({isUserLogged:!0,user:e.authReponse.userID})})},e.state={isUserLogged:!1,user:{},isFBMounted:!1},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){this.loadFB()}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(f,{user:this.state.isUserLogged,onLogin:this.getFBLoginStatus}),i.a.createElement(N,null,i.a.createElement(G,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(l.a,null,i.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[40,1,2]]]);
//# sourceMappingURL=main.b983967e.chunk.js.map