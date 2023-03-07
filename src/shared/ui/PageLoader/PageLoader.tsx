import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';

interface PageLoaderProps {
    className?: string
}

export const PageLoader = memo(({ className }: PageLoaderProps) => {
    const { t } = useTranslation();

    return (
        <div>
            <Loader />
        </div>
    );
});
