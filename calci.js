console.log("script is running");
let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue="";
screen.value = screenValue;
for(item of buttons){
    item.addEventListener('click',(e)=>{
        let buttonText = e.target.innerText;
        console.log('Button text is : ', buttonText);
         if(buttonText =='×')
         {
            buttonText = '*';
            screenValue += buttonText; 
            screen.value = screenValue; 
        }
        else if(buttonText == 'C'){
            screenValue = "";
            screen.value = screenValue;

        }
        else if(buttonText == '='){
            screen.value = eval(screenValue);
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue; 
        }
    })
}