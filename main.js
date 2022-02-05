const example1 = [
    {
    "category":"Red",
    "source1":20,
    "source2":30,
    "source3":40,
    "source4":50
    },
    {
    "category":"Yellow",
    "source1":30,
    "source2":10,
    "source3":40,
    "source4":50
    }
]

const example2 = [
    {
    "category":"cat1",
    "src1":20,
    "src2":30,
    "src3":40,
    "src4":50,
    "src5":50
    },
    {
    "category":"cat1",
    "src1":10,
    "src2":0,
    "src3":20,
    "src4":20,
    "src5":100
    }
]

// Array ranking function
const rankings = (arr) => {
    const sorted = [...arr].sort((a, b) => b - a);
    return arr.map((x) => sorted.indexOf(x) + 1);
}


const businessRulesCalculator = (input) => {

    //Initialise output using spread operator on input
    const output = [...input];
    const totalValueArray = [];

    //Loop through array of objects
    for (let i=0; i < output.length; i++) {

        //Initialise empty array to hold values within each object
        const valuesArray = []
        let count = 0;

        //Loop over current object
        for (let key in output[i]) {

            // Push the object values into the empty array created 
            valuesArray.push(output[i][key])

        }


        // Remove the first item from the values array (leaving an array of scores)
        valuesArray.shift()

        // Sum of current values array
        const valuesTotal = valuesArray.reduce((acc, curr) => acc + curr)

        // Push sum into array for later for ranking
        totalValueArray.push(valuesTotal)
        
        // Rank values in the values array
        const rankArray = rankings(valuesArray)


        // Loop through current object
        for (let key in output[i]) {

            // Reassign object property with ranked values
            if (key !== 'category') {
                output[i][key] = rankArray[count-1]
            }

            // Add 1 to keep track of rankArray index
            count++
        }
    }

    // Rank values in the total values array
    const totalValueRankingArray = rankings(totalValueArray)

    // Push the final rank into each object
    for (let i=0; i < output.length; i++) {
        output[i].final_rank = totalValueRankingArray[i]
    }

    // Make sure output is formatted correctly
    const JSONoutput = JSON.stringify(output)

    // Return output JSON
    console.log(JSONoutput)
    return JSONoutput
}

businessRulesCalculator(example1)
businessRulesCalculator(example2)