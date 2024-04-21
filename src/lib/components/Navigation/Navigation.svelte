<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import NavigationAvatarDropdown from './NavigationAvatarDropdown.svelte';
	import NavigationButton from './NavigationButton.svelte';
	import NavigationMenuDropdown from './NavigationMenuDropdown.svelte';

	import UilCheckCircle from '~icons/uil/check-circle';
	import UilPuzzlePiece from '~icons/uil/puzzle-piece';
	import UilBookOpen from '~icons/uil/book-open';
	import UilBox from '~icons/uil/box';

	export let user:
		| {
				name?: string | null;
				email?: string | null;
				image?: string | null;
		  }
		| null
		| undefined;

	const signedIn = !!user;

	const dispatch = createEventDispatcher();
</script>

<div class="m-2 mt-4">
	<nav
		class="flex h-16 w-full items-center justify-between rounded-lg bg-gradient-to-t from-brand-500 to-brand-400 px-4 dark:from-gray-800 dark:to-gray-700 dark:ring-0"
	>
		<div class="flex gap-3">
			{#if signedIn}
				<NavigationMenuDropdown />
			{/if}
			<a
				href="/dashboard"
				class="select-none font-brand text-3xl text-brand-50 transition-all duration-75 hover:scale-105 dark:text-brand-600"
				>Cooked</a
			>
		</div>
		<div class="flex items-center gap-3">
			{#if signedIn}
				<div class="hidden items-center gap-3 sm:flex">
					<a href="/recipes"
						><NavigationButton tooltip="Recipes" tooltipPlacement="bottom-start">
							<UilCheckCircle class="h-full w-full" />
						</NavigationButton></a
					>
					<a href="/ingredients">
						<NavigationButton tooltip="Ingredients" tooltipPlacement="bottom">
							<UilPuzzlePiece class="h-full w-full" />
						</NavigationButton>
					</a>
					<a href="/menus"
						><NavigationButton tooltip="Menus" tooltipPlacement="bottom">
							<UilBookOpen class="h-full w-full" />
						</NavigationButton></a
					>
					<a href="/pantry"
						><NavigationButton tooltip="Pantry" tooltipPlacement="bottom-end">
							<UilBox class="h-full w-full" />
						</NavigationButton></a
					>
				</div>
				<div class="flex items-center gap-3">
					<NavigationAvatarDropdown {user} on:logout={() => dispatch('logout')} />
				</div>
			{/if}
		</div>
	</nav>
</div>
