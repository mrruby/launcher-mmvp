<script lang="ts">
	import { useQuery } from '@sveltestack/svelte-query';
	import { fetchStateInfo } from '$services';

	const queryResult = useQuery('stateInfo', fetchStateInfo);
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	{#if $queryResult.isLoading}
		Loading...
	{:else if $queryResult.error}
		An error has occurred:
		{$queryResult.error}
	{:else}
		<div class="space-y-10 text-center flex flex-col items-center">
			<h1 class="h1">Welcome to Holochain Launcher.</h1>
			<h2>Version: ${$queryResult.data?.default_version}</h2>
		</div>
	{/if}
</div>
