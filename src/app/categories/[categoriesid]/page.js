import { getCategoryNews } from "@/utils/getCategoryNews";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

const CategoriesId = async ({ params, searchParams }) => {
  const data = await getCategoryNews(searchParams.category);

  return (
    <Box className="mx-4">
      <Typography>
        {searchParams.category} have {data.data.length} news
      </Typography>
      {data.data?.map((n) => (
        <Card key={n._id}>
          <CardActionArea>
            <CardMedia>
              <Image
                src={n.thumbnail_url}
                alt="news"
                width={850}
                height={800}
              />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {n.title}
              </Typography>
              <Typography color="text.secondary">
                {n.details.length > 200
                  ? `${n.details.slice(0)}...`
                  : n.details}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
};

export default CategoriesId;
