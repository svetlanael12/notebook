export const arrayNotes = [];
export const inputTitle = document.querySelector('.modal__input_title');
export const inputBody = document.querySelector('.modal__input_body');
export const listNotes = document.querySelector('#notes__list');

export const modal = document.querySelector('.modal-note');
export const btnAddNote = modal.querySelector('.modal__button_add');

const btnCreateNote = document.querySelector('#create-note');
const btnCloseModal = modal.querySelector('.modal__button_close');

import {createNote} from './createNote.js';
import {clickNote} from './clickNote.js';

(() => {
    document.addEventListener('DOMContentLoaded', contentLoaded);

    btnCreateNote.addEventListener('click', createNote);

    btnCloseModal.addEventListener('click', () => {
        inputTitle.value = inputBody.value = '';
        document.querySelector('.modal-note').style.display = 'none';
    })

    function contentLoaded() {
        if (JSON.parse(localStorage.getItem('notes')) !== null) {
            if (JSON.parse(localStorage.getItem('notes')).length > 0) {
                JSON.parse(localStorage.getItem('notes')).forEach((value) => {
                    arrayNotes.push(value);
                    listNotes.innerHTML += `
                        <div class="note">
                            <button class="note__remove">&times;</button>
                            <div class="note__title">
                                ${value.title.trim()}
                            </div>
                            <p class="note__body"> 
                                ${value.body.trim()}
                            </p>
                        </div>
                    `;
                })
                listNotes.querySelectorAll('.note').forEach((note) => {
                    note.addEventListener('click', clickNote);
                })
            }
        }    
    }
})();