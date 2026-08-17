import './online-banking.css'
import bitcoinImg from '../../assets/images/Bitcoin.png'
import ethereumImg from '../../assets/images/Ethereum.png'
import solanaImg from '../../assets/images/Solana.png'
import xrpImg from '../../assets/images/XRP.png'
import usdCoinImg from '../../assets/images/USD Coin.png'
import binanceImg from '../../assets/images/Binance Coin.png'
import midnightImg from '../../assets/images/Midnight.png'
import dogecoinImg from '../../assets/images/Dogecoin.png'
import suiImg from '../../assets/images/Sui.png'
import tetherImg from '../../assets/images/Tether.png'

export function createOnlineBanking(): HTMLElement {
    const section = document.createElement('section')
    section.className = 'online-banking'

    const container = document.createElement('div')
    container.className = 'online-banking__container'

    const content = document.createElement('div')
    content.className = 'online-banking__content'

    const left = document.createElement('div')
    left.className = 'online-banking__left'

    const middle = document.createElement('div')
    middle.className = 'online-banking__middle'

    const outerCircle = document.createElement('div')
    outerCircle.className = 'online-banking__circle online-banking__circle--outer'

    const middleCircle = document.createElement('div')
    middleCircle.className = 'online-banking__circle online-banking__circle--middle'

    const innerCircle = document.createElement('div')
    innerCircle.className = 'online-banking__circle online-banking__circle--inner'

    const centerContent = document.createElement('div')
    centerContent.className = 'online-banking__center-content'
    centerContent.innerHTML = `
        <div class="online-banking__title">Твоя надпись</div>
        <select class="online-banking__select">
            <option>Bitcoin</option>
            <option>Ethereum</option>
            <option>Solana</option>
        </select>
    `

    innerCircle.append(centerContent)
    middleCircle.append(innerCircle)
    outerCircle.append(middleCircle)
    middle.append(outerCircle)

    const right = document.createElement('div')
    right.className = 'online-banking__right'

    const leftBadges = [
        { src: bitcoinImg, name: 'Bitcoin', value: '$87,965.62' },
        { src: ethereumImg, name: 'Ethereum', value: '$2,950.04' },
        { src: solanaImg, name: 'Solana', value: '$124.53' },
        { src: xrpImg, name: 'XRP', value: '$1.862' },
        { src: usdCoinImg, name: 'USD Coin', value: '$0.9997' },
    ]
    const rightBadges = [
        { src: binanceImg, name: 'Binance Coin', value: '$844.91' },
        { src: midnightImg, name: 'Midnight', value: '$0.06398' },
        { src: dogecoinImg, name: 'Dogecoin', value: '$0.1278' },
        { src: suiImg, name: 'Sui', value: '$1.427' },
        { src: tetherImg, name: 'Tether', value: '$1.000' },
    ]

    function createLeftBadge({ src, name, value }: { src: string; name: string; value: string }) {
        const badge = document.createElement('div')
        badge.className = 'online-banking__badge'
        badge.innerHTML = `
            <div class="online-banking__value">${value}</div>
            <div class="online-banking__text">${name}</div>
            <div class="online-banking__icon">
                <img src="${src}" alt="">
            </div>
        `
        return badge
    }

    function createRightBadge({ src, name, value }: { src: string; name: string; value: string }) {
        const badge = document.createElement('div')
        badge.className = 'online-banking__badge'
        badge.innerHTML = `
            <div class="online-banking__icon">
                <img src="${src}" alt="">
            </div>
            <div class="online-banking__text">${name}</div>
            <div class="online-banking__value">${value}</div>
        `
        return badge
    }

    leftBadges.forEach(data => left.append(createLeftBadge(data)))
    rightBadges.forEach(data => right.append(createRightBadge(data)))

    content.append(left, middle, right)
    container.append(content)
    section.append(container)

    return section
}