document.getElementById("return-form").addEventListener("submit",function(event){
    event.preventDefault(); //Prevent form from submitting before alert

    alert("Vehicle return has been confirmed. Vehicle inspection in progress. Please make payment once payment reference number has been received.")

    window.location.href = "Azoom_Home.html";
});