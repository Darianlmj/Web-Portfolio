import React, { useEffect } from "react";
import { Container, Typography, Card, Divider, Grid } from "@mui/material";
import Emoji from "../../components/Emoji/Emoji";
import getPosts from "./PostsData";
import { Link } from 'react-router-dom';
import './index.css'

const Posts = () => {
    useEffect(() => {
        document.title = "Posts | Darianlmj";  
    }, []);
    
    const posts = getPosts();

    return (
        <div style={{backgroundColor:'#fffdfa', paddingBottom: 10}}>
            <Container maxWidth="md" sx={{paddingTop: 5}}>
                <Typography sx={{fontSize: 80, fontFamily: 'lyon-display-web', fontWeight: 800}}>
                    Posts &nbsp;
                    <Emoji  symbol="📬"/>
                </Typography>
                <Typography sx={{color: '#777777'}}>
                    This page contains insight into some of the projects I've worked on. Typically, 
                    these projects take a considerable amount of time to make so the frequency of which posts 
                    are churned out may not be very frequent. However, I aim to write up at least one post a month.
                    Hope you understand.
                </Typography>

                <Grid container spacing={2} sx={{justifyContent: 'space-evenly', marginTop: 6, marginBottom: 6, 
                                                                      flexDirection: { xs: "column", md: "row"}, alignItems: {xs: 'center'}}}>
                    {posts.map((post) => (
                        <Grid  xs={9} md={5} sx={{paddingBottom: {xs: 5}}}>
                            <Link to={`/post/${post.id}`} style={{ textDecoration: 'none' }}>
                                <Card  className="postcard" sx={{padding: 3, borderRadius: 3, minHeight: 290}}>
                                    <Typography sx={{fontSize: '1.1rem', color: '#4285F4'}}>{post.tag}</Typography>
                                    <Typography sx={{fontSize: '2rem'}}>{post.title}</Typography>
                                    <Divider sx={{paddingTop: 1, marginBottom: 1.3}} />
                                    <Typography variant='p' sx={{color: '#777777'}}>{post.description}</Typography>
                                </Card>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}

export default Posts
