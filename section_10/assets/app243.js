// 243. Working with Constructor Methods

class Product {
    title = 'DEFAULT';
    imageUrl;
    description;
    price;

    constructor(title, image, desc, price) {
        // this reffers to our class
        this.title = title;
        this.imageUrl = image;
        this.description = desc;
        this.price = price;
    };
};

const productsList = {
    products: [
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
        ),
    ],

    render() {
        const renderHook = document.getElementById('app');
        const productList = document.createElement('ul');
        productList.className = 'product-list';
        for (const product of this.products) {
            console.log(product);
            const productElement = document.createElement('li');
            productElement.className = 'product-item';
            productElement.innerHTML = `
                <div>
                    <img src="${product.imageUrl}" alt="${product.title}">
                    <div class="product-item__content">
                        <h2>${product.title}</h2>
                        <h3>$${product.price}</h3>
                        <p>${product.description}</p>
                        <button>Add to Cart</button>
                    </div>
                </div>
            `;
            productList.append(productElement);
        };
        renderHook.append(productList);
    },
}; 

productsList.render(); 