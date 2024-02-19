'use strict'
// 1行目に記載している 'use strict' は削除しないでください



function arigator(){
    const count = parseInt(document.getElementById("text1").value)
    console.log(count)
 
    const display=document.getElementById("wani")
    
    for(let i =0; i<count; i++){
     display.innerText +="💪"
    }
 }

 function changeText1(element) {
    element.textContent = "🛁";
}

function resetText1(element) {
    element.textContent = "サウナ";
}

function changeText2(element) {
    element.textContent = "🦾";
}

function resetText2(element) {
    element.textContent = "筋トレ";
}

function getSelectedString() {
    const selectElement = document.getElementById('stringSelect');
    const selectedText = selectElement.options[selectElement.selectedIndex].text;
    console.log(selectedText)
    if(selectedText==="初心者"){
      const hp ="https://toyotajp.sharepoint.com/sites/msteams_0f9e66"
      const answer =document.getElementById("ans")
      answer.innerText =`こんにちは、${selectedText} ,あなたには${hp}がおすすめ`
    }
}

