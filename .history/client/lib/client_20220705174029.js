import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: process.env.NEXT_PUBLIC
})