let bracket = true;
const synth = window.SpeechSynthesis;

function key(key) {
    let text;

    if (key != 'AC' && key != '=' && key != '()'){
        text = new SpeechSynthesisUtterance(key)
    document.getElementById('result').innerText += key;
    }
    else if (key == 'AC') {
        document.getElementById('result').innerText = null;
    }
    else if (key =='()') {
        if (bracket==false) {
            document.getElementById('result').innerText += ')';
            bracket = true;
        }
        else {
            document.getElementById('result').innerText += '(';
            bracket = false;
        }
    }
    else{
        document.getElementById('result').innerText = eval(document.getElementById('result').innerText);
        text = new SpeechSynthesisUtterance(eval(document.getElementById('result').innerText));
    }
    synth.speak(text);
}


