import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "../firebase/firebase";
import { Button, Spinner } from "react-bootstrap";
import avatar from "../assets/images/avatar.png";
import PostForm from '../components/posts/PostForm';
import PostList from '../components/posts/PostList';

const Posts = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();   
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (loading) return <Spinner animation="border" />;
        if (!user) return navigate("/");
    }, [user, loading]);

    const creatPosts = (newPost) => {
        setPosts([...posts, newPost]);
        updatePosts(posts);
    }

    const removePosts = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    const updatePosts = (posts) => {
        console.log(posts)
    }

    return (
        <div>
            <header className="header">
                <div className="wrapper">
                    <div className="header__inner">
                        <div className="header__logo">
                            <img src={avatar}></img>
                            <h1>LEGO TAMAGOTCHI</h1>
                        </div>
                        <div className="header__name">
                            <h3>logged in as {user?.email}</h3>
                        </div>
                        <div className="header__name">
                            <Button variant="dark" onClick={() => navigate("/dashboard")}>
                                Back
                            </Button>
                        </div>
                    </div>
                </div>
            </header>
            <div className='posts__main'>
                <PostForm creat={creatPosts}/>
                <PostList posts={posts} title='News list' remove={removePosts} />
            </div>            
        </div>
    );
};

export default Posts;