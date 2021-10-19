if (window.matchMedia("(max-width: 375px)").matches) {
    var x = document.getElementsByClassName('line');

    var i;
    for (i = 0; i < x.length; i++) {
        x[i].innerHTML = "<br>";
    }
    document.getElementById('qual').innerHTML = "";
}