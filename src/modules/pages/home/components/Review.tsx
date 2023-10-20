import React from 'react';
import { useFormikContext } from 'formik';

interface ReviewItemProps {
  label: String;
  value: String | null;
}

interface FormValues {
  username: string;
  email: string;
  country: string;
}

const ReviewItem: React.FC<ReviewItemProps> = ({ label, value }) => {
  return (
    <div className="flex justify-between items-center">
      <p className="text-[#CECAEB]">{label}</p>
      <p className="text-white font-medium">{value}</p>
    </div>
  );
};

const Review: React.FC = () => {
  const formik = useFormikContext<FormValues>();

  const { values } = formik;

  const { username, email, country } = values;

  return (
    <div className="grid grid-cols-1 gap-4 mb-6">
      <ReviewItem value={username} label="Username" />
      <ReviewItem value={email} label="Email" />
      <ReviewItem value={country} label="Country" />
    </div>
  );
};

export default Review;
