function display(val){
    const display = document.getElementById('result');
    display.value += val;
}

function solve(){
    const display = document.getElementById('result');
    let x = eval(display.value);
    display.value = x;
}

function clr(){
    const display = document.getElementById('result');
    display.value = "";
}

function dlt(){
    const display = document.getElementById('result');
    display.value = display.value.substr(0, display.value.length - 1);
}

function x2(){
    const display = document.getElementById('result');
    display.value = display.value * display.value;
}

function root(){
    const display = document.getElementById('result');
    display.value = display.value ** 0.5;
}

function inv(){
    const display = document.getElementById('result');
    display.value = 1 / display.value;
}

function exp(){
    const display = document.getElementById('result');
    display.value = 2.718 ** display.value;
}

function abs(){
    const display = document.getElementById('result');
    if(display.value.substr(0,1)=='-'){
        display.value = display.value.substr(1, display.value.length);
    }
}

function change(){
    const display = document.getElementById('result');
    if(display.value.substr(0,1)=='-'){
        display.value = display.value.substr(1, display.value.length);
    }
    else{
        display.value = "-" + display.value;
    }
}

function x10(){
    const display = document.getElementById('result');
    display.value = 10 ** display.value;
    
}

function fact(){
    const display = document.getElementById('result');
    var num = 1;
    for(var i=1;i<=display.value;i++){
        num *= i;
    }
    display.value = num;
}

function ln() {
    const display = document.getElementById('result');
    display.value = Math.log(display.value);
}

function log(){
    const display = document.getElementById('result');
    display.value = Math.log10(display.value);
}

var memory = 0;

function memoryStore(){
    const display = document.getElementById('result');
    memory = display.value;
    clr();
}

function memoryRecall(){
    const display = document.getElementById('result');
    display.value = memory;
}

function memoryClear(){
    memory = 0;
}

function memoryAdd(){
    const display = document.getElementById('result');
    memory = parseInt(memory);
    memory  += parseInt(display.value);
    display.value = memory;
}

function memorySubtract(){
    const display = document.getElementById('result');
    memory = parseInt(memory);
    memory  -= parseInt(display.value);
    display.value = memory;
}

var key = ['1','2','3','4','5','6','7','8','9','0','+','-','*','/','%',')','('];

function checkPressedKey(e)
{
    let val = e.key
    for(let i=0; i<key.length; i++)
    {
        if(key[i]==val)
        {
            return true;
        }
        else if("Enter"==val){
            solve();
        }
    }
    return false;
}
