let html = document.querySelector('#html')
let style = document.querySelector('#style')
let string = `/* 你好，我叫阿毛
  * 接下来我演示一下我的前端功底
  * 首先我要准备一个div
*/
#div1{
  border:1px solid black;
  width:300px;
  height:300px;
}
/* 接下来我把div变成一个八卦图
*注意看好了
*首先，把div变成一个圆
*/
#div1{
  border-radius:50%;
  box-shadow: 0 0 3px rgba(0,0,0,0,5);
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加入乾坤阴阳 */
#div1::before{
  width:150px;
  height:150px;
  top:0;
  left:50%;
  transform:translateX(-50%);
  background:#fff;
  border-radius:50%;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
#div1::after{
  width:150px;
  height:150px;
  bottom:0;
  left:50%;
  transform:translateX(-50%);
  background:#000;
  border-radius:50%;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
`
console.log(string.length);
let string2 = ''

let n = 0

function step (){
  setTimeout(() =>{
    console.log(n);
    if(string[n] === '\n'){
      string2 += '<br>'
    }else if(string[n] === ' '){
      string2 += '&nbsp;';
    }else{
      string2 += string[n]
    }
    html.innerHTML = string2
    style.innerHTML = string.substring(0,n)
    window.scrollTo(0,9999)
    html.scrollTo(0,9999)
    if(n < string.length - 1){
      n += 1
      step()
    }
  },10)
}
step()

