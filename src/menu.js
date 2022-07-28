const mainContent = document.querySelector('.main-content')

function generateMenuDOM() {
    const egg = document.createElement('div')
    mainContent.append(egg)

    const eggImg = document.createElement('img')
    eggImg.setAttribute('src', '../src/egg.jpg')
    eggImg.setAttribute('style', 'width: 320px; height: auto;')
    egg.append(eggImg)

    const eggText = document.createElement('p')
    eggText.textContent = 'Toasted wheat bread with fried egg!'
    egg.append(eggText)

    const eggPrice = document.createElement('p')
    eggPrice.textContent = '$9.99'
    eggPrice.setAttribute('style', 'position: absolute; bottom: 0; right: 5px;')
    egg.append(eggPrice)

    const waffle = document.createElement('div')
    mainContent.append(waffle)

    const waffleImg = document.createElement('img')
    waffleImg.setAttribute('src', '../src/waffle.jpg')
    waffleImg.setAttribute('style', 'width: 320px; height: auto;')
    waffle.append(waffleImg)

    const waffleText = document.createElement('p')
    waffleText.textContent = 'Waffles with cherry fruits!'
    waffle.append(waffleText)

    const wafflePrice = document.createElement('p')
    wafflePrice.textContent = '$14.99'
    wafflePrice.setAttribute('style', 'position: absolute; bottom: 0; right: 5px;')
    waffle.append(wafflePrice)

    const cookedMeat = document.createElement('div')
    mainContent.append(cookedMeat)

    const cookedMeatImg = document.createElement('img')
    cookedMeatImg.setAttribute('src', '../src/cooked_meat.jpg')
    cookedMeatImg.setAttribute('style', 'width: 320px; height: auto;')
    cookedMeat.append(cookedMeatImg)

    const cookedMeatText = document.createElement('p')
    cookedMeatText.textContent = 'Cooked meat from Cape Verde!'
    cookedMeat.append(cookedMeatText)

    const cookedMeatPrice = document.createElement('p')
    cookedMeatPrice.textContent = '$29.99'
    cookedMeatPrice.setAttribute('style', 'position: absolute; bottom: 0; right: 5px;')
    cookedMeat.append(cookedMeatPrice)
}

export {generateMenuDOM}

