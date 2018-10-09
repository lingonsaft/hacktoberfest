const menu = {
  'Home': {
    'text': 'Home',
    'href': 'index.html'
  },
  'Helpful-Material': {
    'text': 'Helpful Material',
    'href': 'helpful-material.html'
  },
  'Contributors': {
    'text': 'Contributors',
    'href': 'contributors.html'
  },
  'Others': {
    'Potato': {
      'text': 'Potato',
      'href': 'potato.html'
    },
    'Cheese': {
      'text': 'Cheese!',
      'href': 'cheese.html'
    },
    'Tools': {
      'text': 'Tools',
      'href': 'tools.html',
      'id': 'tools'
    },
    'Invert': {
      'text': 'Invert',
      'href': '#',
      'id': 'invert-btn'
    },
    'Fireworks': {
      'text': 'Fireworks',
      'href': 'Fireworks.html',
      'id': 'fireworks'
    },
    'Learn': {
      'text': 'Learn!',
      'href': 'wow.html',
      'id': 'learn'
    },
    '4otakus': {
      'text': '4otakus',
      'href': '4otakus.html',
      'id': '4otakus'
    },
    'Bubble': {
      'text': 'Bubble',
      'href': 'bubble.html',
      'id': 'Bubble'
    },
    'Canoi': {
      'text': 'Canoi',
      'href': 'canoi.html',
      'id': 'Canoi'
    },
    'Colorgame': {
      'text': 'Colorgame',
      'href': 'colorgame.html',
      'id': 'Colorgame'
    },
    'Foxy': {
      'text': 'Foxy',
      'href': 'foxy.html',
      'id': 'Foxy'
    },
    'Gifheaven': {
      'text': 'Gif Heaven',
      'href': 'gifheaven.html',
      'id': 'Gifheaven'
    },
    'Plainpage': {
      'text': 'Plain Page',
      'href': 'plain_page.html',
      'id': 'Plainpage'
    },
    'Snek': {
      'text': 'Snek',
      'href': 'snek.html',
      'id': 'Snek'
    },
    'Spooky': {
      'text': 'Spooky',
      'href': 'spooky.html',
      'id': 'Spooky'
    },
    'Values': {
      'text': 'Values',
      'href': 'values.html',
      'id': 'Values'
    },
    'Wow': {
      'text': 'Wow',
      'href': 'wow.html',
      'id': 'Wow'
    },
    'Flappy': {
      'text': 'Flappy Game',
      'href': 'Flappy.html',
      'id': 'Flappy'
    },
    'Stay Dry': {
      'text': 'Stay Dry',
      'href': '/dry',
      'id': 'dry'
    }
  }
}

function buildMenuHTML (obj = {}) {
  var html = ''
  var path = window.location.pathname.split('/')
  var currentPage = path[path.length - 1] === '' ? '/' : path[path.length - 1]

  Object.entries(obj).forEach(([key, item]) => {
    if (key == 'Others') {
      html += '<li class="dropdown">'
      html += '<a class="nav-link nested-dropdown" href="#" id="Others"> Others </a>'
      html += '<div class="dropdown-content">'
      Object.entries(item).forEach(([key, item]) => {
        let isCurrent = (currentPage === item.href)

        html += '<div class="nav-item' + (isCurrent ? ' active' : '') + '">'
        html += '<a class="nav-link" href="' + item.href + '"' + (item.id ? ' id="' + item.id + '"' : '') + '>' + item.text + '</a>'
        html += '</div>'
      })
      html += '</div>'
    } else {
      let isCurrent = (currentPage === item.href)

      html += '<li class="nav-item' + (isCurrent ? ' active' : '') + '">'
      html += '<a class="nav-link" href="' + item.href + '"' + (item.id ? ' id="' + item.id + '"' : '') + '>' + item.text + '</a>'
      html += '</li>'
    }
  })
  document.getElementById('menu').innerHTML = html
}

function buildMenu () {
  return buildMenuHTML(menu)
}

buildMenu()
