
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```sh
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const STARSHIP_SHELL: string;
	export const MANPATH: string;
	export const NIX_PROFILES: string;
	export const TERM_PROGRAM: string;
	export const MYBINS: string;
	export const NODE: string;
	export const ANDROID_HOME: string;
	export const TERM: string;
	export const SHELL: string;
	export const HOMEBREW_REPOSITORY: string;
	export const TMPDIR: string;
	export const VIMWIKIGRAPH_CONFIG: string;
	export const GARDEN_HOOKS_DIR: string;
	export const TERM_PROGRAM_VERSION: string;
	export const WINDOWID: string;
	export const OBSIDIAN: string;
	export const npm_config_local_prefix: string;
	export const USER: string;
	export const COMMAND_MODE: string;
	export const OPENAI_API_KEY: string;
	export const SSH_AUTH_SOCK: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const npm_execpath: string;
	export const KNOT_TOKEN: string;
	export const NTFY_SH: string;
	export const TMUX: string;
	export const PATH: string;
	export const npm_package_json: string;
	export const LaunchInstanceID: string;
	export const __CFBundleIdentifier: string;
	export const PWD: string;
	export const npm_command: string;
	export const npm_lifecycle_event: string;
	export const KITTY_PID: string;
	export const npm_package_name: string;
	export const LANG: string;
	export const CLAUDE_SESSION_ID: string;
	export const NODE_PATH: string;
	export const TMUX_PANE: string;
	export const XPC_FLAGS: string;
	export const GCC_COLORS: string;
	export const NIX_SSL_CERT_FILE: string;
	export const ANTHROPIC_API_KEY: string;
	export const XPC_SERVICE_NAME: string;
	export const npm_package_version: string;
	export const GARDEN_HOOKS_ENABLED: string;
	export const SHLVL: string;
	export const MANPAGER: string;
	export const HOME: string;
	export const TERMINFO: string;
	export const is_fzf: string;
	export const HOMEBREW_PREFIX: string;
	export const STARSHIP_SESSION_KEY: string;
	export const LOGNAME: string;
	export const npm_lifecycle_script: string;
	export const XDG_DATA_DIRS: string;
	export const TMUX_PLUGIN_MANAGER_PATH: string;
	export const HOMEBREW_CASK_OPTS: string;
	export const BUN_INSTALL: string;
	export const GARDEN_AGENT_ID: string;
	export const KITTY_INSTALLATION_DIR: string;
	export const npm_config_user_agent: string;
	export const KITTY_WINDOW_ID: string;
	export const HOMEBREW_CELLAR: string;
	export const INFOPATH: string;
	export const OSLogRateLimit: string;
	export const SECURITYSESSIONID: string;
	export const is_vim: string;
	export const npm_node_execpath: string;
	export const KITTY_PUBLIC_KEY: string;
	export const COLORTERM: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		STARSHIP_SHELL: string;
		MANPATH: string;
		NIX_PROFILES: string;
		TERM_PROGRAM: string;
		MYBINS: string;
		NODE: string;
		ANDROID_HOME: string;
		TERM: string;
		SHELL: string;
		HOMEBREW_REPOSITORY: string;
		TMPDIR: string;
		VIMWIKIGRAPH_CONFIG: string;
		GARDEN_HOOKS_DIR: string;
		TERM_PROGRAM_VERSION: string;
		WINDOWID: string;
		OBSIDIAN: string;
		npm_config_local_prefix: string;
		USER: string;
		COMMAND_MODE: string;
		OPENAI_API_KEY: string;
		SSH_AUTH_SOCK: string;
		__CF_USER_TEXT_ENCODING: string;
		npm_execpath: string;
		KNOT_TOKEN: string;
		NTFY_SH: string;
		TMUX: string;
		PATH: string;
		npm_package_json: string;
		LaunchInstanceID: string;
		__CFBundleIdentifier: string;
		PWD: string;
		npm_command: string;
		npm_lifecycle_event: string;
		KITTY_PID: string;
		npm_package_name: string;
		LANG: string;
		CLAUDE_SESSION_ID: string;
		NODE_PATH: string;
		TMUX_PANE: string;
		XPC_FLAGS: string;
		GCC_COLORS: string;
		NIX_SSL_CERT_FILE: string;
		ANTHROPIC_API_KEY: string;
		XPC_SERVICE_NAME: string;
		npm_package_version: string;
		GARDEN_HOOKS_ENABLED: string;
		SHLVL: string;
		MANPAGER: string;
		HOME: string;
		TERMINFO: string;
		is_fzf: string;
		HOMEBREW_PREFIX: string;
		STARSHIP_SESSION_KEY: string;
		LOGNAME: string;
		npm_lifecycle_script: string;
		XDG_DATA_DIRS: string;
		TMUX_PLUGIN_MANAGER_PATH: string;
		HOMEBREW_CASK_OPTS: string;
		BUN_INSTALL: string;
		GARDEN_AGENT_ID: string;
		KITTY_INSTALLATION_DIR: string;
		npm_config_user_agent: string;
		KITTY_WINDOW_ID: string;
		HOMEBREW_CELLAR: string;
		INFOPATH: string;
		OSLogRateLimit: string;
		SECURITYSESSIONID: string;
		is_vim: string;
		npm_node_execpath: string;
		KITTY_PUBLIC_KEY: string;
		COLORTERM: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
