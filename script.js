// window.alert("抽卡");
function startDivine(){
      var myDivine = ['愚者', '魔術師', '女祭司', '皇后', '皇帝', '教皇','戀人','戰車','力量','隱者','命運之輪','正義','吊人','死神','節制','惡魔','塔','星星','月亮','太陽','審判','世界'];
    var myPlace=['正位','逆位'];
    var rand01 = Math.random()*myDivine.length | 0;
    var rand02 = Math.random()*myPlace.length | 0;
    // var rValue = myArray[rand];
    var rValue01 = myDivine[rand01];
    var rValue02 = myPlace[rand02];
window.alert(rValue01+rValue02)
}