<script lang="ts">
	import { get } from 'svelte/store';
	import { languageStoreInstance } from '$services';
	import { languageEN } from '$utils';
	import { AppData } from '$api';
	import Tooltip from '$components/Tooltip.svelte';

	const { stateInfoResult } = AppData();

	languageStoreInstance.set(languageEN);
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	{#if $stateInfoResult.isLoading}
		Loading...
	{:else if $stateInfoResult.error}
		An error has occurred:
		{$stateInfoResult.error}
	{:else}
		<div class="space-y-10 text-center flex flex-col items-center">
			<h1 class="h1">Welcome to Holochain Launcher.</h1>
			<h2>Version: ${$stateInfoResult.data?.default_version}</h2>
			<h2>Language: {get(languageStoreInstance)}</h2>

			<Tooltip text="This is a custom tooltip for SvelteKit!">Hover over me</Tooltip>
		</div>
	{/if}
</div>
