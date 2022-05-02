
// add animation and show login form
function showLoginForm() {

    document.querySelector('#left-side').classList.remove('move-down');
    document.querySelector('#right-side').classList.remove('move-down');

    document.querySelector('#left-side').classList.add('move-up');
    document.querySelector('#right-side').classList.add('move-up'); 

}

// add animation and show signup form
function showSignupForm() {

    document.querySelector('#left-side').classList.remove('move-up');
    document.querySelector('#right-side').classList.remove('move-up');

    document.querySelector('#left-side').classList.add('move-down');
    document.querySelector('#right-side').classList.add('move-down');

}

// function that handles sign in - fill in as desired
function signIn(e) {
    e.preventDefault();
}

// function that handles sign up - fill in as desired
function signUp(e) {
    e.preventDefault();

    // checks user input
    validatePassword();
}

// checks if password and confirmed password are matching
function validatePassword () {
    let conrifmPassword = document.querySelector('#conrifm-password');
    let password = document.querySelector('#password');

    if(password.value !== conrifmPassword.value) {
        document.querySelector('#passwordNotConfirmed').classList.add('visible');
    } else {
        document.querySelector('#passwordNotConfirmed').classList.remove('visible')
    }
}