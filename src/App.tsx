import { ThemeProvider } from "@/components/theme/theme-provider";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <div className="min-h-screen bg-background relative">
          <div 
            className="absolute inset-0 bg-[url('/hero-bg.png')] opacity-60 dark:opacity-20 bg-repeat"
            style={{ maskImage: 'linear-gradient(to bottom, black, transparent)' }}
          />
          <Navbar />
          <Header />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
