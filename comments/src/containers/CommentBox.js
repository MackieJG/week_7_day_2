import React, {useState} from 'react';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';


const CommentBox = () => {
    const [comments, setComments] = useState([
        {
            id: 1,
            author: 'R Henry',
            text: 'Great Food!'
        },
        {
            id: 2,
            author: 'V Gibson',
            text: 'Soggy Chips'
        }
    ]);

    const addComment = (submittedComment) => {
        submittedComment.id = Date.now();
        const copyComments = [...comments, submittedComment];
        setComments(copyComments);
        

    }
return (
<>
    <h1> Comments</h1>
    <CommentList comments={comments}/>
    <h2>Add a Comment</h2>
    <CommentForm onCommentSubmit={addComment}/>
    
</>
  );
}

export default CommentBox;