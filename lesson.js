const body=document.body;
body.append("Hello World Elijah")

const div= document.createElement("div")
div.innerText= 'Hello Word 2';
div.textContent='Hello word 3'

body.appendChild(div)

const strong=document.createElement('')
strong.innerHTML="how are you today"
div.appendChild(strong)