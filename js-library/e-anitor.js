function _sleep(milliseconds) {return new Promise(resolve => setTimeout(resolve, milliseconds));}
function _id(where){return document.getElementById(where)}
function _class(where){return document.getElementsByClassName(where)}
function _tag(where){return document.getElementsByTagName(where)}
// _appfont('/static/keifont.ttf','keifont');
function _appfont(pass,family){
    var styleTag = document.createElement('style');
    styleTag.textContent = `
            @font-face{
                font-family: `+family+`;
                src: url("`+pass+`") format("truetype") }
            }
                `;
    document.head.appendChild(styleTag);
}
var i=0;
function _makechart(dl,index,size,color,line,linepx,pos){
    //_id(dl).innerHTML+="<p id='ka'style='font-size:""size""'>"+index+"</p>"
    qa=document.createElement('p')
    //<dt style='font-size:30px'>1990年11月</dt><dd><h2 style='font-size:25px'>pinopino</h2><p style='font-size:20px'>ahoaho</p></dd>
    document.getElementById(dl).appendChild(qa);
}
//_text('test');
function _text(index){
    var textTag = document.createElement('h1');
    textTag.id='olan';
    textTag.textContent=index;
    document.getElementById('text').appendChild(textTag);
}
function _text2(index){
    var textTag = document.createElement('h1');
    textTag.id='olan2';
    textTag.textContent=index;
    document.getElementById('text').appendChild(textTag);
}
// _freetext('h1','freetext','id','keifont','30px','pink','middle','popup','1','body');
async function _freetext(tag,index,id,font,size,color,pos,animation,delay,where){
    var flug=false;
    var q =document.body.clientWidth/size.slice(0,-2);
    var count=Math.floor(q);
    var r=new RegExp(".{1,"+count+"}","g")
    var k=index.match(r);
    console.log(k)
    for (var i = 0; i < k.length; i++){
        textTag = document.createElement(tag);
        textTag.style.color=color;
        textTag.style.fontFamily=font;
        textTag.style.fontSize=size;
        textTag.style.fontWeight=50;
        if(pos=='middle'){textTag.style.textAlign='center';}
        if(pos=='right'){textTag.style.textAlign+='right';}
        if(pos!='middle'||pos!='right'){
            textTag.style.position='relative';
            textTag.style.left=pos+'px';
        }
        if(animation != null){textTag.className+=animation;}
        textTag.id=id
        ina=k[i].replace((' '),('&emsp;'));
        ina=ina.replace(('_t'),('&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;'));
        ina=ina.replace(('_s'),('&emsp;&emsp;&emsp;&emsp;'));
        textTag.innerHTML=ina;
        await _sleep(delay)
        if(where==null){where='text'}
        document.getElementById(where).appendChild(textTag);
    }
}
async function _nobrtext(tag,index,id,font,size,color,pos,animation,delay,where){
    var flug=false;
    textTag = document.createElement(tag);
    textTag.style.color=color;
    textTag.style.fontFamily=font;
    textTag.style.fontSize=size;
    textTag.style.fontWeight=50;
    if(pos=='middle'){textTag.style.textAlign='center';}
    if(pos=='right'){textTag.style.textAlign+='right';}
    if(pos!='middle'||pos!='right'){
        textTag.style.position='relative';
        textTag.style.left=pos+'px';
    }
    if(animation != null){textTag.className+=animation;}
    textTag.id=id
    ina=index.replace((' '),('&emsp;'));
    ina=ina.replace(('_s'),('&emsp;&emsp;&emsp;&emsp;'));//_s
    textTag.innerHTML=ina;
    await _sleep(delay)
    if(where==null){where='text'}
    document.getElementById(where).appendChild(textTag);
}
function _br(where){
    var textTag = document.createElement('br');
    document.getElementById(where).appendChild(textTag);
}
function _nodebr(){
    var textTag = document.createElement('br');
    document.getElementById('text').appendChild(textTag);
}
function _animation(){
var styleTag = document.createElement('style');
    styleTag.textContent = `
.popup {
    animation: ani1 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
@keyframes ani1 {
    0% {
        transform: translateY(40px) scale(0.5);
        opacity: 0;
    }100% {
        transform: translateY(0) scale(1.0);
    }80%, 100% {
        opacity: 1;
    }
}
.fadein {
    animation: fadeIn 0.7s cubic-bezier(0.33, 1, 0.68, 1) forwards;
}
@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
.Rslidein {
    animation: RslideIn 1s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}
@keyframes RslideIn {
    0% {
        transform: translateX(180px);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
    }
    40%,100% {
        opacity: 1;
    }
}
.Lslidein {
    animation: LslideIn 1s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}
@keyframes LslideIn {
    0% {
        transform: translateX(-180px);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
    }
    40%,100% {
        opacity: 1;
    }
}
.Uslidein {
    animation: UslideIn 1s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}
@keyframes UslideIn {
    0% {
        transform: translateY(-30px);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
    }
    40%,100% {
        opacity: 1;
    }
}
.Dslidein {
    animation: DslideIn 1s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}
@keyframes DslideIn {
    0% {
        transform: translateY(30px);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
    }
    40%,100% {
        opacity: 1;
    }
}
.Rpslidein{
  animation: rpslide 0.5s cubic-bezier(0.12, 0, 0.39, 0) 1 forwards;
}

@keyframes rpslide {
  0% {
    transform: translateX(140px);
    opacity: 0;
  }
  50% {
    transform: translateX(0);
  }
  65% {
    transform: translateX(30px);
  }
  100% {
    transform: translateX(0);
  }
  20%,100% {
    opacity: 1;
  }
}
.Lpslidein{
  animation: lpslide 0.5s cubic-bezier(0.12, 0, 0.39, 0) 1 forwards;
}

@keyframes lpslide {
  0% {
    transform: translateX(-140px);
    opacity: 0;
  }
  50% {
    transform: translateX(0);
  }
  65% {
    transform: translateX(-30px);
  }
  100% {
    transform: translateX(0);
  }
  20%,100% {
    opacity: 1;
  }
}
.zoom{
  animation: zoomIn 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

@keyframes zoomIn {
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.RDdiagonal{
  animation: rdslide 0.4s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}
@keyframes rdslide {
  0% {
    transform: translate(180px,30px);
    opacity: 0;
  }
  100% {
    transform: translate(0,0);
  }
  20%,100% {
    opacity: 1;
  }
}

.RUdiagonal{
  animation: ruslide 0.4s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}
@keyframes ruslide {
  0% {
    transform: translate(180px,-30px);
    opacity: 0;
  }
  100% {
    transform: translate(0,0);
  }
  20%,100% {
    opacity: 1;
  }
}

.LDdiagonal{
  animation: ldslide 0.4s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}
@keyframes ldslide {
  0% {
    transform: translate(-180px,30px);
    opacity: 0;
  }
  100% {
    transform: translate(0,0);
  }
  20%,100% {
    opacity: 1;
  }
}

.LUdiagonal{
  animation: luslide 0.4s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}
@keyframes luslide {
  0% {
    transform: translate(-180px,-30px);
    opacity: 0;
  }
  100% {
    transform: translate(0,0);
  }
  20%,100% {
    opacity: 1;
  }
}
#spredborder:before{
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 0;
  border-bottom: solid 2px #000;
  transform: translateX(-50%);
  border-color: pink;
  animation: border_anim 0.7s linear forwards;
}
@keyframes border_anim {
  0%{
    width: 0%;
  }
  100%{
    width: 30%;
  }
}

#spredline:before{
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 0;
  border-left: solid 2px #000;
  transform: translateY(-50%);
  border-color: pink;
  animation: border_anim2 0.7s linear forwards;
}
@keyframes border_anim2 {
  0%{
    height: 0%;
  }
  100%{
    height: 30%;
  }
}
#silver{
  color: linear-gradient(45deg, #757575 0%, #9E9E9E 45%, #E8E8E8 70%, #9E9E9E 85%, #757575 90% 100%);
  animation: gradient 5s infinite cubic-bezier(.62, .28, .23, .99) both;
}
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

#gold{
  backround: linear-gradient(45deg, #c0b283 0%, #c0b283 45%, #FEE9A0 70%, #c0b283 85%, #c0b283 90% 100%);
  background-size: 800% 400%;
  animation: gradient 5s infinite cubic-bezier(.62, .28, .23, .99) both;
}
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}



#olan{
    font-size:40px;
    font-weight: 50;
    color:pink;
    font-family: "keifont";
}
#rainbow{
	color: #FFCC00;
	background: -webkit-linear-gradient(0deg, #40E0A8, #FFCC00, #FF0070);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

#lline {
    border-left: auto solid red;
}
#dl * {
  box-sizing: border-box;
}

#dl p {
  line-height: 1.8;
}

#dl h1 {
  font-size: 36px;
  margin: 0 0 30px;
  padding: 10px;
  font-weight: bold;
}

dl {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

dl dt {
  text-align: right;
  width: 8.5em;
  padding: 0.5em 1.0em 0.5em 0.5em;
  position: relative;
}

dl dd {
  width: calc(100% - 8.5em);
  padding: 0.5em 2.0em 3.0em;
  border-left: 2px solid #ccc;
}

dl dd h2 {
  font-size: 22px;
  font-weight: bold;
  margin: 0 0 5px;
}

`;
    document.head.appendChild(styleTag);
};