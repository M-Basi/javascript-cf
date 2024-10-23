const daysGR = ['Κυριακή','Δευτέρα','Τρίτη','Τετάρτη','Πέμπτη','Παρασκεή', 'Σάββατο']
const monthGR = ['Ιανουρίου','Φεβουαρίου','Μαρτίου','Απριλίου','Μαίου','Ιουνίου','Ιουλίου','Αυγούστου','Σεπτεμβρίου','Οκτωβρίου','Νοεμβρίου','Δεκεμβρίου']

let noteId = 0

window.addEventListener('DOMContentLoaded', function (){

    this.setInterval(printGRDate, 1000)

    this.document.querySelector('#addNoteBtn').addEventListener('click', function(){
        onInsertHandler(document.querySelector('#inputNote').value.trim())
    })

    this.document.querySelector('#inputNote').addEventListener('keyup', function(e) {
        if(e.key === 'Enter') {
            onInsertHandler(this.value.trim())
        }
    })
})


function printGRDate() {
    const currentDate = new Date()
    const day = currentDate.getDay()
    const date = currentDate.getDate()
    const month = currentDate.getMonth()
    const year = currentDate.getFullYear()

    const hours = currentDate.getHours()
    const minutes = currentDate.getMinutes()
    const seconds = currentDate.getSeconds()

    const dayStr = daysGR[day]
    const monthStr = monthGR[month]

    let dateStr = `${dayStr}, ${date} ${monthStr} ${year}`
    let timeStr = `${(hours < 10) ? '0' : ''}${hours}:${(minutes < 10) ? '0' : ''}${minutes}:${(seconds < 10) ? '0' : ''}${seconds}`

    document.querySelector('#dateTxt').innerHTML = dateStr + '<br>' + timeStr

}

/**
 * Controller for insert button clicked. 
 * @param {String} data 
 */
function onInsertHandler (data) {
    insertNote(data)
    reset()
}


function insertNote(note) {
    if(!note) return

    noteId ++

    let clone  = document.querySelector('.note.hidden').cloneNode(true)
    clone.classList.remove('hidden')
    
    clone.querySelector('#noteCheck').addEventListener('click', function(){
        strikeThrough(clone.querySelector('.note-text'))
    })

    clone.querySelector('.note_del-btn').addEventListener('click',function(){
        deleteNote(this.parentNode)
    })

    let cloneInfo = clone.querySelector('.note-info')
    cloneInfo.children[0].id = 'noteCheck' + noteId
    cloneInfo.children[1].htmlFor = 'noteCheck' + noteId

    clone.children[1].id = 'noteDelBtn' + noteId

    clone.querySelector('.note-text').innerHTML = note

    document.querySelector('.notes-wrapper').appendChild(clone)

}

function strikeThrough(element){
    element.classList.toggle('line-through')
}

function deleteNote(note) {
    note.remove()
}

function reset(){
    document.querySelector('#inputNote').value = ''
}








