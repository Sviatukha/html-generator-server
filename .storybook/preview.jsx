import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';

const addThemeSwitchButtonToDOM = () => {
  const existingSwitch = document.querySelector(
    '.theme_switch_button_component'
  );

  if (!existingSwitch) {
    const switchContainer = document.createElement('div');
    document.body.appendChild(switchContainer);

    const root = ReactDOM.createRoot(switchContainer);
    root.render(<button> Button </button>);
  }
};

const preview = {
  decorators: [
    (Story) => {
      useEffect(() => {
        addThemeSwitchButtonToDOM();
      }, []);

      return <Story />;
    },
  ],
  tags: ['autodocs'],
};

export default preview;
