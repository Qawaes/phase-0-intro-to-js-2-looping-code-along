
function countDown(num) {   
    for (let i = num; i >= 0; i--) {
        console.log(i);
    }
}
function writeCards(names, event) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return messages;
}


countDown(10);
console.log(writeCards(["Guadalupe", "Ollie", "Aki"]));

