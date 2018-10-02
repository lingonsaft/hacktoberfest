let contributors = document.querySelectorAll('.card-text a')
contributors.forEach(con => {
    var username = con.href.split('https://github.com/')[1];
    con.innerHTML = `<img src="https://avatars.githubusercontent.com/${username}" onerror="this.src='https://hackster.imgix.net/uploads/attachments/447798/github-mark_n2wdxTwOQQ.png?auto=compress%2Cformat&w=900&h=675&fit=min\'" /><h1>${con.innerHTML}</h1><h2>@${username}</h2>`
})
