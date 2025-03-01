interface Props {
    value: string
}

export function Example({value}: Props) {
  return (
    <>
        <title>This is a different component</title>
        <p>value from parent: {value}</p>
    </>
  );
}
