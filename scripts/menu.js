async function fetchMenu() {
    return fetch('./menu.json')
        .then(r => r.json())
}

async function buildMenuHTML(obj = {}) {
    var html = ''
    var path = window.location.pathname.split('/')
    var currentPage = path[path.length-1] === '' ? '/' : path[path.length-1]

    Object.entries(obj).forEach(([key, item]) => {
        if(key == 'Others') {
          html += '<li class="dropdown">'
          html += '<a class="nav-link nested-dropdown" href="#" id="Others"> Others </a>'
          html += '<div class="dropdown-content">'
          Object.entries(item).forEach(([key, item]) => {
            let isCurrent = (currentPage === item.href ? true : false)

            html += '<div class="nav-item' + (isCurrent ? ' active' : '') + '">'
            html += '<a class="nav-link" href="' + item.href + '"' + (item.id ? ' id="'+ item.id + '"': '') + '>' + item.text + '</a>'
            html += '</div>'
          })
          html += '</div>'
        } else {
          let isCurrent = (currentPage === item.href ? true : false)

          html += '<li class="nav-item' + (isCurrent ? ' active' : '') + '">'
          html += '<a class="nav-link" href="' + item.href + '"' + (item.id ? ' id="'+ item.id + '"': '') + '>' + item.text + '</a>'
          html += '</li>'
        }
    })
    return document.getElementById('menu').innerHTML = html
}

async function buildMenu() {
    return fetchMenu()
        .then(r => {
            buildMenuHTML(r)
        })
}

buildMenu()
