import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { fetch } from "../../store/csrf"

export default function Reviews() {
    const [reviews, setReviews] = useState([])
    const {id} = useParams()

    useEffect(() => {
        const fetchReviews = async (id) => {
            try {
                const res = await fetch(`/api/restaurants/${id}/reviews`)
                
                const reviews = res.data
                console.log(reviews)
                if(reviews) setReviews(reviews)
            } catch(err) {
                console.error(err)
            }
        }

        fetchReviews(id)
    }, [])
    return (
        <div>
            <ul>
                {reviews ? reviews.map(review => (<li key={review.id}>
                    <p>{review.User.username}</p>
                    <p>{review.content}</p>
                </li>)) : <div>No Reviews</div>}
            </ul>
        </div>
    )
}
