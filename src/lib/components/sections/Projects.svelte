<script>
  import Icon from "@iconify/svelte";

  const projects = [
    {
      name: "Knot",
      shortDescription: "Modern monorepo package manager",
      description:
        "A modern, language-agnostic monorepo package manager written in Rust that simplifies dependency management and builds across multiple apps and packages. It offers smart package linking, online package support, a template system, and context-aware script running, enabling developers to manage complex projects with ease across different programming languages.",
      features: [
        "Smart package linking and automatic symlinking",
        "Online package support",
        "Template system for project scaffolding",
        "Context-aware script running",
        "Language-agnostic approach"
      ],
      tech: ["Rust", "YAML", "TypeScript"],
      githubUrl: "https://github.com/saravenpi/knot",
      liveUrl: null,
      color: "purple",
      icon: "solar:box-minimalistic-bold",
    },
    {
      name: "Marcel",
      shortDescription: "Gamified productivity system",
      description: "Turn your life organisation into a game with Marcel, a web-based productivity application that gamifies task management and personal organization. This innovative platform transforms mundane daily tasks into engaging challenges, making productivity fun and rewarding through game mechanics and achievement systems.",
      features: [
        "Task gamification",
        "Achievement system",
        "Progress tracking",
        "Free tier available"
      ],
      tech: ["Web Application"],
      githubUrl: null,
      liveUrl: "https://marcel.my",
      color: "orange",
      icon: "solar:gameboy-bold",
    },
    {
      name: "Wave",
      shortDescription: "Lightweight C HTTP server library",
      description: "A lightweight HTTP server library written in C, designed to simplify backend development by providing an easy-to-use framework for creating web servers. The library supports routing, static file serving, and allows developers to define custom request handlers with minimal configuration, perfect for building simple web applications or APIs directly in C without complex dependencies.",
      features: [
        "HTTP routing for different methods",
        "Static file serving",
        "Custom request handlers",
        "Minimal configuration required",
        "Response management"
      ],
      tech: ["C", "Low-level networking"],
      githubUrl: "https://github.com/saravenpi/wave",
      liveUrl: null,
      color: "green",
      icon: "solar:server-path-bold",
    },
    {
      name: "Brain.h",
      shortDescription: "Neural networks in C",
      description: "A single-header C library designed to simplify machine learning by providing structures and functions for creating neural networks. The library aims to make machine learning more accessible in C by encapsulating complex neural network functionality within a straightforward, header-only implementation.",
      features: [
        "Single-header implementation",
        "Neural network structures",
        "Header-only library design",
        "Simplified machine learning for C"
      ],
      tech: ["C", "Header-only library"],
      githubUrl: "https://github.com/saravenpi/brain.h",
      liveUrl: null,
      color: "pink",
      icon: "solar:atom-bold",
    },
    {
      name: "pebble.nvim",
      shortDescription: "Obsidian-style knowledge management for Neovim",
      description:
        "A powerful Neovim plugin for markdown-based knowledge management, offering Obsidian-style wiki link navigation and intelligent completion. It transforms Neovim into a sophisticated knowledge base system with features like wiki-style links, tag management, and an interactive graph view of document connections, leveraging ripgrep for ultra-fast file discovery.",
      features: [
        "Wiki-style link navigation",
        "Intelligent completion for links and tags",
        "Interactive graph view",
        "Tag management system",
        "Fast file discovery with ripgrep",
        "Link history tracking"
      ],
      tech: ["Lua", "Neovim", "ripgrep", "Markdown"],
      githubUrl: "https://github.com/saravenpi/pebble.nvim",
      liveUrl: null,
      color: "blue",
      icon: "solar:notebook-bold-duotone",
    },
    {
      name: "Wisp",
      shortDescription: "Terminal-native Pomodoro timer with tmux integration",
      description:
        "WISP is a sophisticated Pomodoro timer built specifically for terminal and tmux users who want to manage focused work sessions effectively. It provides extensive customization options for work session durations, comprehensive tracking capabilities, and seamless integration with tmux status bars. The tool emphasizes simplicity and flexibility while offering detailed session statistics and history tracking to help users optimize their productivity workflows.",
      features: [
        "Customizable work session and break durations",
        "Comprehensive session tracking and history",
        "Deep tmux status bar integration",
        "Interactive session naming and management",
        "Multiple display format options with colors",
        "Lightweight bash implementation"
      ],
      tech: ["Bash", "tmux", "Terminal"],
      githubUrl: "https://github.com/saravenpi/wisp",
      liveUrl: null,
      color: "yellow",
      icon: "solar:watch-round-bold",
    },
    {
      name: "Sertren",
      shortDescription: "Intelligent tmux session management plugin",
      description:
        "Sertren is a sophisticated tmux plugin that revolutionizes session management for developers by providing intelligent session switching and workspace organization capabilities. It integrates seamlessly with popular development tools like zoxide for automatic project path detection and egg for layout management. The plugin offers a user-friendly interface with fuzzy finding capabilities and safety features to prevent accidental session destruction, making tmux workflows more efficient and intuitive.",
      features: [
        "Intelligent session switcher with fuzzy finding",
        "Zoxide integration for project path detection",
        "Automatic tmux layout application via egg",
        "Safe session management with confirmations",
        "Flexible key binding configuration",
        "Graceful fallback for optional dependencies"
      ],
      tech: ["Shell", "tmux", "fzf", "zoxide"],
      githubUrl: "https://github.com/saravenpi/sertren",
      liveUrl: null,
      color: "cyan",
      icon: "solar:window-frame-bold",
    },
    {
      name: "Portal",
      shortDescription: "YAML-driven HTML index page generator",
      description:
        "Portal is a TypeScript-based CLI tool built with Bun that transforms simple YAML configuration files into clean, responsive HTML index pages. It automates the creation of centralized project directories by automatically retrieving favicons and generating self-contained HTML files with modern design. The tool is designed to help developers and organizations create customizable project indexes with minimal configuration effort.",
      features: [
        "YAML-driven configuration for projects and links",
        "Automatic favicon retrieval for external links",
        "Responsive HTML generation with modern design",
        "Support for emoji and image icons",
        "Tagging and categorization capabilities",
        "One-line global installation via curl script"
      ],
      tech: ["TypeScript", "Bun", "HTML/CSS", "Shell"],
      githubUrl: "https://github.com/saravenpi/portal",
      liveUrl: null,
      color: "indigo",
      icon: "solar:global-bold",
    },
  ];
</script>

<div
  class="flex flex-col w-full pt-32 md:pt-40 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
>
  <div class="text-5xl font-extrabold text-center mb-16 px-5">Projects</div>

  <div class="flex flex-col">
    {#each projects as project, index}
      <section
        class="relative w-full py-16 md:py-24 px-5 md:px-20 {index % 2 === 0
          ? 'bg-white dark:bg-gray-900'
          : 'bg-gray-50 dark:bg-gray-950'}"
      >
        <div class="max-w-7xl mx-auto">
          <div class="flex flex-col md:flex-row gap-8 md:gap-12 items-start {index % 2 === 0 ? '' : 'md:flex-row-reverse'}">
            <div
              class="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 {project.color ===
              'orange'
                ? 'bg-orange-500'
                : project.color === 'purple'
                ? 'bg-purple-500'
                : project.color === 'green'
                ? 'bg-green-500'
                : project.color === 'pink'
                ? 'bg-pink-500'
                : project.color === 'yellow'
                ? 'bg-yellow-500'
                : project.color === 'cyan'
                ? 'bg-cyan-500'
                : project.color === 'indigo'
                ? 'bg-indigo-500'
                : 'bg-blue-500'}"
            >
              <Icon
                icon={project.icon}
                width="40"
                height="40"
                class="text-white"
              />
            </div>

            <div class="flex-1 space-y-6">
              <div>
                <h2 class="text-4xl md:text-5xl font-bold mb-2">{project.name}</h2>
                <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-4">
                  {project.shortDescription}
                </p>
                <p class="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div class="space-y-4">
                <div>
                  <h3 class="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Key Features</h3>
                  <ul class="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {#each project.features as feature}
                      <li class="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                        <Icon
                          icon="solar:check-circle-bold"
                          width="20"
                          height="20"
                          class={project.color === 'orange'
                            ? 'text-orange-500 mt-0.5 flex-shrink-0'
                            : project.color === 'purple'
                            ? 'text-purple-500 mt-0.5 flex-shrink-0'
                            : project.color === 'green'
                            ? 'text-green-500 mt-0.5 flex-shrink-0'
                            : project.color === 'pink'
                            ? 'text-pink-500 mt-0.5 flex-shrink-0'
                            : project.color === 'yellow'
                            ? 'text-yellow-500 mt-0.5 flex-shrink-0'
                            : project.color === 'cyan'
                            ? 'text-cyan-500 mt-0.5 flex-shrink-0'
                            : project.color === 'indigo'
                            ? 'text-indigo-500 mt-0.5 flex-shrink-0'
                            : 'text-blue-500 mt-0.5 flex-shrink-0'}
                        />
                        <span class="text-sm md:text-base">{feature}</span>
                      </li>
                    {/each}
                  </ul>
                </div>

                <div class="flex flex-wrap gap-2">
                  {#each project.tech as tech}
                    <span
                      class="px-3 py-1 text-sm rounded-full {project.color === 'orange'
                        ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300'
                        : project.color === 'purple'
                        ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
                        : project.color === 'green'
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                        : project.color === 'pink'
                        ? 'bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300'
                        : project.color === 'yellow'
                        ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
                        : project.color === 'cyan'
                        ? 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300'
                        : project.color === 'indigo'
                        ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300'
                        : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'}"
                    >
                      {tech}
                    </span>
                  {/each}
                </div>
              </div>

              <div class="flex gap-4 pt-4">
                {#if project.githubUrl}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all {project.color ===
                    'orange'
                      ? 'bg-orange-500 hover:bg-orange-600 text-white'
                      : project.color === 'purple'
                      ? 'bg-purple-500 hover:bg-purple-600 text-white'
                      : project.color === 'green'
                      ? 'bg-green-500 hover:bg-green-600 text-white'
                      : project.color === 'pink'
                      ? 'bg-pink-500 hover:bg-pink-600 text-white'
                      : project.color === 'yellow'
                      ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
                      : project.color === 'cyan'
                      ? 'bg-cyan-500 hover:bg-cyan-600 text-white'
                      : project.color === 'indigo'
                      ? 'bg-indigo-500 hover:bg-indigo-600 text-white'
                      : 'bg-blue-500 hover:bg-blue-600 text-white'}"
                  >
                    <Icon icon="mdi:github" width="20" height="20" />
                    <span>View on GitHub</span>
                  </a>
                {/if}
                {#if project.liveUrl}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all border-2 {project.color ===
                    'orange'
                      ? 'border-orange-500 text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20'
                      : project.color === 'purple'
                      ? 'border-purple-500 text-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20'
                      : project.color === 'green'
                      ? 'border-green-500 text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'
                      : project.color === 'pink'
                      ? 'border-pink-500 text-pink-500 hover:bg-pink-50 dark:hover:bg-pink-900/20'
                      : project.color === 'yellow'
                      ? 'border-yellow-500 text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      : project.color === 'cyan'
                      ? 'border-cyan-500 text-cyan-500 hover:bg-cyan-50 dark:hover:bg-cyan-900/20'
                      : project.color === 'indigo'
                      ? 'border-indigo-500 text-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900/20'
                      : 'border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20'}"
                  >
                    <Icon icon="solar:link-bold" width="20" height="20" />
                    <span>Visit Website</span>
                  </a>
                {/if}
              </div>
            </div>
          </div>
        </div>
      </section>
    {/each}
  </div>
</div>
