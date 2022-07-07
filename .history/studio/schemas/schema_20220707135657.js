import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import { userSchema } from './userSchema'
import { tweetSchema } from './tweetSchema'

///// Creating the Sanity Schems

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([userSchema,tweetSchema]),
})
