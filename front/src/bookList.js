import GlobalApi from "./GlobalApi";
import { useState, useEffect } from "react";

export default function BookList() {
    const [list, setlist] = useState(null)
    const [selectedBook, setSelectedBook] = useState(null)

    function EliminarLibro(id){
        GlobalApi.deleteBook(id)
        window.location.reload()
    }
    useEffect(() => {
        getLibros()

    }, [])
    const getLibros = () => GlobalApi.getbooks().then((resp) => { setlist(resp.data.data) })
    if (list != null) {
        console.log(list);
        return (

            <div>
                <div class="book-grid">
                    {
                        list.map(item =>
                            <button onClick={() => setSelectedBook(item)}><div key={item.id} class="book">
                                <h3>{item.attributes.title}</h3>
                                <p>{item.attributes.author}</p>
                            </div>
                            </button>

                        )
                    }

                </div>
                {selectedBook && (
                    <div>
                        <h2>Libro seleccionado</h2>
                        <p>ISBN: {selectedBook.attributes.isbn}</p>
                        <p>Título: {selectedBook.attributes.title}</p>
                        <p>Subtítulo: {selectedBook.attributes.subtitle}</p>
                        <p>Autor: {selectedBook.attributes.author}</p>
                        <p>Publicado: {selectedBook.attributes.published}</p>
                        <p>Editorial: {selectedBook.attributes.publisher}</p>
                        <p>Páginas: {selectedBook.attributes.pages}</p>
                        <p>Descripción: {selectedBook.attributes.description}</p>
                        <p>Sitio web: {selectedBook.attributes.website}</p>
                        <p>Categoría: {selectedBook.attributes.category}</p>
                        <button onClick={()=>EliminarLibro(selectedBook.id)}>Eliminar</button>
                    </div>
                    
                )}
            </div>
        )
    }
}