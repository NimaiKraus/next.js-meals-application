'use client';

import { useFormStatus } from 'react-dom'

const MealFormSubmitBtn = () => {
    const { pending } = useFormStatus()
  return (
    <button type='submit' disabled={pending}>
        {pending ? 'Submitting...' : 'Share meal'}
    </button>
  )
}

export default MealFormSubmitBtn