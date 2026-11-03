
//id generator
let id = 0;
export const generateId = () => {
    return id++;
}

export const isARecordBetterThanB=(recordA, recordB) =>{

    return recordA?.accumulatedPoints >= recordB.accumulatedPoints;
}