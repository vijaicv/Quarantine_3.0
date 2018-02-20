var container=document.getElementById("container");


TweenMax.staggerFrom(".textanimate",1,{opacity:0,scale:0,ease: Elastic. easeOut.config(2,1)},0.1);
TweenMax.from("hr",1,{width:0});
TweenMax.from("#date",0.5,{opacity:0});

var container=document.getElementById("container");
var maintitle=document.getElementById("text");
var exptext=document.getElementById("exptext");
maintitle.addEventListener("click",function(){

  TweenMax.staggerTo(".textanimate",0.25,{color:"#00ffd1"},0.05);
  TweenMax.staggerTo(".textanimate",0.25,{scale:0,delay:0.2},0.05);
  TweenMax.to("hr",0.25,{width:0});
  TweenMax.to("#date",0.25,{opacity:0});
  TweenMax.to("#exptext",1,{opacity:1,delay:1});
  TweenMax.from("#exptext",2,{y:500});
  TweenMax.to(".bouncy",1,{opacity:1,delay:1,onComplete:destroy});


  TweenMax.from(".bouncy",2,{y:-20,ease:Bounce.easeOut,delay:2,repeat:-1,yoyo:true});
  TweenMax.to(".bouncy",2,{color:"#00ffd1",delay:2,repeat:-1,yoyo:true});

  function destroy(){
    container.classList.add("destroy");
  }
});

var text=document.getElementById("exptext");

rules.addEventListener("click",function(){
  console.log("called rules");
  TweenMax.to("#exptext",2,{y:-1000,opacity:0});
  TweenMax.from("#rulebox",0.5,{y:500,delay:0.5});
  TweenMax.to("#rulebox",0.5,{opacity:1,delay:0.5,onComplete:destroy2});
  TweenMax.from("#where",2,{y:-20,ease:Bounce.easeOut,delay:2,repeat:-1,yoyo:true});
  TweenMax.to("#where",2,{color:"#00ffd1",delay:2,repeat:-1,yoyo:true});

  function destroy2(){
    text.classList.add("destroy");
  }
})


var rulebox=document.getElementById("rulebox");
where.addEventListener("click",function(){
  TweenMax.to("#rulebox",2,{y:-1000,opacity:0});
  TweenMax.from("#wwh",0.5,{y:500});
  TweenMax.to("#wwh",0.5,{opacity:1,onComplete:destroy3});
  TweenMax.from("#contact",2,{y:-20,ease:Bounce.easeOut,delay:2,repeat:-1,yoyo:true});
  TweenMax.to("#contact",2,{color:"#00ffd1",delay:2,repeat:-1,yoyo:true});

  function destroy3(){
    rulebox.classList.add("destroy");
  }
})

var contact=document.getElementById("contact");
contact.addEventListener("click",function(){
  TweenMax.to("#wwh",2,{y:-1000,opacity:0});
  TweenMax.from("#contactus",0.5,{y:500});
  TweenMax.to("#contactus",0.5,{opacity:1});
  TweenMax.from("#homebtn",2,{y:-20,ease:Bounce.easeOut,delay:2,repeat:-1,yoyo:true});
  TweenMax.to("#homebtn",2,{color:"#00ffd1",delay:2,repeat:-1,yoyo:true});
})

var home =document.getElementById("homebtn");
home.addEventListener("click",function(){
  location.reload();
})
