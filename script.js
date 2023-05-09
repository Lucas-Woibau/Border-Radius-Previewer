const borda = document.getElementById('borda')
const inputs = document.querySelectorAll('input[type = "number"]')

inputs.forEach(input => {
    input.addEventListener('input', () =>{
        const topLeft = document.getElementById('topLeft').value;//a     
        const topRight = document.getElementById('topRight').value;//b
        const bottomRight = document.getElementById('bottomRight').value;//c
        const bottomLeft = document.getElementById('bottomLeft').value;//d
        
        const middleTop = document.getElementById('middleTop').value;//e
        const middleRight = document.getElementById('middleRight').value;//f
        const middleBottom = document.getElementById('middleBottom').value;//g
        const middleLeft = document.getElementById('middleLeft').value;//h

        borda.style.borderTopLeftRadius = `${topLeft}px`;
        borda.style.borderTopRightRadius = `${topRight}px`;
        borda.style.borderBottomLeftRadius = `${bottomLeft}px`;
        borda.style.borderBottomRightRadius = `${bottomRight}px`;
    })
});

const botao = document.getElementById('botao-mostrar')

window.onload = function(){
botao.addEventListener('click', () => {
    const novosValores = document.getElementById('buttons-2')

    if(novosValores.style.display === 'none'){
        novosValores.style.display = 'list-item';
        botao.textContent = "Desabilitar 8 valores!"
    }
    else{
        novosValores.style.display = 'none';
        botao.textContent = "Habilitar 8 valores!"
    }
});
}

const input = document.getElementById('botao-copiar')

input.addEventListener('click', () => {
    
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
});
