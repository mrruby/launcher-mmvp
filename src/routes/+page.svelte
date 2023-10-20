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
		<section class="card w-full">
			<div class="p-4 space-y-4">
				<div class="placeholder" />
				<div class="grid grid-cols-3 gap-8">
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
				</div>
				<div class="grid grid-cols-4 gap-4">
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
				</div>
			</div>
		</section>
	{:else if $stateInfoResult.error}
		An error has occurred:
		{$stateInfoResult.error}
	{:else}
		<div class="space-y-10 text-center flex flex-col items-center">
			<h1 class="h1">Welcome to Holochain Launcher.</h1>
			<h2>Version: ${$stateInfoResult.data?.default_version}</h2>
			<h2>Language: {get(languageStoreInstance)}</h2>

			<Tooltip text="This is a custom tooltip for SvelteKit!">Hover over me</Tooltip>

			<button type="button" class="btn variant-filled">
				<span>Button</span>
			</button>
		</div>
	{/if}
</div>
