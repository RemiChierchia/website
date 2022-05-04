<script context="module">
  import {
    authorsStore,
    fetchAuthors,
    fetchSocials,
    socialsStore,
  } from '$stores/site-metadata'
  import FacebookIcon from './facebook-icon.svelte'
  import TwitterIcon from './twitter-icon.svelte'
  import YouTubeIcon from './you-tube-icon.svelte'
  import GitHubIcon from './github-icon.svelte'
  import LinkedInIcon from './linkedin-icon.svelte'
  import EmailInIcon from '$components/email-icon.svelte'

  fetchAuthors()
  fetchSocials()
</script>

<script>
  const { twitterUrl, youTubeUrl, facebookUrl, gitHubUrl, linkedInUrl } = $socialsStore
  const { name: AuthorName } = $authorsStore
</script>

<footer
  class="p-10 footer bg-secondary-focus text-secondary-content footer-center"
>
  <div class="grid grid-flow-col gap-4">
    <a class="link link-hover" href="/projects">Portfolio</a>
    <a class="link link-hover" href="/posts">Blog</a>
    <a class="link link-hover" href="/about">About</a>
    <a class="link link-hover" href="/contact">Contact</a>
  </div>
  <div>
    <div class="grid grid-flow-col gap-4">
      <a href={gitHubUrl}>
        <GitHubIcon />
      </a>
      <a href={linkedInUrl}>
        <LinkedInIcon />
      </a>
      <a class="fill-current" href="mailto:rchierchia@gmail.com">
        <EmailInIcon />
      </a>
      <!--
      <a href={twitterUrl}>
        <TwitterIcon />
      </a>
      <a href={youTubeUrl}>
        <YouTubeIcon />
      </a>
      <a href={facebookUrl}>
        <FacebookIcon />
      </a>
      -->
    </div>
  </div>
  <div>
    <p>
      Copyright &copy; {`${new Date().getFullYear()}`} - All right reserved
      {AuthorName}
    </p>
  </div>
</footer>
