"use client";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { slide as Menu } from "react-burger-menu";
import axios from "axios";
import React from "react";

interface JSONData {
  name: string;
  description: string;
  tags: string[];
  href: string;
}

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [toggle, setToggle] = React.useState(true);
  const [arrayData, setArrayData] = React.useState<JSONData[]>([]);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    setToggle(false);
    async function getData() {
      if (toggle) {
        await axios.get("/api/categories").then((response) => {
          for (let int in response.data.categories) {
            setArrayData((arrayData) => [
              ...arrayData,
              response.data.categories[int],
            ]);
          }
        });
        return;
      }
    }
    getData();
    console.log(arrayData);
  }, [arrayData, toggle]);
  return (
    <div className="relative p-2">
      <Menu
        customBurgerIcon={<HamburgerIcon />}
        width={"auto"}
        className="left-0 top-12"
        isOpen={isOpen}
        onOpen={toggleMenu}
        onClose={toggleMenu}
      >
        <Link
          id="home-navigation"
          className="menu-item"
          data-testid="burger-home-nav"
          href="/"
        >
          <Typography variant="h3">Subjects</Typography>
        </Link>
        {arrayData.map((element) => {
          return (
            <Link
              key={element.name}
              id={element.name}
              className="menu-item"
              href={element.href}
            >
              {element.name}
            </Link>
          );
        })}
      </Menu>
    </div>
  );
};

const HamburgerIcon = () => (
  <div className="p-1/2" data-testid="burger-icon">
    <svg
      className="w-8 h-8 text-gray-500"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
  </div>
);

export default HamburgerMenu;
