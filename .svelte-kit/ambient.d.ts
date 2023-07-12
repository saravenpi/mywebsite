
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
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
	export const CROFI: string;
	export const TMUX: string;
	export const MAIL: string;
	export const USER: string;
	export const fish_user_paths: string;
	export const npm_config_user_agent: string;
	export const XDG_SEAT: string;
	export const STARSHIP_SHELL: string;
	export const SSH_AGENT_PID: string;
	export const XDG_SESSION_TYPE: string;
	export const FZF_DEFAULT_OPTS: string;
	export const npm_package_devDependencies_vite: string;
	export const npm_node_execpath: string;
	export const SHLVL: string;
	export const HOME: string;
	export const TERMINFO: string;
	export const MOTD_SHOWN: string;
	export const DESKTOP_SESSION: string;
	export const KITTY_INSTALLATION_DIR: string;
	export const TERM_PROGRAM_VERSION: string;
	export const npm_package_devDependencies_eslint_config_prettier: string;
	export const npm_package_devDependencies_eslint_plugin_svelte: string;
	export const OPENAI_API_KEY: string;
	export const CNVIM: string;
	export const NIX_PROFILES: string;
	export const CNIXPKGS: string;
	export const KITTY_PID: string;
	export const VISUAL: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const NIX_PATH: string;
	export const COLORTERM: string;
	export const CFONTS: string;
	export const npm_package_devDependencies_tailwindcss: string;
	export const NIXPKGS_ALLOW_UNFREE: string;
	export const NIX_REMOTE: string;
	export const OMF_PATH: string;
	export const MOZ_PLUGIN_PATH: string;
	export const npm_package_scripts_dev: string;
	export const npm_package_devDependencies_prettier: string;
	export const LOGNAME: string;
	export const CI3: string;
	export const npm_package_type: string;
	export const CDUNST: string;
	export const CXORG: string;
	export const WINDOWID: string;
	export const npm_package_private: string;
	export const npm_package_devDependencies_autoprefixer: string;
	export const XDG_SESSION_CLASS: string;
	export const npm_package_scripts_lint: string;
	export const npm_config_registry: string;
	export const KITTY_PUBLIC_KEY: string;
	export const TERM: string;
	export const XDG_SESSION_ID: string;
	export const LC_COLLATE: string;
	export const WINDOWPATH: string;
	export const npm_config_node_gyp: string;
	export const PATH: string;
	export const SESSION_MANAGER: string;
	export const npm_package_name: string;
	export const NODE: string;
	export const XDG_MENU_PREFIX: string;
	export const XDG_RUNTIME_DIR: string;
	export const DISPLAY: string;
	export const CKITTY: string;
	export const LANG: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const npm_package_devDependencies_eslint: string;
	export const TERM_PROGRAM: string;
	export const LS_COLORS: string;
	export const XAUTHORITY: string;
	export const npm_lifecycle_script: string;
	export const SSH_AUTH_SOCK: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const SHELL: string;
	export const npm_package_version: string;
	export const npm_lifecycle_event: string;
	export const NODE_PATH: string;
	export const tmux_version: string;
	export const npm_package_scripts_build: string;
	export const npm_package_devDependencies_svelte: string;
	export const CODE: string;
	export const SCHOOL: string;
	export const KITTY_WINDOW_ID: string;
	export const CWALLPAPERS: string;
	export const XDG_VTNR: string;
	export const npm_package_scripts_format: string;
	export const PWD: string;
	export const CFISH: string;
	export const CPICOM: string;
	export const npm_execpath: string;
	export const OMF_CONFIG: string;
	export const XDG_CONFIG_DIRS: string;
	export const XDG_DATA_DIRS: string;
	export const STARSHIP_SESSION_KEY: string;
	export const NIX_USER_PROFILE_DIR: string;
	export const CXMODMAP: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_package_devDependencies_postcss: string;
	export const npm_command: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const npm_package_scripts_preview: string;
	export const npm_package_devDependencies_prettier_plugin_svelte: string;
	export const PNPM_HOME: string;
	export const TMUX_PANE: string;
	export const CPOLYBAR: string;
	export const EDITOR: string;
	export const INIT_CWD: string;
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
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
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
		CROFI: string;
		TMUX: string;
		MAIL: string;
		USER: string;
		fish_user_paths: string;
		npm_config_user_agent: string;
		XDG_SEAT: string;
		STARSHIP_SHELL: string;
		SSH_AGENT_PID: string;
		XDG_SESSION_TYPE: string;
		FZF_DEFAULT_OPTS: string;
		npm_package_devDependencies_vite: string;
		npm_node_execpath: string;
		SHLVL: string;
		HOME: string;
		TERMINFO: string;
		MOTD_SHOWN: string;
		DESKTOP_SESSION: string;
		KITTY_INSTALLATION_DIR: string;
		TERM_PROGRAM_VERSION: string;
		npm_package_devDependencies_eslint_config_prettier: string;
		npm_package_devDependencies_eslint_plugin_svelte: string;
		OPENAI_API_KEY: string;
		CNVIM: string;
		NIX_PROFILES: string;
		CNIXPKGS: string;
		KITTY_PID: string;
		VISUAL: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		NIX_PATH: string;
		COLORTERM: string;
		CFONTS: string;
		npm_package_devDependencies_tailwindcss: string;
		NIXPKGS_ALLOW_UNFREE: string;
		NIX_REMOTE: string;
		OMF_PATH: string;
		MOZ_PLUGIN_PATH: string;
		npm_package_scripts_dev: string;
		npm_package_devDependencies_prettier: string;
		LOGNAME: string;
		CI3: string;
		npm_package_type: string;
		CDUNST: string;
		CXORG: string;
		WINDOWID: string;
		npm_package_private: string;
		npm_package_devDependencies_autoprefixer: string;
		XDG_SESSION_CLASS: string;
		npm_package_scripts_lint: string;
		npm_config_registry: string;
		KITTY_PUBLIC_KEY: string;
		TERM: string;
		XDG_SESSION_ID: string;
		LC_COLLATE: string;
		WINDOWPATH: string;
		npm_config_node_gyp: string;
		PATH: string;
		SESSION_MANAGER: string;
		npm_package_name: string;
		NODE: string;
		XDG_MENU_PREFIX: string;
		XDG_RUNTIME_DIR: string;
		DISPLAY: string;
		CKITTY: string;
		LANG: string;
		XDG_CURRENT_DESKTOP: string;
		npm_package_devDependencies_eslint: string;
		TERM_PROGRAM: string;
		LS_COLORS: string;
		XAUTHORITY: string;
		npm_lifecycle_script: string;
		SSH_AUTH_SOCK: string;
		npm_package_devDependencies__sveltejs_kit: string;
		SHELL: string;
		npm_package_version: string;
		npm_lifecycle_event: string;
		NODE_PATH: string;
		tmux_version: string;
		npm_package_scripts_build: string;
		npm_package_devDependencies_svelte: string;
		CODE: string;
		SCHOOL: string;
		KITTY_WINDOW_ID: string;
		CWALLPAPERS: string;
		XDG_VTNR: string;
		npm_package_scripts_format: string;
		PWD: string;
		CFISH: string;
		CPICOM: string;
		npm_execpath: string;
		OMF_CONFIG: string;
		XDG_CONFIG_DIRS: string;
		XDG_DATA_DIRS: string;
		STARSHIP_SESSION_KEY: string;
		NIX_USER_PROFILE_DIR: string;
		CXMODMAP: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_package_devDependencies_postcss: string;
		npm_command: string;
		PNPM_SCRIPT_SRC_DIR: string;
		npm_package_scripts_preview: string;
		npm_package_devDependencies_prettier_plugin_svelte: string;
		PNPM_HOME: string;
		TMUX_PANE: string;
		CPOLYBAR: string;
		EDITOR: string;
		INIT_CWD: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: string]: string | undefined;
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
