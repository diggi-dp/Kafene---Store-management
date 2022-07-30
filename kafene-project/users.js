let usersData = [];

const tbody = document.getElementById('tbody')

// createtr 
function createtr(usersData) {
    let tr = document.createElement('tr')
    tr.classList.add('Homepage_TableRow');
    tr.innerHTML = `
        <td class="UserList_SecondaryText">${usersData.id}</td>
        <td class="UserList_PrimaryText">
            <img src="${usersData.profilePic}"
                alt="Profile Pic">
        </td>
        <td class="UserList_SecondaryText">${usersData.fullName}</td>
        <td class="UserList_PrimaryText">${usersData.dob}</td>
        <td class="UserList_SecondaryText">${usersData.gender}</td>
        <td class="UserList_SecondaryText">${usersData.currentCity}, ${usersData.currentCountry}</td>
        `
    return tr;
}


// searching functionality
let searchinput = document.querySelector('#searchInput')
let reset = document.querySelector('#reset')

// function for filter first and lastname 
function filtertable(searchkey) {
    if (searchkey.length >= 2) {
        tbody.innerHTML = '';
        for (let i = 0; i < usersData.length; i++) {
            const currentrecord = usersData[i];
            if (currentrecord.fullName.toLowerCase().includes(searchkey.toLowerCase())) {
                const tr = createtr(currentrecord);
                tbody.append(tr);
            }
        }
    }
    else if (searchkey.length === 0) {
        tbody.innerHTML = '';
        for (let i = 0; i < usersData.length; i++) {
            const currentrecord = usersData[i]
            const tr = createtr(currentrecord)
            tbody.append(tr)
        }
    }
    else {
        alert('Please enter at least 2 characters')
    }
}


function oninputkeyhandler(e) {
    filtertable(e.target.value)
}

function resetBtnHandler() {
    tbody.innerHTML = '';
    renderUsersData(usersData);
}


searchinput.addEventListener('keyup', oninputkeyhandler)  //keyhandler for form input (keyup for live search)
reset.addEventListener('click', resetBtnHandler)       //handler for form reset btn





// renderuserdata when page loading 
function renderUsersData(usersData) {
    for (let counter = 0; counter < usersData.length; counter++) {
        const currentUsersData = usersData[counter];
        const tr = createtr(currentUsersData);
        tbody.append(tr);
    }
}


// if user logged in then make api call 
const username = localStorage.getItem('username')
const password = localStorage.getItem('password')
console.log(username)
if (username != null && password != null) {
    if (username != '' && password != '') {
        if (username === password) {

            // fetch data from api end point 
            fetch(`https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users`)
                .then(response => response.json())
                .then((data) => {
                    usersData = data;
                    renderUsersData(usersData);
                })
                .catch((error) => {
                    console.log(error);
                })

        }
    }
}
else{
    const logout = document.getElementById('logout')
    logout.innerHTML = '';
}


