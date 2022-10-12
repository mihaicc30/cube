async function validateThis() {
    let messageBody = new Object()

    let errors = []
    let errorDiv = document.getElementById('errorsDiv')
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let message = document.getElementById('message').value

    var testingString = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!testingString.test(email)) {
        errors.push("Email not valid.")
    }

    if (name.length < 1 || email.length < 1 || phone.length < 1 || message.length < 1) {
        errors.push("Complete all fields.")
    }
    if (!parseInt(phone) > 0) {
        errors.push("Wrong phone format.")
    }


    if (errors.length > 0) {
        errorDiv.innerHTML = ""
        errors.forEach(err => {
            errorDiv.innerHTML += err + "<br>"
        });
    } else {
        messageBody.name = name
        messageBody.email = email
        messageBody.phone = phone
        messageBody.message = message
        await fetch(`/contactus-post-message`, {
            method: 'POST',
            body: JSON.stringify(messageBody),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(async (res) => {
                const resp = await res.json()
                if (resp["response"] === "Message sent!") {
                    document.querySelector('#name').value="" 
                    document.querySelector('#email').value=""
                    document.querySelector('#phone').value=""
                    document.querySelector('#message').value=""
                    document.querySelector('#formBtnDiv').innerHTML=`<h4 style='background: var(--bg4);
                    padding: 1rem 3rem 1rem 3rem;'>Message sent!✅</h4>`
                }

            })
    }
}

