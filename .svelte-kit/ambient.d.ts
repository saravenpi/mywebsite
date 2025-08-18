
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
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
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const SHELL: string;
	export const npm_command: string;
	export const GHOSTTY_BIN_DIR: string;
	export const COLORTERM: string;
	export const XPC_FLAGS: string;
	export const TERM_PROGRAM_VERSION: string;
	export const TMUX: string;
	export const NODE: string;
	export const __CFBundleIdentifier: string;
	export const SSH_AUTH_SOCK: string;
	export const ANTHROPIC_API_KEY: string;
	export const TMUX_PLUGIN_MANAGER_PATH: string;
	export const OSLogRateLimit: string;
	export const OPENAI_API_KEY: string;
	export const npm_config_local_prefix: string;
	export const HOMEBREW_PREFIX: string;
	export const is_vim: string;
	export const PWD: string;
	export const NIX_PROFILES: string;
	export const LOGNAME: string;
	export const MANPATH: string;
	export const _: string;
	export const COMMAND_MODE: string;
	export const HOME: string;
	export const LANG: string;
	export const npm_package_version: string;
	export const STARSHIP_SHELL: string;
	export const NIX_SSL_CERT_FILE: string;
	export const TMPDIR: string;
	export const MYBINS: string;
	export const STARSHIP_SESSION_KEY: string;
	export const INFOPATH: string;
	export const npm_lifecycle_script: string;
	export const GHOSTTY_RESOURCES_DIR: string;
	export const ANDROID_HOME: string;
	export const TERMINFO: string;
	export const TERM: string;
	export const npm_package_name: string;
	export const USER: string;
	export const TMUX_PANE: string;
	export const HOMEBREW_CELLAR: string;
	export const MANPAGER: string;
	export const GHOSTTY_SHELL_INTEGRATION_NO_SUDO: string;
	export const npm_lifecycle_event: string;
	export const SHLVL: string;
	export const HOMEBREW_REPOSITORY: string;
	export const XPC_SERVICE_NAME: string;
	export const npm_config_user_agent: string;
	export const npm_execpath: string;
	export const npm_package_json: string;
	export const BUN_INSTALL: string;
	export const GCC_COLORS: string;
	export const XDG_DATA_DIRS: string;
	export const PATH: string;
	export const npm_node_execpath: string;
	export const is_fzf: string;
	export const OLDPWD: string;
	export const VIMWIKIGRAPH_CONFIG: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const TERM_PROGRAM: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
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
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		SHELL: string;
		npm_command: string;
		GHOSTTY_BIN_DIR: string;
		COLORTERM: string;
		XPC_FLAGS: string;
		TERM_PROGRAM_VERSION: string;
		TMUX: string;
		NODE: string;
		__CFBundleIdentifier: string;
		SSH_AUTH_SOCK: string;
		ANTHROPIC_API_KEY: string;
		TMUX_PLUGIN_MANAGER_PATH: string;
		OSLogRateLimit: string;
		OPENAI_API_KEY: string;
		npm_config_local_prefix: string;
		HOMEBREW_PREFIX: string;
		is_vim: string;
		PWD: string;
		NIX_PROFILES: string;
		LOGNAME: string;
		MANPATH: string;
		_: string;
		COMMAND_MODE: string;
		HOME: string;
		LANG: string;
		npm_package_version: string;
		STARSHIP_SHELL: string;
		NIX_SSL_CERT_FILE: string;
		TMPDIR: string;
		MYBINS: string;
		STARSHIP_SESSION_KEY: string;
		INFOPATH: string;
		npm_lifecycle_script: string;
		GHOSTTY_RESOURCES_DIR: string;
		ANDROID_HOME: string;
		TERMINFO: string;
		TERM: string;
		npm_package_name: string;
		USER: string;
		TMUX_PANE: string;
		HOMEBREW_CELLAR: string;
		MANPAGER: string;
		GHOSTTY_SHELL_INTEGRATION_NO_SUDO: string;
		npm_lifecycle_event: string;
		SHLVL: string;
		HOMEBREW_REPOSITORY: string;
		XPC_SERVICE_NAME: string;
		npm_config_user_agent: string;
		npm_execpath: string;
		npm_package_json: string;
		BUN_INSTALL: string;
		GCC_COLORS: string;
		XDG_DATA_DIRS: string;
		PATH: string;
		npm_node_execpath: string;
		is_fzf: string;
		OLDPWD: string;
		VIMWIKIGRAPH_CONFIG: string;
		__CF_USER_TEXT_ENCODING: string;
		TERM_PROGRAM: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
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
