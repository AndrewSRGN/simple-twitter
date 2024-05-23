import React, {useState} from 'react';
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";

const PostForm = ({create}) => {
    const [post, setPost] = useState({
        title: '',
        body: ''
    });

    const createPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post,
            id: Date.now()
        }
        setPost({title: '', body: ''});
        create(newPost);
    }

    return (
        <form>
            <Input value={post.title}
                   onChange={e => setPost({...post, title: e.target.value})}
                   type="text" placeholder="Post title"/>
            <Input value={post.body}
                   onChange={e => setPost({...post, body: e.target.value})}
                   type="text" placeholder="Post description"/>
            <Button onClick={createPost}>
                Create post
            </Button>
        </form>
    );
};

export default PostForm;