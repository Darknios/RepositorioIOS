let formCadastro = document.getElementById('form');


formCadastro.addEventListener('submit',evento=>{
    evento.preventDefault();

    const elemento = evento.target

    Array.from(elemento).forEach((val,i) => {
        let {name, value} = val;
        
        console.log(`${i+1} - ${name}: ${value}`);
       });
    
});

