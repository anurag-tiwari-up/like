var action = document.querySelector(".container")
var like = document.querySelector("#pop")
var like_indicator = document.querySelector("#like_indicator")
var like_show = document.querySelector("#like_number span")


var indicator=0
var like_count=268


like_indicator.addEventListener("click", function(){
    like.style.transform="translate(-50%, -90%) scale(1)"
    setTimeout(function(){
        like.style.transform="translate(-50%, -90%) scale(0)"
    },400);
    setTimeout(function(){
        like.style.opacity="0"
    },450);
    like.style.opacity=".8"

    if(indicator==0){
        like_indicator.style.color="red"
        indicator+=1;
        like_count++
        like_show.innerHTML=like_count
    }
    else{
        like_indicator.style.color="pink"
        indicator-=1;
        like_count--;
        like_show.innerHTML=like_count
    }
})



action.addEventListener("dblclick", function(){
    like.style.transform="translate(-50%, -90%) scale(1)"
    setTimeout(function(){
        like.style.transform="translate(-50%, -90%) scale(0)"
    },400);
    setTimeout(function(){
        like.style.opacity="0"
    },450);
    like.style.opacity=".8"
    if(indicator==0){
        like_indicator.style.color="red"
        indicator+=1;
        like_count++
        like_show.innerHTML=like_count
    }
    else{
        like_indicator.style.color="pink"
        indicator-=1;
        like_count--;
        like_show.innerHTML=like_count
    }

})