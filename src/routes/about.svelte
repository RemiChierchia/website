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

<h1 class="font-bold text-center mb-10 text-5xl">About Me</h1>
<div class="container m-auto max-w-5xl px-12 pb-20">
  <a href="/" class="inline-flex items-center mb-6">
    <img class="mx-auto mask mask-circle h-36" src={url} alt={name} />
    <span class="flex-grow flex flex-col pl-4">
      <span class="font-normal text-xl">Remi Chierchia</span>
      <span class="text-gray-400 text-base mt-0.5">Junior Computer Vision Developer</span>
    </span>
  </a>
  <article class="prose prose-xl">{@html marked(bio)}</article>
</div>
<!--
<h1 class="font-bold text-center mb-20 text-5xl">About Me</h1>

<div class="flex mb-10 items-end"> -->
    <!--<div class="mr-6">
      <h2 class="text-3xl mb-4 font-bold tracking-wider">{name}</h2>
      <p class="text-xl mb-4">{intro}</p>
    </div>-->
<!--
  <img class="mx-auto mask mask-squircle h-60" src={url} alt={name} />
</div>-->

<!--
<article div class="prose md:prose-lg lg:prose-xl">
  {@html marked(bio)}
</article>
-->
