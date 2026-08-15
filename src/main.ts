import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
    throw new Error('App container was not found')
}

const page = document.createElement('main')
page.className = 'page'

const heroSection = document.createElement('section')
heroSection.className = 'hero'

const contentSection = document.createElement('section')
contentSection.className = 'content-section'

const footer = document.createElement('footer')
footer.className = 'footer'

page.append(heroSection, contentSection, footer)
app.append(page)