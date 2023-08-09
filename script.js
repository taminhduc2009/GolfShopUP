function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username && password) {
      let accounts = JSON.parse(localStorage.getItem('accounts')) || [];
  
      const exist = accounts.some(account => account.username === username);
      if (exist) {
        alert('Username already exists');
        return;
      }
  
      accounts.push({
        username: username,
        password: password,
      });
  
      localStorage.setItem('accounts', JSON.stringify(accounts));
      alert('Registration successful. Please sign in.');
      window.location.href = 'signin.html';
    } else {
      alert('Please fill in all fields');
    }
  }
  
  function signIn() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username && password) {
      const accounts = JSON.parse(localStorage.getItem('accounts')) || [];
      const user = accounts.find(account => account.username === username && account.password === password);
  
      if (user) {
        alert('Sign in successful');
        sessionStorage.setItem('loggedInUsername', username);
        window.location.href = 'user.html';
      } else {
        alert('Invalid username or password');
      }
    } else {
      alert('Please fill in all fields');
    }
  }
  
  function signOut() {
    sessionStorage.removeItem('loggedInUsername');
    window.location.href = 'register.html';
  }
  