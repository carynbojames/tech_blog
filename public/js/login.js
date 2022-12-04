const loginForm = async (event) => {
    event.preventDefault(); // put in your own logic
    const username = document.querySelector('#username').value.trim()
    const password = document.querySelector('#password').value.trim() // trim(): removes whitespace

    console.log(username, password)

    // Send to the server to be processed on the backend
    // Fetch to an end point. Send an object w/ options
    const response = await fetch('api/login', {
        method: 'POST',
        // body of the request
        // username and passowrd stringify as an object
        body: JSON.stringify({username: username, password: password}),
        // header w/ the type of data being sent
        headers: {'Content-Type': 'application/json'},
    })
    console.log('login response', response)
}

document.querySelector('form').addEventListener('submit', loginForm)