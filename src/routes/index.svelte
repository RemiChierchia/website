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
  <div class="flex mb-20 items-end">
    <div class="mr-6">
      <h2 class="text-3xl mb-4 font-bold tracking-wider">{name}</h2>
      <p class="text-xl mb-4">{intro}</p>
      <div class="btn btn-circle bg-white btn-outline">
          <a href={gitHubUrl}>
            <GitHubIcon />
          </a>
      </div>
      <div class="btn btn-circle bg-white btn-outline">
          <a href={linkedInUrl}>
            <LinkedInIcon />
          </a>
      </div>
    </div>
    
    <img class="mask mask-squircle h-60" src={url} alt={name} />    

  </div>
{/each}

<div class="alert alert-warning shadow-lg mb-20">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-16" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
    <span>...working on...</span>
  </div>
</div>

<!--

<div class="grid gap-10 md:grid-cols-4 md:px-10 lg:grid-cols-6 lg:-mx-52">
  {#each projects as { name, slug, description, image }}
    <ProjectCard {name} {description} url={image[0].url} {slug} />
  {/each}
</div>

-->
