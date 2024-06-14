$('#login-btn').on('click', () => {
    login();
});

function login() {

    let userName = $('#username').val();
    let password = $('#password').val();


    let name = "Eranga";
    let userPassword = "1234";

    // Validate the entered username and password
    if (userName === name) {
        if (password === userPassword) {
            $("#header").css({
                display: 'block'
            });
            $("#dashboard-form").css({
                display: 'block'
            });
            $("#login-form").css({
                display: 'none'
            });
        } else {
            alert('Wrong password');
        }
    } else {
        alert('Wrong username');
    }
}
