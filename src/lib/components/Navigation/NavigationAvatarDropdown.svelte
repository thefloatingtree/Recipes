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

	const dispatch = createEventDispatcher();

	const {
		elements: { trigger, menu, item, separator, arrow },
		states: { open }
	} = createDropdownMenu({
		forceVisible: true,
		loop: true
	});
</script>

<div class="flex items-center">
	<button class="transition-all duration-75 hover:scale-105" use:melt={$trigger}>
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
			<div use:melt={$separator} class="my-1 h-[1px] rounded-md bg-gray-200 opacity-40"></div>
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
