import { redirect } from '@sveltejs/kit';

export const POST = () => {
  throw redirect(303, '/');
};
