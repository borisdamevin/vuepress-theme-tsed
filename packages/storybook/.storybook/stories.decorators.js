import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'
import { addDecorator } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'

// addDecorator(withStaticMarkup)
addDecorator(withA11y)
addDecorator(withKnobs({
  escapeHTML: false
}))

addDecorator(StoryRouter())
