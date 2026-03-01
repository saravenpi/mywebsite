<script>
  const projects = [
    { name: "Knot", description: "A modern, language-agnostic monorepo package manager written in Rust that simplifies dependency management and builds across multiple apps and packages.", tech: ["Rust", "YAML", "TypeScript"], githubUrl: "https://github.com/saravenpi/knot" },
    { name: "Marcel", description: "Turn your life organisation into a game with Marcel, a web-based productivity application that gamifies task management and personal organization.", tech: ["Web Application"], liveUrl: "https://marcel.my" },
    { name: "Wave", description: "A lightweight HTTP server library written in C, designed to simplify backend development by providing an easy-to-use framework for creating web servers.", tech: ["C", "Low-level networking"], githubUrl: "https://github.com/saravenpi/wave" },
    { name: "Brain.h", description: "A single-header C library designed to simplify machine learning by providing structures and functions for creating neural networks.", tech: ["C", "Header-only library"], githubUrl: "https://github.com/saravenpi/brain.h" },
    { name: "pebble.nvim", description: "A powerful Neovim plugin for markdown-based knowledge management, offering Obsidian-style wiki link navigation and intelligent completion.", tech: ["Lua", "Neovim", "ripgrep", "Markdown"], githubUrl: "https://github.com/saravenpi/pebble.nvim" },
    { name: "Wisp", description: "WISP is a sophisticated Pomodoro timer built specifically for terminal and tmux users who want to manage focused work sessions effectively.", tech: ["Bash", "tmux", "Terminal"], githubUrl: "https://github.com/saravenpi/wisp" },
    { name: "Sertren", description: "Sertren is a sophisticated tmux plugin that revolutionizes session management for developers by providing intelligent session switching and workspace organization capabilities.", tech: ["Shell", "tmux", "fzf", "zoxide"], githubUrl: "https://github.com/saravenpi/sertren" },
    { name: "Portal", description: "Portal is a TypeScript-based CLI tool built with Bun that transforms simple YAML configuration files into clean, responsive HTML index pages.", tech: ["TypeScript", "Bun", "HTML/CSS", "Shell"], githubUrl: "https://github.com/saravenpi/portal" },
  ];
</script>

<main>
  <h1>Projects</h1>
  {#each projects as project}
    <section>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <p><strong>Tech:</strong> {project.tech.join(", ")}</p>
      <p>
        {#if project.githubUrl}<a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>{/if}
        {#if project.liveUrl}{#if project.githubUrl}|{/if}<a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Site</a>{/if}
      </p>
    </section>
  {/each}
</main>

<style>
  section { margin: 2rem 0; padding: 1rem 0; border-bottom: 1px solid #cdb8a0; }
  section:last-child { border-bottom: none; }
</style>
