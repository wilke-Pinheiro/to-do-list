import "./css/style.css"
import "@fortawesome/fontawesome-free/css/all.min.css"



function createDivGeneric(classe) {
    const box = document.createElement('div')
    box.classList.add(...classe)
    return box // Gera uma div generica 
}

function iconButton(classe) {
    const icon = document.createElement('i')
    icon.classList.add(...classe)
    return icon //Gera o icone dos buttons generica 
}

function createButton(classe, tipe, icone, index) {
    const button = document.createElement('button')
    button.classList.add(...classe)
    button.appendChild(icone) //Cria o buttons do boxBtn de forma generica
    return button
}

function createCard(value) {
    const card = createDivGeneric(['toDo-card'])
    const date = new Date().getTime
    card.id = `${date}`

    const cardContent = document.createElement('span')
    cardContent.innerText = value

    const boxBtn = createDivGeneric(['box-btn'])
    const buttontrash = createButton(['btn-trash'], 'trash', iconButton(['fa-solid', 'fa-trash']))
    
    boxBtn.append(buttontrash)
    card.append(cardContent, boxBtn)

    let boxList = document.getElementById('toDoList')
    const boxTasks = document.getElementById('tasks')

    if (!boxList) {

        boxList = createDivGeneric(['toDo-list'])
        boxList.id = 'toDoList'

        const title = document.createElement('h2')
        title.classList.add('toDo-list-title')
        title.innerText = 'Lista'

        boxList.append(title, card)
        boxTasks.appendChild(boxList)
    } else {
        boxList.append(card)
    }

}


function buttonPressed() {
    document.getElementById('tasks').addEventListener('click', ev => {

        const btn = ev.target.closest('.btn-trash')

        if (!btn) return
        const card = btn.closest('.toDo-card')
        card.remove()

        const boxList = document.getElementById('toDoList')
        if(boxList && !boxList.querySelector('.toDo-card')){
            boxList.remove()
        }
    })
}



function initTask() {
    document.getElementById('add').addEventListener('click', ev => {
        ev.preventDefault()

        const input = document.getElementById('inputContent')
        const value = input.value
        if (!value) return
        createCard(value)

        input.value = ''

    })

    buttonPressed()


}



initTask()