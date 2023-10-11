let users = JSON.parse(localStorage.getItem("users"));
let btnRegister = document.querySelector(".js-btn__register");
btnRegister.addEventListener("click", () => {
    let nameValue = document.getElementById("name").value.trim();
    let emailValue = document.getElementById("email").value.trim();
    let passValue = document.getElementById("pass").value.trim();
    let confirmPassValue = document.getElementById("confirmPass").value.trim();
    let telValue = document.getElementById("tel").value.trim();
    let addressValue = document.getElementById("address").value.trim();

    let condition = nameValue === "" || emailValue === "" || passValue === "" || confirmPassValue == "" || telValue == "" || addressValue == "";
    let check = users.filter(itemm => itemm.email === emailValue);
    if (condition) {
        document.querySelector(".js-warring").style.display = "block";
    }
    else {
        if (passValue !== confirmPassValue) {
            document.querySelector(".js-warring1").style.display = "block";
        }
        else if (check.length > 0) {
            document.querySelector(".js-danger").style.display = "block";
        }
        else {
            let user = {
                id: Math.ceil(Math.random() * 1000),
                fullName: nameValue,
                email: emailValue,
                pass: passValue,
                tel: telValue,
                adress: addressValue,
                role: 0,
                cart: [],
                isLocked: 0
            }
            users.push(user);
            localStorage.setItem("users", JSON.stringify(users));
            window.location.href = "./login.html";
        }
    }
   
})
console.log(users);