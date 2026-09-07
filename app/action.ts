'use server';

export async function createComment(prevData: any, formData: FormData) {
  const comment = formData.get('comment') as string;

  // fake delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  if (!comment) {
    return { error: 'comment is required' };
  }
}
