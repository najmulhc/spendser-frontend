import DashboardSidebar from "./components/DashboardSidebar";
import ThemeProvider from "../providers/provider";
import AuthProtector from "../providers/authProviders";
import Header from "../components/header/header";

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
      </AuthProtector>
    </ThemeProvider>
  );
};

export default DashboardLayout;
