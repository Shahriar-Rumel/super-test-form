import { Form, Formik } from 'formik';
import MainLayout from '../../layout/MainLayout';
import Input from '../../shared/components/Input';
import { useContext, useState } from 'react';
import { StepContext } from '../../hooks/StepContext';
import { Steps } from '../../shared/enums/steps';
import { validationSchema } from '../../schemas/validationSchema';
import InitialForm from './components/InitialForm';

const Home = (props: any) => {
  const { currentStep, setCurrentStep } = useContext(StepContext);
  const [isStepValid, setIsStepValid] = useState(false);

  const currentValidationSchema = validationSchema[currentStep === 0 ? 0 : 1];

  const handleValidation = async (values: any) => {
    try {
      await currentValidationSchema.validate(values, {
        abortEarly: false,
        context: { step: currentStep }
      });
      setIsStepValid(true);
    } catch (errors) {
      setIsStepValid(false);
    }
  };

  return (
    <MainLayout>
      <section className="bg-cover z-[999] mt-[50px] bg-center flex items-center justify-center">
        <div className="w-[500px] rounded-xl bg-primaryLight px-8 py-10">
          <Formik
            initialValues={{
              username: '',
              email: '',
              phone: '',
              country: '',
              password: '',
              repeatPassword: ''
            }}
            validationSchema={currentValidationSchema}
            onSubmit={() => {
              window.alert('Submitted');
            }}
            validate={handleValidation}
          >
            <Form>
              <InitialForm />
              {currentStep < Steps.REVIEW ? (
                <button
                  onClick={() => {
                    if (currentStep < Steps.REVIEW)
                      setCurrentStep((prev) => prev + 1);
                  }}
                  disabled={!isStepValid}
                  className={`${
                    isStepValid
                      ? 'bg-white text-primaryDark'
                      : 'bg-[#A39FC1] text-[#8B85B1]'
                  } h-[60px] text-[24px] font-medium w-[100%] rounded-md tracking-tight h-[60px]`}
                >
                  Continue
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-white text-[24px] font-medium w-[100%] rounded-md tracking-tight h-[60px]"
                >
                  Submit
                </button>
              )}
            </Form>
          </Formik>
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;
