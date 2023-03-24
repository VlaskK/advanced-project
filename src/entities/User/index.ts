export {
    userActions,
    userReducer,
} from './model/slice/userSlice';

export { UserSchema, User } from './model/type/user';

export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
export { getUserInited } from './model/selectors/getUserInited/getUserInited';
