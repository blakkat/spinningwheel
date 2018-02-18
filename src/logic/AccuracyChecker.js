//Checks the Accuracy of the predictions
export default function AccuracyChecker(currentAnswer, acc, predictionList, answerArray, accuracy){
    //Here I check whether the currentAnswer and prediciton are the same and push a 1 for yes and 0 for no
    Number(answerArray.slice(0, answerArray.length).pop()) === predictionList[predictionList.length - 2] ? accuracy.push(1) : accuracy.push(0);
    
    //finally I work out the accuracy percentage and display it on the page
    var accuracyTotal = accuracy.reduce((a, b) =>  a + b)
    var accuracyPercentage = (accuracyTotal / accuracy.length) * 100;
     setTimeout(function() {
       acc.innerHTML = Math.round(accuracyPercentage) + "%";
    }, 1000);

}
