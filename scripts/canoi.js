$("#invert").change((e)=>{
    var txt = $("#invert").val();
    var invtxt = "";

<<<<<<< HEAD
    for (var i = txt.length-1; i>= 0; i--) {
        invtxt += txt[i];
        alert(i);
    }

    $("#inv-text").html(invtxt);
});
=======
    for (var i = txt.length-1; i >= 0; i--) {
        invtxt += txt[i];
    }

    $("#inv-text").html(invtxt);
});
>>>>>>> 79de7abf060f33f198b75fbe9838e7f7c964d7ee
