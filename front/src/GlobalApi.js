import books from './books_2024.json';
import axios from 'axios';
const baseUrl='http://localhost:1337';
const apiKey="304170f96a3fdf03b9fa396ffbdf25c8183642e61e20fa6e45b8639065d425238b9bf1417c7d95b6bd2e4bb79014ef5ae06f6e80fc655719b76b8df50d133f02785499c85728489eba77df4e4979f93e259e187e0fe44266ecb21652164e1492756fb7a27a34e4cde7f00feba749af44ff14c96461707d6e5b46fff3f6b7e640"

const axios_instance=axios.create({
    baseURL:baseUrl,
    headers:{
        Authorization: "Bearer "+apiKey
    }
})

function baseInfoUpload(){
    
    books.books.map((item)=>{
        const json={
            data:{
               isbn:item.isbn,
               title:item.title,
               subtitle:item.subtitle,
               author:item.author,
               published:item.published,
               publisher:item.publisher,
               pages:item.pages,
               description:item.description,
               website:item.website,
               category:item.category,
            }
        }
        uploadLibro(json)
    })    
    
}

const getbooks=()=>axios_instance.get("api/books")

const uploadLibro=(data)=>axios_instance.post("/api/books",data)

const deleteBook=(id)=>axios_instance.delete("/api/books/"+id)

export default {
    baseInfoUpload,
    getbooks,
    uploadLibro,
    deleteBook,
}