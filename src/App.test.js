import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


//I need to write more unit tests. I know this but still trying to get my head around jest so this will keep changing as I learn more.

test('expect 10 list items', () => {
    document.addEventListener("DOMContentLoaded", function(event) {
        expect(document.getElementsByTagName('li').length).toBe(10);});
});

test('expect numbers within the li span to match the numbers in data-value', () =>{
    document.addEventListener("DOMContentLoaded", function(event) {
        for (i=0; i <= document.getElementsByTagName('li').length; i++ ) {
            
            const dataValue = document.getElementsByTagName('li')[i].getAttribute('data-value');
            const spanValue = document.getElementsByTagName('li')[i].childNodes[0];
            expect(dataValue).toEqual(spanValue)
        }
    })
})

test ('expect a prediction on load between 1 and 10', () => {
     document.addEventListener("DOMContentLoaded", function(event) {
        const predict = document.getElementsByClassName('predict')[0];
        expect(predict.innerHTML).toBeGreaterThan(0);
        expect(predict.innerHTML).toBeLessThan(11);
    })
})
