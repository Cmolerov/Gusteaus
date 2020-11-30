import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'

import {fetch} from "../../store/csrf"

export default function ReviewForm() {
    const [content, setContent] = useState("")
    const [errors, setErrors ] = useState([])
    const user = useSelector((state) => {
        return state.session.user
    })

    const history = useHistory();
    const {id} = useParams()

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("hello")
        setErrors([])
        try {

            if(!user) history.push("/login")
            const data = {
                restaurantId: id,
                userId : user.id,
                content
            }

            console.log(data)
            const res = await fetch("/api/reviews/", {
                method: "POST",
                body: JSON.stringify(data)
            })

            
            const review = res.data
            console.log(review)

        } catch(err) {
            setErrors([err])
        }
    }

    const updateContent = (e) => {
        e.preventDefault();
        setContent(e.target.value);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <ul>
                    {errors.map((error, idx) => {
                        <li key={idx}>{error}</li>
                    })}
                </ul>
                <input type="text" value={content} onChange={updateContent} required />
                <button type="submit" >SUBMIT</button>
            </form>

        </div>
    )
}
