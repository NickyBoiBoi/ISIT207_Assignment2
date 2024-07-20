//Hide isDefects input if check box is not checked
document.getElementById("defects").addEventListener("change", function(){
    var isDefects = document.getElementById("isDefects");
    //get all input field from div
    const inputDefects = isDefects.querySelectorAll("input");

    if(this.checked){
        isDefects.classList.remove("hidden");
        inputDefects.forEach(field => {
            field.required = true;});
    } else {
        isDefects.classList.add("hidden");
        inputDefects.forEach(field => {
            field.required = false;});
    }
});

document.getElementById("inspection-form").addEventListener("submit", function(event){
    event.preventDefault(); //Prevent form from submitting before alert

    function generatePRN(){
        return Math.floor(Math.random() * 100000)
    };

    const PRN = generatePRN();
    alert("Payment Reference Number: " + PRN);
    
    window.location.href = "Azoom_Home.html";
});