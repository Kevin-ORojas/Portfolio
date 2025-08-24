import Sidebar from "../components/Sidebar";

import AppRoutes from "../routes/AppRoutes";

function MainLayout() {
  return (
    <div className="flex min-h-screen">
      <div>
        <Sidebar />
      </div>

      <main className="flex-1 p-4">
        <AppRoutes />
      </main>
    </div>
  );
}

export default MainLayout;
