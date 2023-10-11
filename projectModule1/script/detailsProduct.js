const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const categoryID = params.get('categoryID');
const productID = params.get('productID');
renderPopupUser();
showTotalProduct();

renderDetail = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i].id == productID) {
            document.querySelector(".js-detail-product--img").src = array[i].image;
            document.querySelector(".js-product-detail__info--name").innerHTML = array[i].name;
            document.querySelector(".js-product-detail__info--price").innerHTML = `${array[i].price.toLocaleString('vi-VN')}đ`
        }
    }
    if (productID) {
        let loginStatus = localStorage.getItem("userID");
        if (loginStatus) {
            for (let i = 0; i < users.length; i++) {
                if (users[i].id == loginStatus) {
                    for (let j = 0; j < array.length; j++) {
                        if (array[j].id == productID) {
                            let result = users[i].cart.filter((item) => {
                                return item.id == productID;
                            });
                            if (result.length == 0) {
                                document.querySelector(".js-product-detail__quality--input").value = 1;
                            }
                            else {
                                for (let z = 0; z < users[i].cart.length; z++) {
                                    if (users[i].cart[z].id == productID) {

                                        document.querySelector(".js-product-detail__quality--input").value = users[i].cart[z].quantity;
                                    }

                                }
                            }
                        }
                    }
                }
            }
            renderCartView()

        }
    }
    else {
        window.location.href = "../index.html";
    }
}
switch (categoryID) {
    case "1":
        renderDetail(suit);
        listProduct = suit;
        break;
    case "2":
        renderDetail(TShirt);
        listProduct = TShirt;
        break;
    case "3":
        renderDetail(shirt);
        listProduct = shirt;
        break;
    case "4":
        renderDetail(shoes);
        listProduct = shoes;
        break;

    default:
        window.location.href = "../index.html";
        break;
}
document.querySelector(".js-detail-product--img").addEventListener("click", () => {
    console.log("click");
    document.querySelector(".js-detail-product--img").classList.toggle("view");
    document.querySelector(".mark").classList.toggle("show");
})
document.querySelector(".mark").addEventListener("click", () => {
    document.querySelector(".mark").classList.toggle("show");
    document.querySelector(".js-detail-product--img").classList.toggle("view");

})
document.querySelector(".js-plus--btn").addEventListener("click", () => {
    console.log("click");
})
//Xu ly cong tru san pham
plus = () => {
    document.querySelector(".js-product-detail__quality--input").value = parseInt(document.querySelector(".js-product-detail__quality--input").value) + 1;
}
minus = () => {
    if (document.querySelector(".js-product-detail__quality--input").value > 1) {
        document.querySelector(".js-product-detail__quality--input").value = parseInt(document.querySelector(".js-product-detail__quality--input").value) - 1;
    }

}

///add cart
document.querySelector(".js-product-detail__action--add-to-cart").addEventListener("click", function addToCartDetails() {
    let loginStatus = localStorage.getItem("userID");
    if (loginStatus) {
        for (let i = 0; i < users.length; i++) {
            if (users[i].id == loginStatus) {
                for (let j = 0; j < listProduct.length; j++) {
                    if (listProduct[j].id == productID) {
                        let result = users[i].cart.filter((item) => {
                            return item.id == productID;
                        });
                        if (result.length == 0) {
                            if (!Number.isNaN(Number(document.querySelector(".js-product-detail__quality--input").value))) {
                                listProduct[j].quantity = document.querySelector(".js-product-detail__quality--input").value;
                                users[i].cart.push(listProduct[j]);
                                localStorage.setItem("users", JSON.stringify(users));
                            }
                        }
                        else {
                            if (!Number.isNaN(Number(document.querySelector(".js-product-detail__quality--input").value))) {
                                for (let z = 0; z < users[i].cart.length; z++) {
                                    if (users[i].cart[z].id == productID) {
                                        users[i].cart[z].quantity = document.querySelector(".js-product-detail__quality--input").value;
                                        localStorage.setItem("users", JSON.stringify(users));
                                    }
                                }
                            }
                           
                        }
                    }
                }
            }
        }
        renderCartView()

    }
    else {
        alert("Bạn Cần Đăng Nhập Để Mua Hàng");
        window.location.href = "./login.html";

    }
    document.querySelector(".js-overlay").classList.toggle("show");
    document.querySelector(".js-site-cart").classList.toggle("show");
    showTotalProduct();
})
