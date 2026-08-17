import './online-banking.css'

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

    const right = document.createElement('div')
    right.className = 'online-banking__right'

    const leftBadges = [
        { src: 'assets/images/Bitcoin.png', name: 'Bitcoin', value: '$87,965.62' },
        { src: 'assets/images/Ethereum.png', name: 'Ethereum', value: '$2,950.04' },
        { src: 'assets/images/Solana.png', name: 'Solana', value: '$124.53' },
        { src: 'assets/images/XRP.png', name: 'XRP', value: '$1.862' },
        { src: 'assets/images/USD Coin.png', name: 'USD Coin', value: '$0.9997' },
    ]
    const rightBadges = [
        { src: 'assets/images/Binance Coin.png', name: 'Binance Coin', value: '$844.91' },
        { src: 'assets/images/Midnight.png',   name: 'Midnight', value: '$0.06398' },
        { src: 'assets/images/Dogecoin.png', name: 'Dogecoin', value: '$0.1278' },
        { src: 'assets/images/Sui.png',    name: 'Sui', value: '$1.427' },
        { src: 'assets/images/Tether.png',  name: 'Tether', value: '$1.000' },
    ]

    function createLeftBadge({ src, name, value }: { src: string; name: string; value: string }) {
        const badge = document.createElement('div')
        badge.className = 'online-banking__badge'
        badge.innerHTML = `
            <div class="online-banking__value">${value}</div>
            <div class="online-banking__icon">
                <img src="${src}" alt="">
            </div>
            <div class="online-banking__text">${name}</div>
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