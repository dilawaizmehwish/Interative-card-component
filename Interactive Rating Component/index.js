/***************************************** First Page *******************************************/

var myRate = document.querySelectorAll(".rate-num");
var prevClicked = null;

for (var i = 0; i < myRate.length; i++) {
    myRate[i].addEventListener("click", function () {
        if (prevClicked != null) {
            prevClicked.classList.remove("rate-bg-grey");
        }
        this.classList.add("rate-bg-grey");
        prevClicked = this;
        var num1 = this.textContent;
        document.querySelector(".result").innerHTML = "You selected " + num1 + " out of 5";
    });
}

/***************************************** Second Page *******************************************/
var submit = document.querySelector(".btn");
var card1 = document.getElementById("card1");
var card2 = document.getElementById("card2");

submit.addEventListener("click", function replaceCard() {
    card1.style.display = "none";
    card2.style.display = "block";
});
