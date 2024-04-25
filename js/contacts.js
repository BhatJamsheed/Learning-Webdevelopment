function validateform() {
    const roll = document.getElementById('roll').Value;
    const email = document.getElementById('email').Value;
    const contact = document.getElementById('contact').Value;
    const password = document.getElementById('password').Value;

    const rollRegex = /^([SW])\w+([0-9]{4})$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;
    const contactRegex = /^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;


    if (!rollRegex.test(roll)) {
        alert('Roll number Incomplete');
        return false;
    }
    if (!emailRegex.test(email)) {
        alert('Please Enter the Correct Email address');
        return false;
    }
    if (!contactRegex.test(contact)) {
        alert('Please Enter a valid contact number');
        return false;
    }
    if (!passwordRegex.test(password)) {
        alert('weak password, Password must be 8 char long  and must contain at least one uppercase , one number, one special character &  at least one lower case letter');
        return false;
    }
    return true;


}
