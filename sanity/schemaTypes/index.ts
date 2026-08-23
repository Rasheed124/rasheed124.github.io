import { type SchemaTypeDefinition } from 'sanity'

import page from './page'
import projectCategory from './projectCategory'
import project from './project'
import experience from './experience'
import education from './education'
import contact from './contact'
import home from './home'
import profile from './profile'
import blogs from './blogs'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    page,
    projectCategory,
    project,
    blogs,
    experience,
    education,
    contact,
    home,
    profile
  ],
}