import { Card, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";

const NewsCard = ({
  name,
  image,
  url
}) => {
  const navigate = useNavigate();

  const gotoNews = () => {
    navigate(`/dashboard/${url}`)
  }
  return (
    <Card
      onClick={gotoNews}
      sx={{
        position: 'relative', cursor: 'pointer',
        transition: 'transform 0.2s ease-out, opacity 0.2s ease-out, filter 0.2s ease-out',
        '&:hover' : {
          transform: 'scale(1.1)',
          '& .MuiTypography-root': {
            color: 'blue',
            textDecoration: 'underline',
          }
        }
      }}
    >
      <CardMedia
        component="img"
        height="320"
        image={image}
        alt={name}
        sx={{
          objectFit: 'contain'
        }}
      />
      <Typography
        variant="h6"
        component="h2"
        sx={{
          textAlign: 'center', position: 'absolute', left: 0, bottom: 10, width: 1,
        }}
      >
        {name}
      </Typography>
    </Card>
  );
};

export default NewsCard;
