function blastoff(breakdown){
    var breakdown = document.getElementById("textSpace").value;
    var breakUp = breakdown.split(" ")

    document.getElementById("words").innerHTML = breakUp[0]

    setTimeout(function(){  
        for(i=1; i<breakUp.length;i++)(
    document.getElementById("words").innerHTML = breakUp[i]), 2000   
    })
}
    

