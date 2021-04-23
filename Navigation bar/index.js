function buttonopenclose() {
    var x = document.getElementById("iconopen");
    var y = document.getElementById("iconclose");
    var close = document.getElementsByClassName("close");
    
    // console.log(close);
    if(x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "block";
    }
}