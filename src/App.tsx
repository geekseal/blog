import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle />
      <Button>Click me</Button>
    </ThemeProvider>
  );
}

export default App;
