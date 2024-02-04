import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import Link from "next/link";
const Footer = () => {
  const namItems = [
    {
      route: "Home",
      pathName: "/",
    },
    {
      route: "Pages",
      pathName: "/pages",
    },
    {
      route: "Category",
      pathName: "/category",
    },
    {
      route: "About",
      pathName: "/about",
    },
    {
      route: "Contact",
      pathName: "/contact",
    },
  ];
  return (
    <Box className="bg-black text-white px-2 pt-10 pb-9">
      <Container>
        <Box
          className="w-full text-center "
          sx={{ "& svg": { color: "white", fontSize: 30, margin: "0 10px" } }}
        >
          <IconButton>
            <Facebook />
            <Twitter />
            <YouTube />
            <LinkedIn />
            <Instagram />
          </IconButton>
        </Box>
        <Box className="w-full my-4 text-center">
          {namItems.map((item) => (
            <Link href={item.pathName} key={item.route}>
              <Button className="text-white">{item.route}</Button>
            </Link>
          ))}
        </Box>
        <Typography variant="body2" color="gray" textAlign={"center"}>
          @2023 News Portal. Design by Saifulla
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
