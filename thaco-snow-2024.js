 $(document).ready(function(){

let container = document.body;
let count = 50;
for(var i = 0; i<50; i++){
    let leftSnow = Math.floor(Math.random() * container.clientWidth);
    let topSnow = Math.floor(Math.random() * container.clientHeight);
    let widthSnow = Math.floor(Math.random() * 25)+10;
    let timeSnow = Math.floor((Math.random() * 5) + 5);
    let blurSnow = Math.floor(Math.random() * 10); blurSnow=blurSnow/3;
  let id=Math.floor(Math.random() * 10);
    console.log(leftSnow);
    let div = document.createElement('div');
    div.classList.add('mmis-snow-'+id);
    div.style.left = leftSnow + 'px';
    div.style.top = topSnow + 'px';
    div.style.zIndex = 999999;
    div.style.width = widthSnow + 'px';
    div.style.height = widthSnow + 'px';
    div.style.animationDuration = timeSnow + 's';
    div.style.filter = "blur(" + blurSnow + "px)";
    container.appendChild(div);
}
   
   var cssId = 'myCss';  // you could encode the css path itself to generate id..
if (!document.getElementById(cssId))
{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://thaco.link/snow/style25.css';
    link.media = 'all';
    head.appendChild(link);
}
 });
