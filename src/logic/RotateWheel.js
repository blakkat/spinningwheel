//Rotates Wheel. Only works in chrome. If not chrome, spin doesn't happen but other functionality should work.
export default function RotateWheel(difference, el) {
    try {         
        el.animate([{
            transform: 'rotate(0deg)'
        }, {
            transform: 'rotate(-' + difference + 'deg)'
        }], {
            duration: 1000,
            iterations: 1,
            easing: 'ease-out'
        });
    } catch (e) {
        document.getElementsByClassName("error")[0].innerHTML = "Your browser doesn't support animate(). No fun spining for you! Try Chrome ;)"
    }
    
    //change the style to stay at the last rotated state of the animation otherwise it will reset. This should occur even if the above animation doesn't work in a browser. 
    el.style.transform = "rotate(-" + difference + "deg)";
    
}