const borda = document.getElementById('borda')
const inputs = document.querySelectorAll('input[type = "range"]')
const valoresTxt = document.getElementById('valoresTxt')

valoresTxt.style.width = `400px`

for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = Math.floor(Math.random() * 501);
}
  
const [topLeft, topRight, bottomRight, bottomLeft, midTopLeft, midTopRight, midBottomRight, midBottomLeft] = inputs;
borda.style.borderRadius = `${topLeft.value}px ${topRight.value}px ${bottomRight.value}px ${bottomLeft.value}px / ${midTopLeft.value}px ${midTopRight.value}px ${midBottomRight.value}px ${midBottomLeft.value}px`;
valoresTxt.innerHTML = `${topLeft.value}px ${topRight.value}px ${bottomRight.value}px ${bottomLeft.value}px / ${midTopLeft.value}px ${midTopRight.value}px ${midBottomRight.value}px ${midBottomLeft.value}px`;
  
function AtualizaBorda(){
    const topLeft = document.getElementById('topLeft').value;//a     
    const topRight = document.getElementById('topRight').value;//b
    const bottomRight = document.getElementById('bottomRight').value;//c
    const bottomLeft = document.getElementById('bottomLeft').value;//d

    const midTopLeft = document.getElementById('midTopLeft').value;//a     
    const midTopRight = document.getElementById('midTopRight').value;//b
    const midBottomRight = document.getElementById('midBottomRight').value;//c
    const midBottomLeft = document.getElementById('midBottomLeft').value;//d

    //Ajusta os valores para evitar o bug do "espelhamento"
    const adjustedTopLeft = topLeft;
    const adjustedTopRight = topRight;
    const adjustedBottomRight = bottomRight;
    const adjustedBottomLeft = bottomLeft;
    const adjustedMidTopLeft = Math.min(midTopLeft, midBottomLeft);
    const adjustedMidTopRight = Math.min(midTopRight, midBottomRight);
    const adjustedMidBottomRight = Math.max(midTopRight, midBottomRight);
    const adjustedMidBottomLeft = Math.max(midTopLeft, midBottomLeft);

    borda.style.borderRadius = `${adjustedTopLeft}px ${adjustedTopRight}px ${adjustedBottomRight}px ${adjustedBottomLeft}px / ${adjustedMidTopLeft}px ${adjustedMidTopRight}px ${adjustedMidBottomRight}px ${adjustedMidBottomLeft}px`;

    valoresTxt.innerHTML = `${adjustedTopLeft}px ${adjustedTopRight}px ${adjustedBottomRight}px ${adjustedBottomLeft}px / ${adjustedMidTopLeft}px ${adjustedMidTopRight}px ${adjustedMidBottomRight}px ${adjustedMidBottomLeft}px`;
}

// Atribui valores aleatórios aos inputs
inputs.forEach(input => {
    input.value = Math.floor(Math.random() * 501);
  });

// Atualiza a borda com os valores iniciais
AtualizaBorda();

// Adiciona um listener de evento para cada input
inputs.forEach(input => {
    input.addEventListener('input', AtualizaBorda);
  });

const input = document.getElementById('botao-copiar')

input.addEventListener('click', () => {

    const topLeft = document.getElementById('topLeft').value;//a     
    const topRight = document.getElementById('topRight').value;//b
    const bottomRight = document.getElementById('bottomRight').value;//c
    const bottomLeft = document.getElementById('bottomLeft').value;//d

    const midTopLeft = document.getElementById('midTopLeft').value;//a     
    const midTopRight = document.getElementById('midTopRight').value;//b
    const midBottomRight = document.getElementById('midBottomRight').value;//c
    const midBottomLeft = document.getElementById('midBottomLeft').value;//d

    const textoClipboard = `border-radius: ${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px / ${midTopLeft}px ${midTopRight}px ${midBottomRight}px ${midBottomLeft}px;`

    navigator.clipboard.writeText(textoClipboard.valueOf())

    .then(() => {
        input.textContent = "COPIED";
        input.style.backgroundColor = "cadetblue";
        input.style.cursor = "default"
        setTimeout(() => {
            input.textContent = "COPY"
            input.style.backgroundColor = "blueviolet";
            input.style.cursor = "pointer"
        }, 2000);
    })
    .catch((error) =>{
        console.error("Erro ao copiar o texto: ",error)
    })
});

