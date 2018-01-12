document.onmousemove = function(e) {
    var posX = e.clientX;
    var posY = e.clientY;
    var delay = 200;

    let nian = document.getElementsByClassName('nian');
    for (i = 0; i < nian.length; i++) {
        setTimeout(function(ni) {

            ni.style.top = (posY - 50) + "px";
            ni.style.left = (posX - 50) + "px";

        }, delay * i, nian[i]);
    }
}