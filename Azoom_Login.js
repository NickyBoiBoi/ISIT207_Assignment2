//Predefined login details
const loginDetails = [
    {email: "test00@gmail.com", password: "12345"},
    {email: "test01@gmail.com", password: "23456"},
    {email: "test02@gmail.com", password: "34567"},
    {email: "test03@gmail.com", password: "45678"}
]

//Check if account is valid
document.getElementById("login-form").addEventListener("submit", function(event){
    event.preventDefault(); //Prevent form from submitting before alert

    const userEmail = document.getElementById("email").value;
    const userPassword = document.getElementById("password").value;

    //Check if login is valid
    const isValidLogin = loginDetails.some(login => login.email === userEmail && login.password === userPassword);

    if(isValidLogin){
        alert("Successful Login!!");
        window.location.href = "Azoom_Home.html";
    } else {
        alert("Invalid Login! Please try again!");

        //Clear form after invalid login
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
    }
});