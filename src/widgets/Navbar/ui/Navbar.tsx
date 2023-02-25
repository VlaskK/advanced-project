import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();

    const [isAuthModal, setAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setAuthModal(!isAuthModal);
    }, [isAuthModal]);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                className={cls.links}
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onToggleModal}
            >
                { t('Войти') }
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                { /* eslint-disable-next-line */ }
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita perferendis possimus repellendus sint ut veritatis voluptate voluptatum. Adipisci maxime, sequi?
            </Modal>
        </div>
    );
};
