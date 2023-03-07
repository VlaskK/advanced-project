import { BugButton } from 'app/providers/ErrorBoundary';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

const MainPage = memo(() => {
    const { t } = useTranslation('main');

    return (
        <div>
            <BugButton />
            {t('Главная страница')}
            <Input />
        </div>
    );
});

export default MainPage;
