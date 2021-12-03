import { QueryClient, QueryClientProvider } from "react-query";

import { Add, List } from "./components";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <List />
      <Add />
    </QueryClientProvider>
  );
}

export default App;
