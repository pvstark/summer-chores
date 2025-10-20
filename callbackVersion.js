
function mowYard(name, callback) {
    setTimeout(() => {
        console.log(name +" mowed the yard.");
        callback();
    }, 2000);
}

function weedEat(name, callback) {    
        setTimeout(() => {
        console.log(name +" ate the weeds.");
        callback();
    }, 1500);
}

function trimHedges(name, callback){
        setTimeout(() => {
        console.log(name +" trimmed the hedges.");
        callback();
    }, 1000);
}

function collectWood(name, callback){
        setTimeout(() => {
        console.log(name +" collected wood.");
        callback();
    }, 2500);
}

function waterGarden(name){
    setTimeout(() => {
        console.log(name +" watered the garden.");
        console.log(name + " finished all of their chores!");
    }, 500);
}

function doSummerChores(name){

    //caffeine value of 16500 means that there is a 2/3 chance of completing all of the chores
    //caffeine value is subtracted by the time in milliseconds it takes to complete each task after mowing the lawn
    let caffeine = Math.floor((Math.random() * 16500))

    mowYard(name, () => {
        caffeine -= 1500;
        if(caffeine > 0){
            weedEat(name, () => {
                caffeine -= 1000;
                if(caffeine > 0){
                    trimHedges(name, () => {
                        caffeine -= 2500;
                        if(caffeine > 0){
                            collectWood(name, () => {
                                caffeine -= 500;
                                if(caffeine > 0){
                                waterGarden(name);
                                } else {
                                    console.log(name + " fell asleep after collecting wood.");
                                }
                            })
                        } else {
                            console.log(name + " fell asleep after trimming the hedges.");
                        }
                    })
                } else {
                    console.log(name + " fell asleep after eating the weeds.");
                }
            })
        } else {
            console.log(name + " fell asleep after mowing the yard.");
        }
    })

}

doSummerChores("Jane Doe");