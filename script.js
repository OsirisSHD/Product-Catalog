productsData = [
	{
		id: 1,
		name: 'Ноутбук',
		category: 'Электроника',
	},
	{
		id: 2,
		name: 'Смартфон',
		category: 'Электроника',
	},
	{
		id: 3,
		name: 'Кофемашина',
		category: 'Бытовая техника',
	},
	{
		id: 4,
		name: 'Фотокамера',
		category: 'Электроника',
	},
	{
		id: 5,
		name: 'Микроволновая печь',
		category: 'Бытовая техника',
	},
	{
		id: 6,
		name: 'Книга',
		category: 'Книги',
	},
	{
		id: 7,
		name: 'Футболка',
		category: 'Одежда',
	},
	{
		id: 8,
		name: 'Шапка',
		category: 'Одежда',
	},
	{
		id: 9,
		name: 'Стул',
		category: 'Мебель',
	},
	{
		id: 10,
		name: 'Стол',
		category: 'Мебель',
	},
];
const allCategory = 'Все категории'
const productsBoxEL = document.querySelector('.products-box');
const categoryEL = document.querySelector('.category')

const categories = [
    allCategory, 
...Object.keys(productsData.reduce((acc, item) => {
    return {[item.category]: true, ...acc}
}, {})
)]

categories.forEach((category) => {
    categoryEL.insertAdjacentHTML(
        'beforeend',
        `
        <option value="${category}">${category}</option>
        `
    );
});

productsData.forEach((product) => {
    renderProduct(product)
});

categoryEL.addEventListener('change', function (e) {
    productsBoxEL.innerHTML = '';
    const selectedValue = categoryEL.value
    filterByCategory(selectedValue).forEach((product) => {
        renderProduct(product);
    }); 
});

function renderProduct(product) {
    productsBoxEL.insertAdjacentHTML(
        'beforeend',
        `<p class="product-name">${product.name} (${product.category})</p>
        <br>
        `
)}

function filterByCategory(category){
    if(category === allCategory) {
        return productsData;
    }
    const filteredProducts = productsData.filter(product => {
        return product.category === category;
    });

    return filteredProducts;
}