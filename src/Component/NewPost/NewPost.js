import axios from '../Service/Service';
import React,{Component} from 'react';
class NewPost extends Component{
    state={
        title:null,
        author:null,
        content:null
    }
   

    render(){
        let date= new Date();
        const submitHandler =(event)=>{
            event.preventDefault();
            const data={
                title:this.state.title,
                author:this.state.author,
                content:this.state.content,
                date: date.getFullYear()+"-"+ parseInt(date.getMonth()+1) +"-"+date.getDate(),
                time:date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+"."+date.getMilliseconds()
                // time:new Date().getTime()
            }
            axios.post('/newpost',data).then(response => response.status=== 201? window.location.href="/post":'')
            .catch(error=> console.log(error))

        }
        return(
        <div className="container"> 
        <h1>New Post</h1>
        <hr/>
        <h3>Create New Blog Post</h3>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="Title">Title:</label>
                    <input  className="form-control"
                    type="text" name="title" id="Title"
                    placeholder="Enter Title" required onChange={(event)=>{this.setState({title:event.target.value})}}/>
                </div>
                <div className="form-group">
                    <label htmlFor="Author">Author:</label>
                    <input  className="form-control"
                    type="text" name="author" id="Author"
                    placeholder="Enter Author" required onChange={(event)=>{this.setState({author:event.target.value})}}/>
                </div>
                <div className="form-group">
                    <label htmlFor="Content">Content:</label>
                    <textarea  className="form-control"
                    type="text" name="content" id="Content" rows="3"
                    placeholder="Enter Content" required onChange={(event)=>{this.setState({content:event.target.value})}}/>
                </div>
            <div className="form-group">
                <button>Post</button>
            </div>
            </form>
            <hr/>
        </div>)
    }
}
export default NewPost;