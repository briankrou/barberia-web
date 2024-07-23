
function App() {
  const MyButton = (props: { text: string }) => {
    return (
      <button>{props.text}</button>
    );
  };

  return (
    <>
      <p className="bg-red-500 md:text-lg">Hola</p>
      <MyButton text="s" />
    </>
  );
}

export default App;
