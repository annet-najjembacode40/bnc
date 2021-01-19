import React from 'react';
import Post from './post';

class Feed extends React.Component {
  render () {
    return (
        <div>
            <Post videoURL="https://dl.dropboxusercontent.com/s/7b21gtvsvicavoh/statue-of-admiral-yi-no-audio.mp4?dl=1"/>
            <Post videoURL="https://dl.dropboxusercontent.com/s/7b21gtvsvicavoh/statue-of-admiral-yi-no-audio.mp4?dl=1"/>
            <Post videoURL="https://dl.dropboxusercontent.com/s/7b21gtvsvicavoh/statue-of-admiral-yi-no-audio.mp4?dl=1"/>
        </div>
    );
  }
}

export default Feed;