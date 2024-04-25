document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('form-sorteador').addEventListener('submit',(e)=>{
        e.preventDefault()
        let numeroMaximo = document.getElementById('numero-maximo').value
        numeroMaximo=parseInt(numeroMaximo)

        let numeroAleatorio = Math.random()*numeroMaximo
        numeroAleatorio = Math.round(numeroAleatorio)
        numeroAleatorio < 1 ? numeroAleatorio = 1 : numeroAleatorio = numeroAleatorio
        resultado = document.getElementById('resultado')
        resultado.style.display='block'
        resultado.scrollIntoView()

        document.getElementById('resultado-valor').innerText=numeroAleatorio
        
    })
})