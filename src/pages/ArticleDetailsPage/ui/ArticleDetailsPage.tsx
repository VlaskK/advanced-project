import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleDetailsPage.module.scss';

interface ArticlesDetailsPageProps {
    className?: string
}

const ArticleDetailsPage = ({ className }: ArticlesDetailsPageProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
            Articles details page
        </div>
    );
};

export default ArticleDetailsPage;
