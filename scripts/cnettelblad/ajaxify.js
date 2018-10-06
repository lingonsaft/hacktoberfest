/**
 * Basic functionality that allows us to fetch our HTML pages through fetch calls.
 * 
 * @author https://github.com/cnettelblad
 * @license http://www.wtfpl.net/
 */

 /**
  * Create a fetch request for desired html file
  * 
  * @param {string} page
  * @return {promise}
  */
async function fetchContent(page = '') {
    // Avoid double .html extensions
    page = page.replace('.html', '')
    page += '.html'
    return fetch('./public/html/' + page)
        .then(r => r.text())
}

/**
 * Simply replace the content of <element id="content"> with input
 * 
 * @param {string} html
 * @return {void}
 */
async function builContentHTML(html = '') {
    var body = document.getElementById('content')
    body.innerHTML = html
}

/**
 * Loads the requested Stylesheet by adding a link at the bottom of <head>
 * 
 * @param {string} path
 * @return {void}
 */
async function loadStylesheet(path = '') {
    // Avoid double .css extensions
    path = path.replace('.css', '')
    path += '.css'
    let presentSheet = document.head.querySelector('link[href*="'+path+'"]')
    if (presentSheet === null) {
        var link = document.createElement( "link" )
        link.href = path
        link.type = "text/css"
        link.rel = "stylesheet"

        document.getElementsByTagName( "head" )[0].appendChild( link )
    }
}

/**
 * Kinda misleading name.. This the func that does it all though.. But yeah.. Big time shot caller func!
 * 
 * @param {string} page
 * @return {promise}
 */
async function setContent(page = '') {
    document.getElementById('content').innerHTML = '<div class="loading-spinner"></div>'
    return fetchContent(page)
        .then(r => {
            builContentHTML(r)
        })
}

// This lil badboy loads our page.. Cool huh?
setContent('home')