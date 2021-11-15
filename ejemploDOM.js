const boton = document.querySelector('.button');
const input = document.querySelector('.input');
const contenido = document.querySelector('.contenido');

const changeContent = () =>{
  contenido.innerText = input.value;
  contenido.style.background = 'lightgreen';
  contenido.style.border= '2px solid green';
  boton.innerHTML = 'Texto cambiado!';
  boton.background='lightgreen';
}

boton.addEventListener('click',changeContent);

