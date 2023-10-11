const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const dataValue = params.get('categoryID');
// let suit = [
//     {
//         id: "suit1",
//         name: "Áo Vest Đen Kẻ Ô- AV252",
//         price: 3200000,
//         image: "../assets/images/product/vest/vest1.webp",
//         stock: 100,
//         categoryID: "1"
//     },
//     {
//         id:"suit2",
//         name: "Áo Vest ghi kẻ nâu đen - AV299",
//         price: 3100000,
//         image: "../assets/images/product/vest/vest2.webp",
//         stock: 100,
//         categoryID: "1"
//     }
// ]
// localStorage.setItem("suit", JSON.stringify(suit));
// let TShirt = [
//     {
//         id: "TShirt1",
//         name: "Polo Trắng Viền Vai - AP132T",
//         price: 650000,
//         image: "../assets/images/product/tshirt/ao1.webp",
//         stock: 100,
//         categoryID: "2"
//     },
//     {
//         id: "TShirt2",
//         name: "Polo Trắng Họa Tiết - AP131",
//         price: 650000,
//         image: "../assets/images/product/tshirt/ao2.webp",
//         stock: 100,
//         categoryID: "2"
//     }
// ]
// localStorage.setItem("TShirt", JSON.stringify(TShirt));
// let shirt = [
//     {
//         id: "shirt1",
//         name: "Sơ Mi Xanh Sọc - SDTTK0044",
//         price: 950000,
//         image: "../assets/images/product/shirt/shirt1.webp",
//         stock: 100,
//         categoryID: "3"
//     },
//     {
//         id: "shirt2",
//         name: "Sơ Mi Trắng Sọc - SDTTK0032",
//         price: 750000,
//         image: "../assets/images/product/shirt/shirt2.webp",
//         stock: 100,
//         categoryID: "3"
//     }
// ]
// localStorage.setItem("shirt", JSON.stringify(shirt));
// let shoes = [
//     {
//         id: "shoes1",
//         name: "Giày Da Đen Loadfer - GAD001D",
//         price: 1800000,
//         image: "../assets/images/product/shoes/shoes1.webp",
//         stock: 100,
//         categoryID: "4"
//     },
//     {
//         id: "shoes2",
//         name: "Giày Da Nâu Loadfer - SDTTK0032",
//         price: 1800000,
//         image: "../assets/images/product/shoes/shoes2.webp",
//         stock: 100,
//         categoryID: "4"
//     }
// ]
// localStorage.setItem("shoes", JSON.stringify(shoes));

let listProduct = [];
renderPopupUser();
showTotalProduct();
// renderProducts = (array) => {
//     let renderValue = "";
//     for (let i = 0; i < array.length; i++) {

//         renderValue += `<div class="col-xl-3">
//                             <div class="product__item">
//                                 <div class="product__item--img">
//                                     <figure>
//                                         <img src="${array[i].image}" alt="">
//                                     </figure>
//                                 </div>
//                                 <div class="product__item--info">
//                                     <div class="product__item--rate d-flex justify-content-between">
//                                         <div class="product__item--raiting">
//                                             <i class="fa-solid fa-star"></i>
//                                             <i class="fa-solid fa-star"></i>
//                                             <i class="fa-solid fa-star"></i>
//                                             <i class="fa-solid fa-star"></i>
//                                             <i class="fa-solid fa-star"></i>
//                                         </div>
//                                         <div class="product__item--like">
//                                             <i class="fa-solid fa-heart"></i>
//                                         </div>
//                                     </div>
//                                     <p class="product__item--name">${array[i].name}</p>
//                                     <p class="product__item--price"><b>${array[i].price.toLocaleString('vi-VN')}đ</b></p>
//                                 </div>
//                                 <div class="product__item--action">
//                                     <div class="js-product__item--view product__item--view"><a href="./detailsProduct.html?productID=${array[i].id}&categoryID=${dataValue}">
//                                     <i class="fa-solid fa-eye"></i></a></div>
//                                     <div class="product__item--cart" onclick="addToCart('${array[i].id}')"><i class="fa-solid fa-bag-shopping"></i></div>
//                                 </div>
//                             </div>
//                         </div>`;
//     }
//     document.querySelector(".js-products").innerHTML = renderValue;
// }
switch (dataValue) {
    case "1":
        document.querySelector("#sort").addEventListener("change", () => {
            let checkSort = document.querySelector("#sort").value;
            switch (checkSort) {
                case "1":
                    suit.sort((a, b) => a.price - b.price);
                    renderProducts(suit);
                    break;
                case "2":
                    suit.sort((a, b) => -a.price + b.price);
                    renderProducts(suit);
                    break;
                default:
                    renderProducts(suit);
                    break;
            }
        })
        renderProducts(suit);
        document.querySelector(".products__heading").innerHTML = `BỘ SƯU TẬP SUIT`;
        listProduct = suit;
        pagination(suit);
        changeCurentPage = (current) => {
            currentPage = current + 1;
            caculateStarEnd(currentPage);
            renderProducts(suit);
            for (let i = 0; i < totalPage; i++) {
                if (i == currentPage - 1) {
                    document.getElementsByClassName("js-product__pagination--item")[i].classList.add("currentPage");
                }
                else {
                    document.getElementsByClassName("js-product__pagination--item")[i].classList.remove("currentPage");
                }
            }
        }
        changeCurentPage(0);
        break;
    case "2":
        renderProducts(TShirt);
        document.querySelector(".products__heading").innerHTML = `BỘ SƯU TẬP T-SHIRT`;
        listProduct = TShirt;
        pagination(TShirt);
        changeCurentPage = (current) => {
            currentPage = current + 1;
            caculateStarEnd(currentPage);
            renderProducts(TShirt);
            for (let i = 0; i < totalPage; i++) {
                if (i == currentPage - 1) {
                    document.getElementsByClassName("js-product__pagination--item")[i].classList.add("currentPage");
                }
                else {
                    document.getElementsByClassName("js-product__pagination--item")[i].classList.remove("currentPage");
                }
            }
        }
        changeCurentPage(0);
        break;
    case "3":
        renderProducts(shirt);
        document.querySelector(".products__heading").innerHTML = `BỘ SƯU TẬP SHIRT`;
        listProduct = shirt;
        pagination(shirt);
        changeCurentPage = (current) => {
            currentPage = current + 1;
            caculateStarEnd(currentPage);
            renderProducts(shirt);
            for (let i = 0; i < totalPage; i++) {
                if (i == currentPage - 1) {
                    document.getElementsByClassName("js-product__pagination--item")[i].classList.add("currentPage");
                }
                else {
                    document.getElementsByClassName("js-product__pagination--item")[i].classList.remove("currentPage");
                }
            }
        }
        changeCurentPage(0);
        break;
    case "4":
        renderProducts(shoes);
        document.querySelector(".products__heading").innerHTML = `BỘ SƯU TẬP SHOES`;
        listProduct = shoes;
        pagination(shoes);
        changeCurentPage = (current) => {
            currentPage = current + 1;
            caculateStarEnd(currentPage);
            renderProducts(shoes);
            for (let i = 0; i < totalPage; i++) {
                if (i == currentPage - 1) {
                    document.getElementsByClassName("js-product__pagination--item")[i].classList.add("currentPage");
                }
                else {
                    document.getElementsByClassName("js-product__pagination--item")[i].classList.remove("currentPage");
                }
            }
        }
        changeCurentPage(0);
        break;

    default:
        window.location.href = "../index.html";
        break;
}
nextPage = () => {
    if (currentPage == totalPage) {
        return;
    }
    changeCurentPage(currentPage);
}
prePage = () => {
    currentPage = currentPage - 2;
    if (currentPage < 0) {
        currentPage = 1;
        return;
    }
    changeCurentPage(currentPage);
}
function addToCart(productID) {
    let loginStatus = localStorage.getItem("userID");
    if (loginStatus) {
        for (let i = 0; i < users.length; i++) {
            if (users[i].id == loginStatus) {
                if (users[i].isLocked == 0) {
                    for (let j = 0; j < listProduct.length; j++) {
                        if (listProduct[j].id == productID) {
                            let result = users[i].cart.filter((item) => {
                                return item.id == productID;
                            });
                            if (result.length == 0) {
                                listProduct[j].quantity = 1;
                                users[i].cart.push(listProduct[j]);
                                localStorage.setItem("users", JSON.stringify(users));
                            }
                            else {
                                for (let z = 0; z < users[i].cart.length; z++) {
                                    if (users[i].cart[z].id == productID) {
                                        users[i].cart[z].quantity++;
                                        localStorage.setItem("users", JSON.stringify(users));
                                    }
                                }
                            }
                        }
                    }
                }
                else {
                   document.querySelector(".modal-noitice").classList.add("show");
                   document.querySelector(".mask").classList.add("show");
                    return;
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
}
document.querySelector(".btn-noitice").addEventListener("click",()=>{
    document.querySelector(".modal-noitice").classList.remove("show");
    document.querySelector(".mask").classList.remove("show");
})

