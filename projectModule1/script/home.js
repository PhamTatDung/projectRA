//render slide show
// let users = JSON.parse(localStorage.getItem("users"));
let slides = [
    "./assets/images/slides/slide1.webp",
    "./assets/images/slides/slide2.webp",
    "./assets/images/slides/slide3.webp"
]
renderPopupUser();
showTotalProduct();
renderSlide = (array) => {
    let slideItem = "";
    for (let i = 0; i < array.length; i++) {
        slideItem += `  <div class="carousel-item js-carousel-item" data-bs-interval="1500">
                            <img src="${slides[i]}" class="d-block w-100" alt="...">
                        </div>`
    }
    btn = document.querySelector(".js-carousel-inner").innerHTML;
    slideItem += btn;
    document.querySelector(".js-carousel-inner").innerHTML = slideItem;
    document.querySelectorAll(".js-carousel-item")[0].classList.add("active");
}
renderSlide(slides);


//render collection item
//Tao doi tuong collection
let collection = [
    {
        id: 1,
        name: "Bộ Sưu Tập 1",
        img: "./assets/images/product/newProducts/new1.webp"
    },
    {
        id: 2,
        name: "Bộ Sưu Tập 2",
        img: "./assets/images/product/newProducts/new2.webp"
    },
    {
        id: 3,
        name: "Bộ Sưu Tập 3",
        img: "./assets/images/product/newProducts/new3.webp"
    },
    {
        id: 4,
        name: "Bộ Sưu Tập 4",
        img: "./assets/images/product/newProducts/new4.webp"
    }
]
renderCollection = (array) => {
    let collectionRender = "";
    for (let i = 0; i < array.length; i++) {
        collectionRender += `<div class="col-xl-3">
                            <div class="collection__item">
                                <a href="#" class="collection__item--link">
                                    <div class="collection__item--img">
                                        <figure>
                                            <img src="${array[i].img}" alt="">
                                        </figure>
                                    </div>
                                </a>
                            </div>
                        </div>`
    }
    document.querySelector(".js-collection__item").innerHTML = collectionRender;

}
renderCollection(collection);
//sua duong dan logout
document.querySelector(".cartEnter a").href = "./pages/detailsCart.html"