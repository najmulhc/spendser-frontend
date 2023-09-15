import { Inter } from "next/font/google";
import DashboardSidebar from "./components/DashboardSidebar";
import ThemeProvider from "../providers/provider";
import DashboardHeader from "./components/DashboardHeader";
import { Separator } from "../components/ui/separator";
import AuthProtector from "../providers/authProviders";

const inter = Inter({
  subsets: ["latin"],
});
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body className={inter.className}>
        <ThemeProvider>
          <DashboardHeader />
          <AuthProtector>
            <main className="flex justify-start">
              <DashboardSidebar />
              <Separator
                className="min-h-screen hidden md:block"
                orientation="vertical"
              /> 
              {children}
            </main>
          </AuthProtector>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default DashboardLayout;
