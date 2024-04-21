<script>
	import { signIn } from '@auth/sveltekit/client';
    import UilGoogle from '~icons/uil/google'
</script>

<div class="flex items-center justify-center w-full h-[80vh]">
    <button
        class="flex h-12 items-center gap-2 rounded-md bg-brand-500 hover:bg-brand-550 px-4 font-bold text-brand-50 transition-all duration-150 dark:bg-gray-500 dark:hover:bg-gray-600 dark:text-gray-50 whitespace-nowrap"
        on:click={() =>
            signIn('google', {
                callbackUrl: '/dashboard'
            })}
    >
        <UilGoogle />
        <span>Continue with Google</span>
    </button>
</div>
