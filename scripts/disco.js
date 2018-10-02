r = 255;
g = 255;
b = 255;
flag = 0;
t = new Array;
o = new Array;
d = new Array;

function hex(a, c) {
    t[a] = Math.floor(c / 16)
    o[a] = c % 16
    switch (t[a]) {
        case 10:
            t[a] = 'A';
            break;
        case 11:
            t[a] = 'B';
            break;
        case 12:
            t[a] = 'C';
            break;
        case 13:
            t[a] = 'D';
            break;
        case 14:
            t[a] = 'E';
            break;
        case 15:
            t[a] = 'F';
            break;
        default:
            break;
    }
    switch (o[a]) {
        case 10:
            o[a] = 'A';
            break;
        case 11:
            o[a] = 'B';
            break;
        case 12:
            o[a] = 'C';
            break;
        case 13:
            o[a] = 'D';
            break;
        case 14:
            o[a] = 'E';
            break;
        case 15:
            o[a] = 'F';
            break;
        default:
            break;
    }
}

function ran(a, c) {
    if ((Math.random() > 2 / 3 || c == 0) && c < 255) {
        c++
        d[a] = 2;
    } else {
        if ((Math.random() <= 1 / 2 || c == 255) && c > 0) {
            c--
            d[a] = 1;
        } else d[a] = 0;
    }
    return c
}

function do_it(a, c) {
    if ((d[a] == 2 && c < 255) || c == 0) {
        c++
        d[a] = 2
    } else
    if ((d[a] == 1 && c > 0) || c == 255) {
        c--;
        d[a] = 1;
    }
    if (a == 3) {
        if (d[1] == 0 && d[2] == 0 && d[3] == 0)
            flag = 1
    }
    return c
}

function disco() {
    if (flag == 0) {
        r = ran(1, r);
        g = ran(2, g);
        b = ran(3, b);
        hex(1, r)
        hex(2, g)
        hex(3, b)
        document.body.style.background = "#" + t[1] + o[1] + t[2] + o[2] + t[3] + o[3]
        flag = 50
    } else {
        r = do_it(1, r)
        g = do_it(2, g)
        b = do_it(3, b)
        hex(1, r)
        hex(2, g)
        hex(3, b)
        document.body.style.background = "#" + t[1] + o[1] + t[2] + o[2] + t[3] + o[3]
        flag--
    }

    setTimeout('disco()', 50)
}

document.getElementById('disco').addEventListener('click', (event) => {
    event.preventDefault()
    disco()
}, false)
