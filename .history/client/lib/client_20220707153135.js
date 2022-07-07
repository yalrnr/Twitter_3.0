import sanityClient from '@sanity/client'

/// details to be used to connect to the Sanity dataabase

export const client = sanityClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: 'v1',
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    useCdn: false,
})