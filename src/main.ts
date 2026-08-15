import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
    throw new Error('App container was not found')
}

app.innerHTML = `
  <main class="app">
    <h1 class="app__title">Crypto Test Task</h1>
  </main>
`