import GlobalApi from "./GlobalApi";
import { useState, useEffect } from "react";

export default function AñadirLibrosForm({cerrar}) {
    const [isbn, setIsbn] = useState('');
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [author, setAuthor] = useState('');
    const [published, setPublished] = useState('');
    const [publisher, setPublisher] = useState('');
    const [pages, setPages] = useState('');
    const [description, setDescription] = useState('');
    const [website, setWebsite] = useState('');
    const [category, setCategory] = useState('');

    function subirLibroNuevo(){
        const json={
            data:{
               isbn:isbn,
               title:title,
               subtitle:subtitle,
               author:author,
               published:published,
               publisher:publisher,
               pages:pages,
               description:description,
               website:website,
               category:category,
            }
        }
        GlobalApi.uploadLibro(json).then(cerrar)
    }

    return (
        <div >
            <br></br>
            <div className="book-form">
            <h2 className="form-title">Formulario para añadir libro</h2>
            <div className="form-group">
                <label htmlFor="isbn">ISBN:</label>
                <input
                    type="text"
                    id="isbn"
                    value={isbn}
                    onChange={(event) => setIsbn(event.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="title">Título:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="subtitle">Subtítulo:</label>
                <input
                    type="text"
                    id="subtitle"
                    value={subtitle}
                    onChange={(event) => setSubtitle(event.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="author">Autor:</label>
                <input
                    type="text"
                    id="author"
                    value={author}
                    onChange={(event) => setAuthor(event.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="published">Publicado:</label>
                <input
                    type="date"
                    id="published"
                    value={published}
                    onChange={(event) => setPublished(event.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="publisher">Editorial:</label>
                <input
                    type="text"
                    id="publisher"
                    value={publisher}
                    onChange={(event) => setPublisher(event.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="pages">Páginas:</label>
                <input
                    type="text"
                    id="pages"
                    value={pages}
                    onChange={(event) => setPages(event.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="description">Descripción:</label>
                <input
                    type="text"
                    id="description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="website">Sitio web:</label>
                <input
                    type="text"
                    id="website"
                    value={website}
                    onChange={(event) => setWebsite(event.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="category">Categoría:</label>
                <input
                    type="text"
                    id="category"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                />
            </div>

            <button className="submit-button" onClick={subirLibroNuevo} >Enviar</button>
        
        </div>
        </div>
    )
}
