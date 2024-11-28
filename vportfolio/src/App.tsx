import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import Navbar from "./components/navbar";
import Page from "./Page";

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <TooltipProvider delayDuration={0}>
        <Page />
        <Navbar />
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
