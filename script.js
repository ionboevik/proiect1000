
const requestURL = "https://www.googleapis.com/books/v1/volumes?q=harry+potter"

const request = async() =>{
    const response = await fetch(requestURL)
    try {
        if(!response.ok){
            throw new Error('Error fetching data')
        }else{
            const convertireJSON = await response.json()
            const convertor = convertireJSON.items[0]
            console.log(convertor);
            const textBox1 = document.querySelector("#text-box1")
            const textBox2 = document.querySelector("#text-box2")
            const textBox3 = document.querySelector("#text-box3")
            textBox1.textContent = `id: ${convertor.id}`
            textBox2.textContent = `kind: ${convertor.kind}`
            textBox3.innerHTML = `
            <strong>language:</strong> ${convertor.volumeInfo.language}<br>
            <strong>title:</strong> ${convertor.volumeInfo.title}<br>
            <strong>saleability:</strong> ${convertor.saleInfo.saleability}<br>
            <strong>description:</strong> ${convertor.volumeInfo.description}<br>
            <strong>pageCount:</strong> ${convertor.volumeInfo.pageCount}<br>
            <strong>publishedDate:</strong> ${convertor.volumeInfo.publishedDate}<br>
            <strong>country:</strong> ${convertor.saleInfo.country}
            `
        }
    } catch (err) {
        console.error('An error ocurred',err)
    }
}
request()
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

