import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import news from "@/assets/news.png";
import { showCurrentDate } from "@/utils/getCurrentDate";

const Header = () => {
  const currentDate = showCurrentDate();
  return (
    <Box className="w-full">
      <Container>
        <Image
          src={news}
          alt="news"
          width={500}
          height={100}
          className="mx-auto my-4"
        />
        <Typography variant="body2" color="gray" textAlign={"center"}>
          Journalism Without Fear or Favour
        </Typography>
        <Typography
          variant="body2"
          textAlign={"center"}
          className="mb-4 text-lg  text-gray-700"
        >
          {currentDate}
        </Typography>
      </Container>
    </Box>
  );
};

export default Header;
