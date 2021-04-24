import axios from '../Service/Service';
import React from 'react';
const post = ({ post }) => {

    const deleteHandler = () => {

        axios.delete('/' + post._id).then(res => res ? window.location.href = "/post" : '').catch(eror => console.log(eror))

    }

    const editChangeHandler = () => {
        window.location.href = "post/edit/" + post._id

    }
    //console.log(post)
    return (
        <div>
            <h1>{post.title}</h1>
            <p className="author_style">Written by {post.author} on {post.date} {post.time}</p>
            <p>{post.content}</p>
            <div>
                <button className="btn btn-danger" onClick={deleteHandler}>Delete</button> &nbsp;&nbsp;
                <button className="btn btn-primary" onClick={editChangeHandler}>Edit</button>
            </div>
            <hr />
        </div>
    )
}
export default post;