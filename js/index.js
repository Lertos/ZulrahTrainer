
const hideDivClassName = 'hidden'

const optionStates = {
    ZULRAH: 'divZulrahType',
    ZULRAH_SPOT: 'divZulrahSpot',
    MOVE: 'divPlayerSpot',
    PRAYER: 'divNeededPrayer'
}

let optionState = optionStates.ZULRAH

let chosenOptions = {
    ZULRAH: '',
    ZULRAH_SPOT: '',
    MOVE: '',
    PRAYER: '',
}



//Changes the state of the option selectors to know which to show and which to store
const moveToNextOption = (id) => {
    if (optionState == optionStates.ZULRAH) {
        optionState = optionStates.ZULRAH_SPOT
        chosenOptions.ZULRAH = id
    }
    else if (optionState == optionStates.ZULRAH_SPOT) {
        optionState = optionStates.MOVE
        chosenOptions.ZULRAH_SPOT = id
    }
    else if (optionState == optionStates.MOVE) {
        optionState = optionStates.PRAYER
        chosenOptions.MOVE = id
    }
    else if (optionState == optionStates.PRAYER) {
        optionState = optionStates.ZULRAH
        chosenOptions.PRAYER = id
    }
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
    Array.from(children).slice(1).forEach((element) => element.classList.add(hideDivClassName))

    //Reset the chosen options
    chosenOptions.ZULRAH = ''
    chosenOptions.ZULRAH_SPOT = ''
    chosenOptions.MOVE = ''
    chosenOptions.PRAYER = ''

    //Reset the current option group selected
    optionState = optionStates.ZULRAH
}

//Once an option is selected, the selection will be saved and a new section of options will appear
const pickOption = (parentId, element) => {
    element.classList = ''
    element.classList.add('highlightedImg')

    //If the latest option group had one of the options selected, show the next section
    if (parentId == optionState) {
        //If the player selects the prayer option - that is when it will tell the player whether it was right or not
        if (optionState === optionStates.PRAYER) {
            
            //TODO - get bool back from below check
            let correct = false
            //TODO - Check if the selections were correct compared to the next phase

            if (correct) {
                
                //TODO - Change the current phase header text, the current phase image, 
                //increment progress counter, change the next phase image, and add old next image to left panel
            }
            else {
                //Show warning that its incorrect and to check rotations page if needed
            }
            
            resetAllOptionSections()
        }
        //If the player selected from any of the other option groups
        else {
            moveToNextOption(element.id)
            showOptionGroup()
        }
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

