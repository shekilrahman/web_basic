
document.getElementById('submitBtn').addEventListener('click', function() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var fullName = firstName + ' ' + lastName;
    document.getElementById('fullNameDisplay').innerText = fullName;
});


