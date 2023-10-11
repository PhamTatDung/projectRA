let userID = JSON.parse(localStorage.getItem("userID"));
let users = JSON.parse(localStorage.getItem("users"));
let suit = JSON.parse(localStorage.getItem("suit"));
let TShirt = JSON.parse(localStorage.getItem("TShirt"));
let shirt = JSON.parse(localStorage.getItem("shirt"));
let shoes = JSON.parse(localStorage.getItem("shoes"));
renderPopupUser = () => {
    let popupRender = "";
    if (userID === null) {
        popupRender = ` <i class="fa-regular fa-user"></i>
                    <ul  class="header__account--popup">
                        <li><a href="../pages/login.html">Đăng Nhập</a></li>
                        <li><a href="./pages/register.html">Đăng Ký</a></li>
                    </ul>`
    }
    else {
        popupRender = `<i class="fa-regular fa-user"></i>
                    <ul  class="header__account--popup">
                        <li><a href="./pages/login.html">Thông tin tài khoản</a></li>
                        <li ><a id="logout" href="../pages/login.html?status=logout">Đăng xuất</a></li>
                    </ul>`
    }
    document.querySelector(".js-header__account").innerHTML = popupRender;
}
// pagination;
let star;
let end;
let perpage = 8;
let currentPage = 1;
let totalPage;
function pagination(arr) {
    totalPage = Math.ceil(arr.length / perpage);
    text = `<li onclick="prePage()" ><i class="fa-solid fa-angles-left"></i></li>`;
    for (let i = 0; i < totalPage; i++) {
        text += ` <li class="js-product__pagination--item" onclick = changeCurentPage(${i})>${i + 1}</li>`
        
        
    }
    text += `<li onclick="nextPage()"><i class="fa-solid fa-angles-right"></i></li>`;
    document.querySelector(".js-product__pagination--list").innerHTML = text;
}

caculateStarEnd = (current, arr) => {
    star = (current - 1) * perpage;
    end = current * perpage;
}
caculateStarEnd(currentPage)
// for (let i = 0; i < totalPage; i++) {
//     if (i == currentPage - 1) {
//         document.getElementsByClassName("js-product__pagination--item")[i].classList.add("currentPage");
//     }
//     else{
//         document.getElementsByClassName("js-product__pagination--item")[i].classList.remove("currentPage");
//     }
// }
//renderProduct
renderProducts = (array) => {
    let renderValue = "";
    for (let i = 0; i < array.length; i++) {
        if (i >= star && i < end) {
            renderValue += `<div class="col-xl-3">
            <div class="product__item">
                <div class="product__item--img">
                    <figure>
                        <img src="${array[i].image}" alt="">
                    </figure>
                </div>
                <div class="product__item--info">
                    <div class="product__item--rate d-flex justify-content-between">
                        <div class="product__item--raiting">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <div class="product__item--like">
                            <i class="fa-solid fa-heart"></i>
                        </div>
                    </div>
                    <p class="product__item--name">${array[i].name}</p>
                    <p class="product__item--price"><b>${array[i].price.toLocaleString('vi-VN')}đ</b></p>
                </div>
                <div class="product__item--action">
                    <div class="js-product__item--view product__item--view"><a href="./detailsProduct.html?productID=${array[i].id}&categoryID=${dataValue}">
                    <i class="fa-solid fa-eye"></i></a></div>
                    <div class="product__item--cart" onclick="addToCart('${array[i].id}')"><i class="fa-solid fa-bag-shopping"></i></div>
                </div>
            </div>
        </div>`;
        }
    }
    document.querySelector(".js-products").innerHTML = renderValue;
}

///cart
//renderCart
let renderCart = `<div class="overlay js-overlay"></div>
                    <div class="site-cart js-site-cart">
                            <h5 class="site-cart__title">GIỎ HÀNG</h5>
                            <div class="site-cart__close js-site-cart__close"><i class="btn btn-danger fa-solid fa-xmark site-cart__close--icon "></i></div>
                            <div class="site-cart__view js-site-cart__view">
                                <ul>
                                    
                                </ul>
                                <div class="site-cart__view--btn">
                                    <button class="btn btn-dark js-buy-more--btn">Mua Thêm</button>
                                    <button class="btn btn-danger">Mua Ngay</button>
                                </div>
                                <p class="cartEnter"><a href="./detailsCart.html">Xem chi tiết giỏ hàng </a></p>
                            </div>
                    </div>`
document.querySelector("body").innerHTML = renderCart + document.querySelector("body").innerHTML;
//render cart view

let renderCartView = () => {

    let loginStatus = localStorage.getItem("userID");
    if (loginStatus) {
        let listItemCart = "";
        for (let i = 0; i < users.length; i++) {
            if (users[i].id == userID) {
                if (users[i].cart.length != 0) {
                    let n = users[i].cart.length
                    for (let j = 0; j < n; j++) {
                        listItemCart += `<li>
                                    <div class="site-cart__view--img">
                                        <figure><img src="${users[i].cart[j].image}" alt=""></figure>
                                    </div>
                                    <div class="site-cart__view--info">
                                        <p class="site-cart__view--name">${users[i].cart[j].name}</p>
                                        <div class="site-cart__view--quality">
                                            <div class="site-cart__view--number">
                                            <span class="js-less--btn">-</span>
                                            <input type="text" value="${users[i].cart[j].quantity}">
                                            <span class="js-plus--btn">+</span>
                                            </div><span class="site-cart__view--price">${(users[i].cart[j].quantity * users[i].cart[j].price).toLocaleString('vi-VN')}đ</span></div>
                                    </div>
                                    <div class="js-site-cart__view--delete site-cart__view--delete" onclick="deleteItemCart('${users[i].cart[j].id}')">
                                        <i class="fa-solid fa-xmark"></i>
                                    </div>
                                  
                                </li>`;

                    }

                }
                else {
                    listItemCart = `<p>Ban chua co san pham nao</p>`
                }
            }
        }
        document.querySelector(".site-cart__view ul").innerHTML = listItemCart;
    }

}

renderCartView()
//open - close cart view
let cartBtn = document.querySelector(".js-header__cart");
cartBtn.addEventListener("click", () => {
    document.querySelector(".js-overlay").classList.toggle("show");
    document.querySelector(".js-site-cart").classList.toggle("show");
})
document.querySelector(".js-overlay").addEventListener("click", () => {
    document.querySelector(".js-overlay").classList.toggle("show");
    document.querySelector(".js-site-cart").classList.toggle("show");
})
document.querySelector(".js-site-cart__close").addEventListener("click", () => {
    document.querySelector(".js-overlay").classList.toggle("show");
    document.querySelector(".js-site-cart").classList.toggle("show");
})
//Hiển thị số lượng sản phẩm trên cart
let showTotalProduct = () => {
    let loginStatus = localStorage.getItem("userID");
    if (loginStatus) {
        let totalProduct = 0;
        for (let i = 0; i < users.length; i++) {
            if (users[i].id == userID) {
                for (let j = 0; j < users[i].cart.length; j++) {
                    totalProduct = totalProduct + Number(users[i].cart[j].quantity);
                }
            }
        }
        document.querySelector(".js-header__cart--number").innerHTML = totalProduct;
    }

}
// showTotalProduct();
//xử lý nút mua thêm
document.querySelector(".js-buy-more--btn").addEventListener("click", () => {
    document.querySelector(".js-overlay").classList.toggle("show");
    document.querySelector(".js-site-cart").classList.toggle("show");
})
// console.log(document.querySelectorAll(".js-less--btn"));
// console.log(document.querySelectorAll(".js-plus--btn"));
//Delete Item Cart
deleteItemCart = (idItemCart) => {
    for (let i = 0; i < users.length; i++) {
        if (users[i].id == userID) {
            for (let j = 0; j < users[i].cart.length; j++) {
                if (users[i].cart[j].id == idItemCart) {
                    users[i].cart.splice(j, 1)
                    localStorage.setItem("users", JSON.stringify(users));
                }
            }
        }
    }
    renderCartView();
    showTotalProduct();
}

//xử lý Tìm Kiếm
document.querySelector(".js-header__search").addEventListener("click", () => {
    document.querySelector("header").classList.toggle("header__search");
    document.querySelector(".mask").classList.toggle("show");

});
document.querySelector(".mask").addEventListener("click", () => {
    document.querySelector("header").classList.remove("header__search");
    document.querySelector(".mask").classList.remove("show");
    document.querySelector(".modal-noitice").classList.remove("show");
});

function debounce(func, wait) {
    let timeout;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            func.apply(context, args);
        }, wait);
    };
}

// Gộp Tất Cả Sản Phẩm Vào 1 Mảng
let allProduct = [...suit, ...TShirt, ...shirt, ...shoes];
// Hàm thực hiện tìm kiếm trong mảng
let productSearch = [];
function searchProduct(keyword) {
    const resultsContainer = document.querySelector(".search__results--list");
    resultsContainer.innerHTML = '';
    document.querySelector(".js-search__results").style.display = "block"
    if (document.querySelector(".js-search--input").value.trim() != "") {
        const productSearch = allProduct.filter(item => item.name.trim().toLowerCase().trim().includes(keyword.trim().toLowerCase()));
        let searchItem = "";
        for (let i = 0; i < productSearch.length; i++) {
            searchItem += `<li class="search__results--item">
            <a href="../pages/detailsProduct.html?productID=${productSearch[i].id}&categoryID=${productSearch[i].categoryID}" class="search__results--link">
                <div class="row">
                    <div class="col-xl-2">
                        <div class="search__results--img">
                            <figure>
                                <img src="${productSearch[i].image}" alt="">
                            </figure>
                        </div>
                    </div>
                    <div class="col-xl-10">
                        <div class="search__results--info">
                            <p>${productSearch[i].name}</p>
                            <p>${productSearch[i].price.toLocaleString('vi-VN')}₫</p>
                        </div>  
                    </div>
                </div>
            </a>
        </li>`
        }
        resultsContainer.innerHTML = searchItem;
    }
}
// document.querySelector(".js-header__seach--btn").addEventListener("click",()=>{
//     window.location.href ="http://127.0.0.1:5500/pages/search.html";
// })
const searchInput = document.querySelector('.js-search--input');
const debouncedSearch = debounce(function () {
    const keyword = searchInput.value;
    searchProduct(keyword);
}, 500);
searchInput.addEventListener('input', debouncedSearch);