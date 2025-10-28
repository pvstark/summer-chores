
function mowYard_aa(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(name + " mowed the yard.");
        }, 2000);
    })
    
}

function weedEat_aa(name) {    
    
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

function trimHedges_aa(name){

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

function collectWood_aa(name){

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

function waterGarden_aa(name){
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

async function doSummerChores_aa(name){

    try {
        const mowYard_aa_result = await mowYard_aa(name);
        console.log(mowYard_aa_result);

        const weedEat_aa_result = await weedEat_aa(name);
        console.log(weedEat_aa_result);

        const trimHedges_aa_result = await trimHedges_aa(name);
        console.log(trimHedges_aa_result);

        const collectWood_aa_result = await collectWood_aa(name);
        console.log(collectWood_aa_result);

        const waterGarden_aa_result = await waterGarden_aa(name);
        console.log(waterGarden_aa_result);

        console.log(name + " finished all of their chores!");
    }
    catch(error){
        console.error(error);
    }
    
}


document.getElementById("asyncawait").addEventListener("click", function() {doSummerChores_aa("Jane Doe");});