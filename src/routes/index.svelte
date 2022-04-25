<script context="module">
  import Head from '$components/head.svelte'
  import ProjectCard from '$components/project-card.svelte'
  import { client } from '$lib/graphql-client'
  import { authorsQuery, projectsQuery } from '$lib/graphql-queries'
  import {
    authorsStore,
    fetchAuthors,
    fetchSiteMetadata,
    siteMetadataStore,
    socialsStore,
  } from '$stores/site-metadata'
  import GitHubIcon from '$components/github-icon.svelte'
  import LinkedInIcon from '$components/linkedin-icon.svelte'

  export const load = async () => {
    await fetchAuthors()
    await fetchSiteMetadata()

    const [authorRes, projectsRes] = await Promise.all([
      client.request(authorsQuery),
      client.request(projectsQuery),
    ])
    const { authors } = authorRes
    const { projects } = projectsRes

    return {
      props: {
        projects,
        authors,
      },
    }
  }
</script>

<script>
  export let projects
  export let authors

  const {
    siteUrl,
    name: siteName,
    description,
    openGraphDefaultImage,
  } = $siteMetadataStore || []
  const { name: authorName } = $authorsStore || []
  const { gitHubUrl, linkedInUrl } = $socialsStore
</script>

<Head
  title={`${siteName} · ${authorName}`}
  {description}
  image={openGraphDefaultImage.url}
  url={`${siteUrl}`}
/>

<h1 class="font-bold text-center mb-20 text-5xl">
  Welcome to my website!
</h1>

{#each authors as { name, intro, picture: { url }}}
  <div class="flex mb-40 items-end">
    <div class="mr-6">
      <h2 class="text-3xl mb-4 font-bold tracking-wider">{name}</h2>
      <p class="text-xl mb-4">{intro}</p>    
      <button class="btn btn-circle btn-outline">
          <a href={gitHubUrl}>
            <GitHubIcon />
          </a>
      </button>
      <button class="btn btn-circle btn-outline">
          <a href={linkedInUrl}>
            <LinkedInIcon />
          </a>
      </button>  
    </div>
    
    <img class="mask mask-squircle h-60" src={url} alt={name} />    

  </div>
{/each}


<div class="grid gap-10 md:grid-cols-4 md:px-10 lg:grid-cols-6 lg:-mx-52">
  {#each projects as { name, slug, description, image }}
    <ProjectCard {name} {description} url={image[0].url} {slug} />
  {/each}
</div>
