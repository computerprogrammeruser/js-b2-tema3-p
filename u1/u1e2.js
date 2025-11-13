// T3. JavaScript profesional en una aplicación web
// U1. Trabajo avanzado con el DOM
// Enunciado disponible en u1e2.md / Enunciat disponible a u1e2.md

const CATEGORY_LIST = [
    {
        id: 1,
        name: 'design'
    }, {
        id: 2,
        name: 'development'
    }, {
        id: 3,
        name: 'consultancy'
    }
];

const PROJECT_LIST = [
    {
        id: 1,
        name: 'First Project',
        excerpt: 'Lorem <strong>ipsum</strong> dolor quan aemet...',
        categoryId: 2,
        progress: 90,
        archived: false,
        search: ['wordA', 'wordB', 'wordC'],
        tags: ['tag1', 'tag2']
    }, {
        id: 2,
        name: 'Second Project',
        excerpt: 'Lorem ipsum dolor quan aemet...',
        categoryId: 2,
        progress: 50,
        archived: false,
        search: ['wordA', 'wordD'],
        tags: ['tag3']
    }, {
        id: 3,
        name: 'Third Project',
        excerpt: 'Lorem ipsum dolor quan aemet...',
        categoryId: 1,
        progress: 20,
        archived: false,
        search: ['wordB', 'wordC'],
        tags: ['tag1', 'tag3']
    }, {
        id: 4,
        name: 'Fourth Project',
        excerpt: 'Lorem ipsum dolor quan aemet...',
        categoryId: 3,
        progress: 100,
        archived: true,
        search: ['wordA', 'wordB'],
        tags: ['tag2']
    }, {
        id: 5,
        name: 'Fifth Project',
        excerpt: 'Lorem ipsum dolor quan aemet...',
        categoryId: 3,
        progress: 100,
        archived: false,
        search: ['wordA', 'wordC', 'wordD'],
        tags: ['tag1', 'tag2', 'tag3']
    }, {
        id: 6,
        name: 'Sixth Project',
        excerpt: 'Lorem ipsum <strong>dolor quan</strong> aemet...',
        categoryId: 2,
        progress: 100,
        archived: true,
        search: ['wordA', 'wordB', 'wordD'],
        tags: ['tag1']
    },
];

//Escribe aquí tu solución / escriviu aquí la vostra solució:

function renderProjects() {

    const projectListContainer = document.querySelector('.js-project-list');

    if (!projectListContainer) {
        throw new Error('projectListContainer error.');
    }

    const fragment = document.createDocumentFragment();

    const projectTemplate = document.getElementById('tpl-project');
    const tagTemplate = document.getElementById('tpl-tag');

    if(!projectTemplate || !tagTemplate) {
        throw new Error('projectTemplate or tagTemplate error.');
    }

    PROJECT_LIST.forEach(project => {
        
        const projectNodeClone = projectTemplate.content.cloneNode(true);
        const projectDiv = projectNodeClone.querySelector('.js-project');

        projectDiv.dataset.id = project.id;
        projectDiv.dataset.tags = project.tags.join(',');
        projectDiv.dataset.search = project.search.join(',');
        projectDiv.dataset.archived = project.archived;

        const name = projectNodeClone.querySelector('.js-name');
        name.textContent = project.name;

        const progress = projectNodeClone.querySelector('.js-progress');
        progress.textContent = project.progress;

        const excerpt = projectNodeClone.querySelector('.js-excerpt');
        excerpt.innerHTML = project.excerpt;

        const category = CATEGORY_LIST.find(category => category.id === project.categoryId);
        const categoryInformation = projectNodeClone.querySelector('.js-category');
        categoryInformation.textContent = category ? category.name : '';

        const tags = projectNodeClone.querySelector('.js-tags');
        project.tags.forEach(tag => {
            const tagNode = tagTemplate.content.cloneNode(true);
            const tagLink = tagNode.querySelector('.js-tag-link');
            tagLink.dataset.tag = tag;
            tagLink.textContent = tag;
            tags.appendChild(tagNode);
        });

        if (project.archived) {
            projectDiv.classList.add('archived');
        }

        if (project.progress === 100) {
            projectDiv.classList.add('completed');
        }

        fragment.appendChild(projectNodeClone);
    });

    projectListContainer.appendChild(fragment);
}

document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
});