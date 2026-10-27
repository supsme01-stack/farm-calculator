btn=document.getElementById("btn");
btn.addEventListener("click",function(){
    let w=document.getElementById("width").value;
    let l=document.getElementById("length").value;
    let area=parseInt(w)*parseInt(l);
    let perimeter=2*(parseInt(w)+parseInt(l));
    document.getElementById("area").innerHTML="Area is "+area+"sqm";
    document.getElementById("perimeter").innerHTML="Primeter  is "+perimeter+"m";
});