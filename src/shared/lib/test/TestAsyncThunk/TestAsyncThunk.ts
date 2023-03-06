import { StateSchema } from 'app/providers/StoreProvider';
import { AsyncThunkAction } from '@reduxjs/toolkit';

type ActionTypeCreator<Return, Arg, RejectedValue>
    = (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;
export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: jest.Mocked<any>;

    getState: () => StateSchema;

    actionCreator: ActionTypeCreator<Return, Arg, RejectedValue>;

    constructor(actionCreator: ActionTypeCreator<Return, Arg, RejectedValue>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn();
    }

    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg);
        const result = await action(this.dispatch, this.getState, undefined);

        return result;
    }
}
