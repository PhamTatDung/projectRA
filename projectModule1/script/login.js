// let users = [
//     {
//         id: 1,
//         fullName: "customer",
//         email: "customer@gmail.com",
//         pass: "abc123",
//         tel: "0123123123",
//         adress: "Tokyo",
//         role: 0,
//         isLocked: 0,
//         cart: []
//     },
//     {
//         id: 2,
//         fullName: "admin",
//         email: "admin@gmail.com",
//         pass: "abc123",
//         tel: "0123123123",
//         adress: "Tokyo",
//         role: 1,
//         isLocked: 0,
//         cart: []
//     },
//     {
//         id: 3,
//         fullName: "admin1",
//         email: "admin1@gmail.com",
//         pass: "abc123",
//         tel: "0123123123",
//         adress: "Hà Nội",
//         role: 1,
//         isLocked: 1,
//         cart: []
//     }
// ];
// localStorage.setItem("users", JSON.stringify(users));
renderPopupUser();
// let users = JSON.parse(localStorage.getItem("users"));

let loginBtn = document.querySelector(".js-login--btn");
document.querySelector(".js-login--btn").addEventListener("click", () => {
    console.log("click");
    let emailValue = document.querySelector(".js-email").value.trim();
    let passValue = document.querySelector(".js-pass").value.trim();
    if (emailValue === "" && passValue === "") {
        document.querySelector(".js-warring").style.display = "block";
    }
    else {
        for (let i = 0; i < users.length; i++) {
            if (users[i].email === emailValue && users[i].pass === passValue) {
                if (users[i].role === 0) {
                    window.location.href = "../index.html";
                    localStorage.setItem("userID", JSON.stringify(users[i].id));
                    return;
                }
                else if (users[i].role === 1) {
                    if (users[i].isLocked == 0) {
                        window.location.href = "http://127.0.0.1:5500/pages/admin/admin.html";
                        localStorage.setItem("adminID", JSON.stringify(users[i].id));
                        return;
                    }
                    else{
                        document.querySelector(".modal-noitice").classList.add("show");
                        document.querySelector(".mask").classList.add("show");
                        return;
                       
                    }
                }
            }
        }
        document.querySelector(".js-danger").style.display = "block";
    }
})

document.querySelector(".btn-noitice").addEventListener("click",()=>{
    document.querySelector(".modal-noitice").classList.remove("show");
    document.querySelector(".mask").classList.remove("show");
})  

