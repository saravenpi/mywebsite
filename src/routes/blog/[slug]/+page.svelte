<script>
  import { page } from "$app/stores";
  export let data;
</script>

<svelte:head>
  <title>{data.meta.title} - Saravenpi's Blog</title>
  <meta name="description" content={data.meta.description} />
  <meta name="author" content="saravenpi" />
  <meta name="robots" content="index, follow" />
  <meta
    name="keywords"
    content={data.meta.tags
      ? data.meta.tags.join(", ")
      : "blog, web development, programming"}
  />
  <meta name="theme-color" content="#16a34a" />
  
  <!-- Canonical URL -->
  <link rel="canonical" href="https://saravenpi.com/blog/{$page.params.slug}" />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article" />
  <meta property="og:title" content="{data.meta.title} - Saravenpi's Blog" />
  <meta property="og:description" content={data.meta.description} />
  <meta property="og:url" content="https://saravenpi.com/blog/{$page.params.slug}" />
  <meta property="og:site_name" content="Saravenpi's Blog" />
  <meta property="og:locale" content="en_US" />
  <meta property="article:published_time" content={data.meta.date} />
  <meta property="article:author" content="saravenpi" />
  <meta property="article:section" content="Technology" />
  {#if data.meta.tags}
    {#each data.meta.tags as tag}
      <meta property="article:tag" content={tag} />
    {/each}
  {/if}
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="{data.meta.title} - Saravenpi's Blog" />
  <meta name="twitter:description" content={data.meta.description} />
  <meta name="twitter:creator" content="@saravenpi" />
  
  <!-- JSON-LD Structured Data -->
  {@html `<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "${data.meta.title}",
    "description": "${data.meta.description}",
    "datePublished": "${data.meta.date}",
    "dateModified": "${data.meta.date}",
    "author": {
      "@type": "Person",
      "name": "saravenpi",
      "url": "https://saravenpi.com"
    },
    "publisher": {
      "@type": "Person",
      "name": "saravenpi",
      "url": "https://saravenpi.com"
    },
    "url": "https://saravenpi.com/blog/${$page.params.slug}",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://saravenpi.com/blog/${$page.params.slug}"
    },
    ${data.meta.tags ? `"keywords": [${data.meta.tags.map(tag => `"${tag}"`).join(', ')}],` : ''}
    "articleSection": "Technology"
  }
  </script>`}
</svelte:head>

<div class="pt-20 pb-20 md:pb-0">
  <article class="max-w-4xl mx-auto px-4 py-8">
    <!-- Header Card -->
    <header class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 mb-8">
      <!-- Back Button -->
      <a
        href="/blog"
        class="inline-flex items-center gap-2 px-4 py-2 mb-6 text-green-600 dark:text-green-400 border-2 border-green-600 dark:border-green-400 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-200 font-medium"
      >
        <svg
          class="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back
      </a>
      
      <h1 class="text-4xl font-bold mb-4">{data.meta.title}</h1>
      
      <div class="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600 dark:text-gray-400 mb-4">
        {#if data.meta.date}
          <time class="flex items-center gap-2 text-lg">
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {new Date(data.meta.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        {/if}
        
        {#if data.meta.description}
          <div class="flex items-center gap-2 text-lg">
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {Math.ceil(data.meta.description?.length / 5 || 100 / 5)} min read
          </div>
        {/if}
      </div>
      
      {#if data.meta.description}
        <p class="text-xl text-gray-700 dark:text-gray-300 leading-relaxed border-t border-gray-200 dark:border-gray-600 pt-4">
          {data.meta.description}
        </p>
      {/if}
      
      {#if data.meta.tags && data.meta.tags.length > 0}
        <div class="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
          {#each data.meta.tags as tag}
            <span class="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium rounded-full">
              {tag}
            </span>
          {/each}
        </div>
      {/if}
    </header>

    <div class="prose prose-lg dark:prose-invert max-w-none">
      <svelte:component this={data.content} />
    </div>
  </article>
</div>
