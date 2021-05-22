import axios from "../Service/Service";
import React, { Component } from "react";

class EditPost extends Component {
  state = {
    author: "",
    title: "",
    content: "",
    post: [],
    _id: "",
  };
  async componentDidMount() {
    try {
      await axios.get("/" + this.props.match.params.i).then((res) => {
        this.setState({ post: res.data });
        this.setState({
          author: res.data.author,
          title: res.data.title,
          content: res.data.content,
          _id: res.data._id,
        });
      });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
     const  submitHandler =  async (event) => {
      let date = new Date();
      event.preventDefault();
      const data = {
        title: this.state.title,
        author: this.state.author,
        content: this.state.content,
        date:date.getFullYear() +"-" + parseInt(date.getMonth() + 1) + "-" + date.getDate(),
        time:date.getHours() +":" +date.getMinutes() +":" +date.getSeconds() + "." + date.getMilliseconds(),
      };
      console.log(data)
      try {
         axios
          .patch("/" + this.state._id, data)
          .then((response) =>
            response.status ? (window.location.href = "/post") : ""
          );
      } catch (error) {
        console.log(error);
      }
    }

    return (
      <div className="container">
        <h1>Editing Post</h1>
        <hr />
        <h3>Edit</h3>
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="Title">Title:</label>
            <input
              className="form-control"
              type="text"
              name="title"
              id="Title"
              value={this.state.title}
              placeholder="Enter Title"
              required
              onChange={(event) => {
                this.setState({ title: event.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Author">Author:</label>
            <input
              className="form-control"
              type="text"
              name="author"
              id="Author"
              value={this.state.author}
              placeholder="Enter Author"
              required
              onChange={(event) => {
                this.setState({ author: event.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Content">Content:</label>
            <textarea
              className="form-control"
              type="text"
              name="content"
              id="Content"
              rows="3"
              value={this.state.content}
              placeholder="Enter Content"
              required
              onChange={(event) => {
                this.setState({ content: event.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <button>Save</button>
          </div>
        </form>
      </div>
    );
  }
}

export default EditPost;
