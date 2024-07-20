//Generate new reference number for booking and display via notification
document.addEventListener('DOMContentLoaded', function() {
    const reservationForm = document.getElementById('reservation-form');

    if (reservationForm) {
        reservationForm.addEventListener('submit', function(event) {

            event.preventDefault(); //Prevent form from submitting before alert

            function generateBookingReferenceNumber(){
                return Math.floor(Math.random() * 100000)
            };

            const bookingReferenceNumber = generateBookingReferenceNumber();

            alert("Booking is successful! Ref No: " + bookingReferenceNumber);

            window.location.href = "Azoom_Home.html";
        });
    }
});
