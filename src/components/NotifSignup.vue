<template>
    <div
    class="mx-auto items-center px-8 py-8 text-center lg:py-12 relative z-20 flex max-w-6xl flex-col gap-6 -mt-1.5">
    <form action="https://api.web3forms.com/submit" method="POST"
        class="mt-4 w-full sm:flex-row flex max-w-md flex-col gap-3">

        <input type="hidden" name="access_key" value="d63c8509-a021-440d-92ca-5990f0467080">
        <input name="email" required type="email" placeholder="you@example.com"
            class="flex-1 border border-zinc-300/70 placeholder:text-gray-500 backdrop-blur focus:outline-none focus:ring-2 focus:ring-neutral-800 dark:border-white/20 dark:placeholder:text-neutral-400 w-full rounded-md bg-white/70 px-4 py-2 dark:bg-white/10" />
        <button type="submit"
            class="inline-flex border border-transparent transition-colors hover:bg-neutral-700 dark:hover:bg-indigo-500 items-center justify-center rounded-md bg-neutral-900 px-6 py-2 font-medium text-neutral-100 dark:bg-indigo-600">
            Notify Me
        </button>
    </form>
    <div class="text-xs text-gray-500 dark:text-neutral-400">No spam — just one email when we’re live. ✨</div>
    </div>
</template>
