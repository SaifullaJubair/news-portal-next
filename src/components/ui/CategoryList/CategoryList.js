import { getAllCategories } from "@/utils/getAllCategories";
import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";

const CategoryList = async () => {
  const { data: categories } = await getAllCategories();
  return (
    <Box className="mt-5 bg-slate-50 py-2 px-5">
      <Typography variant="h5" sx={{ mb: 3 }}>
        {" "}
        Categories
      </Typography>
      <Divider />
      <Stack rowGap={1} sx={{ mt: 3 }}>
        {categories?.map((category) => (
          <Button variant="outlined" key={category._id}>
            <Link
              href={`/categories/news?category=${category.title.toLowerCase()}`}
              className="w-full h-full"
            >
              {" "}
              {category.title}
            </Link>
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export default CategoryList;
