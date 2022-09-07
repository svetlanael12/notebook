import {listNotes, arrayNotes, inputTitle, inputBody, btnAddNote} from './script.js';

export function clickNote(e) {
    let note = e.currentTarget;
    let indexNote = Array.from(listNotes.querySelectorAll('.note')).indexOf(note);

    if (note.querySelector('.note__remove') === e.target) {
        arrayNotes.forEach((elem, ind) => { 
            if (indexNote === ind) {
                arrayNotes.splice(ind, 1);
                note.remove(); 
                localStorage.setItem('notes', JSON.stringify(arrayNotes));
            }
        })
    } else {
        arrayNotes.forEach((elem, ind) => { 
            if (indexNote === ind) {
                document.querySelector('.modal-note').style.display = 'block';
                inputTitle.value = note.querySelector('.note__title').innerText;
                inputBody.value = note.querySelector('.note__body').innerText;
                

                btnAddNote.addEventListener('click', edit);

                function edit() {
                    document.querySelector('.modal-note').style.display = 'none';
                    note.querySelector('.note__title').innerText = inputTitle.value;
                    note.querySelector('.note__body').innerText = inputBody.value;
                    arrayNotes[ind].title = inputTitle.value;
                    arrayNotes[ind].body = inputBody.value;

                    localStorage.setItem('notes', JSON.stringify(arrayNotes));
                    inputTitle.value = inputBody.value = '';

                    btnAddNote.removeEventListener('click', edit);
                }
            }
        })
    }
}