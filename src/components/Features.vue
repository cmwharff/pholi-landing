<script setup lang="ts">
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'

const items = [
    { id: 1, title: 'Slide One' },
    { id: 2, title: 'Slide Two' },
    { id: 3, title: 'Slide Three' },
]
</script>

<template>
    <Carousel class="w-full max-w-xl" :opts="{
        loop: true,
        align: 'start',
    }">
        <CarouselContent>
            <CarouselItem v-for="item in items" :key="item.id" class="basis-full">
                <div class="flex h-48 items-center justify-center rounded-xl bg-muted text-xl font-semibold">
                    {{ item.title }}
                </div>
            </CarouselItem>
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
    </Carousel>
</template>