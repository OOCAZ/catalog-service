"use client";

import Image from "next/image";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CssBaseline,
  Tab,
  Tabs,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import React, { useEffect } from "react";
import axios from "axios";
import HamburgerMenu from "@/src/components/menus/hamburger";
import Link from "next/link";
import { useRouter } from "next/router";

interface JSONData {
  id: number;
  description: string;
  category: string;
  path: string;
  short_name: string;
  full_name: string;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function Home() {
  const [toggle, setToggle] = React.useState(true);
  const [arrayData, setArrayData] = React.useState<JSONData[]>([]);
  const [setData, setSetData] = React.useState<JSONData[]>([]);
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const router = useRouter();
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  useEffect(() => {
    setToggle(false);
    async function getData() {
      let trimmed = router.basePath.replace(
        "http://localhost:3000/categories/",
        ""
      );
      if (toggle) {
        await axios.get("/api/books").then((response) => {
          for (let int in response.data.books) {
            if (response.data[int] == trimmed) {
              setSetData((arrayData) => [...arrayData, response.data[int]]);
            }
            setArrayData((arrayData) => [
              ...arrayData,
              response.data.books[int],
            ]);
          }
        });
        return;
      }
    }
    getData();
    console.log(arrayData);
  }, [arrayData, toggle]);

  arrayData.forEach((x, i) => {});

  return (
    <ThemeProvider theme={darkTheme}>
      <div>
        <Typography variant="h2" style={{ margin: 20, textAlign: "center" }}>
          {}
        </Typography>
        {arrayData.map((element) => {
          console.log(setData);
          return (
            <div key={element.short_name} style={{ textAlign: "center" }}>
              <Card
                variant="outlined"
                style={{
                  marginRight: "10vw",
                  marginLeft: "10vw",
                  padding: 20,
                  marginBottom: "5vh",
                }}
              >
                <Link
                  id={element.short_name}
                  className="menu-item"
                  href={element.path}
                >
                  <CardContent>
                    <Typography variant="h2" sx={{ mb: 2 }}>
                      {element.short_name}
                    </Typography>
                    <Typography>{element.description}</Typography>
                  </CardContent>
                </Link>
              </Card>
            </div>
          );
        })}
      </div>
    </ThemeProvider>
  );
}
