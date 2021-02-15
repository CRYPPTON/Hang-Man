var elements = document.getElementsByClassName("letter");
var i;
var j;
var array_word = ["Banana", "fruit", "TV", "Canada", "Serbia", "Faculty of Law"];
var number_word = random_n();
var current_letter = "";
var word = "";
var elm = "" /// paragraph, letter of word
var missed = 0;
var c = document.getElementById("myCanvas_game");
var ctx = c.getContext("2d");
var gameOver = false;

for ( i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click',getLetter,false)
}

function Line(x_0,y_0,x_1,y_1){
    this.x_0 = x_0;
    this.y_0 = y_0;
    this.x_1 = x_1;
    this.y_1 = y_1
}

Line.prototype.draw = function(){
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(this.x_0, this.y_0);
    ctx.lineTo(this.x_1, this.y_1);
    ctx.stroke();
}

hanger()

word = array_word[number_word];
for (j = 0; j < word.length; j++) {
    elm =document.createElement("p");
    elm.className = "letter_p";
    elm.innerHTML = "";
    if(word[j]==" ") elm.style.borderBottom = "none";
    document.getElementById("word_div").appendChild(elm);
}

function getLetter(){
    current_letter  = this.innerHTML;
    this.style.background = "red"
    this.style.color = "white"
    mainHangMan(this)
 
};

function random_n(){
    var rand_num =  Math.floor(Math.random() * array_word.length) + 0;
    return rand_num
}

function mainHangMan(letter_field){  
    console.log(gameOver)
    if(gameOver){
        for ( i = 0; i < elements.length; i++) {
            elements[i].removeEventListener('click',getLetter,false)
        }
        return;
    } 
    var check_miss;
    word = array_word[number_word];
    for ( i = 0; i < word.length; i++) {
        elm =document.getElementsByClassName("letter_p"); 
        if(word[i].toUpperCase()==current_letter){
            check_miss = word[i].toUpperCase();
            elm[i].innerHTML = word[i];
            letter_field.style.background = "green"
            letter_field.style.color = "white"
        }
    }
    if(check_miss!==current_letter){
        console.log(++missed)
        switch (missed) {
            case 1:
                drawHead()
                break;
            case 2:
                drawBody()
                 break;
             case 3:
                drawLeftHand()
                break;
            case 4:
                drawRightHand()
                break;
            case 5:
                drawRightLeg()
                break;
            case 6:
                drawLeftLeg()
                break;
            default:
                break;
        }
        letter_field.removeEventListener('click',getLetter)
    } 
    
}


function drawHead(){
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(155, 130, 50, 0, 2 * Math.PI);
    ctx.stroke();
}

function drawBody(){
    ctx.lineWidth = 5;
    var line = new Line(155,180,155,350)
    line.draw()
}

function drawLeftHand(){
    ctx.lineWidth = 5;
    var line = new Line(155,220,50,170)
    line.draw()
}

function drawRightHand(){
    ctx.lineWidth = 5;
    var line = new Line(155,220,250,170)
    line.draw()
}

function drawRightLeg(){
    ctx.lineWidth = 5;
    var line = new Line(155,345,80,410)
    line.draw()
}

function drawLeftLeg(){
    ctx.lineWidth = 5;
    var line = new Line(155,345,220,418)
    line.draw()
    gameOver = true;
    document.getElementById("title").innerHTML = "GAME OVER"
}

    function hanger(){
        var h_line_1 = new Line(100,450,350,450)
        var v_line_1 = new Line(300,450,300,50)
        var h_line_2 = new Line(150,50,305,50)
        var v_line_2 = new Line(155,50,155,80)

        v_line_2.draw();
        h_line_2.draw();
        v_line_1.draw();
        h_line_1.draw();
    }

console.log(word)


//ubaciti brojač i kraj igre ako predje broj
// pravo na pokusaj u odnosu na duzinu reci logika
//u kancasu prikazati cica glisu igra cista