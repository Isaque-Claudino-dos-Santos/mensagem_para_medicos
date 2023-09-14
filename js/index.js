document.querySelector('form').onsubmit = (e) => e.preventDefault()

const elementConsultantName = document.querySelector('#consultantName') // input
const elementDoctorName = document.querySelector('#doctorName') // input
const elementMessage = document.querySelector('#message') // textarea
const elementMessageMaked = document.querySelector('#messageMaked') // div

const updateMessage = () => {
  const consultantName = elementConsultantName.value
  const doctorName = elementDoctorName.value
  const message = elementMessage.value

  const messageMaked = `<span>Data: <span class="font-blue-light font-bold">${new Date().toLocaleDateString()}</span></span>
                    <span>Nome do Consultor: <span class="font-blue-light font-bold">${consultantName}</span></span>
                    <span>Nome do Médico: <span class="font-blue-light font-bold">${doctorName}</span></span>
                    <span>Mensagem: <span class="font-blue-light font-bold">${message}</span></span>`

  elementMessageMaked.innerHTML = messageMaked
}

elementConsultantName.onkeyup = () => updateMessage()
elementDoctorName.onkeyup = () => updateMessage()
elementMessage.onkeyup = () => updateMessage()

// const elementEventMessage = document.querySelector('#eventMessage'); // div
// const elementMakeMessage = document.querySelector('#makeMessage'); // button
// elementMakeMessage.onclick = () => {
//   elementConsultantName.value = '';
//   elementDoctorName.value = '';
//   elementMessage.value = '';
//   elementEventMessage.innerHTML = `<p class="ok">Mensagem Gerada ✅</p>`;
//   setTimeout(() => {
//     elementEventMessage.innerHTML = '';
//   }, 2000);
// };

elementMessageMaked.onclick = () => {
  navigator.clipboard.writeText(elementMessageMaked.innerText)
  const popUp = document.createElement('p')
  popUp.className = 'absolute bg-green-light font-black p-1 b-rounded m-1'
  popUp.style = 'top: 0;'
  popUp.textContent = 'Copiado ✔️'

  document.body.appendChild(popUp)

  setTimeout(() => {
    popUp.remove()
  }, 3000)
}

const popUp = document.createElement('p')
popUp.className = 'absolute bg-yellow font-black p-1 b-rounded m-1 font-bold'
popUp.textContent = '⚡Clique para copiar o conteudo⚡'

elementMessageMaked.onmouseover = (e) => {
  document.body.appendChild(popUp)
}

elementMessageMaked.onmouseout = () => {
  popUp.remove()
}
