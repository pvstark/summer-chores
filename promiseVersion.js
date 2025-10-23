
function mowYard_p(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(name + " mowed the yard.");
        }, 2000);
    })
    
}

function weedEat_p(name) {    
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() < 0.9){
                resolve(name +" ate the weeds.");
            } else {
                reject(name + " fell asleep after mowing the yard.");
            }
        
        }, 1500);
    });

}

function trimHedges_p(name){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() < 0.8){
                resolve(name +" trimmed the hedges.");
            } else {
                reject(name + " fell asleep after eating the weeds.");
            }
        
        }, 1000);
    });

}

function collectWood_p(name){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() < 0.7){
                resolve(name +" collected wood.");
            } else {
                reject(name + " fell asleep after trimming the hedges.");
            }
        
        }, 2500);
    });
    
}

function waterGarden_p(name){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() < 0.6){
                resolve(name +" watered the garden.");
            } else {
                reject(name + " fell asleep after collecting wood.");
            }
        
        }, 500);
    });
    
}

function doSummerChores_p(name){

    mowYard_p(name).then(value => {console.log(value); return weedEat_p(name)})
                 .then(value => {console.log(value); return trimHedges_p(name)})
                 .then(value => {console.log(value); return collectWood_p(name)})
                 .then(value => {console.log(value); return waterGarden_p(name)})
                 .then(value => {console.log(value); console.log(name + " finished all of their chores!");})
                 .catch(error => console.error(error));

}


document.getElementById("promise").addEventListener("click", function() {doSummerChores_p("Jane Doe");});