// let element = document.createElement('div')
// element.innerHTML = 'hello world!'

// document.body.append(element)


let Addbtn = document.createElement('button')
Addbtn.innerHTML = 'товар кошуу'
Addbtn.className = 'Addbtn'
document.body.append(Addbtn)

Addbtn.onclick = ()=>{
  let card = document.createElement('div')
  let img = document.createElement('img') 
  let title = document.createElement('h1')
  let price = document.createElement ('p')
  let btn = document.createElement('button')


  card.className = 'Card'
  img.className = 'Img'
  title.className = 'Title'
  price.className = 'Price'
  btn.className = 'Btn'

  title.innerHTML = 'Product'
  price.innerHTML = '2500 сом'
  btn.innerHTML = 'Сатып алуу'
  img.innerHTML = 'https://sartoreale.ru/upload/iblock/59b/59b676083f536abc2ab36902d35a1664.jpg'


  setTimeout(() => {
    document.body.append(card)
    card.append(img)
    card.append(title)
    card.append(price)
    card.append(btn)


  },2000)




}
