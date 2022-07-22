import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'
import { Link } from 'react-router-dom'


const Home = props => {
    const [authors, setAuthors] = useState(null)

    useEffect(() => {
        axios.get("http://localhost:8000/api/author")
        .then(res => setAuthors(res.data))
        .catch(err => console.log(err));
    }, [authors])

    const handleDelete = id => {
        axios.delete("http://localhost:8000/api/author/delete/" + id)
        .then(() => console.log("item deleted"))
        .catch((err) => console.log("issue deleting", err));
    }

    return(
        <div className="container">
            <Link to={"/create"}>Add an Author</Link>
            <h1>We have quotes by:</h1>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>Author Name</th>
                        <th>Actions:</th>
                    </tr>
                </thead>
                <div>
                    {
                        authors ? authors.map((author, i) => <tr>
                            <td>{author.name}</td>
                            <td><Link to={`/update/${author._id}`}><button>Edit</button></Link><button onClick={() => handleDelete(author._id)}>Delete</button></td>
                        </tr>) : ""
                    }
                </div>
            </table>
        </div>
    )
}

export default Home;