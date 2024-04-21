<script lang="ts">
	import { createDropdownMenu, melt } from '@melt-ui/svelte';
	import { createEventDispatcher } from 'svelte';
	import { fly } from 'svelte/transition';

	import UilCog from '~icons/uil/cog';
	import UilExit from '~icons/uil/exit';

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

	const {
		elements: { trigger, menu, item, separator, arrow },
		states: { open }
	} = createDropdownMenu({
		forceVisible: true,
		loop: true
	});
</script>

<div class="m-2 mt-4">
	<nav
		class="flex h-16 w-full items-center justify-between rounded-lg bg-gradient-to-t from-brand-500 to-brand-400 px-4 dark:from-gray-800 dark:to-gray-700 dark:ring-0"
	>
		<a
			href="/dashboard"
			class="select-none font-brand text-3xl text-brand-50 transition-all duration-75 hover:scale-105 dark:text-brand-600"
			>Cooked</a
		>
		<div class="flex items-center divide-x divide-brand-300 dark:divide-gray-600">
			{#if signedIn}
				<div class="flex items-center gap-6 pr-4">
					<a
						class="font-bold text-brand-50 transition-all duration-75 hover:scale-105"
						href="/recipes">Recipes</a
					>
					<a
						class="font-bold text-brand-50 transition-all duration-75 hover:scale-105"
						href="/ingredients">Ingredients</a
					>
					<a
						class="font-bold text-brand-50 transition-all duration-75 hover:scale-105"
						href="/menus">Menus</a
					>
					<a
						class="font-bold text-brand-50 transition-all duration-75 hover:scale-105"
						href="/pantry">Pantry</a
					>
				</div>
				<div class="flex items-center pl-4">
					<button use:melt={$trigger}>
						<img class="w-8 rounded-full" src={user?.image} alt="avatar" />
					</button>
					{#if $open}
						<div
							use:melt={$menu}
							transition:fly={{ duration: 150, y: -10 }}
							class="max-h-[300px] min-w-[220px] rounded-md bg-gray-50 p-1 shadow-lg"
						>
							<div class="flex flex-col rounded-md px-4 py-2">
								<span class="leading-5 text-gray-950">{user?.name}</span>
								<span class="text-sm leading-5 text-gray-400">{user?.email}</span>
							</div>
							<div
								use:melt={$separator}
								class="my-1 h-[1px] rounded-md bg-gray-200 opacity-40"
							></div>
							<a
								use:melt={$item}
								href="/settings"
								class="flex w-full cursor-pointer items-center justify-start gap-1 rounded-md px-4 py-1 text-gray-950 transition-all duration-75 hover:bg-brand-200 hover:text-brand-800"
							>
								<UilCog />
								<span>Settings</span>
							</a>
							<button
								on:click={() => dispatch('logout')}
								use:melt={$item}
								class="flex w-full cursor-pointer items-center justify-start gap-1 rounded-md px-4 py-1 text-gray-950 transition-all duration-75 hover:bg-brand-200 hover:text-brand-800"
							>
								<UilExit />
								<span>Logout</span>
							</button>
							<div class="!z-0" use:melt={$arrow} />
						</div>
					{/if}
				</div>
			{/if}
		</div>
	</nav>
</div>
