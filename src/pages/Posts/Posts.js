import React, { useEffect } from "react";
import { Container, Typography, Card, Divider, Grid } from "@mui/material";
import getPosts from "./PostsData";

const Posts = () => {
    useEffect(() => {
        document.title = "Posts | Darianlmj";  
    }, []);
    
    const posts = getPosts();

    return (
        <Container maxWidth="md" sx={{paddingTop: 5}}>
            <Typography sx={{fontSize: 80, fontFamily: 'lyon-display-web', fontWeight: 800}}>Posts</Typography>
            <Typography sx={{color: '#777777'}}>
                An insight into some of the projects I've worked on. Typically, 
                these projects take a considerable amount of time to complete but I aim to 
                write up one post a month. Hope you understand.
            </Typography>

            <Grid container spacing={2} sx={{justifyContent: 'space-evenly', marginTop: 6, marginBottom: 6}}>
                {posts.map((post) => (
                    <Grid  xs={5}>
                        <Card to={`/posts/${post.id}`} sx={{padding: 3, borderRadius: 3, minHeight: 290}}>
                            <Typography sx={{fontSize: '1.2rem', color: '#4285F4'}}>{post.tag}</Typography>
                            <Typography sx={{fontSize: '2rem'}}>{post.title}</Typography>
                            <Divider sx={{paddingTop: 1, marginBottom: 1}} />
                            <Typography variant='p' sx={{color: '#777777'}}>{post.description}</Typography>
                        </Card>
                    </Grid>
                ))}
            </Grid>

        </Container>
    )
}

export default Posts
