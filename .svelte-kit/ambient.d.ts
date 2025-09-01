
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
	export const STARSHIP_SHELL: string;
	export const NIX_PROFILES: string;
	export const TERM_PROGRAM: string;
	export const CLAUDE_CODE_ENTRYPOINT: string;
	export const MYBINS: string;
	export const NODE: string;
	export const ANDROID_HOME: string;
	export const INIT_CWD: string;
	export const SHELL: string;
	export const TERM: string;
	export const HOMEBREW_REPOSITORY: string;
	export const TMPDIR: string;
	export const VIMWIKIGRAPH_CONFIG: string;
	export const TERM_PROGRAM_VERSION: string;
	export const MallocSpaceEfficient: string;
	export const WINDOWID: string;
	export const MallocNanoZone: string;
	export const npm_config_registry: string;
	export const EXTENSION_KIT_EXTENSION_TYPE: string;
	export const GIT_EDITOR: string;
	export const USER: string;
	export const COMMAND_MODE: string;
	export const OPENAI_API_KEY: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const SSH_AUTH_SOCK: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const KNOT_TOKEN: string;
	export const npm_execpath: string;
	export const TMUX: string;
	export const npm_config_frozen_lockfile: string;
	export const npm_config_verify_deps_before_run: string;
	export const PATH: string;
	export const npm_package_json: string;
	export const __CFBundleIdentifier: string;
	export const PWD: string;
	export const npm_command: string;
	export const KITTY_PID: string;
	export const OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE: string;
	export const npm_config__jsr_registry: string;
	export const npm_lifecycle_event: string;
	export const LANG: string;
	export const npm_package_name: string;
	export const NODE_PATH: string;
	export const TMUX_PANE: string;
	export const XPC_FLAGS: string;
	export const GCC_COLORS: string;
	export const NIX_SSL_CERT_FILE: string;
	export const ANTHROPIC_API_KEY: string;
	export const npm_config_node_gyp: string;
	export const XPC_SERVICE_NAME: string;
	export const npm_package_version: string;
	export const pnpm_config_verify_deps_before_run: string;
	export const HOME: string;
	export const MANPAGER: string;
	export const SHLVL: string;
	export const TERMINFO: string;
	export const is_fzf: string;
	export const HOMEBREW_PREFIX: string;
	export const LOGNAME: string;
	export const STARSHIP_SESSION_KEY: string;
	export const npm_lifecycle_script: string;
	export const XDG_DATA_DIRS: string;
	export const TMUX_PLUGIN_MANAGER_PATH: string;
	export const COREPACK_ENABLE_AUTO_PIN: string;
	export const BUN_INSTALL: string;
	export const HOMEBREW_CASK_OPTS: string;
	export const KITTY_INSTALLATION_DIR: string;
	export const KITTY_WINDOW_ID: string;
	export const npm_config_user_agent: string;
	export const HOMEBREW_CELLAR: string;
	export const INFOPATH: string;
	export const OSLogRateLimit: string;
	export const is_vim: string;
	export const CLAUDECODE: string;
	export const COLORTERM: string;
	export const KITTY_PUBLIC_KEY: string;
	export const npm_node_execpath: string;
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
		STARSHIP_SHELL: string;
		NIX_PROFILES: string;
		TERM_PROGRAM: string;
		CLAUDE_CODE_ENTRYPOINT: string;
		MYBINS: string;
		NODE: string;
		ANDROID_HOME: string;
		INIT_CWD: string;
		SHELL: string;
		TERM: string;
		HOMEBREW_REPOSITORY: string;
		TMPDIR: string;
		VIMWIKIGRAPH_CONFIG: string;
		TERM_PROGRAM_VERSION: string;
		MallocSpaceEfficient: string;
		WINDOWID: string;
		MallocNanoZone: string;
		npm_config_registry: string;
		EXTENSION_KIT_EXTENSION_TYPE: string;
		GIT_EDITOR: string;
		USER: string;
		COMMAND_MODE: string;
		OPENAI_API_KEY: string;
		PNPM_SCRIPT_SRC_DIR: string;
		SSH_AUTH_SOCK: string;
		__CF_USER_TEXT_ENCODING: string;
		KNOT_TOKEN: string;
		npm_execpath: string;
		TMUX: string;
		npm_config_frozen_lockfile: string;
		npm_config_verify_deps_before_run: string;
		PATH: string;
		npm_package_json: string;
		__CFBundleIdentifier: string;
		PWD: string;
		npm_command: string;
		KITTY_PID: string;
		OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE: string;
		npm_config__jsr_registry: string;
		npm_lifecycle_event: string;
		LANG: string;
		npm_package_name: string;
		NODE_PATH: string;
		TMUX_PANE: string;
		XPC_FLAGS: string;
		GCC_COLORS: string;
		NIX_SSL_CERT_FILE: string;
		ANTHROPIC_API_KEY: string;
		npm_config_node_gyp: string;
		XPC_SERVICE_NAME: string;
		npm_package_version: string;
		pnpm_config_verify_deps_before_run: string;
		HOME: string;
		MANPAGER: string;
		SHLVL: string;
		TERMINFO: string;
		is_fzf: string;
		HOMEBREW_PREFIX: string;
		LOGNAME: string;
		STARSHIP_SESSION_KEY: string;
		npm_lifecycle_script: string;
		XDG_DATA_DIRS: string;
		TMUX_PLUGIN_MANAGER_PATH: string;
		COREPACK_ENABLE_AUTO_PIN: string;
		BUN_INSTALL: string;
		HOMEBREW_CASK_OPTS: string;
		KITTY_INSTALLATION_DIR: string;
		KITTY_WINDOW_ID: string;
		npm_config_user_agent: string;
		HOMEBREW_CELLAR: string;
		INFOPATH: string;
		OSLogRateLimit: string;
		is_vim: string;
		CLAUDECODE: string;
		COLORTERM: string;
		KITTY_PUBLIC_KEY: string;
		npm_node_execpath: string;
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
