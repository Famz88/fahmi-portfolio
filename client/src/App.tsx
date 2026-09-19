import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import FamzzPos from "./pages/FamzzPos";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/projects/famzz-pos"} component={FamzzPos} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// Modern Technical Minimalism Portfolio
// - Default theme: light (clean, professional background)
// - Color palette: Deep slate blue primary (#1e293b), Cyan accent (#06b6d4)
// - Typography: IBM Plex Mono for headings, Inter for body
// - Theme is NOT switchable to maintain design consistency

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
