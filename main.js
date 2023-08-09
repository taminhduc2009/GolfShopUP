let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list-products');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('.body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
  {
        id: 1,
        name: "GOLF CAP",
        image: 'redboycap.webp',
        price: '$548.00',
      },
      {
        id: 2,
        name: "Bag For Golf Club",
        image: 'bagforgolfclub.webp',
        price: '$219.00'
      },
      {
        id: 3,
        name: "Boy's golf cap",
        image: 'boygolfcap.webp',
        price: '$120.00'
      },
      {
        id: 4,
        name: "Composite Mini Stick",
        image: 'golf stick.webp',
        price: '$325.00'
      },
      {
        id: 5,
        name: "Cotton Golf Cap",
        image: 'cotton golf cap.webp',
        price: '$548.00'
      },
      {
        id: 6,
        name: "Cotton Snapback Baseball",
        image: 'cottondarkcap.jpeg',
        price: '$548.00'
      },
      {
        id: 7,
        name: "Deluxe Stand Golf Bag",
        image: 'golfcompbag.webp',
        price: '$325.00'
      },
      {
        id: 8,
        name: "Adjustable golf cap",
        image: 'redcap.webp',
        price: '$325.00'
      },
      {
        id: 9,
        name: "Golf Ball Tee Holder",
        image: 'golf ball tee.webp',
        price: '$269.00'
      },
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <a href=${value.info}<img src="./img/${value.image}"></a>
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
    saveToLocalStorage(); // Lưu vào LocalStorage sau khi thêm sản phẩm vào giỏ hàng
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="./img/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}



// Search
function searchProducts() {
    // Lấy từ khóa tìm kiếm từ ô input
    let searchInput = document.getElementById('searchInput').value.toLowerCase();

    // Duyệt qua danh sách sản phẩm để tìm kiếm
    products.forEach((value, key) => {
        let item = document.querySelector(`.item[data-key="${key}"]`);

        // Kiểm tra nếu tên sản phẩm chứa từ khóa tìm kiếm
        if (value.name.toLowerCase().includes(searchInput)) {
            // Hiển thị sản phẩm
            item.style.display = "block";
        } else {
            // Ẩn sản phẩm
            item.style.display = "none";
        }
    });
}
function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.setAttribute('data-key', key); // Đánh dấu vị trí của sản phẩm trong mảng
        newDiv.innerHTML = `
            <img src="./img/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}

// Hàm lưu thông tin giỏ hàng vào LocalStorage
function saveToLocalStorage() {
    localStorage.setItem('listCards', JSON.stringify(listCards));
}
function loadFromLocalStorage() {
    let savedListCards = localStorage.getItem('listCards');
    if (savedListCards) {
        listCards = JSON.parse(savedListCards);
        reloadCard();
    }
}

loadFromLocalStorage();


