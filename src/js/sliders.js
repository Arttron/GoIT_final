/**
 * Created by User on 09.08.2017.
 */
(function(){
    document.addEventListener('DOMContentLoaded', () => {
        const slider = document.querySelector('.js_slider');
        lory(slider, {
            // options going here
            infinite: 1
        });
        const slider2 = document.querySelector('.js_slider-two');
        lory(slider2, {
            // options going here
            infinite: 1
        });
        const slider1 = document.querySelector('.js_slider-one');
        lory(slider1, {
            // options going here
            infinite: 1
        });
    });

})();
