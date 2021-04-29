function carregar() {

  var msg = document.getElementById('msg')
  var img  = document.getElementById('img')
  var data = new Date()
  var hora = data.getHours()

  msg.innerHTML = `Agora São ${hora} horas.`

  if (hora >=0 && hora < 12){
    img.src = './img/manha.jpg'
    document.body.style.backgroundColor = '#e2cd9f'
  } else if (hora >= 12 && hora <= 18){
    img.src = './img/tarde.jpg'
    document.body.style.backgroundColor = '#b9846f'
  } else { 
    img.src = './img/noite.jpg'
    document.body.style.backgroundColor = '#bbbb'
  }

}

  
