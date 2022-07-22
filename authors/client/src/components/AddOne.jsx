import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'



const AddOne = props => {
    const navigate = useNavigate();
    const [myForm, setMyForm] = useState({
        name: ""
    });
    const [error, setError] = useState({})

    const onSubmitHandler = e => {
        e.preventDefault(); 
        axios.post("http://localhost:8000/api/author/create", myForm)
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
            <h1>Add Author</h1>
            <Link to={"/"}>Home</Link>
            <form onSubmit={onSubmitHandler}>
                <label htmlFor="name">Author Name:</label>
                <input type="text" name="name" onChange={onChangeHandler} value={myForm.name}/>
                {error.name ? error.name.message: ""}

                <input type="submit" value="Create New Author" />
            </form>
        </div>
    )
}

export default AddOne;