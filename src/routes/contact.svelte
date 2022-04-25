<script context="module">
    import { page } from '$app/stores'
    import Head from '$components/head.svelte'
    import { client } from '$lib/graphql-client'
    import { authorsQuery } from '$lib/graphql-queries'
    import {
      fetchSiteMetadata,
      siteMetadataStore,
    } from '$stores/site-metadata'
    import { marked } from 'marked'
    import { onMount } from 'svelte'
  
    export const load = async () => {
      await fetchSiteMetadata()
  
      const { authors } = await client.request(authorsQuery)
  
      return {
        props: {
          authors,
        },
      }
    }
</script>
  
<script>
    export let authors
    let pathname
  
    onMount(async () => {
      pathname = $page.url.pathname
    })
  
    const {
      name,
      intro,
      bio,
      picture: { url },
    } = authors[0]
  
    const {
      siteUrl,
      name: siteName,
      openGraphDefaultImage,
    } = $siteMetadataStore || []
</script>
  
<Head
    title={`About · ${siteName}`}
    description={bio.slice(0, 120)}
    image={openGraphDefaultImage.url}
    url={`${siteUrl}${pathname}`}
/>
  
<div class="alert alert-warning shadow-lg mb-20">
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-16" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
      <span>...working on...</span>
    </div>
</div>

<h1 class="font-bold text-center mb-20 text-5xl">Contact</h1>
  
<div class="flex mb-10 items-end">
    <div class="mr-6">
      <h2 class="text-3xl mb-4 font-bold tracking-wider">{name}</h2>
      
    </div>

</div>
  