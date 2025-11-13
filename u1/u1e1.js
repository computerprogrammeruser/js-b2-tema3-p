// T3. JavaScript profesional en una aplicación web
// U1. Trabajo avanzado con el DOM
// Enunciado disponible en u1e1.md / Enunciat disponible a u1e1.md

//Escribe aquí tu solución / escriviu aquí la vostra solució:

function getItems() {
    const items = document.querySelectorAll('.js-item');
    return Array.from(items).map(item => ({
        id: item.dataset.id,
        es: item.dataset.es,
        en: item.dataset.en
    }));
}

function emptyList() {
    const list = document.querySelector('.js-list');
    if (list) {
        list.textContent = '';
    }
}

function renderList(itemList, lang) {

    const list = document.querySelector('.js-list');

    if (!list) {
        throw Error('Error');
    }

    emptyList();

    const fragment = document.createDocumentFragment();
    
    for (const item of itemList) {
        const li = document.createElement('li');
        li.classList.add('js-item');
        li.dataset.id = item.id;
        li.dataset.es = item.es;
        li.dataset.en = item.en;
        li.textContent = item[lang];
        fragment.appendChild(li);
    }
    list.append(fragment);    
}

function updateItemStyle(idItem) {
    const items = document.querySelectorAll('.js-item')
    items.forEach(item => {
        if (item.dataset.id == idItem) {
            item.classList.add('highlight');
        }
    });
}

const words = getItems();

renderList(words, 'en');

updateItemStyle('2');

updateItemStyle('4');
