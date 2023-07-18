<template>
  <div class="flex flex-col h-screen">
    <div
      class="p-2 my-2 hover:bg-blue-50 rounded-full w-min dark:hover:bg-white/20"
      :class="defaultTransition"
    >
      <nuxt-link to="/">
        <div class="w-8 h-8">
          <logo-twitter />
        </div>
      </nuxt-link>
    </div>
    <div class="mt-2 space-y-3">
      <sidebar-left-tab active>
        <template v-slot:icon>
          <HomeIcon />
        </template>
        <template v-slot:name> Home </template>
      </sidebar-left-tab>

      <sidebar-left-tab>
        <template v-slot:icon>
          <HashtagIcon />
        </template>
        <template v-slot:name> Explore </template>
      </sidebar-left-tab>

      <sidebar-left-tab>
        <template v-slot:icon>
          <BellIcon />
        </template>
        <template v-slot:name> Notification </template>
      </sidebar-left-tab>

      <sidebar-left-tab>
        <template v-slot:icon>
          <InboxIcon />
        </template>
        <template v-slot:name> Messages </template>
      </sidebar-left-tab>

      <sidebar-left-tab>
        <template v-slot:icon>
          <BookmarkIcon />
        </template>
        <template v-slot:name> Bookmark </template>
      </sidebar-left-tab>

      <sidebar-left-tab>
        <template v-slot:icon>
          <DocumentTextIcon />
        </template>
        <template v-slot:name> Lists </template>
      </sidebar-left-tab>

      <sidebar-left-tab>
        <template v-slot:icon>
          <UserIcon />
        </template>
        <template v-slot:name> Profile </template>
      </sidebar-left-tab>

      <sidebar-left-tab>
        <template v-slot:icon>
          <EllipsisHorizontalIcon />
        </template>
        <template v-slot:name> More </template>
      </sidebar-left-tab>

  
    </div>
  </div>
</template>
<script setup>
import { HomeIcon } from "@heroicons/vue/24/solid";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  DocumentTextIcon,
  UserIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/vue/24/outline";
const { defaultTransition } = useTailwindConfig();
</script>
