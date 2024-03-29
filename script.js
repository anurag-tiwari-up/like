var action = document.querySelector(".container")
var like = document.querySelector("i")
a=0
if(a<2)
{
    action.addEventListener("dblclick", function(){
        like.style.transform="translate(-50%, -50%) scale(1)"
        setTimeout(function(){
            like.style.transform="translate(-50%, -50%) scale(0)"
        },500);
        setTimeout(function(){
            like.style.opacity="0"
        },800);
    })

}

