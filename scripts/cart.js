document.getElementById('coupon-btn').addEventListener('click', function () {
    console.log('paisi')

    const couponTextField = document.getElementById('coupon');
    const couponText = couponTextField.value;

    const totalPriceElementField = document.getElementById('total-price');
    const totalPriceString = totalPriceElementField.innerText;
    const totalPriceElement = parseFloat(totalPriceString);

    if (couponText == 'c50') {
        const updateTotalPriceField = totalPriceElement * 0.5;
        totalPriceElementField.innerText = updateTotalPriceField;
    }
    else if (couponText == 'c40') {
        const updateTotalPriceField = totalPriceElement * 0.6;
        totalPriceElementField.innerText = updateTotalPriceField;
    }
    else if (couponText == 'c30') {
        const updateTotalPriceField = totalPriceElement * 0.7;
        totalPriceElementField.innerText = updateTotalPriceField;
    }
    else if (couponText == 'c20') {
        const updateTotalPriceField = totalPriceElement * 0.8;
        totalPriceElementField.innerText = updateTotalPriceField;
    }
    else {
        alert("This is not a Coupon!")
    }
})