import React, { useState } from "react";
import { connect } from "react-redux";
import { addComment } from "../../actions/post";

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    addComment(postId, {text});
  };
  return (
    <div className="post-form">
      <div className="bg-primary p">
        <h3>Leave a Comment</h3>
      </div>
      <form className="form my-1" onSubmit={(e) => onSubmit(e)}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          name="text"
          cols="30"
          rows="5"
          placeholder="Create a post"
          required
        ></textarea>
        <input type="submit" className="btn btn-dark my-1" value="Submit" />
      </form>
    </div>
  );
};

export default connect(null, { addComment })(CommentForm);
