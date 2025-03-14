import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button, Stack, Typography } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Stack
        direction="column"
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <Typography variant={"h3"}>Vite + React</Typography>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <Typography variant={"h4"}>
          Edit src/App.tsx and save to test HMR
        </Typography>
        <Typography>Click on the Vite and React logos to learn more</Typography>
      </Stack>
    </>
  );
}

export default App;
