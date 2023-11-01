import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "@/components/Elements/Loader";
import { MainLayout } from "@/features/homepage/components/Layout";

export const App = () => {
  return (
    <MainLayout>
      <Suspense
        fallback={
          <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center">
            <Loader size="lg" />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </MainLayout>
  );
};
