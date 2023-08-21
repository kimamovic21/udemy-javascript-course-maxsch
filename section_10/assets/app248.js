// 248. Communicating Can Be Challenging!

class Product {
    constructor(title, image, desc, price) {
        this.title = title;
        this.imageUrl = image;
        this.description = desc;
        this.price = price;
    };
};

class ShoppingCart {
    items = [];

    addProduct(product) {
        this.items.push(product);
        this.totalOutput = `<h2>Total: $${1}</h2>`
    };

    render() {
        const cartElement = document.createElement('section');
        cartElement.innerHTML = `
            <h2>Total: $${0}</h2>       
            <button> Order Now! </button> 
        `;
        cartElement.classList = 'cart';
        this.totalOutput = cartElement.querySelector('h2');
        return cartElement;
    };
};

class ProductItem {
    constructor(product) {
        console.log(product);
        this.product = product;
    };

    addToCart() {
        console.log('Adding product to cart...');
        console.log(this.product);
    };

    render() {
        const productElement = document.createElement('li');
        productElement.className = 'product-item';
        // console.log(this);
        // console.log(this.product);
        productElement.innerHTML = `
                <div>
                    <img src="${this.product.imageUrl}" alt="${this.product.title}">
                    <div class="product-item__content">
                        <h2>${this.product.title}</h2>
                        <h3>$${this.product.price}</h3>
                        <p>${this.product.description}</p>
                        <button> Add to Cart </button>
                    </div>
                </div>
            `;
       const addCartButton = productElement.querySelector('button');
       addCartButton.addEventListener('click', this.addToCart.bind(this));
       return productElement;
    };
};

class ProductList {
    products = [
        new Product(
            'A Pillow', 
            'https://cdn-images.article.com/products/SKU3033/2890x1500/image59450.jpg', 
            'A soft pillow!', 
            19.99
        ),
        new Product(
            'A Carpet', 
            'https://sag.uz/image/carpet_1588574970.jpg', 'A carpet which you might like - or not.', 
            89.99
        )
    ];

    constructor() {}

    render() {
        const productList = document.createElement('ul');
        productList.className = 'product-list';
        for (const product of this.products) {
            // console.log(product);
            // console.log(this.products);
            const productItem = new ProductItem(product);
            const productElement = productItem.render();
            productList.append(productElement);
        };
        return productList;
    };
};

class Shop {
    render() {
        const renderHook = document.getElementById('app');

        const cart = new ShoppingCart();
        const cartElement = cart.render();
        const productList = new ProductList();
        const productListElement = productList.render();

        renderHook.append(cartElement);
        renderHook.append(productListElement);
    };
};

const shop = new Shop();
shop.render();