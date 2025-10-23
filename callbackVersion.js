
function mowYard_cb(name, callback) {
    setTimeout(() => {
        console.log(name +" mowed the yard.");
        callback();
    }, 2000);
}

function weedEat_cb(name, callback) {    
    setTimeout(() => {
        if(Math.random() < 0.9){
            console.log(name +" ate the weeds.");
            callback();
        } else {
            console.error(name + " fell asleep after mowing the yard.");
        }
        
    }, 1500);
}

function trimHedges_cb(name, callback){
    setTimeout(() => {
        if(Math.random() < 0.8){
            console.log(name +" trimmed the hedges.");
            callback();
        } else {
            console.error(name + " fell asleep after eating the weeds.");
        }
        
    }, 1000);
}

function collectWood_cb(name, callback){
    setTimeout(() => {
        if(Math.random() < 0.7){
            console.log(name +" collected wood.");
            callback();
        } else {
            console.error(name + " fell asleep after trimming the hedges.");
        }
        
    }, 2500);
}

function waterGarden_cb(name){
    setTimeout(() => {
        if(Math.random() < 0.6){
            console.log(name +" watered the garden.");
            console.log(name + " completed all of their chores!");
        } else {
            console.error(name + " fell asleep after collecting wood.");
        }
    }, 500);
}

function doSummerChores_cb(name){

    mowYard_cb(name, () => {
        weedEat_cb(name, () => {
            trimHedges_cb(name, () => {
                collectWood_cb(name, () => {
                    waterGarden_cb(name);
                });
            });
        });
    });

}

document.getElementById("callback").addEventListener("click", function() {doSummerChores_cb("Jane Doe");});