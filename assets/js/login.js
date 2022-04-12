var button = document.getElementById("logbtn");

button.addEventListener("click", function() {
    document.location.href = 'index.html';

    function getName() {
        do {
            var name = document.querySelectorAll(input);
            console.log(input);
        }
        while (name.length < 4);
        $('#myinput').val(name);
        window.localStorage.setItem(name, myinput);
    }
    getName();
});



var input = document.getElementById("myinput");
var input1 = document.getElementById("myinput");


window.localStorage.getItem([input, input1], myinput);