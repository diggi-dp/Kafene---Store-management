var nav = document.querySelector('nav')

// active underline implementation 
nav.addEventListener('click', (e) => {
    e.preventDefault();
    let anchor = document.querySelectorAll('.topbar_menuItem')
    for (var i = 0; i < anchor.length; i++) {
        anchor[i].classList.remove('topbar-active')
    }
    if(e.target.classList.contains('orders')){
        e.target.classList.add('topbar-active')
        location.assign('./orders.html')
    }
    else if(e.target.classList.contains('products')){
        e.target.classList.add('topbar-active')
        location.assign('./products.html')
    }
    else if(e.target.classList.contains('users')){
        e.target.classList.add('topbar-active')
        location.assign('./users.html')
    }
})

// logout 
let logout  = document.querySelector('#logout')

logout.addEventListener('click',(e)=>{
    e.preventDefault(); 
    localStorage.removeItem('username')
    console.log('logout')
    localStorage.removeItem('password')
    location.assign('./home.html')
})

