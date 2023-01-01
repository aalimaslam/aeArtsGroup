function loader(){
    var loader = document.getElementById("loader");
    loader.style.display = "none";
}

if(window.location.pathname == "/about.html"){
    setTimeout(loader, 500);
}
setTimeout(loader, 1000);

let imagesName = ["circle.png","triangle.png","twist.png","X.png"];
let totalHeight = document.documentElement.offsetHeight;
function background(){
    for(let i = 0; i < 40; i++){
        let img = document.createElement("img");
        img.src = "./imgs/" + imagesName[Math.floor(Math.random() * imagesName.length)];
        img.style.width = "40px";
        img.style.height = "40px";
        img.style.position = "absolute";
        img.style.opacity = "0.2";
        img.style.animation = "animate 10s alternate infinite"
        img.style.top = Math.floor(Math.random() * totalHeight) + "px";
        img.style.left = Math.floor(Math.random() * 100) + "%";
        img.style.zIndex = "-1";
        document.body.appendChild(img);
    }
}
background();

console.log(document.documentElement.offsetHeight);