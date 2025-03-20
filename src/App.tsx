import { ThemeProvider } from "@/components/theme/theme-provider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <h1 className="text-4xl font-bold mb-4">Shadcn com Dark Mode 🎯</h1>
        <p className="">Mas um teste aqui!</p>
        <Button>Botão Teste</Button>
        <ThemeToggle />
    </ThemeProvider>
  );
}

export default App;
