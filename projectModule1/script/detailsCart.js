renderPopupUser();
showTotalProduct();
let total;
renderCartDetails = () => {
    cartDetailsItem = "";
    let loginStatus = localStorage.getItem("userID");
    if (loginStatus) {
        let listItemCart = "";
        for (let i = 0; i < users.length; i++) {
            if (users[i].id == userID) {
                if (users[i].cart.length != 0) {
                    let n = users[i].cart.length
                    total = 0;
                    for (let j = 0; j < n; j++) {
                        total += users[i].cart[j].quantity * users[i].cart[j].price;
                        cartDetailsItem += ` <li class="cart-details__item">
                        <div class="row">
                            <div class="col-xl-2">
                                <div class="cart-details__item--img">
                                    <figure>
                                        <img src="${users[i].cart[j].image}" alt="">
                                    </figure>
                                </div>
                            </div>
                            <div class="col-xl-4">
                                <div class="cart-details__item--info">
                                    <p class="cart-details__item--name">
                                    ${users[i].cart[j].name}</p>
                                    <p class="cart-details__item--stock">Còn:  ${users[i].cart[j].stock} sản phẩm</p>
                                </div>
                            </div>
                            <div class="col-xl-2">
                                <div class="cart-details__item--quantity">
                                    <span>
                                        <i class="fa-solid fa-minus js-minus--btn" onclick="minus()"></i>
                                        <input class="js-product-detail__quality--input" type="text" value="${users[i].cart[j].quantity}">
                                        <i class="fa-solid fa-plus js-plus--btn" onclick="plus()"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="col-xl-2">
                                <div class="cart-details__item--price">
                                    <span>
                                    ${users[i].cart[j].price.toLocaleString('vi-VN')} ₫
                                    </span>
                                </div>
                            </div>
                            <div class="col-xl-2">
                                <div class="cart-details__item--total-price">
                                    <p>Thành Tiền:</p>
                                    <p>${(users[i].cart[j].quantity * users[i].cart[j].price).toLocaleString('vi-VN')}đ</p>
                                </div>
                            </div>
                            <div class="cart-details__item--delete" onclick="deleteItem('${users[i].cart[j].id}') ">
                                <i class="fa-solid fa-xmark"></i>
                            </div>
                        </div>

                    </li>`;

                    }

                }
                else {
                    listItemCart = `<p>Ban chua co san pham nao</p>`
                }
            }
        }
        document.querySelector(".cart-details__list").innerHTML = cartDetailsItem;
    }

}
renderCartDetails();

rederBill = () => {
    let loginStatus = localStorage.getItem("userID");
    let bill = "";
    if (loginStatus) {
        for (let i = 0; i < users.length; i++) {
            if (users[i].id == userID) {
                if (users[i].cart.length != 0) { 
                    bill = `  
                    <li>
                        <div class="order__info--label">Tạm tính:</div>
                        <div class="order__info--value">${total.toLocaleString('vi-VN')} ₫</div>
                    </li>
                    <li>
                        <div class="order__info--label">Thuế:</div>
                        <div class="order__info--value">${(total*10/100).toLocaleString('vi-VN')}  ₫</div>
                    </li>
                    <li>
                        <div class="order__info--label">Phí Vận Chuyển:</div>
                        <div class="order__info--value">miễn phí</div>
                    </li>
                    <li>
                        <div class="order__info--label">Chiết Khấu Giảm Giá:</div>
                        <div class="order__info--value">0 ₫</div>
                    </li>
                    <li class="order__info--total">
                        <div class="order__info--label ">Tổng Tiền:</div>
                        <div class="order__info--value">${(Number(total)+(Number(total*(10/100)))).toLocaleString('vi-VN')} ₫</div>
                    </li>
                    <div class="order__info--btn">
                        <button class="btn btn-dark js-buy-more">Mua Thêm</button>
                        <button class="btn btn-danger">Thanh Toán</button>
                    </div>`
                }
                else {
                    bill = `<p>Ban chua co san pham nao</p>`
                }
            }
        }
        
    document.querySelector(".order__info ul").innerHTML = bill;
    }
   
}
rederBill();
document.querySelector(".js-buy-more").addEventListener("click",()=>{
    window.location.href = "../index.html";
})
//xoa sp

deleteItem = (idItemCart) => {
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
    renderCartDetails();
    rederBill();
    showTotalProduct();
   
}
plus = () => {
    document.querySelector(".js-product-detail__quality--input").value = parseInt(document.querySelector(".js-product-detail__quality--input").value) + 1;
}
minus = () => {
    if (document.querySelector(".js-product-detail__quality--input").value > 1) {
        document.querySelector(".js-product-detail__quality--input").value = parseInt(document.querySelector(".js-product-detail__quality--input").value) - 1;
    }

}
