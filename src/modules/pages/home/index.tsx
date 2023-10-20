import MainLayout from '../../layout/MainLayout';

const Home = (props: any) => {
  return (
    <MainLayout>
      <header>
        
      </header>
      <section
        style={{ backgroundImage: `url("/assets/bg.png")` }}
        className="h-[100vh] bg-cover bg-center"
      ></section>
    </MainLayout>
  );
};

export default Home;
