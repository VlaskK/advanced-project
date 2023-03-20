import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidationError } from 'entities/Profile';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';

describe('getProfileValidationError.test', () => {
    test('should work with filled state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [
                    ValidateProfileError.SERVER_ERROR,
                    ValidateProfileError.INCORRECT_AGE,
                ],
            },
        };
        expect(getProfileValidationError(state as StateSchema)).toEqual([
            ValidateProfileError.SERVER_ERROR,
            ValidateProfileError.INCORRECT_AGE,
        ]);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidationError(state as StateSchema)).toEqual(undefined);
    });
});
