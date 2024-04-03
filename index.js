// Code your solutions in this file




  


function writeCards(namesArray, event){
    let messages = []
    for(let i =0; i < namesArray.length; i++){
        messages.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
    }
    return messages
    
}

function countDown(number){
    while(number > 0 ){
        console.log(number);
        number -= 1
    }
    console.log(number)
}
