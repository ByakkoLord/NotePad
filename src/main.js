let add_button = document.querySelector('#add_button')
let add_note = document.querySelector('#add-note')

add_button.addEventListener('click', () => {
    add_note.classList.toggle("hidden")
    add_note.classList.toggle("flex")
})

let add_button_note = document.querySelector('#add_button_note')
let text_note = document.querySelector('#text_note')

add_button_note.addEventListener('click', () => {
    let note = document.createElement('div')

    add_note.classList.toggle("hidden")
    add_note.classList.toggle("flex")
    
    
    note.className = 'flex justify-between items-center h-16 border-b-4 border-slate-600 ml-3 mr-3'
    note.innerHTML = `<h3 class="ml-5 font-bold text-lg">${text_note.value}</h3><button id="add_button" class="rotate-45 flex justify-center items-center w-9 h-9 hover:bg-slate-200 hover:shadow-xl rounded-full transition-all mr-5"><i class="fa-solid fa-plus text-slate-600 text-4xl rounded-full"></i></button>`
    document.querySelector('.notes').appendChild(note)
})