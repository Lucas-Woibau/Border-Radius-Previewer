const borda = document.getElementById('borda')
const inputs = document.querySelectorAll('input[type = "number"]')

inputs.forEach(input => {
    input.addEventListener('input', () =>{
        const topLeft = document.getElementById('topLeft').value;
        const bottomLeft = document.getElementById('bottomLeft').value;
        const topRight = document.getElementById('topRight').value;
        const bottomRight = document.getElementById('bottomRight').value;

        borda.style.borderTopLeftRadius = `${topLeft}px`;
        borda.style.borderBottomLeftRadius = `${bottomLeft}px`;
        borda.style.borderTopRightRadius= `${topRight}px`;
        borda.style.borderBottomRightRadius = `${bottomRight}px`
    })
});

function CopiarValores(){
    const input = document.getElementById('botao-copiar')

    topLeft = document.getElementById('topLeft').value;
    bottomLeft = document.getElementById('bottomLeft').value;
    topRight = document.getElementById('topRight').value;
    bottomRight = document.getElementById('bottomRight').value;

    const textoClipboard = `${topLeft}px ${bottomLeft}px ${topRight}px ${bottomRight}px`

    navigator.clipboard.writeText(textoClipboard.valueOf())
        
    .then(() => {
        alert("Texto copiado para área de transferência!")
    })
    .catch((error) =>{
        console.error("Erro ao copiar o texto: ",error)
    })
}