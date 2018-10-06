async function fetchMenu() {
    return fetch('./menu.json')
        .then(r => r.json())
}

async function buildMenuHTML(obj = {}) {
    var html = ''
    var path = window.location.pathname.split('/')

    Object.entries(obj).forEach(([key, item]) => {
        let isHome = (item.page === 'home' ? true : false)
        
        html += '<li class="nav-item' + (isHome ? ' active' : '') + '">'
        html += '<a class="nav-link" data-page="' + item.page + '" id="' + (item.id ? item.id : 'nav-' + item.page) + '" href="#">' + item.text + '</a>'
        html += '</li>'
    })
    return document.getElementById('menu').innerHTML = html
}

async function buildMenu() {
    return fetchMenu()
        .then(r => {
            buildMenuHTML(r)
            addListeners(r)
        })
}

function handleClick(e, item) {
    let targetLink = e.target
    let activeLink = document.querySelector('li.active')

    // Make the new link "active"
    activeLink.classList.remove('active')
    targetLink.parentElement.classList.add('active')

    if (item.hasOwnProperty('css')) {
        item.css.forEach(stylesheet => {
            loadStylesheet('./css/'+item.css)
        })
        
    }

    let title = document.querySelector('head > title')
    if (item.hasOwnProperty('title')) {
        title.innerHTML = title
    } else {
        title = 'HACKTOBERFEST | ' + item.page
    }
    
    if (item.page === '#') {
        return
    }

    // Change content to desired page
    setContent(targetLink.dataset.page)
}

function addListeners(items = {}) {
    console.log(items)
    Object.entries(items).forEach(([items, item]) => {
        let element = document.querySelector('a#'+item.id)

        if (element === null) {
            element = document.querySelector('a#nav-'+item.page)
        }

        element.addEventListener('click', e => handleClick(e, item))
    })
}

buildMenu()