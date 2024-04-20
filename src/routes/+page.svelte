<script lang="ts">
	import { signIn } from '@auth/sveltekit/client';
</script>

<div>
	<button on:click={() => signIn('google', {
		callbackUrl: "/dashboard"
	})}> Login </button>
</div>

