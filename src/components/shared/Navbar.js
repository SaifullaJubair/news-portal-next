"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { IconButton } from "@mui/material";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import Link from "next/link";

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
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  return (
    <AppBar position="static" className="bg-black">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image src={logo} alt="logo" width={100} height={100} />
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "center",
              },
            }}
          >
            {namItems.map((item) => (
              <Link href={item.pathName} key={item.route}>
                <Button className="text-white">{item.route}</Button>
              </Link>
            ))}
          </Box>
          <Box>
            <IconButton className="text-white flex gap-1">
              <Facebook />
              <Twitter />
              <YouTube />
              <LinkedIn />
              <Instagram />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
