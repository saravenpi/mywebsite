<script>
  import { onMount } from "svelte";
  import { loadBlogPosts, getAllTags } from "$lib/utils.js";

  let posts = [];
  let filteredPosts = [];
  let allTags = [];
  let selectedTag = null;

  onMount(async () => {
    try {
      posts = await loadBlogPosts();
      filteredPosts = posts;
      allTags = getAllTags(posts);
    } catch (error) {
      console.error("Failed to load blog posts:", error);
    }
  });

  function filterByTag(tag) {
    if (selectedTag === tag) {
      selectedTag = null;
      filteredPosts = posts;
    } else {
      selectedTag = tag;
      filteredPosts = posts.filter(
        (post) => post.tags && post.tags.includes(tag)
      );
    }
  }

  function resetFilter() {
    selectedTag = null;
    filteredPosts = posts;
  }
</script>

<div class="flex flex-col gap-10 w-full p-5 md:p-20 pt-32 md:pt-40">
    <div class="flex flex-col items-center gap-6">
      <h1 class="text-5xl font-extrabold text-center">Blog</h1>

      <!-- Tags Filter -->
      {#if allTags.length > 0}
        <div class="flex flex-col items-center gap-4">
          <div class="flex flex-wrap justify-center gap-2 max-w-4xl">
            <button
              on:click={resetFilter}
              class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border-2
                {selectedTag === null
                ? 'bg-green-600 text-white border-green-600 dark:bg-green-500 dark:border-green-500'
                : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 dark:hover:bg-gray-700'}"
            >
              All ({posts.length})
            </button>
            {#each allTags as tag}
              <button
                on:click={() => filterByTag(tag)}
                class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border-2 capitalize
                  {selectedTag === tag
                  ? 'bg-green-600 text-white border-green-600 dark:bg-green-500 dark:border-green-500'
                  : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 dark:hover:bg-gray-700'}"
              >
                {tag} ({posts.filter((p) => p.tags && p.tags.includes(tag))
                  .length})
              </button>
            {/each}
          </div>

          {#if selectedTag}
            <p class="text-gray-600 dark:text-gray-400 text-center">
              Showing {filteredPosts.length} post{filteredPosts.length !== 1
                ? "s"
                : ""} tagged with "{selectedTag}"
            </p>
          {/if}
        </div>
      {/if}
    </div>

    {#if filteredPosts.length === 0}
      <div class="text-center">
        <p class="text-2xl text-gray-600 dark:text-gray-400">
          {posts.length === 0
            ? "No posts yet..."
            : `No posts found with tag "${selectedTag}"`}
        </p>
      </div>
    {:else}
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {#each filteredPosts as post}
          <a
            href="/blog/{post.slug}"
            class="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:-translate-y-1 flex flex-col h-full no-underline"
          >
            <!-- Tags Pills -->
            {#if post.tags && post.tags.length > 0}
              <div class="flex flex-wrap gap-2 mb-4">
                {#each post.tags.slice(0, 3) as tag}
                  <span
                    class="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium rounded-full"
                  >
                    {tag}
                  </span>
                {/each}
                {#if post.tags.length > 3}
                  <span
                    class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs font-medium rounded-full"
                  >
                    +{post.tags.length - 3}
                  </span>
                {/if}
              </div>
            {/if}

            <h2
              class="text-2xl font-bold mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors line-clamp-2"
            >
              {post.title}
            </h2>

            {#if post.date}
              <time
                class="text-gray-500 dark:text-gray-400 text-sm font-medium"
              >
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            {/if}

            {#if post.description}
              <p
                class="text-gray-700 dark:text-gray-300 mt-3 line-clamp-3 leading-relaxed flex-grow"
              >
                {post.description}
              </p>
            {/if}

            <div class="flex items-center justify-between mt-6 mt-auto">
              <div
                class="text-green-600 dark:text-green-400 font-semibold group-hover:underline transition-all"
              >
                Read more →
              </div>
              <div class="text-gray-400 dark:text-gray-500 text-sm">
                {Math.ceil(post.description?.length / 5 || 100 / 5)} min read
              </div>
            </div>
          </a>
        {/each}
      </div>
    {/if}
  </div>
