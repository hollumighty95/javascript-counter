var increment = document.querySelector("#increment");
var decrement = document.querySelector("#decrement");
var counterValue = document.querySelector("#counterValue");

var counter = 0;

function checkLimit () {
    if (counter >= 0 && counter <= 50) {
        counterValue.innerText = counter;
    }    
}

increment.addEventListener("click", function() {
    counter++
    checkLimit()
});

decrement.addEventListener("click", function() {
    counter--
    checkLimit() 
});

