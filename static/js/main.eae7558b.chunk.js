(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,name:"SpongeBob",image:"https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Spongebob-squarepants.svg/666px-Spongebob-squarepants.svg.png",clicked:!1,occupation:"Fry Cook",location:"A Pineapple Under the Sea"},{id:2,name:"Mr. Krabs",image:"https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131",clicked:!1,occupation:"Restaurant Owner",location:"A Giant Anchor"},{id:3,name:"Squidward",image:"https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626",clicked:!1,occupation:"Cashier",location:"An Easter Island Head"},{id:4,name:"Dexter",image:"https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png",clicked:!1,occupation:"Boy Genius",location:"A Secret Laboratory"},{id:5,name:"Courage",image:"https://vignette4.wikia.nocookie.net/vsbattles/images/3/39/Courage-0.png/revision/latest?cb=20160719055423",clicked:!1,occupation:"A Cowardly Dog",location:"Nowhere, Kansas"},{id:6,name:"Doug Funnie",image:"https://vignette1.wikia.nocookie.net/doug/images/3/3b/Doug001.gif/revision/latest?cb=20110807170511",clicked:!1,occupation:"Student",location:"Bluffington"},{id:7,name:"Bugs Bunny",image:"https://vignette2.wikia.nocookie.net/deathbattlefanon/images/2/2b/Bugs_Bunny.png/revision/latest?cb=20151206010607",clicked:!1,occupation:"Looney Toon",location:"A Rabbit Burrow"},{id:8,name:"Johnny Bravo",image:"http://vignette3.wikia.nocookie.net/p__/images/9/9a/Johnny_Bravo.png/revision/latest?cb=20131031233339&path-prefix=protagonist",occupation:"Ladies Man",location:"Aron City"},{id:9,name:"Tommy Pickles",image:"https://vignette4.wikia.nocookie.net/uncyclopedia/images/e/e4/Tommy_Pickles.png/revision/latest?cb=20110530102641",clicked:!1,occupation:"Adventurer",location:"California"},{id:10,name:"Rocko",image:"http://vignette3.wikia.nocookie.net/rockosmodernlife/images/9/9e/Rockos-modern-life-4e582a8f06a41.png/revision/latest?cb=20130522173416",clicked:!1,occupation:"Cashier",location:"O-Town, California"},{id:11,name:"Captain Planet",image:"http://vignette2.wikia.nocookie.net/dragon-rap-battles/images/b/b6/Captain_Planet.png/revision/latest?cb=20160911200836",clicked:!1,occupation:"Superhero",location:"Earth"},{id:12,name:"Ickis",image:"http://static.tvtropes.org/pmwiki/pub/images/ickis.png",clicked:!1,occupation:"Ahhhh! A Real Monster!",location:"Under a City Dump"}]},,,,function(e,t,a){e.exports=a(25)},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(2),c=a.n(o),r=a(8),s=a(3),l=a(4),u=a(7),m=a(5),g=a(9),p=(a(15),function(e){return console.log(e),i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.name,src:e.image,onClick:function(){return e.handleClick(e.id)}})))}),d=(a(17),function(e){return i.a.createElement("div",{className:"wrapper"},e.children)}),h=(a(19),function(e){return i.a.createElement("h1",{className:"title"},e.children)}),k=a(6),f=(a(21),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={images:k,score:0,topscore:0,message:""},a.shuffleData=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}return e},a.handleCorrectGuess=function(e){var t,n=a.state.score+1;t=n>a.state.topscore?n:a.state.topscore,a.setState({images:a.shuffleData(e),score:n,topscore:t})},a.handleIncorrectGuess=function(e){var t=e.map(function(e){return Object(r.a)({},e,{clicked:!1})});a.setState({images:t,score:0})},a.handleCardClick=function(e){console.log(e);var t=!1,n=a.state.images.map(function(a){var n=a;return n.id===e&&!1===n.clicked&&(n.clicked=!0,t=!0),n});!0===t?a.handleCorrectGuess(n):a.handleIncorrectGuess(n)},a}return Object(g.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({images:this.shuffleData(this.state.images)})}},{key:"render",value:function(){var e=this;return i.a.createElement(d,null,i.a.createElement(h,null,"Memory Game ",i.a.createElement("br",null),"Top Score: ",this.state.topscore," ",i.a.createElement("br",null),"Score: ",this.state.score),this.state.images.map(function(t){return i.a.createElement(p,{id:t.id,key:t.id,name:t.name,image:t.image,handleClick:e.handleCardClick})}))}}]),t}(n.Component));a(23);c.a.render(i.a.createElement(f,null),document.getElementById("root"))}],[[10,2,1]]]);
//# sourceMappingURL=main.eae7558b.chunk.js.map