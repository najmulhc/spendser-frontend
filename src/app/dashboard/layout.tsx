import { Inter } from "next/font/google";
import DashboardSidebar from "./components/DashboardSidebar";
import ThemeProvider from "../providers/provider";
import DashboardHeader from "./components/DashboardHeader";
import AuthProtector from "../providers/authProviders";

const inter = Inter({
  subsets: ["latin"],
});

export const dynamic = "force-dynamic";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <DashboardHeader />
      <AuthProtector>
        <main className="flex relative min-w-screen">
          <DashboardSidebar />
          {children}
        </main>
      </AuthProtector>
    </ThemeProvider>
  );
};

export default DashboardLayout;
