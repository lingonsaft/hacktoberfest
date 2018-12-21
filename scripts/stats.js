let statsObj = {
    commits: 0,
    forks: 0,
    pr: 0,
    stars: 0,
    issues:0,
    contribut:0
}

const reqObj = [
    ['https://api.github.com/repos/lingonsaft/hacktoberfest/commits', 'commits'],
    ['https://api.github.com/repos/lingonsaft/hacktoberfest/forks', 'forks'],
    ['https://api.github.com/repos/lingonsaft/hacktoberfest/pulls', 'pr'],
    ['https://api.github.com/repos/lingonsaft/hacktoberfest/issues', 'issues'],
    ['https://api.github.com/repos/lingonsaft/hacktoberfest/stargazers', 'stars'],
    ['https://api.github.com/repos/lingonsaft/hacktoberfest/stats/contributors', 'contribut'],
]

const getData = (url, key) => {
    fetch(url)
        .then(r => {
<<<<<<< HEAD
        	if(r.ok) {
=======
>>>>>>> 79de7abf060f33f198b75fbe9838e7f7c964d7ee
            if (r.headers.get('Link')) {
                r.headers.get('Link').split(',').forEach(link => {
                    if (link.includes('next')) {
                        link = link.split('<')
                        link = link[1].split('>')
                        getData(link[0], key)
                    }
                })
            }
            return r.json()
           }
           else {
           	throw new Error('Api limit exceeded');
           }
        })
        .then(json => {
            statsObj[key] += json.length
            document.getElementById('stats').innerHTML = 'Commits: ' + statsObj.commits + ' Forks: ' + statsObj.forks + ' Pull Requests: ' + statsObj.pr + ' Issues: ' + statsObj.issues + ' Stars: ' + statsObj.stars + ' Contributors: ' + statsObj.contribut
<<<<<<< HEAD
        }).catch(() => {
        	console.log('This catched 403');
						document.getElementById('stats').innerHTML = 'You guys are awesome, we have passed the github rate again this hour. <a href="https://github.com/lingonsaft/hacktoberfest">Here</a> is a link to repo to check out live stats'
				})
=======
        })
>>>>>>> 79de7abf060f33f198b75fbe9838e7f7c964d7ee
}

reqObj.forEach(rq => {
    getData(rq[0], rq[1])
})
setInterval(() => {
    reqObj.forEach(rq => {
        getData(rq[0], rq[1])
    })
 }, 600000)
