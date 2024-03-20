import { Box, Card, CircularProgress, Container, Grid, Stack } from '@mui/material';
import React from 'react';
import NewsFilter from '../../components/NewsFilter';
import NewsPost from '../../components/NewsPost';
import { useSelector } from 'react-redux';


export default function NewsPage(props) {
  
  const {loadingNewsList, newsList} = useSelector((state) => state.NewsArticles);
  const { articles } = newsList?.payload || {}
  
  return (
    <Stack sx={{ height: 'calc(100vh - 32px)', backgroundColor: '#e1e1e1', p: 2, overflowY: 'auto' }}>
      <Container>
        <Stack sx={{mb: 2}}><NewsFilter /></Stack>
        <Card sx={{p: 2 , minHeight:"200px"}}>
          <Grid container spacing={2}>
            {loadingNewsList ? <Box sx={{ display: 'flex', alignItems: 'center', mx: 'auto', height: 'calc(100vh - 248px)' }}>
              <CircularProgress />
            </Box> : !articles?.length ? <Box sx={{ display: 'flex', alignItems: 'center', mx: 'auto', height: 'calc(100vh - 248px)', fontSize: '24px', fontWeight: 600 }}>NO Result Found !</Box> :
              articles?.map((item, index) => (
                <Grid key={index} item xs={12} sm={6} md={4} lg={4} xl={3}>
                  <NewsPost item={item} />
                </Grid>
              ))
            }
          </Grid>
        </Card>
      </Container>
    </Stack>
  );
}