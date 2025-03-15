type Props<T> = {
  data: T;
  render: (item: T) => JSX.Element
}

const Comp = <T,>({ data, render }: Props<T>) => {
  return <div>{ render (data) }</div>
}

type User = {
  name: string;
}

const user: User = { name: "nadjib" }

function App() {
  return (
    <Comp<User> 
      data={user}
      render={(data: User) => <b>{data.name}</b>}
     />
  );
}

export default App;
