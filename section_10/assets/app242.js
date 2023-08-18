// 242. Defining & Using a First Class

class Product {
    title = 'DEFAULT';
    imageUrl;
    description;
    price;
};
console.log(new Product());

const productsList = {
    products: [
        // new Product(),
        { 
            title: 'A Pillow', 
            imageUrl: 'https://cdn-images.article.com/products/SKU3033/2890x1500/image59450.jpg',
            price: 19.99,
            description: 'A soft pillow!',
        },
        { 
            title: 'A Carpet', 
            imageUrl: 'https://sag.uz/image/carpet_1588574970.jpg',
            price: 89.99,
            description: 'A carpet which you might like - or not.',
        },
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