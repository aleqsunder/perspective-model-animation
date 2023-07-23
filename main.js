import './assets/style/index.scss'

const availableSkins = [
    {name: 'default', chance: 0.8},
    {name: 'injuredsteve', chance: 0.6},
    {name: 'afroamerican', chance: 0.6},
    {name: 'woman', chance: 0.5},
    {name: 'chad', chance: 0.25},
    {name: 'pig', chance: 0.25}
]

const availableAnimations = [
    {name: 'nodding', chance: 0.5},
    {name: 'hello', chance: 0.25},
    {name: 'backflip', chance: 0.06},
    {name: 'scratch-nose', chance: 0.1}
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
    const randomSkin = accumulateRandomChance(availableSkins)
    const randomAnimation = accumulateRandomChance(availableAnimations)
    const intervalAnimationMultiplier = ((0.75 + Math.random() / 2) * 100 ^ 0) / 100 // from 0.75 to 1.25
    
    const steve = document.createElement('div')
    steve.classList.add('steve')
    steve.classList.add(`steve-${randomSkin}`)
    steve.style.setProperty('--item-id', index + 1)
    
    steve.innerHTML = `
        <div class="steve-body steve-body__animation-${randomAnimation}" style="--animation-multiplier: ${intervalAnimationMultiplier}">
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

function accumulateRandomChance(items) {
    const sumOfChances = items.reduce((acc, current) => (acc += current.chance, acc), 0.0)
    const random = Math.random() * sumOfChances
    
    let index = 0
    for (let order = items[0].chance; order <= random; order += items[index].chance) {
        index++
    }
    
    return items[index].name
}

main()