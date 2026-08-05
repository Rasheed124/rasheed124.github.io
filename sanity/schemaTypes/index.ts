import { type SchemaTypeDefinition } from 'sanity'

import page from './page'
import projectCategory from './projectCategory'
import project from './project'
import blog from './blog'
import experience from './experience'
import education from './education'
import contact from './contact'
import home from './home'
import profile from './profile'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    page,
    projectCategory,
    project,
    blog,
    experience,
    education,
    contact,
    home,
    profile
  ],
}