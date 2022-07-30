let orderData = [];
let tbody = document.getElementById('tbody');
let tr = tbody.getElementsByTagName('tr');
let count = document.getElementById('count');
const newStatus = document.getElementById('New');
const PackedStatus = document.getElementById('Packed');
const IntransitStatus = document.getElementById('InTransit');
const DeliveredStatus = document.getElementById('Delivered');

function renderOrderData(orderData) {

    for (let i = 0; i < orderData.length; i++) {
        var currentorderData = orderData[i];
        let tr = document.createElement('tr')
        tr.classList.add('Homepage_TableRow');
        // console.log(currentorderData)
        tr.innerHTML = `
<td class="Homepage_SecondaryText">${currentorderData.id}</td>
<td class="Homepage_PrimaryText">${currentorderData.customerName}</td>
<td class="Homepage_PrimaryText">${currentorderData.orderDate}<br>
   <span class="Homepage_SecondaryText">${currentorderData.orderTime}</span>
   </td>
<td class="Homepage_SecondaryText">$${currentorderData.amount}</td>
 <td class="Homepage_PrimaryText">${currentorderData.orderStatus}</td>
`
        tbody.append(tr);

    }
}


// for filter order status

// For New Status
newStatus.addEventListener('change', (e)=> {
    e.preventDefault();
    for (let i = 0; i < tr.length; i++) {
        let td = tr[i].querySelectorAll('td')[4];
        if (td) {
            if (td.textContent === 'New') {
                if (e.target.checked) {
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

// For Packed Status
PackedStatus.addEventListener('change',(e)=> {
    e.preventDefault();
    for (let i = 0; i < tr.length; i++) {
        let td = tr[i].querySelectorAll('td')[4];
        if (td) {
            if (td.textContent === 'Packed') {
                if (e.target.checked) {
                    tr[i].style.display = "";
                    count.innerHTML = +(count.innerHTML) + 1;
                } else {
                    tr[i].style.display = "none";
                    count.innerHTML = +(count.innerHTML) - 1
                }
            }
        }
    }
})

// For InTransit Status
IntransitStatus.addEventListener('change',(e)=> {
    e.preventDefault();
    for (let i = 0; i < tr.length; i++) {
        let td = tr[i].querySelectorAll('td')[4];
        if (td) {
            if (td.textContent === 'InTransit') {
                if (e.target.checked) {
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

// For Delivery Status
DeliveredStatus.addEventListener('change',(e)=>{
    e.preventDefault();
    for (let i = 0; i < tr.length; i++) {
        let td = tr[i].querySelectorAll('td')[4];
        if (td) {
            if (td.textContent === 'Delivered') {
                if (e.target.checked) {
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

            fetch(`https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders`)
                .then(response => response.json())
                .then((data) => {
                    orderData = data;
                    renderOrderData(orderData);
                    count.innerHTML = data.length;
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
