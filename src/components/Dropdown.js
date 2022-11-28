import React from 'react';

const Dropdown = ({submenus , dropdown}) => {
    return (
        <div className={`dropdown ${dropdown? "show" : " "}`}>
            <ul>
                {submenus.map((submenu, index) => (
                    <li key={index} className="submenu-item">
                        <a href={submenu.url}>{submenu.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dropdown;