interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({
  children
}: MainLayoutProps): React.ReactElement | null => {
  return (
    <>
      <main className="min-h-screen w-full">{children}</main>
    </>
  );
};
