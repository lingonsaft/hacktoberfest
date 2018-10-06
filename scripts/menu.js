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
        var currentPage = path[path.length - 1] === '' ? '/' : path[path.length - 1]

        Object.entries(obj).forEach(([key, item], index) => {
            let isCurrent = (currentPage === item.href ? true : false)
            if (index < 3) {
                html = html.concat(`
                    <li class="nav-item ${isCurrent ? 'active' : ''}">
                        <a class="nav-link" href="${item.href}">${item.text}</a>
                    </li>
                `);
            }

            // Add opening tags for dropdown-menu items
            if (index === 3) {
                html = html.concat(`
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbar-drop" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Others
                        </a>
                        <div class="dropdown-menu dropdown-menu-others" aria-labelledby="navbar-drop">
                `);
            }

            // Add dropdown-menu items
            if (index >= 3) {
                html = html.concat(`
                    <a class="dropdown-item" href="${item.href}" item="${item.id}">${item.text}</a>
                `);
            }

            // Add closing tags for dropdown-menu items
            if (index === Object.entries(obj).length) {
                html = html.concat('</div></li>')
            }
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