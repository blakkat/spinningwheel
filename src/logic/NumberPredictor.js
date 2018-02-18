//Number Predictor. Predicts the next number by using a moving window and finding the mean. Initial prediction done at random within the mousedown function
export default function NumberPredictor(prediction, answerArray, predictionList, a, pred){
    let arrWind = answerArray.slice(0,-1).map(Number);
    //if we only have one answer in the array, our next prediction was set in the initial constructor as a random number so set the prediction as that otherwise, work out the prediction via the moving window.
    answerArray.length === 1 ? prediction :
    prediction = arrWind.sort(function(a, b) {
        return arrWind.filter(v => v === a).length - arrWind.filter(v => v === b).length
    }).pop() 
    
    //set the next prediction from above.
    pred.innerHTML = prediction;
    predictionList.push(prediction);
    
}
