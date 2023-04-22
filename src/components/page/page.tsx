import React, { FC } from 'react';

import './page.css';

interface PageProps {
    children: React.ReactNode
}

export const Page: FC<PageProps> = (props) => {
    const {
        children,
    } = props;

    return (
        <div className="page">
            {children}
        </div>
    );
};