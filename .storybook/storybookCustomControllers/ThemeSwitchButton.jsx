import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './ThemeSwitchButton.scss';
import * as Icons from '../../src/assets/Icons';

export const ThemeSwitchButton = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const IconComponent = Icons.SunMoon;

  useEffect(() => {
    const theme = isDarkTheme ? 'darkMode' : '';
    //iframe doc for previews and components theming
    document.documentElement.setAttribute('data-mode', theme);

    //main htlm tag for storybook theming
    if (window.parent && window.parent.document) {
      window.parent.document.documentElement.setAttribute('data-mode', theme);
    }
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return ReactDOM.createPortal(
    <label className="theme_switch_button_component">
      <input
        className="theme_switch_button_component--checkbox"
        type="checkbox"
        checked={isDarkTheme}
        onChange={toggleTheme}
      />
      <div className="theme_switch_button_component--switch">
        <div className="theme_switch_button_component--thumb">
          <IconComponent color="var(--primary_text)" size={16} />
        </div>
      </div>
    </label>,
    document.body
  );
};
