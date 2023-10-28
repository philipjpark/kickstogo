import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import './SneakerDetails.css'

const SneakerDetails = ({data}) => {

    const {id} = useParams();
    const [post, setPost] = useState({id: 0, brand_name: "", description: "", sizes: "", price: "", img_url: ""})

    useEffect(() => {
        const result = data.filter(item => item.id === parseInt(id))[0];

        setPost({id: parseInt(result.id), brand_name: result.brand_name, description: result.description, sizes: result.sizes, price: result.price, img_url: result.img_url});

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
            
        </div>
            


    )
}

export default SneakerDetails