import { btnAddNote, inputTitle, inputBody, listNotes, arrayNotes } from './script.js';
import {clickNote} from './clickNote.js';

export function createNote(e) {
    e.preventDefault();
    document.querySelector('.modal-note').style.display = 'block';

    btnAddNote.addEventListener('click', add);
    
    function add() {
        if (inputBody.value.trim().length > 0) {
            listNotes.innerHTML += `
                    <div class="note">
                        <button class="note__remove">&times;</button>
                        <div class="note__title">
                            ${inputTitle.value.trim()}
                        </div>
                        <p class="note__body"> 
                            ${inputBody.value.trim()}
                        </p>
                    </div>
                `;
            arrayNotes.push({
                title: inputTitle.value.trim(),
                body: inputBody.value.trim()
            });
            localStorage.setItem('notes', JSON.stringify(arrayNotes));
            inputTitle.value = inputBody.value = '';
            document.querySelector('.modal-note').style.display = 'none';

            listNotes.querySelectorAll('.note').forEach((note) => {
                note.addEventListener('click', clickNote);
            })
            btnAddNote.removeEventListener('click', add);
        } else {
            inputBody.placeholder = 'Поле не может быть пустым';
        }
    }
}