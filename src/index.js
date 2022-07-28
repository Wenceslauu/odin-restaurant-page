import './style.css'
import {generateHomeDOM} from "./first-load.js"
import {generateMenuDOM} from "./menu.js"
import {generateContactDOM} from "./contact.js"

const tabManager = (() => {
    const __body = document.querySelector('body')
    const __mainContent = document.querySelector('.main-content')

    const __wipeContent = () => {
        __body.classList.remove('home')
        __mainContent.innerHTML = ''
    }

    generateHomeDOM()

    const __homeTab = document.querySelector('.tab.home')
    __homeTab.addEventListener('click', () => {
        __wipeContent()
        generateHomeDOM()
    })

    const __menuTab = document.querySelector('.tab.menu')
    __menuTab.addEventListener('click', () => {
        __wipeContent()
        generateMenuDOM()
    })

    const __contactTab = document.querySelector('.tab.contact')
    __contactTab.addEventListener('click', () => {
        __wipeContent()
        generateContactDOM()
    })
})()