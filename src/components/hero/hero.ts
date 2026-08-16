import './hero.css'
import Arrow from '../../assets/images/Arrow.png'
import Polygon from '../../assets/images/Polygon.png'
import Google from '../../assets/images/Google.png'

export function createHero(header: HTMLElement): HTMLElement {
    const hero = document.createElement('section')
    hero.className = 'hero'

    const introVideo = document.createElement('video')
    introVideo.className = 'hero__intro-video'
    introVideo.src = '/videos/intro.mp4'
    introVideo.autoplay = true
    introVideo.muted = true
    introVideo.playsInline = true

    const bgVideo = document.createElement('video')
    bgVideo.className = 'hero__background-video'
    bgVideo.src = '/videos/hero-background.mp4'
    bgVideo.autoplay = true
    bgVideo.muted = true
    bgVideo.playsInline = true
    bgVideo.loop = true

    const content = document.createElement('div')
    content.className = 'hero__content'

    const container = document.createElement('div')
    container.className = 'hero__container'

    const left = document.createElement('div')
    left.className = 'hero__left'

    const titleBlock = document.createElement('div')
    titleBlock.className = 'hero__title-block'

    const title = document.createElement('h1')
    title.className = 'hero__title'
    title.textContent = 'From the Field of All Possibility'

    titleBlock.append(title)

    const description = document.createElement('p')
    description.className = 'hero__description'
    description.textContent =
        'This is an emergent space where ideas are not created, but carefully discovered. ' +
        'We navigate the vast potential to bring forth only the most resonant patterns and ' +
        'coherent forms. Here, the future is curated from the infinite.'

    const buttonsBlock = document.createElement('div')
    buttonsBlock.className = 'hero__buttons-block'

    const buttonLearn = document.createElement('button')
    buttonLearn.className = 'hero__button hero__button--learn'
    buttonLearn.type = 'button'

    const buttonLearnText = document.createElement('span')
    buttonLearnText.className = 'hero__button-text'
    buttonLearnText.textContent = 'Learn More'

    const buttonLearnArrow = document.createElement('img')
    buttonLearnArrow.className = 'hero__button-arrow'
    buttonLearnArrow.src = Arrow
    buttonLearnArrow.alt = ''

    buttonLearn.append(buttonLearnText, buttonLearnArrow)
    buttonsBlock.append(buttonLearn)

    const buttonPlay = document.createElement('button')
    buttonPlay.className = 'hero__button hero__button--play'
    buttonPlay.type = 'button'

    const buttonPlayText = document.createElement('span')
    buttonPlayText.className = 'hero__button-text'
    buttonPlayText.textContent = 'Play Video'

    const buttonPlayArrow = document.createElement('img')
    buttonPlayArrow.className = 'hero__button-arrow'
    buttonPlayArrow.src = Polygon
    buttonPlayArrow.alt = ''

    buttonPlay.append(buttonPlayText, buttonPlayArrow)
    buttonsBlock.append(buttonPlay)
    left.append(titleBlock, description, buttonsBlock)

   const formBlock = document.createElement('div')
    formBlock.className = 'hero__form-block'

    const formHeader = document.createElement('h2')
    formHeader.className = 'hero__form-header'
    formHeader.textContent = 'Online Banking'

    const formSection = document.createElement('div')
    formSection.className = 'hero__form-section'

    const personalTab = document.createElement('button')
    personalTab.className = 'hero__form-tab hero__form-tab--personal'
    personalTab.type = 'button'
    personalTab.textContent = 'Personal'

    const businessTab = document.createElement('button')
    businessTab.className = 'hero__form-tab hero__form-tab--business'
    businessTab.type = 'button'
    businessTab.textContent = 'Business'

    const formTabs = document.createElement('div')
    formTabs.className = 'hero__form-tabs'

    formTabs.append(personalTab, businessTab)
    personalTab.addEventListener('click', () => {
        formTabs.classList.remove('hero__form-tabs--business')
    })

    businessTab.addEventListener('click', () => {
        formTabs.classList.add('hero__form-tabs--business')
    })

    const formActions = document.createElement('div')
    formActions.className = 'hero__form-actions'

    const googleButton = document.createElement('button')
    googleButton.className = 'hero__google-button'
    googleButton.type = 'button'

    const googleButtonContent = document.createElement('span')
    googleButtonContent.className = 'hero__google-button-content'

    const googleIcon = document.createElement('img')
    googleIcon.className = 'hero__google-icon'
    googleIcon.src = Google
    googleIcon.alt = ''

    const googleText = document.createElement('span')
    googleText.className = 'hero__google-text'
    googleText.textContent = 'Google'

    googleButtonContent.append(googleIcon, googleText)
    googleButton.append(googleButtonContent)

    const journeyText = document.createElement('p')
    journeyText.className = 'hero__journey-text'
    journeyText.textContent = 'Start Your Journey Now!'

    const divider = document.createElement('div')
    divider.className = 'hero__form-divider'

    const dividerText = document.createElement('span')
    dividerText.className = 'hero__form-divider-text'
    dividerText.textContent = 'or'

    divider.append(dividerText)

    const createAccountButton = document.createElement('button')
    createAccountButton.className = 'hero__create-account-button'
    createAccountButton.type = 'button'
    createAccountButton.textContent = 'Create account'

    formActions.append(
        googleButton,
        journeyText,
        divider,
        createAccountButton
    )

    formSection.append(formActions)
    formBlock.append(formHeader, formTabs, formSection)

    container.append(left, formBlock)
    content.append(container)
    hero.append(introVideo, bgVideo, header, content)

    window.setTimeout(() => {
        hero.classList.add('hero--transition')
    }, 1000)

    return hero
}