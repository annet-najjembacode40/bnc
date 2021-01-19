import React from 'react';


class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = { x: 0, y: 0 };
    };
    
    render () {
        return (
            <div>
                <span>
                    <video width="300" height="300" controls>
                        <source src={this.props.videoURL} type="video/mp4" />
                    </video>
                </span>
            </div>
        );
    };
};

export default Post;