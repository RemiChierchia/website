<script context="module">
  import { page } from '$app/stores'
  import Head from '$components/head.svelte'
  import ProjectCard from '$components/project-card.svelte'
  import { client } from '$lib/graphql-client'
  import { projectsQuery } from '$lib/graphql-queries'
  import {
    fetchSiteMetadata,
    siteMetadataStore,
  } from '$stores/site-metadata'
  import { onMount } from 'svelte'

  export const load = async () => {
    await fetchSiteMetadata()

    const { projects } = await client.request(projectsQuery)

    return {
      props: {
        projects,
      },
    }
  }
</script>

<script>
  export let projects
  let pathname

  onMount(async () => {
    pathname = $page.url.pathname
  })

  const {
    siteUrl,
    name: siteName,
    openGraphDefaultImage,
  } = $siteMetadataStore || []
</script>

<Head
  title={`Projects · ${siteName}`}
  description={`A list of recent projects.`}
  image={openGraphDefaultImage.url}
  url={`${siteUrl}${pathname}`}
/>

<div class="alert alert-warning shadow-lg mb-20">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-16" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
    <span>...working on...</span>
  </div>
</div>

<div class="alert alert-info shadow-lg mb-20">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current flex-shrink-0 w-16 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    <span>I want this page like a cv</span>
  </div>
</div>

<h1 class="font-bold mb-20 text-center text-5xl">
  Projects
</h1>

<div
  class="grid gap-10 md:grid-cols-4 md:px-10 lg:grid-cols-6 lg:-mx-52"
>
  {#each projects as { name, slug, description, image }, index}
    <ProjectCard
      {name}
      {description}
      url={image[0].url}
      {index}
      {slug}
    />
  {/each}
</div>
