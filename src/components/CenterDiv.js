import React, { useState, useEffect } from "react";
import {
  Container,
  Box,
  Button,
  ButtonGroup,
  Slider,
  Typography,
} from "@mui/material";
import SelectionSort from "./algos/SelectionSort";
import BubbleSort from "./algos/BubbleSort";
import MergeSort from "./algos/MergeSort";
import QuickSort from "./algos/QuickSort";

export default function CenterDiv({ defTheme }) {
  const [myArr, setMyArr] = useState([]);
  const [reRender, setReRender] = useState(0);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(20);
  const [delay, setDelay] = useState(150);
  function delayFunc() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("");
      }, delay);
    });
  }

  const swap = async (a, b) => {
    let temp = a.style.height;
    a.style.height = b.style.height;
    b.style.height = temp;
  };

  const clearArr = () => {
    setLoading(true);
    setMyArr([]);
  };

  const updateArr = async () => {
    await clearArr();
    let lengths = [];
    let len = [];
    for (let i = 0; i < value; i++) {
      len.push(1);
      lengths.push(Math.floor(Math.random() * (68 - 20 + 1)) + 20 + "vh");
    }
    setMyArr(lengths);
    setLoading(false);
  };

  const updateValueFunc = (newValue) => {
    setValue(newValue);
  };

  const handleSizeSliderChange = async (event, newValue) => {
    await updateValueFunc(newValue);
  };

  const updateDelayFunc = (newValue) => {
    setDelay(newValue);
  };

  const handleDelaySliderChange = async (event, newValue) => {
    await updateDelayFunc(newValue);
  };

  useEffect(() => {
    updateArr();
  }, [reRender, value]);

  return (
    <>
      <Container fixed style={{ marginTop: "2em" }}>
        <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
          <Box sx={{ width: "100%", marginX: "1em" }}>
            <Typography gutterBottom>Size: {value}</Typography>
            <Slider
              min={5}
              step={5}
              max={300}
              defaultValue={value}
              color={defTheme === "light" ? "primary" : "secondary"}
              onChange={handleSizeSliderChange}
              aria-label="Default"
              valueLabelDisplay="auto"
            />
          </Box>
          <Box sx={{ width: "100%" }}>
            <Typography gutterBottom>Speed: {delay}ms</Typography>
            <Slider
              min={20}
              step={10}
              max={300}
              defaultValue={delay}
              color={defTheme === "light" ? "primary" : "secondary"}
              onChange={handleDelaySliderChange}
              aria-label="Default"
              valueLabelDisplay="auto"
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <ButtonGroup
            size="large"
            variant="outline"
            aria-label="outlined primary button group"
          >
            <Button
              onClick={() => SelectionSort({ swap, delayFunc })}
              variant="outlined"
              color={defTheme === "light" ? "primary" : "secondary"}
            >
              Selection
            </Button>
            <Button
              onClick={() => BubbleSort({ swap, delayFunc })}
              variant="outlined"
              color={defTheme === "light" ? "primary" : "secondary"}
            >
              Bubble
            </Button>
            <Button
              onClick={() => MergeSort({ swap, delayFunc })}
              variant="outlined"
              color={defTheme === "light" ? "primary" : "secondary"}
            >
              Merge
            </Button>
            <Button
              onClick={() => QuickSort({ swap, delayFunc })}
              variant="outlined"
              color={defTheme === "light" ? "primary" : "secondary"}
            >
              Quick
            </Button>
          </ButtonGroup>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            marginBottom: "2em",
          }}
        >
          <Button
            onClick={() => setReRender(reRender + 1)}
            variant="outlined"
            color={defTheme === "light" ? "primary" : "secondary"}
          >
            Generate New
          </Button>
        </Box>
        {!loading && (
          <Box
            sx={{
              height: "70vh",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            {myArr.map((len, idx) => (
              <Box
                style={{
                  height: len,
                  backgroundColor: defTheme === "light" ? "#ca8cc5" : "#173a5e",
                }}
                className="bar"
                key={idx}
                sx={{
                  width: "100%",
                  border: "1px solid black",
                }}
              ></Box>
            ))}
          </Box>
        )}
      </Container>
    </>
  );
}
