// $(document).ready(function(){

function blastoff(breakdown){
    var breakdown = document.getElementById("textSpace").value;
    var breakUp = breakdown.split(" ")
    var delay = 1000
    var i = 0
    function timeout() {
    setTimeout(function () {
     }, delay);
} 
for(; i<breakUp.length;i++) {    
    document.getElementById("words").innerHTML = breakUp[i]
}
}

// })



// // $(document).ready(function(){

//     function blastoff(breakdown){
//         var breakdown = document.getElementById("textSpace").value;
//         var breakUp = breakdown.split(" ")
//         var delay = 1000
//         var twinTO = timeout()
    
//         function timeout() {
//         setTimeout(function () {
//         for(i=0; i<breakUp.length;i++)
//         document.getElementById("words").innerHTML = breakUp[i];
//         }, delay + 3000 );
//     } timeout()
//     }
//     // })