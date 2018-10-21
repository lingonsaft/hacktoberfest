$("#invert").change((e)=>{
    var txt = $("#invert").val();
    var invtxt = "";

    for (var i = txt.length-1; i>= 0; i--) {
        invtxt += txt[i];
        alert(i);
    }

    $("#inv-text").html(invtxt);
});
