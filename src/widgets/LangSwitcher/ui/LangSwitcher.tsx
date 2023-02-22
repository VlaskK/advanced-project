import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';

interface LangSwitcherProps {
    className?: string,
    short?: boolean
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className, short }) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={toggle}
        >
            { short ? t('Короткий язык') : t('Язык')}
        </Button>
    );
};
