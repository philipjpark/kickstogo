import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import CommentBtn from '../components/CommentBtn'
import './SneakerDetails.css'

const SneakerDetails = ({data}) => {

    const {id} = useParams();
    const [post, setPost] = useState({id: 0, brand_name: "", description: "", sizes: "", price: "", img_url: ""})
    const [comments, setComments] = useState([])

    useEffect(() => {
        const result = data.filter(item => item.id === parseInt(id))[0];

        setPost({id: parseInt(result.id), brand_name: result.brand_name, description: result.description, sizes: result.sizes, price: result.price, img_url: result.img_url});


        const fetchComments = async () => {
            const response = await fetch('/api/comments/' + id)
            const data = await response.json()
            setComments(data)
        }

        fetchComments();

    }, [data, id]);


    return (
        <div className="out">
            <div className="flex-container">

                <div className="left-side">
                    <h3>{post.brand_name}</h3>
                    <p>{"🗒️ Description: " + post.description}</p>
                    <p>{"✔️ Sizes: " + post.sizes }</p>
                    <p>{"🏷️ Price: " + post.price}</p>
                </div>

                <div className="right-side" style={{ backgroundImage:`url(${post.img_url})`}}>
                </div>
            </div>

            <div className="flex-container">
                <div className="activities">
                {
                comments && comments.length > 0 ?
                comments.map((comment,index) => 
                    <CommentBtn id={comment.id} comments={comment.comment} num_votes={comment.num_votes}/>
                ) : ''
                }
                    <br/>
                    <Link to={'../../comment/create/'+ id }><button className="addCommentBtn">+ Add Comment</button></Link>
                </div>

            </div>
            
        </div>
    
    )
}

export default SneakerDetails

