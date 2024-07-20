//In payment page, check if user would like to use saved card or provide new card
document.getElementById("previousInfo").addEventListener("change", function(){

    var newCreditCardInfo = document.getElementById("newCreditCardInfo");

    //get all input field from div
    const creditCardFields = newCreditCardInfo.querySelectorAll('input');

    if (this.checked){
        //change div to hidden
        newCreditCardInfo.classList.add("hidden");
        
        //Change all field to not required
        creditCardFields.forEach(field => {
            field.required = false;
        })
    } else {
        //change div to display
        newCreditCardInfo.classList.remove("hidden");

        //Change all field to required
        creditCardFields.forEach(field => {
            field.required = true;
        })
    }
});

//Create Notification with receipt number after successful payment
document.getElementById("payment-form").addEventListener("submit", function(event){
    event.preventDefault(); //Prevent form from submitting before alert

    function generateReceiptNumber(){
        return Math.floor(Math.random() * 100000)
    };

    const receiptNumber = generateReceiptNumber();
    alert("Payment is done!! Receipt Number: " + receiptNumber);

    window.location.href = "Azoom_Home.html";
});