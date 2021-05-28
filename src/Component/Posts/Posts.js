import React, { Component } from "react";
import "./Posts.css";
import Post from "../Post/Post";
import axios from "../Service/Service";

class Posts extends Component {
  state = { posts: [], noPost: "" ,showLoader:true};

  async componentDidMount() {
      try {
        await axios.get("/")
        .then((response) => {
            console.log(response)
          this.setState({ posts: response.data });
          this.setState({showLoader:false})
          this.setState({ noPost: response.data.length === 0 ? (
                <h1 className="text-danger">No Posts is Available</h1>) : ""});
        })
          
      } catch (error) {
       console.log(error)   
      }
  }

  render() {
    // console.log(this.state.noPost)
    let postIndividual = this.state.posts.map((itr, index) => {
      return <Post post={itr} key={index} />;
    });
    return (
      <div className="container">
    
          {this.state.showLoader?<div className="text-center mt-5">
            <div className="spinner-border spinner-border-xl text-primary" role="status"></div>
            </div>:<>
            <div className="heading">
              <h1>All Posts</h1>
              <span>
                <a href="/post/new" className="btn btn-success mt-2">
                  + New Post
                </a>
              </span>
            </div>
            <hr />
           {postIndividual}
          {this.state.noPost}
          </>
    }
    
      </div>
    );
  }
}

export default Posts;
