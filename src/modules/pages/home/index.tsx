import MainLayout from '../../layout/MainLayout';

const Home = (props: any) => {
  return (
    <MainLayout>
      <section className="bg-cover mt-[100px] bg-center flex items-center justify-center">
        <div className="h-[400px] w-[500px] bg-primaryLight"></div>
      </section>
    </MainLayout>
  );
};

export default Home;
