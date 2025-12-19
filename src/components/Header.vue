<script setup lang="ts">
    import { Button } from '@/components/ui/button'
    import {
      Dialog,
      DialogContent,
      DialogDescription,
      DialogHeader,
      DialogTitle,
      DialogTrigger,
    } from '@/components/ui/dialog'
    </script>

<template>
    <header class="mx-auto items-center justify-between px-8 pt-10 text-sm relative z-10 flex max-w-6xl">
        <p class="font-semibold tracking-wide">Pholi</p>
        <Dialog class="pb-20">
            <DialogTrigger as-child>
                <Button variant="outline">
                    Contact
                </Button>
            </DialogTrigger>

            <DialogContent class="sm:max-w-[425px] bg-white p-6 rounded-xl shadow-lg">
                <DialogHeader>
                    <DialogTitle class="text-lg font-semibold">Contact Us</DialogTitle>
                    <DialogDescription class="text-sm text-gray-600 dark:text-gray-300">
                        Have questions, concerns, or ideas? Let us know!
                    </DialogDescription>
                </DialogHeader>

                <form action="https://api.web3forms.com/submit" method="POST">
                    <input type="hidden" name="access_key" value="bd05e34a-72ca-4451-972a-7ade49b4522d">

                    <div class="flex flex-col gap-1">
                        <label for="contact-name"
                            class="text-sm font-medium text-gray-700 dark:text-gray-200">Name:</label>
                        <input id="contact-name" type="text" required placeholder="Your name" name="name"
                            class="w-full rounded-md border border-zinc-300/70 bg-white/70 px-4 py-2 placeholder-gray-500 dark:border-white/20 dark:bg-white/10 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neutral-800" />
                    </div>
                    <div class="flex flex-col gap-1">
                        <label for="contact-email"
                            class="text-sm font-medium text-gray-700 dark:text-gray-200">Email:</label>
                        <input id="contact-email" type="email" required placeholder="you@example.com" name="email"
                            class="w-full rounded-md border border-zinc-300/70 bg-white/70 px-4 py-2 placeholder-gray-500 dark:border-white/20 dark:bg-white/10 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neutral-800" />
                    </div>

                    <div class="flex flex-col gap-1">
                        <label for="contact-message"
                            class="text-sm font-medium text-gray-700 dark:text-gray-200">Message:</label>
                        <textarea id="contact-message" placeholder="Your message" required rows="4" name="message"
                            class="w-full rounded-md border border-zinc-300/70 bg-white/70 px-4 py-2 placeholder-gray-500 dark:border-white/20 dark:bg-white/10 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neutral-800 resize-none"></textarea>
                    </div>

                    <button type="submit"
                        class="mt-2 w-full rounded-md bg-sky-600 text-white font-medium px-6 py-2 hover:bg-indigo-700 transition-colors">
                        Send Message
                    </button>
                </form>
            </DialogContent>
        </Dialog>
    </header>
</template>