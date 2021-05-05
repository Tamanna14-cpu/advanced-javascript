function stopWatch (){
    let count = 0;
    return function (){
        count ++;
        return count;
    }
}

const clock1 = stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2 = stopWatch();
console.log(clock2());
console.log(clock2());
console.log(clock1());
console.log(clock2());


// kono akta functioner vitor jodi arekta function thake oi 2nd function ba vitorer functiontak jodi amra return kori taile akta closed environment toiri kore abong se nije akta external variabler reference rekhe dey aitai clouser.
// uporer functiontar vitore arekta function return korce & pore jokhon alada alada variabler nam diye oi functiontak call kora hoy tkhn function abr prothom theke kaj kora suru kore. & protita alada namer functionk jekhanei call kora hok na kno se tar sequence bojay rakhe.