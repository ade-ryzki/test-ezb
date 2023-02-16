<template>
        <div id="dialog" class="absolute bg-white border w-fit shadow rounded px-4 py-3 top-1/2 left-1/2">
        <h3 class="font-bold text-lg my-2"><slot name="title"></slot></h3>
        <div id="dialog-message" class="my-2"><slot name="message"></slot></div>
        <div id="dialog-button" class="my-2"><slot name="button"></slot></div>
    </div>
</template>