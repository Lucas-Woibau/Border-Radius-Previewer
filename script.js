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

inputs.forEach(input => {
    input.addEventListener('input', () =>{
        const middleLeft = document.getElementById('middleLeft').value;
        const middleTop = document.getElementById('middleTop').value;
        const middleRight = document.getElementById('middleRight').value;
        const middleBottom = document.getElementById('middleBottom').value;

        borda.style.borderTopLeftRadius = `${middleLeft}px`;
        borda.style.borderBottomLeftRadius = `${middleTop}px`;
        borda.style.borderTopRightRadius= `${middleRight}px`;
        borda.style.borderBottomRightRadius = `${middleBottom}px`
    })
});

function MostrarNovosValores(){
    const novosValores = document.getElementById('buttons-2')
    const botao = document.getElementById('botao-mostrar')

    if(novosValores.style.display === 'none'){
        novosValores.style.display = 'list-item';
        botao.textContent = "Desabilitar 8 valores!"
    }
    else{
        novosValores.style.display = 'none';
        botao.textContent = "Habilitar 8 valores!"
    }
}

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