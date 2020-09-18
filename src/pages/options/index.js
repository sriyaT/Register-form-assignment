import React from 'react';
import { SidebarData } from './sidebarData';

const Options = ({ setCurrentScreen }) => {
  return (
    <div>
      {SidebarData.map((item, index) => {
        return (
          <li
            key={index}
            className={item.cName}
            onClick={() => {
              setCurrentScreen(item.value);
            }}
          >
            <span>{item.title}</span>
          </li>
        );
      })}
    </div>
  );
};

export default Options;
