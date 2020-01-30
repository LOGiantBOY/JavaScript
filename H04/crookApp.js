var plaatjes = [1,2,3];
var teller = 0;
var ogen = document.getElementById("ogen");
ogen.style.backgroundImage = "url('img/ogen1.jpg')";
var neus = document.getElementById("neus");
neus.style.backgroundImage = "url('img/neus1.jpg')";
var mond = document.getElementById("mond");
mond.style.backgroundImage = "url('img/mond1.jpg')";

ogen.addEventListener("click", function () {
    ogen.style.backgroundImage = "url('img/ogen" + changeImage() + ".jpg')";
});
neus.addEventListener("click", function () {
    neus.style.backgroundImage = "url('img/neus" + changeImage() + ".jpg')";
});
mond.addEventListener("click", function () {
    mond.style.backgroundImage = "url('img/mond" + changeImage() +".jpg')"
});
function changeImage() {
    if (teller >= plaatjes.length) {
        teller = 1;
    } else {
        teller++;
    }
    console.log(teller);
    return teller;
}