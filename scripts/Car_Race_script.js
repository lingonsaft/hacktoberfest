$(function () {

    var anim_id;

    var container = $('#container');
    var car = $('#car');
    var car_1 = $('#car_1');
    var car_2 = $('#car_2');
    var car_3 = $('#car_3');
    var car_4 = $('#car_4');
    var car_5 = $('#car_5');
    var line_1 = $('#line_1');
    var line_2 = $('#line_2');
    var line_3 = $('#line_3');

    var restart_div = $('#restart_div');
    var restart_btn = $('#restart');
    var earned_money = $('#earned-money');
    var coverd_dist = $('#coverd-dist');

    var container_left = parseInt(container.css('left'));
    var container_width = parseInt(container.width());
    var container_height = parseInt(container.height());
    var car_width = parseInt(car.width());
    var car_height = parseInt(car.height());
    
    var game_over = false;
    
    var money_counter = 1;
    var dist_counter = 1;
    
    var speed = 3;
    var line_speed = 5;

    var move_right = false;
    var move_left = false;
    var move_up = false;
    var move_down = false;

    $(document).ready(function() {
        $("#game_audio").get(0).play();
    });
    
    $(document).on('keydown', function (e) {
        if (game_over === false) {
            var key = e.keyCode;
            if (key === 37 && move_left === false) {
                move_left = requestAnimationFrame(left);
            } else if (key === 39 && move_right === false) {
                move_right = requestAnimationFrame(right);
            } else if (key === 38 && move_up === false) {
                move_up = requestAnimationFrame(up);
            } else if (key === 40 && move_down === false) {
                move_down = requestAnimationFrame(down);
            }
        }
    });

    $(document).on('keyup', function (e) {
        if (game_over === false) {
            var key = e.keyCode;
            if (key === 37) {
                cancelAnimationFrame(move_left);
                move_left = false;
            } else if (key === 39) {
                cancelAnimationFrame(move_right);
                move_right = false;
            } else if (key === 38) {
                cancelAnimationFrame(move_up);
                move_up = false;
            } else if (key === 40) {
                cancelAnimationFrame(move_down);
                move_down = false;
            }
        }
    });

    function left() {
          if (game_over === false && parseInt(car.css('left')) > 10) {
            car.css('left', parseInt(car.css('left')) - 5);
            move_left = requestAnimationFrame(left);
        }
    }

    function right() {
        if (game_over === false && parseInt(car.css('left')) < (container_width - car_width - 10)) {
            car.css('left', parseInt(car.css('left')) + 5);
            move_right = requestAnimationFrame(right);
        }
    }
    
    function up() {
        if (game_over === false && parseInt(car.css('top')) > 8) {
            car.css('top', parseInt(car.css('top')) - 3);
            move_up = requestAnimationFrame(up);
        }
    }
    
    function down() {
        if (game_over === false && parseInt(car.css('top')) < (container_height - car_height - 8)) {
            car.css('top', parseInt(car.css('top')) + 3);
            move_down = requestAnimationFrame(down);
        }
    }

    anim_id = requestAnimationFrame(repeat);

    function repeat() {
        if(collision(car, car_1) || collision(car, car_2) || collision(car, car_3) || collision(car, car_4) || collision(car, car_5)) {
            stop_the_game();
        }

        money_counter++;

        if(money_counter % 20 == 0) {
            earned_money.text(parseInt(earned_money.text()) + 1);
        }

        if(money_counter % 100 == 0) {
            dist_counter += 50;
            coverd_dist.text(parseInt(coverd_dist.text()) + 50);
        }

        if(money_counter % 500 == 0) {
            speed++;
            line_speed++;
        }

        if(game_over === false) {
            car_down(car_1);
            car_down(car_2);
            car_down(car_3);
            car_down(car_4);
            car_down(car_5);

            line_down(line_1);
            line_down(line_2);
            line_down(line_3);

            requestAnimationFrame(repeat);
        }
    }

    function car_down(car) {
        var current_top = parseInt(car.css('top'));
        if(current_top > container_height) {
            current_top = -200;
            var car_left = parseInt(Math.random() * (container_width - car_width));
            car.css('left', car_left);
        }
        car.css('top', current_top + speed);
    }

    function line_down(line) {
        var line_current_top = parseInt(line.css('top'));
        if(line_current_top > container_height) {
            line_current_top = -300;
        }
        line.css('top', line_current_top + line_speed);
    }

    function stop_the_game() {
        game_over = true;
        cancelAnimationFrame(anim_id);
        cancelAnimationFrame(move_left);
        cancelAnimationFrame(move_right);
        cancelAnimationFrame(move_up);
        cancelAnimationFrame(move_down);
        restart_div.slideDown(); 
        restart_btn.focus();
        $("#game_audio").get(0).pause();
    }

    restart_btn.click(function() {
        location.reload();
    })

    function collision($car_a, $car_b) {
        var l_a = $car_a.offset().left;
        var t_a = $car_a.offset().top;
        var h_a = $car_a.outerHeight(true);
        var w_a = $car_a.outerWidth(true);
        var th_a = t_a + h_a;
        var lw_a = l_a + w_a;
        var l_b = $car_b.offset().left;
        var t_b = $car_b.offset().top;
        var h_b = $car_b.outerHeight(true);
        var w_b = $car_b.outerWidth(true);
        var th_b = t_b + h_b;
        var lw_b = l_b + w_b;

        if(th_a < t_b || th_b < t_a || lw_a < l_b || lw_b < l_a) return false;
        return true;
    }
});


