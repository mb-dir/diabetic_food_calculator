'use strict';

window.addEventListener('DOMContentLoaded', ()=>{
    const calcolatorData = document.querySelector('.dataForm');
    const infPlace = document.querySelector('#information');

    calcolatorData.addEventListener('submit', (e)=>{
        e.preventDefault();

        const ww = parseInt(document.querySelector('#ww').value);//ww = wymiennik węglowodanowy
        const carbohydrates = parseInt(document.querySelector('#carbohydrates').value);
        const roughage = parseInt(document.querySelector('#roughage').value);

        const ammountFood = countWW(ww, carbohydrates, roughage);
        
        if(ammountFood){
            infPlace.textContent = `Możesz zjeść ${ammountFood}g tego jedzenia.`
        }else{
            infPlace.textContent = `Nie musisz liczyć tego jedzenia`
        }
    });


    function countWW(ww, carbohydrates, roughage){
        if(roughage >= carbohydrates){
            return false;
        }
        else{
            return Math.round((100 * (ww * 10)) / (carbohydrates - roughage));
        };
    }
});