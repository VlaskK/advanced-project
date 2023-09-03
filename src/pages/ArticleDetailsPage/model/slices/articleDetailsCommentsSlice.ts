import {
    createEntityAdapter,
    createSlice,
    configureStore,
} from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment';
import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';

const commentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsComments || commentsAdapter.getInitialState(),
);

const articleDetailsCommentSlice = createSlice({
    name: 'articleDetailsSchema',
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
        isError: undefined,
        isLoading: false,
        ids: [1, 2],
        entities: {
            1: {
                id: '1',
                text: '1',
                user: { id: '1', username: 'v' },
            },
            2: {
                id: '2',
                text: '1',
                user: { id: '2', username: 'vs' },
            },
        },
    }),
    reducers: {

    },
});

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentSlice;
