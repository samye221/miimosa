(this.webpackJsonpmiimosa=this.webpackJsonpmiimosa||[]).push([[0],{103:function(t,e,n){},104:function(t,e,n){},121:function(t,e,n){"use strict";n.r(e);var i=n(5),a=(n(0),n(34)),c=n.n(a),r=(n(103),n(104),n(39)),o=n(11),s=n(52),l=n(146),d=n(144),j=n(147),u=n(143),b=n(141),m=n(30),g=n(57),p=n.n(g),h=n(59),x=n.n(h),f=n(60),O=n.n(f);function k(){var t=Object(s.a)(["\n    query getProject($id: String!)\n{\n    project(id: $id) {\n      id,\n      description,\n      status,\n      title,\n      user {\n        first_name\n        last_name\n      },\n      target,\n      collected,\n    } \n}\n"]);return k=function(){return t},t}var v=Object(b.a)({root:{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center"},header:{textAlign:"center"},card:{display:"flex",width:500,justifyContent:"center",flexDirection:"column",alignItems:"center",height:500,position:"absolute",top:0,bottom:0,left:0,right:0,margin:"auto",backgroundColor:"mediumaquamarine"},title:{fontSize:25,textAlign:"center"},link:{marginLeft:"5vw",textDecoration:"none",color:"black"},logo:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},text:{fontSize:14,padding:5,margin:5}}),y=Object(b.a)({root:{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center"},header:{textAlign:"center"},card:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",width:500,height:500,position:"absolute",top:0,bottom:0,left:0,right:0,margin:"auto",backgroundColor:"indianred"},title:{fontSize:25,textAlign:"center"},link:{marginLeft:"5vw",textDecoration:"none",color:"black"},logo:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",margin:5},text:{fontSize:14,padding:5,margin:5},pos:{marginBottom:12}}),C=Object(m.gql)(k()),N=function(t){var e=t.location,n=e&&e.state&&e.state.client,a=e&&e.state&&e.state.id,c=Object(m.useQuery)(C,{variables:{id:a}}),o=c.loading,s=c.data,b=v(),g=y(),h="CLIENT1"===n?b:g,f=Object(j.a)(),k=f.t;f.i18n;return Object(i.jsxs)("div",{className:h.root,children:[Object(i.jsx)("h1",{className:h.header,children:k("Project Details")}),Object(i.jsx)(r.c,{to:"/",className:h.link,children:k("Back To List")}),Object(i.jsxs)(l.a,{className:h.card,children:[o&&Object(i.jsx)("p",{children:"Loading data..."}),s&&s.project&&Object(i.jsxs)(u.a,{children:[Object(i.jsx)(d.a,{className:h.title,children:s.project.title}),Object(i.jsx)(d.a,{className:h.text,children:"".concat(k("User"),": ").concat(s.project.user.first_name," ").concat(s.project.user.last_name)}),Object(i.jsxs)("div",{className:h.logo,children:[k("Status"),"success"===s.project.status?Object(i.jsx)(p.a,{fontSize:"large"}):"failed"===s.project.status?Object(i.jsx)(x.a,{fontSize:"large"}):"in_progress"===s.project.status?Object(i.jsx)(O.a,{fontSize:"large"}):void 0]}),Object(i.jsx)(d.a,{className:h.text,children:"".concat(k("Collected"),": ").concat(s.project.collected," / ").concat(s.project.target," euros")})]})]})]})};N.displayName="Project";var w=N,L=n(145);function D(){var t=Object(s.a)(["\n{\n    projects {\n        description,\n        image_url,\n        status,\n        target,\n        title,\n        collected,\n        id,\n        user {\n            first_name\n            last_name\n        }\n    }\n}\n"]);return D=function(){return t},t}var S=Object(b.a)((function(t){return{root:{width:"100%",backgroundColor:t.palette.background.paper},list:{margin:"0 auto",width:"20vw"},block:{display:"block"},title:{textAlign:"center"},link:{textDecoration:"none",color:"black"},item:{padding:15,width:400,backgroundColor:"mediumaquamarine",border:"aquamarine",borderWidth:.5,borderColor:"#3f51b5",borderRadius:4},logo:{textAlign:"right"}}})),_=Object(b.a)((function(t){return{root:{width:"100%"},block:{display:"inline-block"},list:{textAlign:"center"},title:{textAlign:"center"},link:{textDecoration:"none",color:"black"},item:{padding:15,width:400,backgroundColor:"indianred",border:"aquamarine",borderWidth:.5,borderColor:"#3f51b5",borderRadius:4},logo:{textAlign:"right"}}})),A=Object(m.gql)(D()),P=function(){var t="CLIENT2",e=(S(),_()),n=Object(m.useQuery)(A),a=n.loading,c=n.data,o=Object(j.a)(),s=o.t;o.i18n;return Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:e.list,children:[Object(i.jsx)("h1",{className:e.title,children:s("Miimosa Project List")}),a&&Object(i.jsx)("p",{children:"Loading data..."}),c&&c.projects.length&&c.projects.map((function(n,a){return Object(i.jsx)("div",{className:e.block,children:Object(i.jsx)(r.b,{to:{pathname:"/".concat(n.id),state:{id:n.id,client:t}},className:e.link,children:Object(i.jsx)(L.a,{children:Object(i.jsxs)("div",{className:e.item,children:[Object(i.jsx)("div",{className:"privacy",children:n.title}),Object(i.jsx)("div",{children:"".concat(n.user.first_name," ").concat(n.user.last_name)}),Object(i.jsx)("div",{className:e.logo,children:"success"===n.status?Object(i.jsx)(p.a,{}):"failed"===n.status?Object(i.jsx)(x.a,{}):"in_progress"===n.status?Object(i.jsx)(O.a,{}):void 0})]})})})},"project_".concat(a))})),(!c||c.projects.length<1)&&Object(i.jsx)("div",{children:"No data"})]})})};P.displayName="projectList";var q=P;var I=function(){return Object(i.jsx)(r.a,{children:Object(i.jsxs)("div",{children:[Object(i.jsx)(o.a,{path:"/",exact:!0,component:q}),Object(i.jsx)(o.a,{path:"/:id",component:w})]})})},z=n(68),B=n(45);z.a.use(B.e).init({resources:{en:{translation:{"Miimosa Project List":"Miimosa Project List",User:"User",Collected:"Collected","Project Details":"Project Details",Status:"Status","Back To List":"Back to project list"}},fr:{translation:{"Miimosa Project List":"Liste de projets Miimosa",User:"Utilisateur",Collected:"Collect\xe9","Project Details":"Fiche projet",Status:"Statut","Back To List":"Retour \xe0 la liste de projets"}}},lng:"fr",keySeparator:!1,interpolation:{escapeValue:!1}});z.a;var M=new m.ApolloClient({link:new m.HttpLink({uri:"https://landing-test-gql-endpoint.miimosa.net/graphql"}),cache:new m.InMemoryCache});c.a.render(Object(i.jsx)(m.ApolloProvider,{client:M,children:Object(i.jsx)(I,{})}),document.getElementById("root"))}},[[121,1,2]]]);
//# sourceMappingURL=main.b9d02b13.chunk.js.map