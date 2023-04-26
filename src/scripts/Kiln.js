//Define and export function that accepts 2 paramenters
export const firePottery = (potteryObject, firingTemp) => {
    //add a new property to the potteryObject called "fired" with a boolean value
    potteryObject.fired = true;
    //add a new property to the potteryObject called "cracked"
    //if else conditional to determine value of this new property temp is > 2200, cracked = true. if temp <= 2200
    if(firingTemp > 2200) {
        potteryObject.cracked = true;
    }
    else {
        potteryObject.cracked = false
    }
    return potteryObject
}