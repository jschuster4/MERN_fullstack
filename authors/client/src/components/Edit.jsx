import axios from "axios";
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'



const Edit = props => {
    const{_id} = useParams();
    const navigate = useNavigate();
    const [myForm, setMyForm] = useState({
        name: ""
    });
    const [error, setError] = useState({});


    useEffect(() => {
        axios.get("http://localhost:8000/api/author/" + _id)
        .then(res => setMyForm(res.data))
        .catch(err => console.log(err))
    }, [])

    const onSubmitHandler = e => {
        e.preventDefault(); 
        axios.put("http://localhost:8000/api/author/update/" + _id, myForm)
        .then(res =>{
            if (res.data.error){
                setError(res.data.error.errors)
            }
            else{
                navigate("/")
            }
        }, [error])
        .catch(err => console.log(err));
    }

    const onChangeHandler = e => {
        setMyForm({...myForm, [e.target.name]: e.target.value})
    }

    return(
        <div>
            <h1>Edit author</h1>
            <Link to={"/"}>Home</Link>
            <form onSubmit={onSubmitHandler}>
                <label htmlFor="name">Author Name:</label>
                <input type="text" name="name" onChange={onChangeHandler} value={myForm.name}/>
                {error.name ? error.name.message: ""}

                <input type="submit" value="Edit Author" />
            </form>
        </div>
    )
}

export default Edit;