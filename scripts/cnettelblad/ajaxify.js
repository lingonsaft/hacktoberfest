async function fetchContent(page = '') {
    return fetch('./public/html/' + page + '.html')
        .then(r => r.text())
}

async function builContentHTML(html = '') {
    var body = document.getElementById('content')
    body.innerHTML = html
}

async function loadStylesheet(path = '') {
    let presentSheet = document.head.querySelector('link[href*="'+path+'"]')
    if (presentSheet === null) {
        var link = document.createElement( "link" )
        link.href = path
        link.type = "text/css"
        link.rel = "stylesheet"

        document.getElementsByTagName( "head" )[0].appendChild( link )
    }
}

async function setContent(page = '') {
    document.getElementById('content').innerHTML = '<div class="loading-spinner"></div>'
    return fetchContent(page)
        .then(r => {
            builContentHTML(r)
        })
}

setContent('home')