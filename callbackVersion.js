
function mowYard(name, callback) {
    setTimeout(() => {
        console.log(name +" mowed the yard.");
        callback();
    }, 2000);
}

function weedEat(name, callback) {    
    setTimeout(() => {
        if(Math.random() < 0.9){
            console.log(name +" ate the weeds.");
            callback();
        } else {
            console.log(name + " fell asleep after mowing the yard.");
        }
        
    }, 1500);
}

function trimHedges(name, callback){
    setTimeout(() => {
        if(Math.random() < 0.8){
            console.log(name +" trimmed the hedges.");
            callback();
        } else {
            console.log(name + " fell asleep after eating the weeds.");
        }
        
    }, 1000);
}

function collectWood(name, callback){
    setTimeout(() => {
        if(Math.random() < 0.7){
            console.log(name +" collected wood.");
            callback();
        } else {
            console.log(name + " fell asleep after trimming the hedges.");
        }
        
    }, 2500);
}

function waterGarden(name){
    setTimeout(() => {
        if(Math.random() < 0.6){
            console.log(name +" watered the garden.");
            console.log(name + " completed all of their chores!");
        } else {
            console.log(name + " fell asleep after collecting wood.");
        }
    }, 500);
}

function doSummerChores(name){

    mowYard(name, () => {
        weedEat(name, () => {
            trimHedges(name, () => {
                collectWood(name, () => {
                    waterGarden(name);
                });
            });
        });
    });

}


doSummerChores("Jane Doe");