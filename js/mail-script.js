firebase
    .initializeApp({
    apiKey: "OsjXcKscVnhEGJyJ3HVAWsOKkykw5LQQKg9bq7bz",
    authDomain: "sirac-f1bda.firebaseapp.com",
    databaseURL: "https://sirac-f1bda.firebaseio.com"
});

$(document).ready(function() {
    $("#newsletters_emails_form").on("submit", function(e){
        e.preventDefault();
        firebase.database().ref('site/newsletters_emails')
            .push()
            .set(
            {
                email: $("#newsletters_emails_form input[name=email]").val()
            }); 
    });
});