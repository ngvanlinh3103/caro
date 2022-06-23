var main_game = document.getElementsByClassName('main');
var html_main = "";
var n = 50;
var click = 0;
var gt = 0;

//draw cell
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        html_main += '<div class="cell" id="id_' + i + '_' + j + '" value="' + i + ',' + j + ',' + gt + '" onclick="check(' + i + ',' + j + ')" ></div>';
    }
    html_main += '</br>';
}
main_game[0].innerHTML = html_main;

//check person
function check_preson(click) {
    if (click % 2 == 0) {
        return 2;
    } else return 1;
}

//event click
var chuoi = [];

function check(x, y) {
    if (document.getElementById("id_" + x + "_" + y).innerText == '') {
        gt = check_preson(click);
        if (gt == 1) {
            document.getElementById("id_" + x + "_" + y).innerText = 'x';
            document.getElementById("id_" + x + "_" + y).classList.add('cell1');
        } else {
            document.getElementById("id_" + x + "_" + y).innerText = 'o';
            document.getElementById("id_" + x + "_" + y).classList.add('cell2');
        }
        document.getElementById("id_" + x + "_" + y).setAttribute("value", x + "," + y + "," + gt);
        click++;

        chuoi.push({x, y, gt});

        //chuoi.push({x, y, click});

    }
    console.log(chuoi);
    check_win_x(x, y);
}

//khai bao de quy
var check_win_per = 1;
var check_win_column = 1;
var cheo_trai = 1;
var cheo_phai = 1;
let val_back, val_next;

//ngang
function check_de_quy_left(per, x, y, val_check, val) {
    if (val_check === val && check_win_per < 5) {
        if (val_check === per) check_win_per++;
        val_back = document.getElementById("id_" + x + "_" + (y - 1)) != null ? document.getElementById("id_" + x + "_" + (y - 1)).innerText : "";
        check_de_quy_left(per, x, y - 1, val_check, val_back);
    }
}

function check_de_quy_right(per, x, y, val_check, val) {
    if (val_check === val && check_win_per < 5) {
        if (val_check === per) check_win_per++;
        val_next = document.getElementById("id_" + x + "_" + (y + 1)) != null ? document.getElementById("id_" + x + "_" + (y + 1)).innerText : "";
        check_de_quy_right(per, x, y + 1, val_check, val_next);
    }
}

//doc
function check_de_quy_top(per, x, y, val_check, val) {
    if (val_check === val && check_win_column < 5) {
        if (val_check === per) check_win_column++;
        val_back = document.getElementById("id_" + (x - 1) + "_" + y) != null ? document.getElementById("id_" + (x - 1) + "_" + y).innerText : "";
        check_de_quy_top(per, x - 1, y, val_check, val_back);
    }
}

function check_de_quy_bot(per, x, y, val_check, val) {
    if (val_check === val && check_win_column < 5) {
        if (val_check === per) check_win_column++;
        val_next = document.getElementById("id_" + (x + 1) + "_" + y) != null ? document.getElementById("id_" + (x + 1) + "_" + y).innerText : "";
        check_de_quy_bot(per, x + 1, y, val_check, val_next);
    }
}

//cheo phai
function check_de_quy_top_left(per, x, y, val_check, val) {
    if (val_check === val && cheo_phai < 5) {
        if (val_check === per) cheo_phai++;
        val_back = document.getElementById("id_" + (x - 1) + "_" + (y - 1)) != null ? document.getElementById("id_" + (x - 1) + "_" + (y - 1)).innerText : "";
        check_de_quy_top_left(per, x - 1, y - 1, val_check, val_back);
    }
}

function check_de_quy_bot_right(per, x, y, val_check, val) {
    if (val_check === val && cheo_phai < 5) {
        if (val_check === per) cheo_phai++;
        val_next = document.getElementById("id_" + (x + 1) + "_" + (y + 1)) != null ? document.getElementById("id_" + (x + 1) + "_" + (y + 1)).innerText : "";
        check_de_quy_bot_right(per, x + 1, y + 1, val_check, val_next);
    }
}

//cheo trai
function check_de_quy_top_right(per, x, y, val_check, val) {
    if (val_check === val && cheo_trai < 5) {
        if (val_check === per) cheo_trai++;
        val_back = document.getElementById("id_" + (x - 1) + "_" + (y + 1)) != null ? document.getElementById("id_" + (x - 1) + "_" + (y + 1)).innerText : "";
        check_de_quy_top_right(per, x - 1, y + 1, val_check, val_back);
    }
}

function check_de_quy_bot_left(per, x, y, val_check, val) {
    if (val_check === val && cheo_trai < 5) {
        if (val_check === per) cheo_trai++;
        val_next = document.getElementById("id_" + (x + 1) + "_" + (y - 1)) != null ? document.getElementById("id_" + (x + 1) + "_" + (y - 1)).innerText : "";
        check_de_quy_bot_left(per, x + 1, y - 1, val_check, val_next);
    }
}

// check win
function check_win_x(x, y) {

    let check_win = false;
    let y_click = y;
    let x_click = x;
    let text_click = document.getElementById("id_" + x_click + "_" + y_click).innerText;

//ngang
    let text_back = document.getElementById("id_" + x_click + "_" + (y - 1)) != null ? document.getElementById("id_" + x_click + "_" + (y - 1)).innerText : "";
    let text_next = document.getElementById("id_" + x_click + "_" + (y + 1)) != null ? document.getElementById("id_" + x_click + "_" + (y + 1)).innerText : "";

    //check X
    check_de_quy_left('X', x_click, (y - 1), text_click, text_back);
    check_de_quy_right('X', x_click, (y + 1), text_click, text_next);

    //check Y
    check_de_quy_left('O', x_click, (y - 1), text_click, text_back);
    check_de_quy_right('O', x_click, (y + 1), text_click, text_next);

//doc
    let text_top = document.getElementById("id_" + (x - 1) + "_" + y_click) != null ? document.getElementById("id_" + (x - 1) + "_" + y_click).innerText : "";
    let text_bot = document.getElementById("id_" + (x + 1) + "_" + y_click) != null ? document.getElementById("id_" + (x + 1) + "_" + y_click).innerText : "";

    //check X
    check_de_quy_top('X', (x - 1), y_click, text_click, text_top);
    check_de_quy_bot('X', (x + 1), y_click, text_click, text_bot);

    //check Y
    check_de_quy_top('O', (x - 1), y_click, text_click, text_top);
    check_de_quy_bot('O', (x + 1), y_click, text_click, text_bot);

//cheo phai
    let text_top_left = document.getElementById("id_" + (x - 1) + "_" + (y - 1)) != null ? document.getElementById("id_" + (x - 1) + "_" + (y - 1)).innerText : "";
    let text_bot_right = document.getElementById("id_" + (x + 1) + "_" + (y + 1)) != null ? document.getElementById("id_" + (x + 1) + "_" + (y + 1)).innerText : "";

    //check X
    check_de_quy_top_left('X', (x - 1), (y - 1), text_click, text_top_left);
    check_de_quy_bot_right('X', (x + 1), (y + 1), text_click, text_bot_right);

    //check Y
    check_de_quy_top_left('O', (x - 1), (y - 1), text_click, text_top_left);
    check_de_quy_bot_right('O', (x + 1), (y + 1), text_click, text_bot_right);

//cheo trai
    let text_top_right = document.getElementById("id_" + (x - 1) + "_" + (y + 1)) != null ? document.getElementById("id_" + (x - 1) + "_" + (y + 1)).innerText : "";
    let text_bot_left = document.getElementById("id_" + (x + 1) + "_" + (y - 1)) != null ? document.getElementById("id_" + (x + 1) + "_" + (y - 1)).innerText : "";

    //check X
    check_de_quy_top_right('X', (x - 1), y + 1, text_click, text_top_right);
    check_de_quy_bot_left('X', (x + 1), y - 1, text_click, text_bot_left);

    //check Y
    check_de_quy_top_right('O', (x - 1), y + 1, text_click, text_top_right);
    check_de_quy_bot_left('O', (x + 1), y - 1, text_click, text_bot_left);

    if (check_win_column >= 5 || check_win_per >= 5 || cheo_phai >= 5 || cheo_trai >= 5) {
        check_win = true;
        check_win_column = 1;
        check_win_per = 1;
        cheo_phai = 1;
        cheo_trai = 1;
    } else {
        check_win_column = 1;
        check_win_per = 1;
        cheo_phai = 1;
        cheo_trai = 1;
        check_win = false;
    }

    setTimeout(function () {
        if (check_win) {
            if (confirm('Chúc mừng win rồi. Bạn muốn chơi lai ko?')) {
                location.reload();
            }
        }
    }, 200);

}

//back
var last = [];

function back() {
    last = chuoi[chuoi.length - 1];
    //console.log(last);
    if (document.getElementById("id_" + last.x + "_" + last.y).innerText != '') {
        document.getElementById("id_" + last.x + "_" + last.y).innerText = "";
        document.getElementById("id_" + last.x + "_" + last.y).setAttribute("value", last.x + "," + last.y + ",0");
        click--;
        chuoi.pop();
    }

}

//save
$('#save').click(function () {
    $.ajax({
        url: 'caroDB.php',
        type: 'post',
        dataType: 'json',
        data: {
            'x': chuoi
        },
        success: function (result) {

        }
    });
});

//load
$('#load').click(function () {
    $.ajax({
        url: 'load.php',
        type: 'get',
        dataType: 'json',
        success: function (result) {
            //console.log(result);
            for (let i = 0; i < result.length; i++) {
                document.getElementById("id_" + result[i].x + "_" + result[i].y).setAttribute("value", result[i].x + "," + result[i].y + "," + result[i].z);
                //console.log(result[i].x+' '+result[i].y+' '+result[i].z);
                if (result[i].z == 1) {
                    document.getElementById("id_" + result[i].x + "_" + result[i].y).innerText = 'x';
                    document.getElementById("id_" + result[i].x + "_" + result[i].y).classList.add('cell1');
                }
                else if (result[i].z == 2) {
                    document.getElementById("id_" + result[i].x + "_" + result[i].y).innerText = 'o';
                    document.getElementById("id_" + result[i].x + "_" + result[i].y).classList.add('cell2');
                }
            }
        },
        error: function (msg) {
            console.log(msg);
        }
    });
});