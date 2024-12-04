function showSignUp() {
  document.getElementById('loginForm').classList.add('hidden');
  document.getElementById('signUpForm').classList.remove('hidden');
}

function showLogin() {
  document.getElementById('signUpForm').classList.add('hidden');
  document.getElementById('loginForm').classList.remove('hidden');
}


function signUp() {
  const name = document.getElementById('signUpName').value;
  const email = document.getElementById('signUpEmail').value;
  const password = document.getElementById('signUpPassword').value;

  if (name && email && password) {
    localStorage.setItem('user', JSON.stringify({ name, email, password }));
    alert('Account created successfully');
    showLogin();
  } else {
    alert('Please fill all fields');
  }
}
function login() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.email === email && user.password === password) {
    alert(`Welcome, ${user.name}`);
  } else {
    alert('Invalid email or password!');
  }
}