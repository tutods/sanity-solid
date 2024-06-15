import {PortableTextComponents} from '@portabletext/solid'

export const components: PortableTextComponents = {
  block: {
    normal: ({children}) => {
      return <p>{children}</p>
    }
  }
}