let text = document.getElementById("head");
window.addEventListener("scroll", ()=>{
    let value = window.scrollY;

    text.style.marginTop = value * 1.5 + "px";
});
