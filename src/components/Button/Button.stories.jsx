// Button.stories.js|jsx|ts|tsx

import { Button } from './Button';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'button',
  },
  argsTypes: {
    variant: {
      description:
        'Propriedade responsável por exibir variantes do nosso botão',
      theme: {
        control: 'select',
        options: ['primary', 'secondary', 'outlined', 'disabled'],
      },
    },

    size: {
      description:
        'Propriedade responsável por determinar o tamanho dos botões',
      theme: {
        control: 'select',
        options: ['sm', 'md', 'lg', 'xl'],
      },
    },

    children: {
      description:
        'Propriedade que será fornecida uma string contendo o nome do nosso botão',
      type: { name: 'string', required: true },
    },

    onClick: { action: true },
  },
};

const Template = (args) => (
  <div style={{ minWidth: 'min-content' }}>
    <Button {...args} onClick={action('onClick')} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
};

export const Outlined = Template.bind({});
Object.assign(Outlined, {
  args: { variant: 'outlined' },
});

export const Danger = Template.bind({});
Object.assign(Danger, {
  args: { variant: 'danger' },
});

export const Disabled = Template.bind({});
Object.assign(Disabled, {
  args: { variant: 'disabled' },
});

export const Small = Template.bind({});
Object.assign(Small, {
  args: { size: 'sm' },
});

export const Medium = Template.bind({});
Object.assign(Medium, {
  args: { size: 'md' },
});

export const Large = Template.bind({});
Object.assign(Large, {
  args: { size: 'lg' },
});

export const ExtraLarge = Template.bind({});
Object.assign(ExtraLarge, {
  args: { size: 'xl' },
});
