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

    import EmailInIcon from '$components/email-icon.svelte'
  
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

<!--
<div class="alert alert-warning shadow-lg mb-20">
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-16" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
      <span>...working on...</span>
    </div>
</div>
-->

<h1 class="font-bold text-center mb-20 text-5xl">Contact</h1>

<section class="relative mb-20">
  <div class="absolute inset-0 px-6">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32530.165854202587!2d18.00459070695152!3d59.36407967248951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d0392153311%3A0xd3f09d778f59f2c7!2sLappk%C3%A4rrsberget%20SSSB!5e0!3m2!1sen!2sse!4v1651566720859!5m2!1sen!2sse" 
      title="map" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
  <div class="container px-5 py-80 mx-auto flex">
    <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 class="text-black font-bold text-3xl">Get in touch</h2>
      <div class="relative py-4">
        <div class="flex space-x-4">
          <p class="text-black text-base md:text-lg my-2 md:my-4">
            <a class="mr-2" href="mailto:rchierchia@gmail.com">
              <EmailInIcon />
            </a>
            rchierchia@gmail.com          
          </p>
        </div>  
      </div>
    </div>
  </div>
</section>

<!--
<div class="flex mb-10 items-end">
    <div class="mr-6">
      <h2 class="text-3xl mb-4 font-bold tracking-wider">{name}</h2>
      
    </div>

</div>
-->