console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

//printOdds(-100);
printOdds(100);

function printOdds (count){

    if(count < 0){

        for (let i = count; i < 0; i++){

            if (i % 2 != 0){
    
                console.log(i);
            }
        }
    }
    
    for (let i = 0; i < count; i++){

        if (i % 2 != 0){

            console.log(i);
        }
    }

}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

checkAge("Fread", 16);
checkAge();

function checkAge (userName, age){
    
    if(userName == undefined){

        console.log("No name defined");
    }
    else{

        if(age >= 16){

        console.log(`Congrats ${userName}, you can drive!`);
        }
        else{

            console.log(`Sorry ${userName}, but you need to wait until you're 16.`);
        }

    }

    
}

console.log("EXERCISE 3:\n==========\n");

whichQuadrant(0,0);
whichQuadrant(0,1);
whichQuadrant(1,0);
whichQuadrant(1,1);
whichQuadrant(1,-1);
whichQuadrant(-1,-1);
whichQuadrant(-1,1);

function whichQuadrant (x, y){

    if(x == 0 && y == 0){

        console.log(`(${x}, ${y}) is at oragin`);
    }
    else if(x == 0 && y != 0){

        console.log(`(${x}, ${y}) is on the y axis`);
    }
    else if(x != 0 && y == 0){

        console.log(`(${x}, ${y}) is on the x axis`);
    }
    else if(x > 0 && y > 0){

        console.log(`(${x}, ${y}) is in Quadrant 1`);
    }
    else if(x > 0 && y < 0){

        console.log(`(${x}, ${y}) is in Quadrant 2`);
    }
    else if(x < 0 && y < 0){

        console.log(`(${x}, ${y}) is in Quadrant 3`);
    }
    else if(x < 0 && y > 0){

        console.log(`(${x}, ${y}) is in Quadrant 4`);
    }
    
}

console.log("EXERCISE 4:\n==========\n");

//equilateral: all side lengths equal 
//isosceles: only two side lengths equal
//scalene: all different side lengths

function isValidTriangle(a, b, c){

    if(a + b > c && a + c > b && b + c > a){

        return true;
    }
    else {

        return false;
    }
}

typeOfTriangle(1, 1, 1);
typeOfTriangle(1, 1, 2);
typeOfTriangle(1, 2, 3);

function typeOfTriangle (a, b, c){

    if(isValidTriangle){

        if(a == b && b == c){
        
            console.log(`Sides ${a}, ${b}, ${c} make an equilateral triangle`)
        }
        else if (a == b || b == c || a == c){

            console.log(`Sides ${a}, ${b}, ${c} make an isosceles triangle`)
        }
        else {

            console.log(`Sides ${a}, ${b}, ${c} make an scalene triangle`)
        }

    }
    else{

        confirm.log("Not a valid Triangle");
    }

    

    
}

console.log("EXERCISE 5:\n==========\n");

/*
    15 days used, 15 days remaining
    Average daily use: 3.333 GB/day
    You are EXCEEDING your average daily use (3.73 GB/day),
    continuing this high usage, you'll exceed your data plan by 11.9 GB.
    To stay below your data plan, use no more than 2.93 GB/day.
*/

dataUsageFeedback(100.0, 15.0, 56.0); //High
dataUsageFeedback(50, 15, 25); //Exact
dataUsageFeedback(50, 15, 24); // Low

function dataUsageFeedback(planLimit, day, usage){

    let dataLeft = planLimit - usage;
    let daysLeft = 30.00 - day;

    let plainAverage = planLimit / 30.00;
    let averageUse = usage / day;

    console.log(`${day} days used, ${daysLeft} days remaining`);
    console.log(`Average daily use: ${plainAverage.toFixed(2)} GB/day`);

    if(averageUse > plainAverage){

        console.log(`You are EXCEEDING your average daily use (${averageUse.toFixed(2)} GB/day),`)
        console.log(`continuing this high usage, you'll exceed your data plan by ${(averageUse * daysLeft) - dataLeft} GB.`);
        console.log(`To stay below your data plan, use no more than ${(dataLeft / daysLeft).toFixed(2)} GB/day.`);
    }
    else if(averageUse < plainAverage){

        console.log(`You are UNDER your average daily use (${plainAverage.toFixed(2)} GB/day),`)
        console.log(`continuing this low usage, you'll have ${dataLeft - (averageUse * daysLeft)} GB data after your 30 days.`);
    }
    else{

        console.log(`You are EXACTLY on average daily use (${plainAverage.toFixed(2)} GB/day),`)
    }

}
