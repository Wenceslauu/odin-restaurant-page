const mainContent = document.querySelector('.main-content')

function generateContactDOM() {
    const contactInfo = document.createElement('div')
    mainContent.append(contactInfo)
    contactInfo.classList.add('contact-info')

    const phone = document.createElement('div')
    contactInfo.append(phone)
    
    const phoneIcon = document.createElement('img')
    phoneIcon.setAttribute('src', '../src/phone.png')
    phone.append(phoneIcon)

    const phoneNum = document.createElement('div')
    phoneNum.textContent = '99999-9999'
    phone.append(phoneNum)

    const time = document.createElement('div')
    contactInfo.append(time)

    const clockIcon = document.createElement('img')
    clockIcon.setAttribute('src', '../src/clock.png')
    time.append(clockIcon)

    const openTime = document.createElement('div')
    openTime.textContent = 'Mon-Sat: 8am-20pm'
    time.append(openTime)

    const map = document.createElement('iframe')
    mainContent.append(map)
    map.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.984875580319!2d-47.46550758518907!3d-23.533046384696952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c58a68cdadd30b%3A0x7532662172d912b1!2sOutback!5e0!3m2!1spt-BR!2sbr!4v1659036637236!5m2!1spt-BR!2sbr')
    map.setAttribute('height', '450')
    map.setAttribute('width', '750')
    map.setAttribute('style', 'border:0;')
    map.setAttribute('allowfullscreen', '')
    map.setAttribute('loading', 'lazy')
    map.setAttribute('referrerpolicy', 'no-referrer-when-downgrade')
}

export {generateContactDOM}