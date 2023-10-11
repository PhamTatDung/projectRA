let loginStatus = localStorage.getItem("adminID");
if (!loginStatus) {
    window.location.href = "http://127.0.0.1:5500/pages/login.html"
}
let userID = JSON.parse(localStorage.getItem("userID"));
let users = JSON.parse(localStorage.getItem("users"));
let suit = JSON.parse(localStorage.getItem("suit"));
let TShirt = JSON.parse(localStorage.getItem("TShirt"));
let shirt = JSON.parse(localStorage.getItem("shirt"));
let shoes = JSON.parse(localStorage.getItem("shoes"));
let allProduct = [...suit, ...TShirt, ...shirt, ...shoes];
rederProduct = () => {
    let product = "";
    for (let i = 0; i < allProduct.length; i++) {
        product += `<tr>
        <th scope="row">MS${allProduct[i].id}</th>
        <td>${allProduct[i].name}</td>
        <td><img src="${allProduct[i].image}" alt=""></td>
        <td>${allProduct[i].stock}</td>
        <td class="priceProduct">${allProduct[i].price.toLocaleString('vi-VN')}₫</td>
        <td>${allProduct[i].categoryID}</td>
        <td><i class="fa-solid fa-pen-to-square edit--icon action"  onclick="editProduct('${allProduct[i].id}','${allProduct[i].categoryID}')"></i></td>
        <td>   <i class="fa-solid fa-trash action" onclick="deleteProduct('${allProduct[i].id}','${allProduct[i].categoryID}')"></i></td>
        </tr>`
    }
    document.querySelector(".listProduct").innerHTML = product;
}
rederProduct();
let editing = false;
var imageInput = document.getElementById("img");
let imgSrc = "";
let check = false;
imageInput.addEventListener('change', (event) => {
    check = true;
    let selectedFile = event.target.files[0];
    if (selectedFile) {
        let reader = new FileReader();
        reader.onload = (i) => {
            imgSrc = i.target.result;
        };
        reader.readAsDataURL(selectedFile);
    }
});


addProduct = () => {
    document.querySelector(".error-miss").classList.remove("show");
    document.querySelector(".error-loop").classList.remove("show");
    let category = document.getElementById("category").value;
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let stock = document.getElementById("stock").value;
    let condition = name == "" || price == "" || stock == "";

    if (condition) {
        document.querySelector(".error-miss").classList.add("show");
    }
    else {
        if (editing == false) {
            switch (category) {
                case "1":
                    suits = {
                        id: `suit${Math.ceil(Math.random() * 1000)}`,
                        name: name,
                        price: Number(price),
                        image: imgSrc,
                        stock: stock,
                        categoryID: category
                    }
                    suit.push(suits);
                    document.querySelector(".modal-noitice p").innerHTML = "Thêm Thành Công Sản Phầm";
                    document.querySelector(".modal-noitice").classList.toggle("show");
                    document.querySelector(".mask").classList.toggle("show");
                    localStorage.setItem("suit", JSON.stringify(suit));
                    allProduct = [...suit, ...TShirt, ...shirt, ...shoes];
                    rederProduct();
                    break;
                case "2":
                    TShirts = {
                        id: `Tshirt${Math.ceil(Math.random() * 1000)}`,
                        name: name,
                        price: Number(price),
                        image: imgSrc,
                        stock: stock,
                        categoryID: category
                    }
                    TShirt.push(TShirts);
                    document.querySelector(".modal-noitice p").innerHTML = "Thêm Thành Công Sản Phầm";
                    document.querySelector(".modal-noitice").classList.toggle("show");
                    document.querySelector(".mask").classList.toggle("show");
                    localStorage.setItem("TShirt", JSON.stringify(TShirt));
                    allProduct = [...suit, ...TShirt, ...shirt, ...shoes];
                    rederProduct();
                    break;
                case "3":
                    shirts = {
                        id: `shirt${Math.ceil(Math.random() * 1000)}`,
                        name: name,
                        price: Number(price),
                        image: imgSrc,
                        stock: stock,
                        categoryID: category
                    }
                    shirt.push(shirts);
                    document.querySelector(".modal-noitice p").innerHTML = "Thêm Thành Công Sản Phầm";
                    document.querySelector(".modal-noitice").classList.toggle("show");
                    document.querySelector(".mask").classList.toggle("show");
                    localStorage.setItem("shirt", JSON.stringify(shirt));
                    allProduct = [...suit, ...TShirt, ...shirt, ...shoes];
                    rederProduct();
                    break;
                case "4":
                    shoess = {
                        id: `Tshirt${Math.ceil(Math.random() * 1000)}`,
                        name: name,
                        price: Number(price),
                        image: imgSrc,
                        stock: stock,
                        categoryID: category
                    }
                    shoes.push(shoess);
                    document.querySelector(".modal-noitice p").innerHTML = "Thêm Thành Công Sản Phầm";
                    document.querySelector(".modal-noitice").classList.toggle("show");
                    document.querySelector(".mask").classList.toggle("show");
                    localStorage.setItem("shoes", JSON.stringify(shoes));
                    allProduct = [...suit, ...TShirt, ...shirt, ...shoes];
                    rederProduct();
                    break;
                default:
                    break;
            }
        }
        else {
            switch (category) {
                case "1":
                    if (check == true) {
                        suit[index].image = imgSrc;
                    } 
                    suit[index].category = category;
                    suit[index].name = name;
                    suit[index].price = price;
                    suit[index].stock = stock;
                    document.querySelector(".modal-noitice p").innerHTML = "Sửa Thành Công Sản Phầm";
                    document.querySelector(".modal-noitice").classList.toggle("show");
                    document.querySelector(".mask").classList.toggle("show");
                    localStorage.setItem("suit", JSON.stringify(suit));
                    allProduct = [...suit, ...TShirt, ...shirt, ...shoes];
                    rederProduct();
                    break;
                case "2":
                    if (check == true) {
                        TShirt[index].image = imgSrc;
                    }
                    TShirt[index].category = category;
                    TShirt[index].name = name;
                    TShirt[index].price = price;
                    TShirt[index].stock = stock;
                    document.querySelector(".modal-noitice p").innerHTML = "Sửa Thành Công Sản Phầm";
                    document.querySelector(".modal-noitice").classList.toggle("show");
                    document.querySelector(".mask").classList.toggle("show");
                    localStorage.setItem("TShirt", JSON.stringify(TShirt));
                    allProduct = [...suit, ...TShirt, ...shirt, ...shoes];
                    rederProduct();
                    break;
                case "3":
                    if (check == true) {
                        shirt[index].image = imgSrc;
                    }
                    shirt[index].category = category;
                    shirt[index].name = name;
                    shirt[index].price = price;
                    shirt[index].stock = stock;
                    document.querySelector(".modal-noitice p").innerHTML = "Sửa Thành Công Sản Phầm";
                    document.querySelector(".modal-noitice").classList.toggle("show");
                    document.querySelector(".mask").classList.toggle("show");
                    localStorage.setItem("shirt", JSON.stringify(shirt));
                    allProduct = [...suit, ...TShirt, ...shirt, ...shoes];
                    rederProduct();
                    break;
                case "4":
                    if (check == true) {
                        shoes[index].image = imgSrc;
                    }
                    shoes[index].category = category;
                    shoes[index].name = name;
                    shoes[index].price = price;
                    shoes[index].stock = stock;
                    document.querySelector(".modal-noitice p").innerHTML = "Sửa Thành Công Sản Phầm";
                    document.querySelector(".modal-noitice").classList.toggle("show");
                    document.querySelector(".mask").classList.toggle("show");
                    localStorage.setItem("shoes", JSON.stringify(shoes));
                    allProduct = [...suit, ...TShirt, ...shirt, ...shoes];
                    rederProduct();
                    break;
                default:
                    break;
            }
        }
    }
}

deleteProduct = (id, category) => {
    document.querySelector(".modal-warring").classList.toggle("show");
    document.querySelector(".mask").classList.toggle("show");
    document.querySelector(".js-btn-oke").addEventListener("click", ()=>{
        document.querySelector(".mask").classList.remove("show");
        document.querySelector(".modal-warring").classList.remove("show");
        switch (category) {
            case "1":
                for (let i = 0; i < suit.length; i++) {
                    if (suit[i].id == id) {
                        suit.splice(i, 1);
                    }
                }
                localStorage.setItem("suit", JSON.stringify(suit));
                allProduct = [...suit, ...TShirt, ...shirt, ...shoes];
                rederProduct();
                break;
            case "2":
                for (let i = 0; i < TShirt.length; i++) {
                    if (TShirt[i].id == id) {
                        TShirt.splice(i, 1);
                    }
                }
                localStorage.setItem("TShirt", JSON.stringify(TShirt));
                allProduct = [...suit, ...TShirt, ...shirt, ...shoes];
                rederProduct();
                break;
            case "3":
                for (let i = 0; i < shirt.length; i++) {
                    if (shirt[i].id == id) {
                        shirt.splice(i, 1);
                    }
                }
                localStorage.setItem("shirt", JSON.stringify(shirt));
                allProduct = [...suit, ...TShirt, ...shirt, ...shoes];
                rederProduct();
                break;
            case "4":
                for (let i = 0; i < shoes.length; i++) {
                    if (shoes[i].id == id) {
                        console.log(i);
                        shoes.splice(i, 1);
                    }
                }
                localStorage.setItem("shoes", JSON.stringify(shoes));
                allProduct = [...suit, ...TShirt, ...shirt, ...shoes];
                rederProduct();
                break;
            default:
                break;
        }
    })
    
}
document.querySelector(".js-btn-cacer").addEventListener("click", ()=>{
    document.querySelector(".mask").classList.remove("show");
    document.querySelector(".modal-warring").classList.remove("show");
});
document.querySelector(".mask").addEventListener("click", () => {
    document.querySelector(".modal-noitice").classList.remove("show");
    document.querySelector(".mask").classList.remove("show");
    document.querySelector(".modal-warring").classList.remove("show");
})
document.querySelector(".modal-noitice button").addEventListener("click", () => {
    document.querySelector(".modal-noitice").classList.toggle("show");
    document.querySelector(".mask").classList.toggle("show");
})

editProduct = (id, category) => {
    editing = true;
    switch (category) {
        case "1":
            for (let i = 0; i < suit.length; i++) {
                if (suit[i].id == id) {
                    index = i;
                    document.getElementById("category").value = suit[i].categoryID;
                    document.getElementById("name").value = suit[i].name;
                    document.getElementById("price").value = suit[i].price;
                    document.getElementById("stock").value = suit[i].stock;
                }
            }
            break;
        case "2":
            for (let i = 0; i < TShirt.length; i++) {
                if (TShirt[i].id == id) {
                    index = i;
                    document.getElementById("category").value = TShirt[i].categoryID;
                    document.getElementById("name").value = TShirt[i].name;
                    document.getElementById("price").value = TShirt[i].price;
                    document.getElementById("stock").value = TShirt[i].stock;
                }
            }
            break;
        case "3":
            for (let i = 0; i < shirt.length; i++) {
                if (shirt[i].id == id) {
                    index = i;
                    document.getElementById("category").value = shirt[i].categoryID;
                    document.getElementById("name").value = shirt[i].name;
                    document.getElementById("price").value = shirt[i].price;
                    document.getElementById("stock").value = shirt[i].stock;
                }
            }
        case "4":
            for (let i = 0; i < shoes.length; i++) {
                if (shoes[i].id == id) {
                    index = i;
                    document.getElementById("category").value = shoes[i].categoryID;
                    document.getElementById("name").value = shoes[i].name;
                    document.getElementById("price").value = shoes[i].price;
                    document.getElementById("stock").value = shoes[i].stock;
                }
            }
            break;
        default:
            break;
    }
}
