const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username').value.trim()
    const password = document.querySelector('#password').value.trim();
    const email = document.querySelector('#email').value.trim();
  
    console.log(username, password, email); // To here
  
    if (username && password && email) {
      const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({ 
          username,
          password,
          email
        }),
        headers: {'Content-Type': 'application/json'},
      });
      console.log("response", response); // To here
      if (response.ok) {
        console.log(response.ok)
        document.location.replace('/');
        } else {
          alert("Problem with signup. Try again!")
      }
    }
  };
  
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);