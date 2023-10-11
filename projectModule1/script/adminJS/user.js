// render accout Admin
let users = JSON.parse(localStorage.getItem("users"));
let loginStatus = localStorage.getItem("adminID");
if (!loginStatus) {
    window.location.href = "http://127.0.0.1:5500/pages/login.html"
}
rederUser = () => {
    let user = "";
    for (let i = 0; i < users.length; i++) {
        if (users[i].role === 1) {
            user += `<tr>
        <th scope="row">MS${users[i].id}</th>
        <td>${users[i].fullName}</td>
        <td>${users[i].email}</td>
        <td>${users[i].pass}</td>
        <td>${users[i].adress}</td>
        <td>${users[i].tel}</td>
        <td><i class="fa-solid fa-pen-to-square edit--icon action" onclick="editUser(${users[i].id})"></i></td>
        `
            if (users[i].isLocked === 0) {
                user += `<td class="lockStatus"><i class="fa-solid fa-lock-open unLock--icon action" onclick="lockUser(${users[i].id})"></i></td>
        </tr>`
            }
            else {
                user += `<td class="lockStatus"><i class="fa-solid fa-lock lock--icon  action" onclick="unlockUser(${users[i].id})"></i></td>
        </tr>`
            }
        }
    }
    document.querySelector(".listUser").innerHTML = user;

}
rederUser();
//Thêm User
let index;
let editing = false;
addUser = () => {
    document.querySelector(".error-miss").classList.remove("show");
    document.querySelector(".error-loop").classList.remove("show");
    let fullName = document.getElementById("fullName").value.trim();
    let mail = document.getElementById("mail").value.trim();
    let pass = document.getElementById("pass").value.trim();
    let adr = document.getElementById("adr").value.trim();
    let tel = document.getElementById("tel").value.trim();
    let condition = fullName === "" || mail === "" || pass === "" || adr == "" || tel == "";
    let check = users.filter(itemm => itemm.email === mail);
    if (condition) {
        document.querySelector(".error-miss").classList.add("show");
    }
    else {
        if (editing == false) {
            if (check.length > 0) {
                document.querySelector(".error-loop").classList.add("show");
            }
            else{
                let user = {
                    id: Math.ceil(Math.random() * 1000),
                    fullName: fullName,
                    email: mail,
                    pass: pass,
                    tel: tel,
                    adress: adr,
                    role: 1,
                    isLocked: 0
                }
                users.push(user);
                document.querySelector(".modal-noitice p").innerHTML = "Thêm Thành công";
                document.querySelector(".modal-noitice").classList.toggle("show");
                document.querySelector(".mask").classList.toggle("show");
            }
          
        }
        else {
            users[index].fullName = fullName;
            users[index].email = mail;
            users[index].pass = pass;
            users[index].tel = tel;
            users[index].adress = adr;
            document.querySelector(".modal-noitice p").innerHTML = "Cập Nhật Thành Công";
            document.querySelector(".modal-noitice").classList.toggle("show");
            document.querySelector(".mask").classList.toggle("show");
        }
        localStorage.setItem("users", JSON.stringify(users));
        rederUser();
        clear();
       
    }
}

clear = () => {
    document.getElementById("fullName").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("pass").value = "";
    document.getElementById("adr").value = "";
    document.getElementById("tel").value = "";
}
document.querySelector(".modal-noitice button").addEventListener("click", () => {
    document.querySelector(".modal-noitice").classList.toggle("show");
    document.querySelector(".mask").classList.toggle("show");
})
document.querySelector(".mask").addEventListener("click", () => {
    document.querySelector(".modal-noitice").classList.remove("show");
    document.querySelector(".mask").classList.remove("show");
    document.querySelector(".modal-warring").classList.remove("show");
})

editUser = (id) => {
    editing = true;
    for (let i = 0; i < users.length; i++) {
        if (users[i].id == id) {
            index = i;
            document.getElementById("fullName").value = users[i].fullName;
            document.getElementById("mail").value = users[i].email;
            document.getElementById("pass").value = users[i].pass;
            document.getElementById("adr").value = users[i].adress;
            document.getElementById("tel").value = users[i].tel;
        }
    }
}

lockUser = (id) =>{
    document.querySelector(".modal-warring").classList.toggle("show");
    document.querySelector(".mask").classList.toggle("show");
    document.querySelector(".js-btn-oke").addEventListener("click", ()=>{
        document.querySelector(".mask").classList.remove("show");
        document.querySelector(".modal-warring").classList.remove("show");
        for (let i = 0; i < users.length; i++) {
            if (users[i].id == id) {
                users[i].isLocked = 1;
                localStorage.setItem("users", JSON.stringify(users));
            }
        }
        rederUser();
    })
}
document.querySelector(".js-btn-cacer").addEventListener("click", ()=>{
    document.querySelector(".mask").classList.remove("show");
    document.querySelector(".modal-warring").classList.remove("show");
});

unlockUser = (id) =>{
    document.querySelector(".modal-warring").classList.toggle("show");
    document.querySelector(".mask").classList.toggle("show");
    document.querySelector(".js-btn-oke").addEventListener("click", ()=>{
        document.querySelector(".mask").classList.remove("show");
        document.querySelector(".modal-warring").classList.remove("show");
        for (let i = 0; i < users.length; i++) {
            if (users[i].id == id) {
                users[i].isLocked = 0;
                localStorage.setItem("users", JSON.stringify(users));
            }
        }
        rederUser();
    })
}
document.querySelector(".js-btn-cacer").addEventListener("click", ()=>{
    document.querySelector(".mask").classList.remove("show");
    document.querySelector(".modal-warring").classList.remove("show");
});