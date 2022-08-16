import { redirect } from '@sveltejs/kit';
export const load = () => {
  return { foo: 'bar' };
};
export const POST = () => {
  throw redirect(303, '/');
};
