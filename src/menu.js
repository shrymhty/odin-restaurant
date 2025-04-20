export function renderMenu() {

    const menuBtn = document.getElementById('menu');
    menuBtn.style.textDecoration = 'underline';

    const content = document.getElementById('content');
    const mainDiv = document.createElement('div');
    mainDiv.setAttribute('id', 'menuDiv');

    mainDiv.style.width = '100%';
    mainDiv.style.background = '#f6e7d2';
    mainDiv.style.display = 'flex';
    mainDiv.style.flexDirection = 'column';
    mainDiv.style.alignItems = 'center';
    mainDiv.style.paddingTop = '50px';

    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-container');

    menuDiv.style.padding = '30px';

    const item = document.createElement('h1');
    item.textContent = "Our Menu";
    const foodList = document.createElement('div');
    foodList.innerHTML = `
        <div>
            <h2 class='item'>Truffle Parmesan Fries</h2>
            <p class='info'>Crispy fries flavoured with parmesan cheese, truffle oil, and spring onion.</p>
        </div>
        <div>
            <h2 class='item'>Guac and Homemade Corn Chips</h2>
            <p class='info'>Country avocado mashed with tomatoes, cilantro, chilli and peanuts, served with homemade corn chips.</p>
        </div>
        <div>
            <h2 class='item'>Buts, Seeds and Feta Toast</h2>
            <p class='info'>Feta cheese, mix nuts and sourdough bread.</p>
        </div>
        <div>
            <h2 class='item'>Cottage Cheese Akuri with Sourdough</h2>
            <p class='info'>Cottage cheese, tomatoes and spices served with sourdough bread.</p>
        </div>
        <div>
            <h2 class='item'>Nutella and Banana Sandwich</h2>
            <p class='info'>Nutella and banana on brioche bread, served with sweet potato chips and coleslaw.</p>
        </div>
        <div>
            <h2 class='item'>Coconut Affogato</h2>
            <p class='info'>Milkmoon espresso poured over on cold scoop of house coconut ice cream.</p>
        </div>
        <div>
            <h2 class='item'>Classic Vanilla Affogato</h2>
            <p class='info'>Milkmoon espresso poured over on a cold scoop of house tahiti vanilla ice cream.</p>
        </div>
        <div>
            <h2 class='item'>Butter Croissant</h2>
            <p class='info'>Freshly baked, buttery.</p>
        </div>
        <div>
            <h2 class='item'>Coffee Walnut Jawa Cake</h2>
            <p class='info'>Fluffy cake made with coffee and walnut.</p>
        </div>
        <div>
            <h2 class='item'>Pistachio Berry Cake</h2>
            <p class='info'>Pistachio sponge, white chocolate, rose petals, respberry compote.</p>
        </div>
        <div>
            <h2 class='item'>Margherita Pizza</h2>
            <p class='info'>Fior di latte mozzarella, san marzano sauce,, basil and olive oil.</p>
        </div>
        <div>
            <h2 class='item'>Mushroom Bianco Pizza</h2>
            <p class='info'>Creamy bechamel sauce, whole roasted garlic, mushrooms, topped with mozzarella.</p>
        </div>
        </ul>
    `;

    foodList.classList.add('food-list');
    
    menuDiv.appendChild(item);
    menuDiv.appendChild(foodList);


    // Append to main
    mainDiv.appendChild(menuDiv);
    content.appendChild(mainDiv);
}
