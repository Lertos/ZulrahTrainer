
const hideDivClassName = 'hidden'

const optionStates = {
    ZULRAH: 'divZulrahType',
    ZULRAH_SPOT: 'divZulrahSpot',
    MOVE: 'divPlayerSpot',
    PRAYER: 'divNeededPrayer'
}

const zulrahTypes = {
    RED: 'red',
    GREEN: 'green',
    BLUE: 'blue',
    JAD: 'jad'
}

const zulrahSpots = {
    LEFT: 'left',
    MIDDLE: 'middle',
    TOP: 'top',
    RIGHT: 'right'
}

const playerSpots = {
    BOTTOM_LEFT: 'bottom_left',
    CORNER_LEFT: 'corner_left',
    MIDDLE: 'middle',
    CORNER_RIGHT: 'corner_right',
    BOTTOM_RIGHT: 'bottom_right'
}

const prayers = {
    RANGED: 'ranged',
    MAGE: 'mage',
    RANGED_INTO_MAGE: 'ranged_into_mage',
    MAGE_INTO_RANGED: 'mage_into_ranged',
    NOT_APPLICABLE: 'not_applicable',
}

/* Each object holds: 
[   pathOfImageOfPhase, 
    imageFlipped, 
    zulrahType, 
    zulrahLocation, 
    playerLocation, 
    prayerNeeded ]
*/
const phases = {
    //RED - MIDDLE
    RED_BOTTOMLEFT_MIDDLE: [
        './images/red_bottom.png',
        false,
        zulrahTypes.RED,
        zulrahSpots.MIDDLE,
        playerSpots.BOTTOM_LEFT,
        prayers.NOT_APPLICABLE,
    ],
    RED_BOTTOMRIGHT_MIDDLE: [
        './images/red_bottom.png',
        true,
        zulrahTypes.RED,
        zulrahSpots.MIDDLE,
        playerSpots.BOTTOM_RIGHT,
        prayers.NOT_APPLICABLE,
    ],
    RED_CORNERLEFT_MIDDLE: [
        './images/red_corner.png',
        false,
        zulrahTypes.RED,
        zulrahSpots.MIDDLE,
        playerSpots.CORNER_LEFT,
        prayers.NOT_APPLICABLE,
    ],
    RED_CORNERRIGHT_MIDDLE: [
        './images/red_corner.png',
        true,
        zulrahTypes.RED,
        zulrahSpots.MIDDLE,
        playerSpots.CORNER_RIGHT,
        prayers.NOT_APPLICABLE,
    ],

    //GREEN - MIDDLE
    GREEN_BOTTOMLEFT_MIDDLE: [
        './images/green_bottom_middle.png',
        false,
        zulrahTypes.GREEN,
        zulrahSpots.MIDDLE,
        playerSpots.BOTTOM_LEFT,
        prayers.RANGED,
    ],
    GREEN_BOTTOMRIGHT_MIDDLE: [
        './images/green_bottom_middle.png',
        true,
        zulrahTypes.GREEN,
        zulrahSpots.MIDDLE,
        playerSpots.BOTTOM_RIGHT,
        prayers.RANGED,
    ],
    GREEN_CORNERRIGHT_MIDDLE: [
        './images/green_corner_middle.png',
        true,
        zulrahTypes.GREEN,
        zulrahSpots.MIDDLE,
        playerSpots.CORNER_RIGHT,
        prayers.RANGED,
    ],

    //GREEN - TOP
    GREEN_CORNERRIGHT_TOP: [
        './images/green_corner_top.png',
        true,
        zulrahTypes.GREEN,
        zulrahSpots.TOP,
        playerSpots.CORNER_RIGHT,
        prayers.RANGED,
    ],
    GREEN_CORNERLEFT_TOP: [
        './images/green_corner_top.png',
        false,
        zulrahTypes.GREEN,
        zulrahSpots.TOP,
        playerSpots.CORNER_LEFT,
        prayers.RANGED,
    ],
    GREEN_MIDDLE_TOP: [
        './images/green_top_top.png',
        false,
        zulrahTypes.GREEN,
        zulrahSpots.TOP,
        playerSpots.MIDDLE,
        prayers.RANGED,
    ],

    //GREEN - LEFT
    GREEN_CORNERLEFT_LEFT: [
        './images/green_corner_left.png',
        false,
        zulrahTypes.GREEN,
        zulrahSpots.LEFT,
        playerSpots.CORNER_LEFT,
        prayers.RANGED,
    ],
    GREEN_BOTTOMLEFT_LEFT: [
        './images/green_bottom_left.png',
        false,
        zulrahTypes.GREEN,
        zulrahSpots.LEFT,
        playerSpots.BOTTOM_LEFT,
        prayers.RANGED,
    ],

    //GREEN - RIGHT
    GREEN_CORNERRIGHT_RIGHT: [
        './images/green_corner_left.png',
        true,
        zulrahTypes.GREEN,
        zulrahSpots.RIGHT,
        playerSpots.CORNER_RIGHT,
        prayers.RANGED,
    ],
    GREEN_BOTTOMRIGHT_RIGHT: [
        './images/green_bottom_right_ranged.png',
        true,
        zulrahTypes.JAD,
        zulrahSpots.RIGHT,
        playerSpots.BOTTOM_RIGHT,
        prayers.RANGED_INTO_MAGE,
    ],

    //BLUE - MIDDLE
    BLUE_CORNERRIGHT_MIDDLE: [
        './images/blue_corner_middle.png',
        true,
        zulrahTypes.BLUE,
        zulrahSpots.MIDDLE,
        playerSpots.CORNER_RIGHT,
        prayers.MAGE,
    ],
    BLUE_BOTTOMLEFT_MIDDLE: [
        './images/blue_bottom_middle.png',
        false,
        zulrahTypes.BLUE,
        zulrahSpots.MIDDLE,
        playerSpots.BOTTOM_LEFT,
        prayers.MAGE,
    ],
    BLUE_BOTTOMLEFT_MIDDLE_PRAY: [
        './images/blue_bottom_middle_mage.png',
        false,
        zulrahTypes.JAD,
        zulrahSpots.MIDDLE,
        playerSpots.BOTTOM_LEFT,
        prayers.MAGE_INTO_RANGED,
    ],

    //BLUE - TOP
    BLUE_CORNERRIGHT_TOP: [
        './images/blue_top_top.png',
        true,
        zulrahTypes.BLUE,
        zulrahSpots.TOP,
        playerSpots.CORNER_RIGHT,
        prayers.MAGE,
    ],

    //BLUE - LEFT
    BLUE_CORNERLEFT_LEFT: [
        './images/blue_corner_left.png',
        false,
        zulrahTypes.BLUE,
        zulrahSpots.LEFT,
        playerSpots.CORNER_LEFT,
        prayers.MAGE,
    ],
    BLUE_BOTTOMLEFT_LEFT: [
        './images/blue_bottom_left.png',
        false,
        zulrahTypes.BLUE,
        zulrahSpots.LEFT,
        playerSpots.BOTTOM_LEFT,
        prayers.MAGE,
    ],

    //BLUE - RIGHT
    BLUE_CORNERRIGHT_RIGHT: [
        './images/blue_corner_left.png',
        true,
        zulrahTypes.BLUE,
        zulrahSpots.RIGHT,
        playerSpots.CORNER_RIGHT,
        prayers.MAGE,
    ],
}

const rotations = {
    ROTATION_A: [
        phases.GREEN_BOTTOMLEFT_MIDDLE,
        phases.RED_BOTTOMLEFT_MIDDLE,
        phases.BLUE_CORNERRIGHT_MIDDLE,
        phases.GREEN_CORNERRIGHT_TOP,
        phases.RED_CORNERRIGHT_MIDDLE,
        phases.BLUE_CORNERRIGHT_RIGHT,
        phases.GREEN_CORNERLEFT_TOP,
        phases.BLUE_CORNERRIGHT_TOP,
        phases.GREEN_BOTTOMRIGHT_RIGHT,
        phases.RED_BOTTOMRIGHT_MIDDLE,
        phases.GREEN_BOTTOMRIGHT_MIDDLE
    ],
    ROTATION_B: [
        phases.GREEN_BOTTOMLEFT_MIDDLE,
        phases.RED_BOTTOMLEFT_MIDDLE,
        phases.BLUE_CORNERRIGHT_MIDDLE,
        phases.GREEN_CORNERRIGHT_RIGHT,
        phases.BLUE_CORNERRIGHT_TOP,
        phases.RED_CORNERLEFT_MIDDLE,
        phases.GREEN_CORNERLEFT_LEFT,
        phases.BLUE_CORNERRIGHT_TOP,
        phases.GREEN_BOTTOMRIGHT_RIGHT,
        phases.RED_BOTTOMRIGHT_MIDDLE,
        phases.GREEN_BOTTOMRIGHT_MIDDLE
    ],
    ROTATION_C: [
        phases.GREEN_BOTTOMLEFT_MIDDLE,
        phases.GREEN_BOTTOMLEFT_LEFT,
        phases.RED_BOTTOMRIGHT_MIDDLE,
        phases.BLUE_CORNERRIGHT_RIGHT,
        phases.GREEN_CORNERRIGHT_TOP,
        phases.BLUE_CORNERLEFT_LEFT,
        phases.GREEN_CORNERRIGHT_MIDDLE,
        phases.GREEN_CORNERRIGHT_RIGHT,
        phases.BLUE_BOTTOMLEFT_MIDDLE,
        phases.BLUE_BOTTOMLEFT_MIDDLE_PRAY,
        phases.BLUE_BOTTOMLEFT_MIDDLE
    ],
    ROTATION_D: [
        phases.GREEN_BOTTOMLEFT_MIDDLE,
        phases.BLUE_BOTTOMLEFT_LEFT,
        phases.GREEN_CORNERRIGHT_TOP,
        phases.BLUE_CORNERRIGHT_RIGHT,
        phases.RED_CORNERLEFT_MIDDLE,
        phases.GREEN_CORNERLEFT_LEFT,
        phases.GREEN_CORNERRIGHT_TOP,
        phases.BLUE_CORNERRIGHT_RIGHT,
        phases.GREEN_BOTTOMLEFT_MIDDLE,
        phases.BLUE_BOTTOMLEFT_MIDDLE,
        phases.BLUE_BOTTOMLEFT_MIDDLE_PRAY,
        phases.BLUE_BOTTOMLEFT_MIDDLE
    ],
}

//Holds the options the user selected as values for enums
let chosenOptions = {
    ZULRAH: '',
    ZULRAH_SPOT: '',
    MOVE: '',
    PRAYER: '',
}

let optionState = optionStates.ZULRAH

let currentRotation
let currentPhase
let currentPhaseCounter


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

//Updates the image of the current phase, adds the current phase to the progress panel, and updates the phase
const moveToNextPhase = () => {
    addPhaseToRotationProgressPanel()
    
    let currentPhaseDiv = document.querySelector('#divCurrentPhase')
    
    currentPhaseDiv.innerHTML = ''
    if (currentPhase[1] == true)
        currentPhaseDiv.innerHTML += '<img class="stackedImg flippedImg" src="' + currentPhase[0] + '">'
    else
        currentPhaseDiv.innerHTML += '<img class="stackedImg" src="' + currentPhase[0] + '">'
    
    currentPhaseCounter++
    currentPhase = currentRotation[currentPhaseCounter]
    
    console.log(currentPhase)
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

        if (element.attributes.flipped != undefined)
            element.classList.add('flippedImg')
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
const resetAll = () => {
    resetOptionPanel()
    
    //Reset the progress panel
    document.querySelector('#divRotationProgress').innerHTML = ''

    //Reset the current data
    optionState = optionStates.ZULRAH
    currentRotation = rotations[Object.keys(rotations)[Math.floor(Math.random() * 4)]]
    currentPhaseCounter = 0
    currentPhase = currentRotation[currentPhaseCounter]

    moveToNextPhase()
    moveToNextPhase()
}

//Resets the option panel (hiding option sections) after choosing the options for the last phase
const resetOptionPanel = () => {
    let children = getElementChildren('divOptionPicker', ':scope > div')

    //Add the event listeners and reset the css for each child
    children.forEach((element) => addSectionEventListeners(element.id))
    
    //Add the css to each element of all but the first section of options
    Array.from(children).slice(1).forEach((element) => element.classList.add(hideDivClassName))

    //Reset the chosen options
    resetChosenOptions()
}

//Resets the chosen options
const resetChosenOptions = () => {
    chosenOptions.ZULRAH = ''
    chosenOptions.ZULRAH_SPOT = ''
    chosenOptions.MOVE = ''
    chosenOptions.PRAYER = ''
}

//Once an option is selected, the selection will be saved and a new section of options will appear
const pickOption = (parentId, element) => {
    element.classList = ''
    element.classList.add('highlightedImg')

    if (element.attributes.flipped != undefined)
        element.classList.add('flippedImg')

    //If the latest option group had one of the options selected, show the next section
    if (parentId == optionState) {
        //If the player selects the prayer option - that is when it will tell the player whether it was right or not
        if (optionState === optionStates.PRAYER) {
            moveToNextOption(element.id)

            console.log(chosenOptions)
            //Check if the selections were correct compared to the next phase
            let correct = checkIfCorrectOptions()

            if (correct) {
                console.log('CORRECT')
                
                moveToNextPhase()
            } else {
                //Show warning that its incorrect and to check rotations page if needed
                console.log('INCORRECT')
            }

            resetOptionPanel()
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

//Validates the users selected options against the current phase info
const checkIfCorrectOptions = () => {
    if (optionState == optionStates.ZULRAH) {
        if (
            currentPhase[2] == chosenOptions.ZULRAH &&
            currentPhase[3] == chosenOptions.ZULRAH_SPOT &&
            currentPhase[4] == chosenOptions.MOVE &&
            currentPhase[5] == chosenOptions.PRAYER
        )
            return true
    }
    return false
}

//Builds the page where the user can check all of the rotations out if they want to practice/are stuck
const buildRotationGuidePage = () => {
    Object.keys(rotations).forEach((rotation) => {
        let rotationDiv = document.querySelector('#' + rotation)
        
        rotationDiv.innerHTML = ''
        rotationDiv.innerHTML = '<h3>' + rotation.replace('ROTATION_', ' ') + '</h3>'
        
        rotations[rotation].forEach((phase) => {
            if (phase[1] == true)
                rotationDiv.innerHTML += '<img class="stackedImg flippedImg" src="' + phase[0] + '">'
            else
                rotationDiv.innerHTML += '<img class="stackedImg" src="' + phase[0] + '">'
        })
    })
}

//Adds the picture of the correctly guessed phase to the left progress panel
const addPhaseToRotationProgressPanel = () => {
    let progressPanel = document.querySelector('#divRotationProgress')
    
    if (currentPhase[1] == true)
        progressPanel.innerHTML += '<img class="stackedImg flippedImg" src="' + currentPhase[0] + '">'
    else
        progressPanel.innerHTML += '<img class="stackedImg" src="' + currentPhase[0] + '">'
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
document.querySelector('#btnReset').addEventListener('click', (e) => resetAll())

//Start it all off
buildRotationGuidePage()
resetAll()
