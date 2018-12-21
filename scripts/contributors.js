let contributors = document.querySelectorAll('.card-text a')
contributors.forEach(con => {
    console.log(con.href)
<<<<<<< HEAD
    con.innerHTML += '<img style="width: 62px; margin-left: 12px" src="https://github.com/'+ con.href.split('https://github.com/')[1] + '.png?size=62">'
=======
    con.innerHTML += '<img style="width: 62px; margin-left: 12px" src="https://github.com/'+ con.href.split('https://github.com/')[1] + '.png?size=62" />'
>>>>>>> 79de7abf060f33f198b75fbe9838e7f7c964d7ee
})