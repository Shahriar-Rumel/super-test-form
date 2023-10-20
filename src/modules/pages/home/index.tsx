import { useContext, useState } from 'react';
import { Form, Formik } from 'formik';
import { Icon } from '@iconify/react';

import { StepContext } from '../../hooks/StepContext';
import { validationSchema } from '../../schemas/validationSchema';

import MainLayout from '../../layout/MainLayout';
import { Steps } from '../../shared/enums/steps';
import initialValues from '../../shared/model/initialValues';
import InitialForm from './components/InitialForm';
import PasswordForm from './components/PasswordForm';
import Review from './components/Review';

const renderStep = (step: number) => {
  switch (step) {
    case Steps.INITIAL_INFO:
      return <InitialForm />;
    case Steps.PASSWORD_SCREEN:
      return <PasswordForm />;
    case Steps.REVIEW:
      return <Review />;
    default:
      return <div>No Step Found</div>;
  }
};

const getButtonStyle = (isStepValid: boolean) => {
  return isStepValid
    ? 'bg-white text-primaryDark'
    : 'bg-[#A39FC1] text-[#8B85B1]';
};

const Home = () => {
  const { currentStep, setCurrentStep } = useContext(StepContext);
  const [isStepValid, setIsStepValid] = useState(false);

  const currentValidationSchema = validationSchema[currentStep === 0 ? 0 : 1];

  const handleValidation = async (values: any) => {
    try {
      await currentValidationSchema.validate(values, {
        abortEarly: true,
        context: { step: currentStep }
      });
      setIsStepValid(true);
    } catch (errors) {
      setIsStepValid(false);
    }
  };

  const submitForm = (values: any, setSubmitting: any) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  };

  const handleSubmit = (values: any, { setSubmitting }: any) => {
    if (currentStep === Steps.REVIEW) submitForm(values, setSubmitting);
    else {
      setCurrentStep((prev) => prev + 1);
      setSubmitting(false);
    }
  };

  return (
    <MainLayout>
      <section className="bg-cover z-[999] mt-[50px] bg-center flex items-center justify-center">
        <div className="w-[500px] rounded-xl bg-primaryLight px-8 py-10">
          <Formik
            initialValues={initialValues}
            validationSchema={currentValidationSchema}
            onSubmit={handleSubmit}
            validate={handleValidation}
          >
            {({ isSubmitting }) => (
              <Form>
                {renderStep(currentStep)}
                <button
                  type="submit"
                  disabled={!isStepValid || isSubmitting}
                  className={`${getButtonStyle(
                    isStepValid
                  )} h-[60px] text-[24px] flex justify-center items-center gap-4 font-medium w-[100%] rounded-md tracking-tight h-[60px]`}
                >
                  {isSubmitting ? (
                    <Icon icon="svg-spinners:90-ring-with-bg" />
                  ) : currentStep === Steps.REVIEW ? (
                    'Complete'
                  ) : (
                    'Continue'
                  )}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;
