const borda = document.getElementById('borda')
const inputs = document.querySelectorAll('input[type = "range"]')
const valoresTxt = document.getElementById('valoresTxt')

valoresTxt.style.width = `190px`

inputs.forEach(input => {
  input.addEventListener('input', () => {

    const topLeft = document.getElementById('topLeft').value;//a     
    const topRight = document.getElementById('topRight').value;//b
    const bottomRight = document.getElementById('bottomRight').value;//c
    const bottomLeft = document.getElementById('bottomLeft').value;//d
    
    borda.style.borderTopLeftRadius = `${topLeft}px`
    borda.style.borderTopRightRadius = `${topRight}px`
    borda.style.borderBottomRightRadius = `${bottomRight}px`
    borda.style.borderBottomLeftRadius = `${bottomLeft}px`

    valoresTxt.innerHTML = `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`;
  });
});

const input = document.getElementById('botao-copiar')

input.addEventListener('click', () => {
    
    const topLeft = document.getElementById('topLeft').value;//a     
    const topRight = document.getElementById('topRight').value;//b
    const bottomRight = document.getElementById('bottomRight').value;//c
    const bottomLeft = document.getElementById('bottomLeft').value;//d

    const textoClipboard = `border-radius: ${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px;`

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

