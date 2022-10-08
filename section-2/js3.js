// Question
// Given a object data, return the data multiple by 3 and sort the data.
// Expected output : { j: 0, k: 9, i: 18, l: 36 }

const data = { i: 6, j: null, k: 3, l: 12 };

function result(data) {
    const sorted = Object.entries(data).sort(([,a],[,b])=>{
        return a-b
    }).map(([key,value])=>{
        return {[key]:value*3}
    })
    return sorted
}

console.log(result(data))