<script lang="ts">
	import { createTooltip, melt } from '@melt-ui/svelte';
	import { fade } from 'svelte/transition';

	export let tooltip: string;
	export let tooltipPlacement: 'bottom-start' | 'bottom' | 'bottom-end';

	const {
		elements: { trigger, content },
		states: { open }
	} = createTooltip({
		positioning: {
			placement: tooltipPlacement
		},
		openDelay: 0,
		closeDelay: 0,
		closeOnPointerDown: true,
		forceVisible: true
	});
</script>

<button
	use:melt={$trigger}
	on:click
	class="mt-[0.1rem] h-8 w-8 rounded-md border-t-2 border-t-brand-300 dark:bg-gray-600 dark:ring-gray-700 dark:hover:ring-gray-600 dark:border-t-gray-500 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:border-t-gray-700 dark:hover:text-gray-200 bg-brand-400 p-1 text-brand-700 ring-2 ring-brand-550 transition-all duration-75 hover:border-t-brand-550 hover:bg-brand-550 hover:text-brand-800 active:border-t-brand-600 active:bg-brand-600 active:text-brand-900 active:ring-brand-600"
>
	<slot />
</button>

{#if $open}
	<div
		use:melt={$content}
		in:fade={{ duration: 75 }}
		class="z-10 rounded-lg bg-gray-900 text-sm text-gray-100 shadow dark:bg-gray-50 dark:text-gray-600"
	>
		<p class="text-magnum-700 px-2 py-1">{tooltip}</p>
	</div>
{/if}
