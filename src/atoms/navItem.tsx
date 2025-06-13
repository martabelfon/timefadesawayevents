import React from 'react';

interface NavItemProps {
    label: string;
    href: string;
}

const NavItem: React.FC<NavItemProps> = ({ label, href }) => {
    return (
        <a href={href} className="nav-item mr-[16px] text-white mt-5">
            {label}
        </a>
    );
};

export default NavItem;