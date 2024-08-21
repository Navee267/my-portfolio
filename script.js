var menuicon = document.querySelector(".menu-icon")
var sidenavbar = document.querySelector(".side-navbar")
var sidepopup = document.querySelector(".side-popup")

menuicon.addEventListener("mouseover",function(){
    sidenavbar.style.display = "flex"
    sidepopup.style.display = "flex"
})

menuicon.addEventListener("click",function(){
    sidenavbar.style.display = "none"
    sidepopup.style.display = "none"
})