import clsx from 'clsx';
import { FC } from 'react';
import { GlassPaneProps } from '@/types/components/GlassPane';


const GlassPane: React.FC<GlassPaneProps> = ({ children, className }) => {
    return (
        <div className={clsx('glass rounded-2xl border-solid border-2 border-gray-200', className)}>
            {children}
        </div>
    );
};

export default GlassPane;