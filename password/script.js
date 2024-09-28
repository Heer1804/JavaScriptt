document.getElementById('pass').addEventListener('submit', function (pass){
    pass.preventDefault();

    var currentpassword = document.getElementById("currentPassword").value
    var newPassword = document.getElementById("newPassword").value
    var confirmpassword = document.getElementById("confirmPassword").value

    if(currentPassword === "" || newPassword === "" || confirmPassword === ""){
        alert("Please fill in all fields")
    }
    else if(newPassword !== confirmPassword){
        alert("Passwords do not match")
    }
    else{
        alert("Password changed successfully")
    }

});

