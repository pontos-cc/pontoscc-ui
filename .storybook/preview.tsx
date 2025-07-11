import type { Preview } from "@storybook/react-vite";
import '../src/index.css';

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', title: 'Light' },
        { value: 'dark', title: 'Dark' },
      ],
    },
  },
  context: {
    name: 'UI Context',
    description: 'UI context theme',
    defaultValue: '',
    toolbar: {
      icon: 'paintbrush',
      items: [
        { value: '', title: 'None' },
      ],
    },
  },
};

export const decorators = [
  (Story, context) => {
    const theme = context.globals.theme;
    const uiContext = context.globals.context;
    if (typeof document !== 'undefined') {
      document.body.classList.toggle('dark', theme === 'dark');
    }

    return (
      <div
        data-ui-context={uiContext || undefined}
        style={{ padding: 16 }}
      >
        <Story />
      </div>
    );
  },
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: { expanded: true },
  },
};

export default preview;
