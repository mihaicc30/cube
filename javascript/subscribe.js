async function subscribe() {

    let email = document.querySelector('#subscription_email')

    var testingString = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


    if (!testingString.test(email.value)) {
        email.value = ""
        email.placeholder = "Invalid email."
    } else {
        await fetch(`/subscribe`, {
            method: 'POST',
            body: JSON.stringify({ "email": email.value }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(async (res) => {
                const resp = await res.json()
                if (resp["response"] === "Already subscribed!") {
                    email.value = ""
                    email.placeholder = "Already subscribed!"
                } else {
                    email.value = ""
                    email.placeholder = "Subscription added!"
                }

            })
    }
}
