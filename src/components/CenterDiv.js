import React, { useState, useEffect } from "react";
import { Container, Box, Button, ButtonGroup } from "@mui/material";
import SelectionSort from "./algos/SelectionSort";
import BubbleSort from "./algos/BubbleSort";

export default function CenterDiv({ defTheme }) {
  const [myArr, setMyArr] = useState([]);
  const [test, settest] = useState([]);
  const [reRender, setReRender] = useState(0);
  const [loading, setLoading] = useState(true);

  const testSetter = (arr) => {
    settest(arr);
    setReRender(reRender + 1);
  };

  const updateArr = () => {
    let lengths = [];
    let len = [];
    for (let i = 0; i < 154; i++) {
      len.push(0);
      lengths.push(Math.floor(Math.random() * (68 - 20 + 1)) + 20 + "vh");
    }
    settest(len);
    setMyArr(lengths);
    setLoading(false);
  };

  const sortArr = (sortedArr) => {
    setMyArr(sortedArr);
    setReRender(reRender + 1);
  };

  useEffect(() => {
    if (reRender === 0) {
      updateArr();
    }
  }, [reRender]);

  return (
    <>
      <Container fixed style={{ marginTop: "2em", overflow: "hidden" }}>
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
              onClick={() => SelectionSort({ myArr, sortArr, testSetter })}
              variant="outlined"
              color={defTheme === "light" ? "primary" : "secondary"}
            >
              Selection
            </Button>
            <Button
              onClick={() => BubbleSort({ myArr, sortArr, testSetter })}
              variant="outlined"
              color={defTheme === "light" ? "primary" : "secondary"}
            >
              Bubble
            </Button>
            <Button
              variant="outlined"
              color={defTheme === "light" ? "primary" : "secondary"}
            >
              Three
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
            disabled={reRender === 0}
            onClick={() => setReRender(0)}
            variant="outlined"
            color={defTheme === "light" ? "primary" : "secondary"}
          >
            Generate New
          </Button>
        </Box>
        {!loading && (
          <Box
            sx={{
              bgcolor: defTheme === "light" ? "#cfe8fc" : "#3a3a3a",
              height: "70vh",
              display: "flex",
              alignItems: "flex-end",
              overflow: "hidden",
            }}
          >
            {myArr.map((len, idx) => (
              <Box
                key={idx}
                sx={{
                  bgcolor:
                    test[idx] === 0
                      ? defTheme === "light"
                        ? "#ca8cc5"
                        : "#173a5e"
                      : test[idx] === 3
                      ? "red"
                      : "purple",
                  height: len,
                  width: "2em",
                  border: "1px solid black",
                }}
              />
            ))}
          </Box>
        )}
      </Container>
    </>
  );
}
