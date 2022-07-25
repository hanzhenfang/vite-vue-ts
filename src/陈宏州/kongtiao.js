var count_power = 0;
var tempnum = 26;
document.getElementById("p-temp").style.visibility="hidden";
document.getElementById("display").style.visibility="hidden";
function openpower(){
    if(count_power % 2 === 0){
        windout= document.getElementById("wind-out");
        windout.style.background="black";
        var asd = document.getElementById("p-temp");
        asd.innerHTML=tempnum+"℃";
        document.getElementById("p-temp").style.visibility="visible";
        document.getElementById("display").style.visibility="visible";
    }
    else if(count_power % 2 === 1){
        windout= document.getElementById("wind-out");
        windout.style.background="white";
        document.getElementById("p-temp").style.visibility="hidden";
        document.getElementById("display").style.visibility="hidden";
    }
    count_power++;
}
document.getElementById("bu-left").addEventListener("click",tmepplus);
function tmepplus(){
    if(tempnum<32){
        tempnum++;
    }
/*if(tempnum<24){
    document.getElementById("display-p").innerHTML="温度太低了，记得一会把温度调高点哦~";
    }else if(tempnum<29){
        document.getElementById("display-p").innerHTML="这个温度比较好，保持这个温度吧~";
    }else if(tempnum<33){
        document.getElementById("display-p").innerHTML="温度有点高，热了记得把温度调低点哦~";
    }*/
    var asdf = document.getElementById("p-temp");
        asdf.innerHTML=tempnum+"℃";
    document.getElementById("display-temp").innerHTML="温度："+tempnum+"℃"
}
document.getElementById("bu-right").addEventListener("click",reduce);
function reduce(){
    if(tempnum>16){
        tempnum--;
    }
    var asdf = document.getElementById("p-temp");
        asdf.innerHTML=tempnum+"℃";
    document.getElementById("display-temp").innerHTML="温度："+tempnum+"℃";
    
}
document.getElementById("display-temp").innerHTML="温度："+tempnum+"℃"
/*
    */