import './style.css'
import { createHeader } from './components/header/header'
import { createHero } from './components/hero/hero'

const app = document.querySelector<HTMLDivElement>('#app')
if (!app) {
    throw new Error('App container was not found')
}

const page = document.createElement('main')
page.className = 'page'

const header = createHeader()
const introScreen = createHero(header)

const contentSection = document.createElement('section')
contentSection.className = 'content-section'

const footer = document.createElement('footer')
footer.className = 'footer'

page.append(introScreen, contentSection, footer)
app.append(page)
