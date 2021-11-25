
const hideDivClassName = 'hidden'

const optionStates = {
    ZULRAH: 'divZulrahType',
    ZULRAH_SPOT: 'divZulrahSpot',
    MOVE: 'divPlayerSpot',
    PRAYER: 'divNeededPrayer',
}

let optionState = optionStates.ZULRAH


//Changes the state of the option selectors to know which to show and which to store
const moveToNextOption = () => {
    if (optionState == optionStates.ZULRAH)
        optionState = optionStates.ZULRAH_SPOT
    else if (optionState == optionStates.ZULRAH_SPOT)
        optionState = optionStates.MOVE
    else if (optionState == optionStates.MOVE)
        optionState = optionStates.PRAYER
    else if (optionState == optionStates.PRAYER)
        optionState = optionStates.ZULRAH
}

//Returns the children given the parent element and the selector text
const getElementChildren = (id, selector) => {
    const parentElement = document.querySelector('#' + id)
    return parentElement.querySelectorAll(selector)
}

//Sets the css of all options back to default 
const resetOptionSection = (id) => {
    getElementChildren(id, ':scope > img').forEach((element) => {
        element.classList = ''
        element.classList.add('borderedImg')
    })
}

//Removes all previous listeners from the elements, then adds a new listener for the 'click' action
const addSectionEventListeners = (id) => {
    getElementChildren(id, ':scope > img').forEach((element) => {
        //Clone to remove the event listeners so we can add them again
        let newElement = element.cloneNode(true)
        element.parentNode.replaceChild(newElement, element)

        newElement.addEventListener('click', (e) => {
            resetOptionSection(id)
            pickOption(id, newElement)
        })
    })
    resetOptionSection(id)
}

//Resets all option sections back to their default state; bordered and unselected
const resetAllOptionSections = () => {
    let children = getElementChildren('divOptionPicker', ':scope > div')

    //Add the event listeners and reset the css for each child
    children.forEach((element) => addSectionEventListeners(element.id))
    //Add the css to each element of all but the first section of options
    Array.from(children).slice(1).forEach((element) => {
        element.classList.add(hideDivClassName)
    })
}

//Once an option is selected, the selection will be saved and a new section of options will appear
const pickOption = (parentId, element) => {
    console.log(parentId, element.id)
    element.classList = ''
    element.classList.add('highlightedImg')

    //If the latest option group had one of the options selected, show the next section
    if (parentId == optionState) {
        moveToNextOption()
        showOptionGroup()
    }
}

//Removes the hidden css class from the newly unlocked group
const showOptionGroup = () => {
    const section = document.querySelector('#' + optionState)
    section.classList.remove(hideDivClassName)
}


/* ------------------------------------
    Adding event listeners
------------------------------------ */

//Top navigation 
document.querySelector('#btnSeeRotations').addEventListener("click", (e) => {
    //If the user wants to see the rotations page
    if (e.currentTarget.textContent == 'See Rotations') {
        document.getElementById('divRightPanel').classList.add(hideDivClassName)
        document.getElementById('divRightPanelRotations').classList.remove(hideDivClassName)

        e.currentTarget.textContent = 'Back to Trainer'
    }
    //If the user wants to see the training page
    else if (e.currentTarget.textContent == 'Back to Trainer') {
        document.getElementById('divRightPanelRotations').classList.add(hideDivClassName)
        document.getElementById('divRightPanel').classList.remove(hideDivClassName)

        e.currentTarget.textContent = 'See Rotations'
    }
})

//Reset button
document.querySelector('#btnReset').addEventListener('click', (e) => resetAllOptionSections())

//Start it all off
resetAllOptionSections()

