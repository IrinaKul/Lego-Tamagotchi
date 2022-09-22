import React from 'react';
import { Button } from "react-bootstrap";
import s from "./PostForm.module.css";

const PostList = ({ posts, title, remove }) => {
    return (
        <div>
            <h1 className={s.post__title}>{title}</h1>
            {posts.map((post, index) => 
                <div key={post.id} className={s.post__container}>
                    <div className={s.post__content}>
                        <img src={post.url} className={s.post__img}></img>
                        <div className={s.post__text}>
                            <strong>{index+1} {post.title}</strong>
                            <div>
                                {post.text}
                            </div>    
                        </div>                                            
                    </div>
                    <div className='post__delete'>
                        <Button onClick={() => remove(post)} className={s.post__button}>Удалить</Button>
                    </div>                    
                </div>
            )}
        </div>
    );
};

export default PostList;