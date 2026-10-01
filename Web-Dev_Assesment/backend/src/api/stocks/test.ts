import {getStockData} from "./service";

(async () => {
    try{
        const data = await getStockData("TSLA");
        console.log("Result: ", data);

        if(!Array.isArray(data)) {
            throw new Error("Result is not an array");
        }

        if(!data[0].date || !data[0].lowAverage || !data[0].highAverage){
            throw new Error("Missing expected fields");
        }

        console.log("Test Passed");
    }
    catch(err){
        console.error("Test Failed: " + err);
    }
})();