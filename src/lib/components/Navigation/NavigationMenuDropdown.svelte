<script lang="ts">
	import { createDropdownMenu, melt } from '@melt-ui/svelte';
	import { createEventDispatcher } from 'svelte';
	import { fly } from 'svelte/transition';

	import NavigationButton from './NavigationButton.svelte';

	import UilBars from '~icons/uil/bars';
	import UilHomeAlt from '~icons/uil/home-alt'
	import UilCheckCircle from '~icons/uil/check-circle';
	import UilPuzzlePiece from '~icons/uil/puzzle-piece';
	import UilBookOpen from '~icons/uil/book-open';
	import UilBox from '~icons/uil/box';

	const {
		elements: { trigger, menu, item, arrow },
		states: { open }
	} = createDropdownMenu({
		forceVisible: true,
		loop: true
	});
</script>

<div class="flex items-center">
	<div use:melt={$trigger}>
		<NavigationButton tooltip="Menu" tooltipPlacement="bottom-start">
			<UilBars class="h-full w-full" />
		</NavigationButton>
	</div>
	{#if $open}
		<div
			use:melt={$menu}
			transition:fly={{ duration: 150, y: -10 }}
			class="max-h-[300px] min-w-[220px] rounded-md bg-gray-50 p-1 shadow-lg"
		>
			<a
				use:melt={$item}
				href="/dashboard"
				class="flex w-full cursor-pointer items-center justify-start gap-1 rounded-md px-4 py-1 text-gray-950 transition-all duration-75 hover:bg-brand-200 hover:text-brand-800"
			>
				<UilHomeAlt />
				<span>Dashboard</span>
			</a>
			<a
				use:melt={$item}
				href="/recipes"
				class="flex w-full cursor-pointer items-center justify-start gap-1 rounded-md px-4 py-1 text-gray-950 transition-all duration-75 hover:bg-brand-200 hover:text-brand-800"
			>
				<UilCheckCircle />
				<span>Recipes</span>
			</a>
			<a
				use:melt={$item}
				href="/ingredients"
				class="flex w-full cursor-pointer items-center justify-start gap-1 rounded-md px-4 py-1 text-gray-950 transition-all duration-75 hover:bg-brand-200 hover:text-brand-800"
			>
				<UilPuzzlePiece />
				<span>Ingredients</span>
			</a>
			<a
				use:melt={$item}
				href="/menus"
				class="flex w-full cursor-pointer items-center justify-start gap-1 rounded-md px-4 py-1 text-gray-950 transition-all duration-75 hover:bg-brand-200 hover:text-brand-800"
			>
				<UilBookOpen />
				<span>Menus</span>
			</a>
			<a
				use:melt={$item}
				href="/pantry"
				class="flex w-full cursor-pointer items-center justify-start gap-1 rounded-md px-4 py-1 text-gray-950 transition-all duration-75 hover:bg-brand-200 hover:text-brand-800"
			>
				<UilBox />
				<span>Pantry</span>
			</a>
			<div class="!z-0" use:melt={$arrow} />
		</div>
	{/if}
</div>
