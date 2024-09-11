import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { OrderDetailsPage } from "./pages/OrderDetailsPage";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyles } from "./GlobalStyles";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  { path: "/order_details", element: <OrderDetailsPage /> },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div className="App">
          <RouterProvider router={router} />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
