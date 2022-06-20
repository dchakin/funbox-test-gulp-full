import * as flsFunctions from './modules/functions.js'
flsFunctions.isWebp()
import Swiper, { Navigation, Pagination } from 'swiper'
const swiper = new Swiper()

// js
const cards = [...document.getElementsByClassName("item-content")]
const firstCard = cards[0]
const buyLink = document.querySelector(".buy-link").addEventListener("click", () => firstCard.classList.toggle("active"))

cards.forEach(card => card.onclick = () => card.classList.toggle("active"))
