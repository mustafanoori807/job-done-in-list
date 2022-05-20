const taskList = document.querySelector('.to-do-list');
const inputTask = document.querySelector('#to-do-input');
const addTaskButton = document.querySelector('#to-do-add-button')
const dltButton = document.querySelectorAll('.to-do-section-task button')


addTaskButton.onclick = function () {
    if (inputTask.value.length === 0) {
        alert("Please, enter task")
    }
    else {
        taskList.innerHTML +=
            `
            <li>
                <input type="checkbox" class="checkbox-task">
                    <span class="task-text">${inputTask.value}</span>
                <button type="button" class="dlt-button">X</button>
            </li>
        `;
        const dltButton = document.querySelectorAll('.to-do-section-task button')
        for (let i = 0; i < dltButton.length; i++) {
            dltButton[i].onclick = function () {
                this.parentNode.remove();
                console.log(dltButton.length);
            }
        }
        const checkBoxesChecked = document.querySelectorAll('.checkbox-task')
        const spanText = document.querySelectorAll('.task-text')
        for (let i = 0; i < checkBoxesChecked.length; i++) {
            checkBoxesChecked[i].onclick = function () {
                spanText[i].classList.toggle('trough-line')
            }
        }
    }
}
//console.log(Array.from(spanText));