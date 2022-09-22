import React, { useState } from 'react';
import { Button } from "react-bootstrap";
import s from "./PostForm.module.css";
import axios from "axios";

const PostForm = ( {creat}) => {
    const [post, setPost] = useState({title: '', text: '', id: 0, url: ''});    

    const addNewPost =  (e) => {
        e.preventDefault();
        const newPost = {
            ...post,
            id: Date.now()
        }        
        creat(newPost);
        sendPost(post);
        setPost({title: '', text: '', id: 0, url: ''});
    }

    // const addNewPost = async (e) => {
        
    //     e.preventDefault();
    //     try {
    //         const auth = await axios.post("https://tamagotchi-backend.herokuapp.com/user/login", {
    //             login: "string",
    //             password: "string",
    //         });

    //         const response = await axios.post(
    //             "https://tamagotchi-backend.herokuapp.com/image_data/",
    //             { title: post.title, text: post.text, url: post.url },
    //             {
    //                 headers: {
    //                     Authorization: `Bearer ${auth.data.access_token}`,
    //                 },
    //             }
    //         );
    //         console.log(response.data);            
    //     } catch (err) {
    //         console.log(err);
    //     }
    //     creat(post);
    //     console.log(post.id);
    //     setPost({title: '', text: '', id: 0, url: ''});
    // };
    

    const sendPost = async (posts) => {
        try {
            const auth = await axios.post("https://tamagotchi-backend.herokuapp.com/user/login", {
                login: "string",
                password: "string",
            });

            const response = await axios.post(
                "https://tamagotchi-backend.herokuapp.com/image_data/",
                { title: posts.title, text: posts.text, url: posts.url },
                {
                    headers: {
                        Authorization: `Bearer ${auth.data.access_token}`,
                    },
                }
            );
            console.log(response.data);            
        } catch (err) {
            console.log(err);
        }               
    };

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
                value={post.text}
                onChange={e => setPost({...post, text: e.target.value })}
            />
            <input 
                type="text"
                placeholder='Ваша картинка'
                value={post.url}
                onChange={e => setPost({...post, url: e.target.value})}
            />
            <Button onClick={addNewPost} className={s.button__form}>Создать новость</Button>            
        </form>
    );
};

export default PostForm;