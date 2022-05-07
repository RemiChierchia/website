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

<h1 class="font-bold text-center mb-20 text-5xl">Portfolio</h1>

<div class="flex flex-col w-full mb-20">
  <div class="h-auto bg-base-200">
    <div class="flex flex-col w-full lg:flex-row my-10">
      <div class="grid flex-grow place-items-center font-bold text-center text-4xl">Education</div> 
      <div class="grid flex-grow place-items-center">
        <ul class="steps steps-vertical">
          <li data-content="✓" class="step">
            <div class="flex-grow flex flex-col pl-4">
              <span class="font-normal text-xl text-left">Information and Communication Engineering</span>
              <span class="text-gray-400 text-base mt-0.5 text-left">
                <a class="font-bold">Bachelor's Degree</a> - University of Trento</span>
              <span class="text-gray-400 text-base mt-0.5 text-left">Sept. 2017 - Sept. 2020</span>
            </div>
          </li>
          <li data-content="✓" class="step">
            <div class="flex-grow flex flex-col pl-4">
              <span class="font-normal text-xl text-left">Visual Computing Communication</span>
              <span class="text-gray-400 text-base mt-0.5 text-left">
                <a class="font-bold">EIT Master's Degree 1st year</a> - University of Trento</span>
              <span class="text-gray-400 text-base mt-0.5 text-left">Sept. 2020 - Sept. 2021</span>
            </div>
          </li>
          <li data-content="●" class="step">
            <div class="flex-grow flex flex-col pl-4">
              <span class="font-normal text-xl text-left">Visual Computing Communication</span>
              <span class="text-gray-400 text-base mt-0.5 text-left">
                <a class="font-bold">EIT Master's Degree 2nd year</a> - KTH Royal Institute of Technology</span>
              <span class="text-gray-400 text-base mt-0.5 text-left">Sept. 2021 - Ongoing</span>
            </div>
          </li>
        </ul>
      </div>
      <!--<h2 class="font-bold text-center my-10 text-4xl">Education</h2>-->
    </div>
  </div>

  <div class="h-auto bg-zinc-800">
    <div class="flex flex-col w-full lg:flex-row my-10">
      
      <div class="grid flex-grow place-items-center">
        <ul class="steps steps-vertical">
          <li data-content="✓" class="step">
            <div class="flex-grow flex flex-col pl-4">
              <span class="font-normal text-xl text-left">Worker</span>
              <span class="text-gray-400 text-base mt-0.5 text-left">Internship - Luxottica Group and EVCO S.p.a.</span>
              <span class="text-gray-400 text-base mt-0.5 text-left">3 months in 2015 and 3 months in 2016</span>
            </div>
          </li>
          <li data-content="●" class="step">
            <div class="flex-grow flex flex-col pl-4">
              <span class="font-normal text-xl text-left">Junior Computer Vision Developer</span>
              <span class="text-gray-400 text-base mt-0.5 text-left">Part time - Tracab</span>
              <span class="text-gray-400 text-base mt-0.5 text-left">Nov. 2021 - Ongoing</span>
            </div>
          </li>
        </ul>
      </div>

      <div class="grid flex-grow place-items-center font-bold text-center text-4xl">Experiences</div> 

    </div>
  </div>
  <div class="h-64 bg-base-200">
    <h2 class="font-bold text-center my-10 text-4xl">Skills</h2>
  </div>
</div>

<!--

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

-->
