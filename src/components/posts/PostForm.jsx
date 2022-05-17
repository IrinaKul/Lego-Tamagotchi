import React, { useState } from 'react';
import { Button } from "react-bootstrap";
import s from "./PostForm.module.css";

const PostForm = ( {creat}) => {
    const [post, setPost] = useState({title: '', description: ''});

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, 
            id: Date.now(), 
            url: 'https://detiplanet.ru/upload/iblock/0c6/0c6928bda57395aa80c4e4d14eac080e.png',
            deeplink: '',
        }
        creat(newPost);
        setPost({title: '', description: ''});
    }

    return (
        <form>
            <input 
                type='text'
                placeholder='Название поста'
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value })}
            />
            <input 
                type='text'
                placeholder='Описание поста'
                value={post.description}
                onChange={e => setPost({...post, description: e.target.value })}
            />
            <Button onClick={addNewPost} className={s.button__form}>Создать новость</Button>            
        </form>
    );
};

export default PostForm;