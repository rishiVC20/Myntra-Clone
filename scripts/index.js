let bagItems ;
onLoad();
function onLoad(){
    let bagItemsStr = localStorage.getItem('bagItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    displayItemsOnHomePage();
    displayBagIcon();
}
displayBagIcon();

function addToBag(itemId){
    bagItems.push(itemId);
    localStorage.setItem('bagItems',JSON.stringify(bagItems));
    displayBagIcon();
}

function displayBagIcon(){
    let bagItemCount = document.querySelector('.bag-item-count');
    if (bagItems.length > 0){
        bagItemCount.innerHTML = bagItems.length;
        bagItemCount.style.visibility = 'visible';
    }
    else
        bagItemCount.style.visibility = 'hidden';
}

function displayItemsOnHomePage() {
    let containerElement = document.querySelector('.items-container');
    if (!containerElement)
        return;
let innerHtml = '';
items.forEach(item=>{
    innerHtml += `<div class="item-container">
          <img class="item-img" src="${item.image}" />
          <div class="rating">
          ${item.rating.stars} ⭐ | ${item.rating.count}</div>
          <div class="company-name">${item.company}</div>
          <div class="item-name">${item.item_name}</div>
          <div class="price">
            <span class="current-price">Rs ${item.current_price}</span>
            <span class="original-price">Rs ${item.original_price}</span>
            <span class="discount">(${item.discount_percentage}% OFF)</span>
          </div>
          <button class="btn-add-bag" onclick="addToBag(${item.id});">Add to Bag</button>
        </div>`
});

// let item = {
//     item_image:'images/1.jpg',
//     rating:{
//         stars:4.5,
//         noOfReviews:1400,
//     },
//     company_name:'Carlton London',
//     item_name:'Rhodium-Plated CZ Floral Studs',
//     current_price:606,
//     original_price:1045,
//     discount_percentage:42,
// }

containerElement.innerHTML = innerHtml;
}