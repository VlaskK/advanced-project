import { DeepPartial } from '@reduxjs/toolkit';
import { loginReducer, LoginSchema } from 'features/AuthByUsername';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: 'user' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUsername('user1'),
        )).toEqual({ username: 'user1' });
    });
    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: 'user' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('user1'),
        )).toEqual({ password: 'user1' });
    });
});
