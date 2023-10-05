<script lang="ts">
	import { onMount } from 'svelte';
	import { appWindow, LogicalSize } from '@tauri-apps/api/window';

	onMount(async () => {
		const size = await appWindow.innerSize();
		console.log('innerSize', await appWindow.innerSize());
		console.log('outerSize', await appWindow.outerSize());
		await appWindow.setSize(new LogicalSize(1200, 500));
	});
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<h2 class="h2">Welcome to Launcher.</h2>
	</div>
</div>
