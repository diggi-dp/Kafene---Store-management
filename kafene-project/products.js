let productData = [];

const tbody = document.getElementById('tbody')
let tr = tbody.getElementsByTagName('tr');
let count = document.getElementById('count');

// renderProductData 
function renderProductsData(productData) {

    for (let i = 0; i < productData.length; i++) {
        let currentproductData = productData[i];
        let tr = document.createElement('tr')
        tr.classList.add('Homepage_TableRow');
        tr.innerHTML = `
<td class="Homepage_SecondaryText">${currentproductData.id}</td>
<td class="Homepage_PrimaryText">${currentproductData.medicineName}</td>
<td class="Homepage_PrimaryText">${currentproductData.medicineBrand}</td>
<td class="Homepage_SecondaryText">$${currentproductData.expiryDate}</td>
<td class="Homepage_PrimaryText">${currentproductData.unitPrice}</td>
<td class="Homepage_PrimaryText">${currentproductData.stock}</td>
`
        tbody.append(tr);
    }
}


// for filter products  

let expiredCheckBox = document.getElementById('Expired');
expiredCheckBox.addEventListener('change', (e) => {
    e.preventDefault();

    for (let i = 0; i < tr.length; i++) {
        let td = tr[i].querySelectorAll('td')[3];
        if (td) {
            // console.log(td.textContent)
            // console.log(new Date().getTime())
            if (new Date(td.textContent).getTime() < new Date().getTime()) {
                if (e.target.checked === true) {
                    tr[i].style.display = "";
                    count.innerHTML = +(count.innerHTML) + 1
                } else {
                    tr[i].style.display = "none";
                    count.innerHTML = +(count.innerHTML) - 1
                }
            }
        }
    }
})


let lowStockCheckBox = document.getElementById('Low-Stock');
lowStockCheckBox.addEventListener('change', (e) => {
    e.preventDefault();
    for (let i = 0; i < tr.length; i++) {
        let td = tr[i].querySelectorAll('td')[5];
        if (td) {
            if (td.textContent < 100) {
                if (e.target.checked === true) {
                    tr[i].style.display = "";
                    count.innerHTML = +(count.innerHTML) + 1
                } else {
                    tr[i].style.display = "none";
                    count.innerHTML = +(count.innerHTML) - 1
                }
            }
        }
    }
})



// if user logged in then make api call 
const username = localStorage.getItem('username')
const password = localStorage.getItem('password')

if (username != null && password != null) {
    if (username != '' && password != '') {
        if (username === password) {

            fetch(`https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products`)
                .then(response => response.json())
                .then((data) => {
                    productData = data;
                    renderProductsData(productData);
                    count.innerHTML = data.length
                })
                .catch((error) => {
                    console.log(error);
                })


        }
    }
}
else {
    const logout = document.getElementById('logout')
    logout.innerHTML = '';
}


