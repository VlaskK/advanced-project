import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';

interface PageLoaderProps {
    className?: string
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div>
            <Loader />
        </div>
    );
};
