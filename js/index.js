
const hideDivClassName = 'hidden'

const optionStates = {
    ZULRAH: 'east',
    ZULRAH_SPOT: 'west',
    MOVE: 'north',
    PRAYER: 'south'
}

let optionState = optionStates.ZULRAH

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

console.log(optionState)
moveToNextOption()
console.log(optionState)
moveToNextOption()
console.log(optionState)
moveToNextOption()
console.log(optionState)
moveToNextOption()
console.log(optionState)
moveToNextOption()
console.log(optionState)

document.getElementById("btnSeeRotations").addEventListener("click", (e) => {
    //Update the button text depending on what it currently is
    if (e.currentTarget.textContent == 'See Rotations') {
        document.getElementById('divRightPanel').classList.add(hideDivClassName)
        document.getElementById('divRightPanelRotations').classList.remove(hideDivClassName)

        e.currentTarget.textContent = 'Back to Trainer'
    } else if (e.currentTarget.textContent == 'Back to Trainer') {
        document.getElementById('divRightPanelRotations').classList.add(hideDivClassName)
        document.getElementById('divRightPanel').classList.remove(hideDivClassName)

        e.currentTarget.textContent = 'See Rotations'
    }
})
