(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,name:"Parappa the Rapper",image:"https://vignette.wikia.nocookie.net/parappatherapper/images/9/9d/PTR_US_cover_Parappa.png/revision/latest?cb=20160729000138"},{id:2,name:"Um Jammer Lammy",image:"https://vignette.wikia.nocookie.net/parappatherapper/images/f/f8/Lammy.png/revision/latest?cb=20160904001029"},{id:3,name:"Chop Chop Master Onion",image:"https://vignette.wikia.nocookie.net/parappatherapper/images/8/80/Tamanegi_UJL.png/revision/latest?cb=20160903221636"},{id:4,name:"Katy Kat",image:"https://vignette.wikia.nocookie.net/parappatherapper/images/1/1c/Line_Sticker_Lammy_35.png/revision/latest?cb=20160712020902"},{id:5,name:"Ma-San",image:"https://vignette.wikia.nocookie.net/parappatherapper/images/5/58/Ma-san_2.png/revision/latest?cb=20160925234833"},{id:6,name:"Captain Fussenpepper",image:"https://vignette.wikia.nocookie.net/parappatherapper/images/2/28/Captain_Fussenpepper.png/revision/latest?cb=20160729000133"},{id:7,name:"Chief Puddle",image:"https://vignette.wikia.nocookie.net/parappatherapper/images/e/e6/Chief_Puddle_2.png/revision/latest?cb=20160901165454"},{id:8,name:"Prince Fleaswallow",image:"https://vignette.wikia.nocookie.net/parappatherapper/images/9/99/Prince_Fleaswallow.png/revision/latest?cb=20160729000135"},{id:9,name:"Instructor Mooselini",image:"https://vignette.wikia.nocookie.net/parappatherapper/images/6/68/Instructor_Mooselini.png/revision/latest?cb=20160729000133"},{id:10,name:"PJ Berri",image:"https://vignette.wikia.nocookie.net/parappatherapper/images/7/7c/Line_Sticker_PJ_1.png/revision/latest?cb=20160708215700"},{id:11,name:"Guru Ant",image:"https://vignette.wikia.nocookie.net/parappatherapper/images/c/c9/Guru_Ant.png/revision/latest?cb=20160729001529"},{id:12,name:"Instructor Moosesha",image:"https://vignette.wikia.nocookie.net/parappatherapper/images/5/5e/Instructor_Moosesha_2.png/revision/latest?cb=20160802015400"}]},,,function(e,a,t){e.exports=t(21)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(2),c=t.n(r),s=(t(15),t(3)),o=t(4),p=t(7),m=t(5),l=t(8);t(16);var h=function(e){return i.a.createElement("div",{className:"container"},e.children)};t(17);var g=function(e){return i.a.createElement("ul",{className:"nav nav-tabs navbar-fixed-top"},i.a.createElement("li",{className:"nav-item"},"It's all in the mind!"),i.a.createElement("li",{className:"nav-item"},"Score: ",e.score))};t(18);var u=function(e){return i.a.createElement("div",{className:"characterBlock row"},e.children)};t(19);var v=function(e){return i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"img-container",onClick:function(){return e.checkForDupe(e.id)}},i.a.createElement("img",{alt:e.name,src:e.image,className:"characterImage"})))},d=t(6),k=(t(20),function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=Object(p.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(i)))).state={characters:d},t.characterArray=[],t.indexesArray=[1,2,3,4,5,6,7,8,9,10,11,12],t.score=0,t.checkForDupe=function(e){t.characterArray.includes(e)?(console.log("game over"),setTimeout(t.gameover(),5e3)):(t.characterArray.push(e),console.log(t.characterArray),t.render())},t}return Object(l.a)(a,e),Object(o.a)(a,[{key:"gameover",value:function(){this.characterArray=[],this.score=0,this.render()}},{key:"shuffle",value:function(e){var a,t,n;for(a=this.state.characters.length-1;a>0;a--)t=Math.floor(Math.random()*(a+1)),n=this.indexesArray[a],this.indexesArray[a]=this.indexesArray[t],this.indexesArray[t]=n;return e}},{key:"render",value:function(){var e=this;return this.shuffle(this.characters),i.a.createElement(h,null,i.a.createElement(g,{score:this.score}),console.log(this.indexesArray),console.log(this.score),i.a.createElement(u,null,this.state.characters.map(function(a,t){return i.a.createElement(v,{id:a.id,key:a.id,name:a.name,image:a.image,checkForDupe:e.checkForDupe})})))}}]),a}(n.Component));c.a.render(i.a.createElement(k,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.e277ad10.chunk.js.map