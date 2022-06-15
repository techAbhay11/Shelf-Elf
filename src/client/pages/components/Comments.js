import React from 'react';
import { Text, Card, Heading } from 'rebass';
import { Link } from 'react-router-dom';

const Comments = ({comments}) => {
  const commentList = comments ? comments.map((comment, ind) => {
      console.log(comment);
      return (
        <Card
          sx={{
            p: 3,
            borderRadius: 2,
            boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
          }} my={3} key={ind}>
          <Heading as='h1' fontSize={3} my={2}>
            {comment.content}
          </Heading>
          <Text fontSize={2} mt={2} mb={2}>
            By: <Link to={comment.posted_by.user_link}>{comment.posted_by.username}</Link>
          </Text>
          <Text fontSize={2} mt={2} mb={2}>
            Upvotes: {comment.upvotes}
          </Text>
        </Card>
      );
    }) : (
      <Card
        sx={{
          p: 1,
          borderRadius: 2,
          boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
        }} my={2}>
        <Text fontSize={4} mt={2} mb={2}>
          No Comments
        </Text>
      </Card>
    )

  return (
    <React.Fragment>
      {commentList}
    </React.Fragment>
  );
}

export default Comments;
