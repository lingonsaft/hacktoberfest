class menu {
    constructor() {

    }

    fetchMenu() {
        return fetch('./menu.json')
            .then(r => r.json())
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
        return this.fetchMenu()
            .then(r => {
                this.buildMenuHTML(r)
            })
    }
}

let m = new menu()
m.build()