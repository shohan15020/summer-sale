
let titleCount = 1;
let totalPrice = 0;
// select all card first
const cards = document.querySelectorAll('.card');

for (let card of cards) {
    // console.log(card);
    card.addEventListener('click', function () {
        // get price and title 
        const title = card.querySelector('h3').innerText;

        const price = parseFloat(card.querySelector('span').innerText.split(' ')[1]);
        // console.log(price);


        // push title in the div 
        const titleContainer = document.getElementById('title-container');

        const p = document.createElement('p');
        p.innerText = titleCount + '. ' + title;

        titleContainer.appendChild(p);

        titleCount++;

        // total price count
        totalPrice = totalPrice + price;
        // console.log(totalPrice);

        const totalPriceElement = document.getElementById('totalPrice');
        totalPriceElement.innerText = totalPrice;
    })
}

const btn = document.getElementById('apply-btn');

btn.addEventListener('click',function(){
    const couponElement = document.getElementById('input-field').value;
    const couponCode = couponElement.split(' ').join('').toUpperCase();

    if(totalPrice >= 200){

        if(couponCode === 'SELL200'){
            // discount calculation
            const discountElement = document.getElementById('discountPrice');
            const discountAmount = totalPrice * 0.2;
            discountElement.innerText = discountAmount;
            // rest amount calculation
            const restTotal = document.getElementById('total');
            restTotal.innerText = totalPrice - discountAmount;

            // clear value of input field
            document.getElementById('input-field').value = '';
        }else{
            alert('Invalid Coupon')
            // clear value of input field
            document.getElementById('input-field').value = '';
        }
    }else{
        alert('please buy at least $200!')
        // clear value of input field
        document.getElementById('input-field').value = '';
    }
})