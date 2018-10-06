/**
 * This would be the clusterf**k that handles the menu, enjoy refactorin!
 * 
 * @author https://github.com/cnettelblad
 * @license http://www.wtfpl.net/
 */

/**
 * Fetch the menu.json file so we know what we're lookin for !
 * 
 * @return {promise}
 */
async function fetchMenu() {
    return fetch('./menu.json')
        .then(r => r.json())
}

/**
 * Now this.. This gonna need some refactoring, but it builds the html for the menu!
 * 
 * @param {obj} obj
 * @return {void}
 */
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
                html += ' ' + key + '="' + attr + '"'
            })
        } 

        // We still need an ID for our event handling
        if (!item.hasOwnProperty('attr') || !item.attr.id) {
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

/**
 * Handles promise from our fetch and calls respective functions with the response obj.
 * 
 * @return {void-ish-promise}
 */
async function buildMenu() {
    return fetchMenu()
        .then(r => {
            buildMenuHTML(r)
            addListeners(r)
        })
}

/**
 * Function to handle the click events on our menu.
 * 
 * @param {event} e
 * @param {object} item
 * @return {void}
 */
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

/**
 * Builds some listeners for our menu options
 * 
 * @param {object} items
 * @return {void}
 */
function addListeners(items = {}) {
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