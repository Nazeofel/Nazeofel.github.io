const a = document.querySelector("#oui");

a.addEventListener("mouseleave", function(e){
    
    let oui = window.getComputedStyle(a, '::after');

    oui.animationPlayState
});