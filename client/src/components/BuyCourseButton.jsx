import React, { useEffect } from 'react'
import { Button } from './ui/button'
import { useCreateCheckoutSessionMutation } from '@/features/api/purchaseApi'
import { Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function BuyCourseButton({ courseId }) {
  const navigate = useNavigate()
  const [createCheckoutSession, { data, isLoading, isSuccess }] = useCreateCheckoutSessionMutation();

  const purchaseCourseHandler = async () => {
    try {
      await createCheckoutSession(courseId)

    } catch (err) {
      console.error("Checkout session failed:", err);
    }

  };
  useEffect(() => {
    if (data) {

      const paymentId = data?.paymentId;
      navigate(`/mock-pay/${courseId}?paymentId=${paymentId}`);
    }

  }, [data])





  return (

    <Button disable={isLoading} onClick={purchaseCourseHandler} className="mb-2 w-full">
      {
        isLoading ? (
          <>
            <Loader2 className='mr-2 h-4 w-4 animate-spin' />
            Please wait
          </>
        ) : (
          "Purchase Course"
        )
      }

      Purchase Course</Button>

  )
}

export default BuyCourseButton
