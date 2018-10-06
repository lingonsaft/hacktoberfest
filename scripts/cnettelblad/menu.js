async function fetchMenu() {
    return fetch('./menu.json')
        .then(r => r.json())
}

async function buildMenuHTML(obj = {}) {
    var html = ''
    let keys = Object.keys(obj)
    let i = 0

    Object.entries(obj).forEach(([key, item]) => {
        let isHome = (item.page === 'home' ? true : false)
        
        html += '<li class="nav-item' + (isHome ? ' active' : '') + '">'
        html += '<a class="nav-link" '
        html += (item.hasOwnProperty('page') ? 'data-page="' + item.page + '" ' : '') + '"href="#"'

        // Now lets add attributes
        if (item.hasOwnProperty('attr')) {
            Object.entries(item.attr).forEach(([key, attr]) => {
                console.log('Adding: '+ key + '=' + attr)
                html += ' ' + key + '="' + attr + '"'
            })
        } 

        // We still need an ID for our event handling
        if (!item.hasOwnProperty('attr') || !item.attr.id) {
            console.log('Adding ID..')
            html += 'id="nav-' + keys[i].toLowerCase() + '"'
        }

        html += ' href="#">'
        html += item.text
        html += '</a>'
        html += '</li>'

        i++
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
        title.innerHTML = item.title
    } else {
        title = 'HACKTOBERFEST | ' + item.page
    }

    if (!item.page) {
        return
    }

    // Change content to desired page
    setContent(targetLink.dataset.page)
}

function addListeners(items = {}) {
    console.log(items)
    let i = 0
    let keys = Object.keys(items)
    Object.entries(items).forEach(([items, item]) => {
        let element
        if (item.hasOwnProperty('attr') && item.attr.id) {
            element = document.querySelector('a#'+item.attr.id)
        } else {
            element = document.querySelector('a#nav-'+keys[i].toLowerCase())
        }
        element.addEventListener('click', e => handleClick(e, item))
        i++
    })
}

buildMenu()