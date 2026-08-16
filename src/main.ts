import './style.css'
import { createHeader } from './components/header/header'
import { createHero } from './components/hero/hero'
import { createOnlineBanking } from './components/online-banking/online-banking'


const app = document.querySelector<HTMLDivElement>('#app')
if (!app) {
    throw new Error('App container was not found')
}

const page = document.createElement('main')
page.className = 'page'

const header = createHeader()
const introScreen = createHero(header)

const onlineBanking = createOnlineBanking()

const footer = document.createElement('footer')
footer.className = 'footer'

page.append(introScreen, onlineBanking, footer)
app.append(page)
