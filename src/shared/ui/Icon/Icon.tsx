import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = ({ Svg, className }: IconProps) => (
    <Svg className={classNames(cls.Icon, {}, [className])} />
);
