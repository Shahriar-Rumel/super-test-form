import Aside from '../../shared/components/Aside';
import Header from '../../shared/components/Header';

const MainLayout = ({ children }: any) => {
  return (
    <>
      <Header />
      <Aside />
      <main className="mx-auto">{children}</main>
    </>
  );
};

export default MainLayout;
