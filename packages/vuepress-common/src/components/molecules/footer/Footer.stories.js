import config from '../../organisms/__mock__/config'
import Footer from './Footer'

export default {
  title: 'Molecules/Footer',
  argTypes: {

  },
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: {
    Footer
  },
  props: Object.keys(argTypes),
  template: '<Footer v-bind="$props" />'
})

export const Overview = Template.bind({})

Overview.args = {
  author: 'Ts.Ed',
  licenseType: 'MIT',
  socialUrls: config.themeConfig,
  repoUrl: 'https://github.com/TypedProject/tsed',
  sections: [
    {
      title: 'Discover',
      items: [
        {
          label: 'Our team',
          url: '/'
        },
        {
          label: 'Contact us',
          url: '/'
        }
      ]
    },
    {
      title: 'Help',
      items: [
        {
          label: 'Resources',
          url: '/'
        },
        {
          label: 'Chat with us',
          url: '/'
        },
        {
          label: 'Contribution guide',
          url: '/'
        }
      ]
    },
    {
      title: 'Support',
      items: [
        {
          label: 'Issues',
          url: '/'
        },
        {
          label: 'Sponsoring & donations',
          url: '/'
        }
      ]
    }
  ]
}
