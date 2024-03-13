const categoriesBlock = document.querySelector('.categories');
const productsBlock = document.querySelector('.products');
const productInfoBlock = document.querySelector('.product-info');

const categories = ['Електроніка', 'Одяг', 'Косметіка'];
const products = {
    Електроніка: ['Смартфони', "Комп'ютери", 'Монітори'],
    Одяг: ['Джинси', 'Кофти', 'Білизна'],
    Косметіка: ['Креми', 'Гелі для душу', 'Шампуні']
};

function displayCategories() {
    categoriesBlock.innerHTML = '';
    categories.forEach(category => {
        const categoryButton = document.createElement('button');
        categoryButton.textContent = category;
        categoryButton.addEventListener('click', () => {
            displayProducts(category);
            productInfoBlock.innerHTML = '';
        });
        categoriesBlock.appendChild(categoryButton);
    });
}

function displayProducts(category) {
    productsBlock.innerHTML = '';
    products[category].forEach(product => {
        const productButton = document.createElement('button');
        productButton.textContent = product;
        productButton.addEventListener('click', () => displayProductInfo(product));
        productsBlock.appendChild(productButton);
    });
}

function displayProductInfo(product) {
    productInfoBlock.innerHTML = '';
    const productTitle = document.createElement('h2');
    productTitle.textContent = product;
    const buyButton = document.createElement('button');
    buyButton.textContent = 'Купити';
    buyButton.addEventListener('click', () => {
        alert(`Товар "${product}" куплений`);
        displayCategories(); 
        productsBlock.innerHTML = ''; 
        productInfoBlock.innerHTML = '';
    });
    productInfoBlock.appendChild(productTitle);
    productInfoBlock.appendChild(buyButton);
}

displayCategories();