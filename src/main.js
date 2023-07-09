let add_button = document.querySelector('#add_button')
let add_note = document.querySelector('#add-note')

add_button.addEventListener('click', () => {
    add_note.classList.toggle("hidden")
    add_note.classList.toggle("flex")
})

let add_button_note = document.querySelector('#add_button_note')
let text_note = document.querySelector('#text_note')
let box_required = document.querySelector('#box_required')

add_button_note.addEventListener('click', () => {
    var note = document.createElement('div')

    if (text_note.value == '') {
        box_required.classList.toggle('hidden')
        box_required.classList.toggle('flex')
    } else {
        add_note.classList.toggle("hidden")
        add_note.classList.toggle("flex")
        
        note.className = 'flex justify-between items-center custonh border-b-4 border-slate-600 ml-3 mr-3'
        note.innerHTML = `<h3 class="ml-5 font-bold text-lg break-words">${text_note.value}</h3><button class="remove_button rotatez flex justify-center items-center w-9 h-9 hover:bg-slate-200 hover:shadow-xl rounded-full transition-all mr-5"><i class="unclickable fa-solid fa-plus text-slate-600 text-4xl rounded-full"></i></button>`
        document.querySelector('.notes').appendChild(note)

    }
})

// Adiciona evento de clique em todos os botões de remoção
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove_button')) {
        let noteToRemove = event.target.parentNode; // Obtém a div pai do botão de remoção
        noteToRemove.parentNode.removeChild(noteToRemove); // Remove a div da árvore DOM
    }
});