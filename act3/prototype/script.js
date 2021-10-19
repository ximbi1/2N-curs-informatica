var i = 1;

function changeBg() {
    //console.log("changed bg")
    document.body.style.backgroundImage = "url('https://picsum.photos/" + window.innerWidth + "/" + window.innerHeight + "?v=" + i + "')";

    i++;
    if (i == 6) i = 1;
}

var sec = 10;
setInterval(function() {
    document.getElementById("timer").innerText = sec;

    if (!sec) {
        changeBg();
        sec = 10;
    };
    sec--;

}, 1000);

changeBg();