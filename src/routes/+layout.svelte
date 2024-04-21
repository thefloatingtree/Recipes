<script>
	import '../app.postcss';
	import Navigation from '$lib/components/Navigation/Navigation.svelte';
	import { signOut, signIn } from '@auth/sveltekit/client';

	export let data;
</script>

<Navigation
	user={data.session?.user}
	on:logout={() => signOut()}
	on:login={() =>
		signIn('google', {
			callbackUrl: '/dashboard'
		})}
/>
<main class="mx-6">
	<slot />
</main>

<style lang="postcss">
	:global(body) {
		@apply bg-gray-50 text-gray-950 dark:bg-gray-900 dark:text-gray-50;
	}
</style>
