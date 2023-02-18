import { useTranslation } from 'react-i18next';
import { FC } from 'react';

interface PageLoaderProps {
    className?: string
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div>
            {`...${t('Загрузка')}`}
        </div>
    );
};
