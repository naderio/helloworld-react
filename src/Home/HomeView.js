import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import * as Interaction from '../Shared/Interaction';

import { fetchPosts } from './state';

function HomeView() {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.Home.posts);

  React.useEffect(() => {
    dispatch(fetchPosts()).catch((error) => Interaction.toast({ type: Interaction.FAILURE, content: error.message }));
  }, [dispatch]);

  if (!posts) {
    return null;
  }

  return (
    <div>
      {posts.map((post) => (
        <Card key={post.id}>
          <CardActionArea>
            {!!post.pictureUrl && <CardMedia image={post.pictureUrl} title={post.title} />}
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {post.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {post.body}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Like
            </Button>
            <Button size="small" color="primary">
              Comment
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

export default HomeView;
