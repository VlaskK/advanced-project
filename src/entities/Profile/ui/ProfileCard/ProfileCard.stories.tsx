import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Country } from 'shared/const/common';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/test/storybook.jpg';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        username: 'user',
        age: 33,
        country: Country.Armenia,
        lastname: 'Fett',
        first: 'Boba',
        city: 'mos-espa',
        currency: Currency.EUR,
        avatar,
    },
};

export const withError = Template.bind({});
withError.args = {
    isError: 'true',
};

export const isLoading = Template.bind({});
isLoading.args = {
    isLoading: true,
};
