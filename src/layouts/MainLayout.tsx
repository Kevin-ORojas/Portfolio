import Sidebar from "../components/Sidebar";

import AppRoutes from "../routes/AppRoutes";

function MainLayout() {
  return (
    <div className="flex min-h-screen bg-[#0F172A]">
      <div>
        <Sidebar />
      </div>

      <main className="flex-1">
        <AppRoutes />
      </main>
    </div>
  );
}

export default MainLayout;
