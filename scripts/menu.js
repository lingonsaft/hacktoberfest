const menuData = {
    "Home": {
        "text": "Home",
        "href": "/"
    },
    "Helpful-Material": {
        "text": "Helpful Material",
        "href": "/helpful-material"
    },
    "Contributors": {
        "text": "Contributors",
        "href": "/contributors"
    },
    "The-Twist": {
        "text": "The Twist",
        "href": "#",
        "id": "twist"
    },
    "Potato": {
        "text": "Potato",
        "href": "/potato"
    },
    "Cheese": {
        "text": "Cheese!",
        "href": "/cheese"
    },
    "Tools": {
        "text": "Tools",
        "href": "/tools",
        "id": "tools"
    },
    "Invert": {
        "text": "Invert",
        "href": "#",
        "id": "invert-btn"
    },
    "Fireworks": {
        "text": "Fireworks",
        "href": "/fireworks",
        "id": "fireworks"
    },
    "Learn": {
        "text": "Learn!",
        "href": "/wow",
        "id": "learn"
    }
}

class menu {
    constructor() {

    }

    fetchMenu() {
        return menuData
    }

    buildMenuHTML(obj = {}) {
        var html = ''
        var path = window.location.pathname.split('/')
        var currentPage = path[path.length-1] === '' ? '/' : path[path.length-1]

        Object.entries(obj).forEach(([key, item]) => {
            let isCurrent = (currentPage === item.href ? true : false)

            html += '<li class="nav-item' + (isCurrent ? ' active' : '') + '">'
            html += '<a class="nav-link" href="' + item.href + '"' + (item.id ? ' id="'+ item.id + '"': '') + '>' + item.text + '</a>'
            html += '</li>'
        })
        return document.getElementById('menu').innerHTML = html
    }

    build() {
        const menu = this.fetchMenu()
        this.buildMenuHTML(menu)
    }
}

let m = new menu()
m.build()
