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
  <div id="pholi"
    class="bg-white text-gray-800 dark:bg-neutral-950 relative isolate min-h-screen antialiased dark:text-neutral-100">
    <div class="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div
        class="h-[60vh] w-[60vh] rounded-full bg-gradient-to-br absolute -top-32 -left-32 from-indigo-200 via-sky-200 to-purple-300 opacity-20 blur-2xl dark:opacity-0">
      </div>
      <div
        class="h-[40vh] w-[50vh] rounded-full bg-gradient-to-tr absolute -bottom-20 right-10 from-indigo-200 via-sky-200 to-purple-300 opacity-40 blur-3xl dark:opacity-0">
      </div>
      <div
        class="h-[35vh] w-[45vh] rounded-full bg-gradient-to-b dark:h-[28vh] absolute top-28 left-1/4 from-indigo-200 via-sky-200 to-purple-300 opacity-60 blur-3xl dark:opacity-0">
      </div>
    </div>

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
              <label for="contact-name" class="text-sm font-medium text-gray-700 dark:text-gray-200">Name:</label>
              <input id="contact-name" type="text" required placeholder="Your name" name="name"
                class="w-full rounded-md border border-zinc-300/70 bg-white/70 px-4 py-2 placeholder-gray-500 dark:border-white/20 dark:bg-white/10 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neutral-800" />
            </div>
            <div class="flex flex-col gap-1">
              <label for="contact-email" class="text-sm font-medium text-gray-700 dark:text-gray-200">Email:</label>
              <input id="contact-email" type="email" required placeholder="you@example.com" name="email"
                class="w-full rounded-md border border-zinc-300/70 bg-white/70 px-4 py-2 placeholder-gray-500 dark:border-white/20 dark:bg-white/10 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neutral-800" />
            </div>

            <div class="flex flex-col gap-1">
              <label for="contact-message" class="text-sm font-medium text-gray-700 dark:text-gray-200">Message:</label>
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

    <div class="mt-8 relative z-0">
      <div aria-hidden
        class="bg-linear-to-b absolute inset-0 z-10 from-transparent from-35% to-white dark:to-neutral-950 animate-none">
      </div>
      <div class="mx-auto px-4 relative max-w-2xl overflow-hidden">
        <img alt="Dashboard mock‑up" width="2796" height="2008" src="../styled pholi.png" style="color: transparent;"
          class="relative z-0 border border-black/10 dark:hidden animate-none rounded-2xl" />
      </div>
    </div>

    <main
      class="mx-auto items-center px-8 py-8 text-center lg:py-12 relative z-20 flex max-w-6xl flex-col gap-6 -mt-1.5">
      <p class="text-5xl font-medium leading-tight md:text-5xl">Hold Tight... Coming Soon!</p>
      <p class="text-lg text-gray-700/80 max-w-xl dark:text-neutral-300/80">
        Pholi is a portfolio hosting and collaboration platform designed by creatives for creatives. Show off your work
        like never before, and meet the collaborators who will help you create the next <b>big thing</b>.
      </p>
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
    </main>

    <footer class="px-8 py-6 text-xs text-gray-500 relative z-10 inset-x-0 dark:text-neutral-400">
      <div class="border-t border-black/10 dark:border-white/10"></div>
      <div class="items-center justify-between pt-4 mx-auto flex max-w-6xl">
        <!-- <span>© 2025 Pholi</span> -->
      </div>
    </footer>
  </div>
</template>
