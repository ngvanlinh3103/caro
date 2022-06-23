<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Game Caro</title>

    <link rel="stylesheet" href="caro.css">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
</head>
<body>

    <div class="body">

        <!-- title -->
        <div class="container title">
            <div class="time">
                <p>
                    <span id="seconds">00</span>:<span id="tens">00</span>
                </p>

                <button value="back" class="back" onclick="back()">back</button>
                <div class="div_save">
                    <input type="text" id="txt_save" class="txt_save">
                    <button id="save" class="save" >save</button>
                </div>
                <div class="div_load">
                    <select class="select" id="select">

                    </select>

                    <button id="load" class="load">load</button>
                </div>
                <button id="tim">tên</button>
            </div>
            <h1 class="title-game">game for fun</h1>
            <div id="showerror"></div>
        </div>

        <!--main-->
        <div class="container main">

        </div>
    </div>

    <script type="text/javascript" src="caro.js"></script>
</body>
</html>