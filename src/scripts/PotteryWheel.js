//Define a variable to hold the value of the primary key for each piece of pottery

let primaryKey = 1

//Define and export a function that has 3 paramters and returns an object
export const makePottery = (potShape, potWeight, potHeight) => {
    let potteryObject = {
        shape: potShape,
        weight: potWeight,
        height: potHeight,
        id: primaryKey +=1
    }
    return potteryObject

}