const add = () => {
    const mainContainer = document.createElement('div');
    mainContainer.className = 'main-container';

    const secondContainer = document.createElement('div');
    secondContainer.className = 'second-container';

    const headers = ['ID', 'KIND', 'BODY'];

    const textBoxIds = ['text-box1', 'text-box2', 'text-box3'];

    for (let i = 0; i < headers.length; i++) {
        const column = document.createElement('div');
        column.className = 'column';

        const header = document.createElement('div');
        header.className = 'header';
        header.textContent = headers[i];

        const textBox = document.createElement('div');
        textBox.className = 'text-box';
        textBox.id = textBoxIds[i];

        column.appendChild(header);
        column.appendChild(textBox);

        secondContainer.appendChild(column);
    }
    mainContainer.appendChild(secondContainer);
    return mainContainer;
}
const container = add();
document.body.appendChild(container);