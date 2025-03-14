import { useState } from 'react';
import { Button, ButtonGroup, Code, Flex, Text, Title } from '@mantine/core';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Flex
        gap="md"
        justify="center"
        align="center"
        direction="column"
        wrap="wrap"
      >
        <Title >Vite + React</Title>
        <ButtonGroup>
        <Button onClick={() => setCount((count) => count - 1)}>
          -
        </Button>
        <Button onClick={() => setCount(0)} variant={"light"}>{count}</Button>
        <Button onClick={() => setCount((count) => count + 1)}>
          +
        </Button>
        </ButtonGroup>
        <Text>
          Edit <Code>src/App.tsx</Code> and save to test HMR
        </Text>
      </Flex>
    </>
  );
}

export default App;
