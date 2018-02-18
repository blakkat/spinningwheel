//Detects current answer based on position of wheel
export default function CurrentAnswerDetector(difference, currentAnswer, selectedList, answerArray){  
    const ans = document.getElementsByClassName("prevans")[0];
    let rotations = Math.floor(difference / 360);
    let angle = difference - (360 * rotations);
    let answerLocation = Math.ceil(angle / 36);
    
    currentAnswer = selectedList[answerLocation - 1].getAttribute("data-value");  
    answerArray.push(currentAnswer);
    setTimeout(() => ans.innerHTML = answerArray, 1000);
    answerArray = answerArray.filter(n =>  n !== 0 ); 
}  
