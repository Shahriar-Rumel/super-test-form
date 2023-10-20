import { Form, Formik } from 'formik';
import MainLayout from '../../layout/MainLayout';
import Input from '../../shared/components/Input';

const Home = (props: any) => {
  return (
    <MainLayout>
      <section className="bg-cover z-[999] mt-[100px] bg-center flex items-center justify-center">
        <div className="h-[400px] w-[500px] rounded-xl bg-primaryLight px-4 py-6">
          <Formik
            initialValues={{
              username: '',
              email: '',
              country: '',
              password: '',
              repeatPassword: ''
            }}
            onSubmit={() => {}}
          >
            <Form>
              <Input
                label="Username"
                name="username"
                type="text"
                placeholder="Input your username"
              />
              <Input
                label="Email"
                name="email"
                type="text"
                placeholder="Input your email"
              />
              <Input
                label="Country"
                name="country"
                type="text"
                placeholder="Input your email"
              />
            </Form>
          </Formik>
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;
