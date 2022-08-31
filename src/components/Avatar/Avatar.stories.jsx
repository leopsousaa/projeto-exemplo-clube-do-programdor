import { Avatar } from './Avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  args: {},
  argsTypes: {
    variant: {
      description:
        'Propriedade responsável por exibir variantes da thumbnail do componente de Avatar',
      theme: {
        control: 'select',
        options: ['primary', 'secondary'],
      },
    },
  },
};

const Template = (args) => (
  <div>
    <Avatar {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  src: 'https://www.ifnmg.edu.br/arquivos/2016/reitoria/Not%C3%ADcias/ifnmg_vertical_jpg.jpg',
  alt: 'Logo IFNMG',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  src: 'https://www.ifnmg.edu.br/arquivos/2016/reitoria/Not%C3%ADcias/ifnmg_vertical_jpg.jpg',
  alt: 'Logo IFNMG',
};
