function loader(){
    var loader = document.getElementById("loader");
    loader.style.display = "none";
}

if(window.location.pathname == "/about.html"){
    setTimeout(loader, 500);
}
setTimeout(loader, 1000);

console.log(window.location.href)
console.log(window.location.pathname)