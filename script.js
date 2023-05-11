const borda = document.getElementById('borda')
const inputs = document.querySelectorAll('input[type = "range"]')
const valoresTxt = document.getElementById('valoresTxt')

inputs.forEach(input => {
    input.addEventListener('input', () =>{

        const topLeft = document.getElementById('topLeft').value;//a     
        const topRight = document.getElementById('topRight').value;//b
        const bottomRight = document.getElementById('bottomRight').value;//c
        const bottomLeft = document.getElementById('bottomLeft').value;//d

        borda.style.borderTopLeftRadius = `${topLeft}px`;
        borda.style.borderTopRightRadius = `${topRight}px`;
        borda.style.borderBottomLeftRadius = `${bottomLeft}px`;
        borda.style.borderBottomRightRadius = `${bottomRight}px`;
      
        valoresTxt.innerHTML = `${topLeft}px ${topRight}px ${bottomLeft}px ${bottomRight}px`
    })
});

const input = document.getElementById('botao-copiar')

input.addEventListener('click', () => {
    
    topLeft = document.getElementById('topLeft').value;
    bottomLeft = document.getElementById('bottomLeft').value;
    topRight = document.getElementById('topRight').value;
    bottomRight = document.getElementById('bottomRight').value;

    const textoClipboard = `border-radius: ${topLeft}px ${bottomLeft}px ${topRight}px ${bottomRight}px`

    navigator.clipboard.writeText(textoClipboard.valueOf())

    .then(() => {
        input.textContent = "COPIADO!";
        input.style.backgroundColor = "cadetblue";
        setTimeout(() => {
            input.textContent = "COPIAR"
            input.style.backgroundColor = "blueviolet";
        }, 2000);
    })
    .catch((error) =>{
        console.error("Erro ao copiar o texto: ",error)
    })
});

