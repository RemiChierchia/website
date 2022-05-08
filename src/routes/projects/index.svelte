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
      <div class="grid mb-10 lg:mb-0 flex-grow place-items-center font-bold text-center text-4xl">Education</div> 
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

      <div class="grid lg:order-last mb-10 lg:mb-0 flex-grow place-items-center font-bold text-center text-4xl">Experiences</div>  

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

    </div>
  </div>
  <div class="h-auto bg-base-200">
    <h2 class="font-bold text-center my-10 text-4xl">Skills</h2>
    <div class="grid gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center mx-5 md:mx-10">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width="100" height="100"
        viewBox="0 0 48 48"
        style=" fill:#000000;"><path fill="#00549d" fill-rule="evenodd" d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z" clip-rule="evenodd"></path><path fill="#0086d4" fill-rule="evenodd" d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255 c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38 c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z" clip-rule="evenodd"></path><path fill="#fff" fill-rule="evenodd" d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z" clip-rule="evenodd"></path><path fill="#0075c0" fill-rule="evenodd" d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784 c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z" clip-rule="evenodd"></path><path fill="#fff" fill-rule="evenodd" d="M31 21H33V27H31zM38 21H40V27H38z" clip-rule="evenodd"></path><path fill="#fff" fill-rule="evenodd" d="M29 23H35V25H29zM36 23H42V25H36z" clip-rule="evenodd"></path>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width="100" height="100"
        viewBox="0 0 48 48"
        style=" fill:#000000;"><path fill="#0277BD" d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"></path><path fill="#FFC107" d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"></path>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width="100" height="100"
        viewBox="0 0 48 48"
        style=" fill:#000000;"><linearGradient id="Z8bG89TnZW8~BwJjzqmnXa_r5Y16PcDkoWI_gr1" x1="22.645" x2="26.757" y1="10.881" y2="23.854" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4adddf"></stop><stop offset=".699" stop-color="#3f5352"></stop><stop offset=".863" stop-color="#442729"></stop></linearGradient><path fill="url(#Z8bG89TnZW8~BwJjzqmnXa_r5Y16PcDkoWI_gr1)" d="M21,27l-7-6c0,0,1-1.5,2.5-3s2.736-1.852,4.5-3c3.511-2.284,6.5-12,11-12L21,27z"></path><linearGradient id="Z8bG89TnZW8~BwJjzqmnXb_r5Y16PcDkoWI_gr2" x1="1" x2="37.775" y1="27.033" y2="27.033" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4adddf"></stop><stop offset=".792" stop-color="#3f5352"></stop><stop offset="1" stop-color="#442729"></stop></linearGradient><polygon fill="url(#Z8bG89TnZW8~BwJjzqmnXb_r5Y16PcDkoWI_gr2)" points="11,33.066 1,26 14,21 21.277,26.465 14,32.066"></polygon><linearGradient id="Z8bG89TnZW8~BwJjzqmnXc_r5Y16PcDkoWI_gr3" x1="11" x2="47" y1="24" y2="24" gradientUnits="userSpaceOnUse"><stop offset=".206" stop-color="#53140f"></stop><stop offset=".3" stop-color="#84360f"></stop><stop offset=".413" stop-color="#b85b10"></stop><stop offset=".511" stop-color="#df7610"></stop><stop offset=".59" stop-color="#f68710"></stop><stop offset=".639" stop-color="#ff8d10"></stop><stop offset=".729" stop-color="#fd8a10"></stop><stop offset=".8" stop-color="#f58010"></stop><stop offset=".865" stop-color="#e86f10"></stop><stop offset=".925" stop-color="#d65811"></stop><stop offset=".982" stop-color="#c03a11"></stop><stop offset="1" stop-color="#b72f11"></stop></linearGradient><path fill="url(#Z8bG89TnZW8~BwJjzqmnXc_r5Y16PcDkoWI_gr3)" d="M32,3c5,0,13,27,15,34c0,0-7.017-6.63-11-6s-5.47,6.548-9.725,10.756C23.5,44.5,21,45,21,45	s-0.206-8.124-5-11c-2.5-1.5-5-1-5-1s6.049-2.901,9.474-8.174S28.5,3,32,3z"></path>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width="100" height="100"
        viewBox="0 0 48 48"
        style=" fill:#000000;"><path fill="#448aff" d="M35,43c-5.514,0-10-4.486-10-10c0-3.562,1.916-6.88,5-8.66l3,5.196c-1.233,0.712-2,2.039-2,3.464 c0,2.168,1.832,4,4,4s4-1.832,4-4c0-1.425-0.767-2.752-2-3.464l3-5.196c3.084,1.78,5,5.099,5,8.66C45,38.514,40.514,43,35,43z"></path><path fill="#ff1744" d="M29,22.629l-3-5.196c1.233-0.712,2-2.04,2-3.464c0-2.168-1.832-4-4-4s-4,1.832-4,4 c0,1.425,0.767,2.752,2,3.464l-3,5.196c-3.084-1.781-5-5.1-5-8.661c0-5.514,4.486-10,10-10s10,4.486,10,10 C34,17.53,32.084,20.849,29,22.629z"></path><path fill="#9ccc65" d="M13.001,43.028c-3.459,0-6.827-1.793-8.678-4.997c-2.757-4.776-1.115-10.903,3.66-13.661 c3.085-1.781,6.917-1.781,10,0l-3,5.196c-1.234-0.713-2.766-0.713-4,0c-1.878,1.084-2.548,3.586-1.465,5.464 c1.084,1.877,3.586,2.549,5.465,1.464c1.233-0.712,2-2.04,2-3.464h6c0,3.561-1.916,6.879-5,8.66 C16.413,42.598,14.695,43.028,13.001,43.028z"></path>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="140" height="60" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 224"><path fill="#5586A4" d="M83.963 67.071c.204-.1.409-.198.615-.295c5.698-2.686 12.334-4.031 19.905-4.031c7.568 0 14.204 1.346 19.902 4.031c5.698 2.685 10.464 6.285 14.292 10.792c3.828 4.507 6.702 9.688 8.615 15.538c1.915 5.85 2.874 11.938 2.874 18.266c0 6.328-.96 12.42-2.874 18.269c-1.913 5.85-4.787 11.03-8.615 15.538c-3.828 4.507-8.594 8.085-14.292 10.727c-5.698 2.64-12.334 3.965-19.902 3.965c-7.57 0-14.207-1.324-19.905-3.965a45.74 45.74 0 0 1-3.459-1.784c29.693 26.92 86.858 45.146 152.504 45.146c53.398 0 101.256-10.809 133.209-29.799c-34.969 31.793-97.344 54.219-168.562 54.207C88.758 223.66-.01 173.572 0 111.807C.01 50.041 88.794-.017 198.304 0c71.503.01 134.04 22.508 168.92 54.525c-31.955-19.11-80.008-30.119-133.601-30.119c-63.609 0-119.255 17.112-149.66 42.665ZM73.32 125.266c1.249 4.556 3.21 8.655 5.886 12.298c2.674 3.644 6.106 6.573 10.298 8.786c4.189 2.213 9.18 3.317 14.979 3.317c5.796 0 10.787-1.104 14.98-3.317c4.188-2.213 7.62-5.142 10.297-8.786c2.673-3.643 4.634-7.742 5.882-12.298a52.213 52.213 0 0 0 0-27.718c-1.248-4.556-3.21-8.655-5.882-12.3c-2.677-3.643-6.11-6.57-10.298-8.784c-4.192-2.214-9.184-3.32-14.98-3.32c-5.797 0-10.789 1.106-14.978 3.32c-4.192 2.214-7.624 5.141-10.298 8.783c-2.676 3.646-4.637 7.745-5.886 12.3a52.18 52.18 0 0 0-1.87 13.858c0 4.685.621 9.305 1.87 13.861Zm95.665-26.611v8.02h.2c1.64-3.284 4.215-5.672 7.729-7.162c3.514-1.49 7.376-2.235 11.593-2.235c4.682 0 8.761.84 12.237 2.52c3.473 1.68 6.36 3.95 8.663 6.81c2.303 2.863 4.038 6.162 5.212 9.9c1.17 3.739 1.757 7.707 1.757 11.904s-.568 8.164-1.698 11.905c-1.133 3.74-2.849 7.002-5.152 9.786s-5.193 4.979-8.666 6.579c-3.477 1.6-7.515 2.403-12.121 2.403c-1.484 0-3.144-.153-4.977-.457a28.346 28.346 0 0 1-5.443-1.489a21.474 21.474 0 0 1-5.096-2.808a15.748 15.748 0 0 1-4.038-4.412h-.2v30.554h-10.041V98.655h10.041Zm35.637 21.044c-.74-2.63-1.866-4.976-3.385-7.037c-1.519-2.06-3.466-3.7-5.842-4.92c-2.378-1.22-5.16-1.83-8.352-1.83c-3.351 0-6.193.65-8.528 1.947c-2.338 1.297-4.245 2.992-5.726 5.09c-1.48 2.096-2.551 4.482-3.213 7.152a33.616 33.616 0 0 0-.992 8.121c0 2.9.348 5.704 1.052 8.41c.699 2.711 1.81 5.092 3.329 7.153c1.518 2.06 3.482 3.72 5.898 4.977c2.416 1.259 5.338 1.888 8.764 1.888c3.426 0 6.287-.647 8.584-1.944c2.297-1.297 4.149-3.013 5.55-5.15c1.4-2.134 2.414-4.574 3.038-7.322c.621-2.747.935-5.568.935-8.467a29.714 29.714 0 0 0-1.112-8.068Zm62.964 34.355c-4.537 3.355-10.244 5.031-17.129 5.031c-4.85 0-9.058-.762-12.616-2.286c-3.562-1.527-6.554-3.664-8.98-6.411c-2.425-2.747-4.245-6.027-5.456-9.844c-1.211-3.815-1.895-7.975-2.052-12.476c0-4.5.703-8.62 2.114-12.362c1.409-3.74 3.386-6.983 5.93-9.73c2.545-2.748 5.56-4.881 9.043-6.408c3.483-1.526 7.301-2.29 11.453-2.29c5.403 0 9.883 1.091 13.447 3.268c3.565 2.18 6.423 4.951 8.576 8.315a32.47 32.47 0 0 1 4.465 11.009c.822 3.976 1.154 7.76.998 11.353h-45.383c-.079 2.59.232 5.047.935 7.37c.703 2.324 1.832 4.381 3.395 6.172c1.562 1.79 3.552 3.216 5.974 4.283c2.419 1.067 5.268 1.6 8.547 1.6c4.213 0 7.668-.953 10.36-2.864c2.692-1.91 4.468-4.813 5.328-8.712h9.852c-1.33 6.634-4.264 11.628-8.8 14.982Zm-2.432-37.976c-.897-2.055-2.105-3.827-3.623-5.31c-1.522-1.484-3.317-2.665-5.382-3.541c-2.068-.877-4.349-1.316-6.843-1.316c-2.573 0-4.895.439-6.96 1.316c-2.067.876-3.84 2.075-5.32 3.596a17.188 17.188 0 0 0-3.51 5.313c-.859 2.017-1.364 4.17-1.52 6.453h34.74a19.5 19.5 0 0 0-1.582-6.511Zm28.317-17.423v9.397h.189c4.16-7.18 10.759-10.774 19.792-10.774c4.003 0 7.34.536 10.014 1.607c2.67 1.07 4.83 2.56 6.48 4.47c1.65 1.91 2.808 4.182 3.476 6.818c.665 2.637 1 5.56 1 8.769v38.967h-10.04v-40.087c0-3.663-1.098-6.564-3.291-8.704c-2.196-2.137-5.211-3.207-9.05-3.207c-3.054 0-5.7.46-7.934 1.377c-2.233.917-4.094 2.213-5.582 3.893c-1.486 1.68-2.603 3.646-3.347 5.896c-.746 2.253-1.117 4.715-1.117 7.389v33.441h-10.04V98.655h9.45Zm110.36 58.61c-4.534 1.867-9.113 2.802-13.73 2.802c-7.293 0-13.847-1.242-19.67-3.72c-5.824-2.479-10.734-5.894-14.735-10.248c-4-4.35-7.066-9.464-9.2-15.338c-2.133-5.874-3.2-12.208-3.2-18.996c0-6.96 1.065-13.423 3.191-19.385c2.128-5.96 5.187-11.16 9.178-15.6c3.992-4.44 8.895-7.919 14.715-10.445c5.82-2.523 12.375-3.786 19.667-3.786c4.888 0 9.62.72 14.197 2.158c4.578 1.44 8.71 3.556 12.4 6.346c3.69 2.79 6.733 6.23 9.133 10.317c2.4 4.09 3.87 8.78 4.402 14.078h-19.998c-1.246-5.209-3.647-9.118-7.202-11.724c-3.557-2.606-7.868-3.909-12.933-3.909c-4.712 0-8.713.892-12 2.677c-3.289 1.784-5.957 4.179-8.002 7.18c-2.046 3.004-3.533 6.42-4.464 10.249c-.936 3.83-1.4 7.787-1.4 11.877c0 3.918.467 7.726 1.402 11.423c.936 3.698 2.426 7.027 4.471 9.986c2.046 2.958 4.717 5.328 8.01 7.112c3.293 1.785 7.298 2.677 12.018 2.677c6.94 0 12.3-1.71 16.083-5.132c3.784-3.422 5.987-8.382 6.611-14.882h-21.066v-15.305h39.942v50.302h-13.29l-2.128-10.552c-3.733 4.69-7.869 7.97-12.403 9.837Zm61.767-92.362v75.738H512v17.267h-67.287V64.903h20.885Z"/>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="100" height="100" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="#f87171" d="M128 128H24c52-112 78-56 104 0Zm0 0c26 56 52 112 104 0Z" opacity=".2"/><path fill="#b91c1c" d="M239.3 131.4c-22 47.2-41.4 69.3-61.3 69.3c-25.1 0-40.7-33.7-57.3-69.3c-13-28.2-27.8-60.1-42.7-60.1s-36.3 37.6-46.7 60.1a8.1 8.1 0 1 1-14.6-6.8c22-47.2 41.4-69.3 61.3-69.3c25.1 0 40.7 33.7 57.3 69.3c13 28.2 27.8 60.1 42.7 60.1c16.4 0 36.3-37.6 46.7-60.1a8.1 8.1 0 0 1 14.6 6.8Z"/>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="100" height="100" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="#22c55e"><path d="M5 7h3V4H5v3Z"/><path d="M1 2a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-2H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 9H1V8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6H1V5H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 2H1Zm11 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7Zm2 0a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7ZM3.5 10a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6ZM4 4h-.5a.5.5 0 0 0 0 1H4v1h-.5a.5.5 0 0 0 0 1H4a1 1 0 0 0 1 1v.5a.5.5 0 0 0 1 0V8h1v.5a.5.5 0 0 0 1 0V8a1 1 0 0 0 1-1h.5a.5.5 0 0 0 0-1H9V5h.5a.5.5 0 0 0 0-1H9a1 1 0 0 0-1-1v-.5a.5.5 0 0 0-1 0V3H6v-.5a.5.5 0 0 0-1 0V3a1 1 0 0 0-1 1Zm7 7.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5Z"/></g>
      </svg>
    </div>
    <div class="mb-10"></div>
  </div>

  <div class="h-auto bg-zinc-800">
    <h2 class="font-bold text-center my-10 text-4xl">Projects</h2>
    <!--
    <div class="grid gap-10 md:grid-cols-4 lg:grid-cols-6 mx-5 md:mx-10">
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
    <div class="mb-10"></div>
    -->
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
