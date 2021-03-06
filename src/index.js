import Form from './Form.vue'
import Field from './Field.vue'
import Checkbox from './widgets/Checkbox.vue'
import Checkboxes from './widgets/Checkboxes.vue'
import Image from './widgets/Image.vue'
import Object_ from './widgets/Object.vue'
import Password from './widgets/Password.vue'
import Range from './widgets/Range.vue'
import Select from './widgets/Select.vue'
import Text from './widgets/Text.vue'

import prepField from './lib/prepField'
import parseLazySchema from './lib/parseLazySchema'

const components = {
  Form,
  Field,
  Checkbox,
  Checkboxes,
  Image,
  Object: Object_,
  Range,
  Select,
  Text,
  Password,
}
const prefix = 'Unrest'

const plugin = {
  install: (app) => {
    console.warn('DEPRACATED: app.use(UrForm) is now preferred')
    app.use(_default)
  },
}

const _default = {
  prepField,
  parseLazySchema,
  plugin,
  ...components,
  install: (app) => {
    Object.entries(components).forEach(([name, component]) =>
      app.component(prefix + name, component),
    )
  },
}

export default _default
