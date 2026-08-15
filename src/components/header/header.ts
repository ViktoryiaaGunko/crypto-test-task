import './header.css'
import logoSrc from '../../assets/images/Kairos.png'

const navItems = [
    'HOME',
    'ABOUT US',
    'PROJECT',
    'CONTACT US',
]

export function createHeader():HTMLElement {
    const header = document.createElement('header')
    header.className = 'header'

    const brand = document.createElement('div')
    brand.className = 'header__brand'

    const logo = document.createElement('img')
    logo.className = 'header__logo'
    logo.src = logoSrc
    //logo.alt = 'SpaceX logo'

    brand.append(logo)

    const navigation = document.createElement('nav')
    navigation.className = 'header__nav'
    navigation.setAttribute('aria-label', 'Main navigation')

    navItems.forEach((item, index) => {
        const navButton = document.createElement('button')
        navButton.className = 'header__link'
        navButton.type = 'button'
        navButton.textContent = item

        navigation.append(navButton)

        if (index < navItems.length - 1) {
            const divider = document.createElement('span')
            divider.className = 'header__divider'
            divider.setAttribute('aria-hidden', 'true')

            navigation.append(divider)
        }
    })
    header.append(brand, navigation)

    return header
}
