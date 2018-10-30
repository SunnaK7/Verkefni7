const GAMES_TO_PLAY = 10;

function start() {
  alert("Markmiðið er að svara eins mörgum af 10 dæmum rétt eins hratt og mögulegt er.");
  do{
      play();
  }
  while
    (confirm("Spila annan leik?"));
}

function play() {
        let a = new Date();
        let righty = 0;
        let all = 0;
        let bop;
    do{
        bop = ask();

    if( bop === true ){
        righty++;
    }
    if( bop === null){
        alert("Þú hættir í leiknum.");
        return;
    }
        all++;
    }
    while(GAMES_TO_PLAY > all);
        let b = new Date();
        let time = (b-a) / 1000;
        let average = time/righty;
    alert(`Þú svaraðir ${righty} af ${GAMES_TO_PLAY} rétt á ${time.toFixed(2)} sekúndum \n Meðalrétt svör á sekúndu eru ${average.toFixed(2)}`);
}   

function ask() {
        let questiones = question();
        let answer = prompt(questiones.question,);
    if(questiones.answer === parseInt(answer)){
        return true;
    }
    else if (answer === null){
        return null;
    }
    return false;
}

function question(){
    let question = `Hvað er `;
    let answer = 0;
    let x = 0;
    let y = 0;
    const type = randomNumber(1,4);
    switch(type){
        case 1:
            x = randomNumber(1,10);
            y = randomNumber(1,10);
            question += `${x} * ${y}`;
            answer = x*y;
        break;

        case 2:
            x = randomNumber(2,10);
            y = (x * randomNumber(2,10));
            question += `${y} / ${x}`;
            answer = y/x;
        break;

        case 3:
            x = randomNumber(1,100);
            y = randomNumber(1,100);
            question += `${x} - ${y}`;
            answer = x-y;
        break;

        case 4:
            x = randomNumber(1,100);
            y = randomNumber(1,100);
            question += `${x} + ${y}`;
            answer = x+y;
        break;

    }
    return {question, answer};
}
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

start();