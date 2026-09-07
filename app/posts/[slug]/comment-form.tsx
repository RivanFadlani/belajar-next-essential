'use client';

import { createComment } from '@/app/action';
import { useActionState } from 'react';

const initialState = {
  error: '', // harus sama dengan yang ada di 'action.ts'
};

export default function CommentForm() {
  const [state, formAction, isPending] = useActionState(
    createComment,
    initialState,
  );

  return (
    <section className="mt-4 ml-4">
      <h1 className="text-2xl">Comments</h1>
      <form className="flex w-72 flex-col" action={formAction}>
        {state?.error && (
          <small className="font-medium text-red-500">{state.error}</small>
        )}
        <textarea
          className="h-40 bg-white text-black"
          placeholder="Comment Here!"
          name="comment"
        ></textarea>
        <button
          className="mt-2 rounded-md bg-blue-500 px-4 py-2 font-medium"
          disabled={isPending}
        >
          {isPending ? 'Wait' : 'Send'}
        </button>
      </form>
    </section>
  );
}
