<script lang="ts">
	import { signOut } from '@auth/sveltekit/client';

	export let data;
</script>

<div>{JSON.stringify(data.session)}</div>

<img src={data.session?.user?.image} alt="avatar" />

<a href="/test">test</a>

<div>
	<button on:click={() => signOut()}> Logout </button>
</div>