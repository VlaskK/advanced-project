import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'shared/const/common';
import { Currency } from 'entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    const data = {
        username: 'user',
        age: 33,
        country: Country.Armenia,
        lastname: 'Fett',
        first: 'Boba',
        city: 'mos-espa',
        currency: Currency.EUR,
    };

    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
