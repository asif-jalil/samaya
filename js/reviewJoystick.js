$(document).ready(function () {

    $(function () {
        let thumb = slider.querySelector('.home-joystick');

        thumb.onmousedown = function (event) {
            event.preventDefault(); // prevent selection start (browser action)

            let shiftY = event.clientY - thumb.getBoundingClientRect().left;


            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);

            oldTop = $(this).css("top");
            oldTop = oldTop.slice(0, -2)


            function onMouseMove(event) {

                let newTop = event.clientY - slider.getBoundingClientRect().top;

                if (newTop < 115) {
                    newTop = 115;
                }
                let buttomEdge = slider.offsetHeight - 115;
                if (newTop > buttomEdge) {
                    newTop = buttomEdge;
                }
                if (newTop + 1 > oldTop) {
                    oldTop = newTop;
                    console.log("down");
                    thumb.style.top = newTop + 'px';
                    $('#reviewArrowNext').trigger('click');
                    if ($('.home-joystick').is(":hover")) {
                        $('#reviewAutoPause').trigger('click');
                        console.log("start");
                    }

                    $('#reviewAutoPlay').trigger('click').delay(3500);
                    console.log("stop");

                } else if (newTop < oldTop - 2) {
                    oldTop = newTop;
                    console.log("up");
                    thumb.style.top = newTop + 'px';
                    $('#reviewArrowPrev').trigger('click');
                    if ($('.home-joystick').is(":hover")) {
                        $('#reviewAutoPause').trigger('click');
                        console.log("start");
                    }
                    $('#reviewAutoPlay').trigger('click').delay(3500);
                    console.log("stop");

                }

                console.log(newTop);
            }

            function onMouseUp() {
                document.removeEventListener('mouseup', onMouseUp);
                document.removeEventListener('mousemove', onMouseMove);
            }

        };

        thumb.ondragstart = function () {
            return false;
        };
    });
});
