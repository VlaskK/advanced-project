import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getCommentFormError = (state: StateSchema) => state.addCommentForm?.error;
export const getCommentFormText = (state: StateSchema) => state.addCommentForm?.text;
