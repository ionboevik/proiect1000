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