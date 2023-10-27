import React, { useState, useEffect } from 'react';
import SneakersCard from '../components/SneakersCard';


const ReadSneakers = (props) => {

    const [posts, setPosts] = useState([]);
    

    useEffect(() => {
        setPosts(props.data);
    }, [props]);
    
    return (
        <div className="ReadTrips">
            {
                posts && posts.length > 0 ?
                posts.map((post,index) => 
                   <SneakersCard key={post.id} 
                         id={post.id} 
                         brand_name={post.brand_name} 
                         description={post.description} 
                         sizes={post.sizes} 
                         price={post.price}
                         img_url={post.img_url} />
                ) : <h3 className="noResults">{'No Sneakers Yet 😞'}</h3>
            }
        </div>  
    )
}

export default ReadSneakers;