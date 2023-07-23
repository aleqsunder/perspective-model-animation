import './assets/style/index.scss'

const availableSkins = [
    'default', 'injuredsteve', 'afroamerican',
    'chad', 'woman', 'pig'
]

const availableAnimations = [
    'nodding', 'hello', 'backflip',
    'scratch-nose'
]

function main() {
    generateStevesInCircle(12)
    
    const items = document.querySelectorAll('[data-add-sides]')
    for (let item of items) {
        addSides(item)
    }
}

function generateStevesInCircle(count) {
    const root = document.querySelector('.steve-root')
    root.innerHTML = ''
    
    for (let i = 0; i < count; i++) {
        const steve = generateSteveElement(i)
        root.append(steve)
    }
    
    root.style.setProperty('--items-count', String(count))
}

function generateSteveElement(index) {
    const randomSkin = availableSkins[Math.random() * availableSkins.length ^ 0]
    const randomAnimation = availableAnimations[Math.random() * availableAnimations.length ^ 0]
    
    const steve = document.createElement('div')
    steve.classList.add('steve')
    steve.classList.add(`steve-${randomSkin}`)
    steve.style.setProperty('--item-id', index + 1)
    
    steve.innerHTML = `
        <div class="steve-body steve-body__animation-${randomAnimation}">
          <div class="steve-body__torso" data-add-sides>
            <div class="steve-body__head" data-add-sides></div>
            <div class="steve-body__right-hand" data-add-sides></div>
            <div class="steve-body__left-hand" data-add-sides></div>
            <div class="steve-body__right-leg" data-add-sides></div>
            <div class="steve-body__left-leg" data-add-sides></div>
          </div>
        </div>
    `
    
    return steve
}

function addSides(item) {
    for (let side of ['front', 'back', 'top', 'bottom', 'left', 'right']) {
        const sideElement = document.createElement('div')
        sideElement.classList.add('steve-body__side')
        sideElement.classList.add(`steve-body__side-${side}`)
        
        item.append(sideElement)
    }
}

main()