import React from 'react';

const Comment = ({ author, children }) => {
    return (
    <div>
        <h4>{author}</h4>
        <p>{children}</p>
    </div>
    )

}

export default Comment;