function copyPhoneNumber() {
    var input = document.getElementById("phone-number").innerHTML;
    navigator.clipboard.writeText(input);
    alert("Kopirali ste broj telefona: " + input);
}
function copyEmail() {
    var input = document.getElementById("email").innerHTML;
    navigator.clipboard.writeText(input);
    alert("Kopirali ste email: " + input);
}