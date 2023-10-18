import DashboardSidebar from "./components/DashboardSidebar";
import ThemeProvider from "../providers/provider";
import AuthProtector from "../providers/authProviders";
import Header from "../components/header/header";
import { Toaster } from "../components/ui/toaster";

export const dynamic = "force-dynamic";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <Header />
      <AuthProtector>
        <main className="flex relative top-0 min-w-screen">
          <DashboardSidebar />
          {children}
        </main>
        <Toaster/>
      </AuthProtector>
    </ThemeProvider>
  );
};

export default DashboardLayout;
