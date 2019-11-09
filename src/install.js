import * as components from './components'
import 'prismjs/themes/prism-tomorrow.css'
import './styles/theme.scss'

export default function install (Vue) {
  try {
    Object.keys(components).forEach((key) => {
      const component = components[key]
      Vue.component(component.name, component)
    })
  } catch (er) {
    console.error(er)
  }
}
