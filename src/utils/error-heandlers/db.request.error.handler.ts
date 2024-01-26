import { BadRequestError } from 'routing-controllers';

export async function handleErrors<T>(promise: Promise<T>, errorMessage: string): Promise<T> {
  try {
    const result = await promise;
    return result;
  } catch (error) {
    throw new BadRequestError(errorMessage);
  }
}
