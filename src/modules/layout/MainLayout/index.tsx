import Header from '../../shared/components/Header';

const MainLayout = ({ children }: any) => {
  return (
    <>
      <Header />
      <main className="mx-auto">
        <>{children}</>
      </main>
    </>
  );
};

export default MainLayout;
