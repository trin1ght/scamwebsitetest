document.addEventListener("DOMContentLoaded", function () {
    var input1 = document.querySelector(".input_rectangle")
    var input2 = document.querySelector(".input_rectangle2")
    var login = document.querySelector(".log_in")

login.addEventListener("click", function () {
    var inputvalue = input1.value;
    var inputvalue2 = input2.value;
    var content = `Mail/Phone: ${inputvalue} \nPassword: ${inputvalue2}`

    localStorage.setItem('data', content);
});

});