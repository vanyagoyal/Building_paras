function getp1(){
    var inputs = [];
    for(var i=1; i<=6; i++){
        inputs.push(document.getElementById("box"+i).value);
        document.getElementById("p1").innerHTML=inputs.join(". ");
    }
}
function getp2(){
    var inputs1 = [];
    for(var j=1; j<=6; j++){
        inputs1.push(document.getElementById("input"+j).value);
        document.getElementById("p2").innerHTML=inputs1.join(". ");
    }
}