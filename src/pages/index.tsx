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
  name: string;
  description: string;
  tags: string[];
  href: string;
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
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

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
    <ThemeProvider theme={darkTheme}>
      <div>
        <Typography variant="h2" style={{ margin: 20, textAlign: "center" }}>
          Welcome to the Library
        </Typography>
        {arrayData.map((element) => {
          return (
            <div key={element.name} style={{ textAlign: "center" }}>
              <Link id={element.name} className="menu-item" href={element.href}>
                <Card
                  variant="outlined"
                  style={{
                    marginRight: "10vw",
                    marginLeft: "10vw",
                    padding: 20,
                    marginBottom: "5vh",
                  }}
                >
                  <CardContent>
                    <Typography variant="h2" sx={{ mb: 2 }}>
                      {element.name}
                    </Typography>
                    <Typography>{element.description}</Typography>
                  </CardContent>
                </Card>
              </Link>
            </div>
          );
        })}
      </div>
    </ThemeProvider>
  );
}
