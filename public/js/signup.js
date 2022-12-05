const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email').value.trim();
    const username = document.querySelector('#username').value.trim()
    const password = document.querySelector('#password').value.trim();
  
    console.log(email, password);
  
    if (email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ 
          email,
          password,
        }),
        headers: {'Content-Type': 'application/json'},
      });
      console.log("response", response);
  
      if (response.ok) {
        document.location.replace('/');
        } else {
          alert("Problem with signup. Try again!")
      }
    }
  };
  
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);