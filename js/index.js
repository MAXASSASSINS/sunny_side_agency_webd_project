console.log(document.querySelector(".hamburger-menu").classList.add("visibility"));
document.querySelector(".hamburger img").addEventListener("click", function(){
    console.log(document.querySelector(".hamburger-menu").classList.toggle("visibility"));
})