<template>
  <!-- Start Info -->
  <div class="row">
    <div class="container mx auto p-8">
      <div class="text-center">
        <div class="w-24 h-24 rounded-full overflow-hidden mx-auto">
          <img
            class="w-full h-auto object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM0c0e74_F50_BROix8Y-7mNZMAXRb0JOQune5b3g8mKAQqkUc7kZ0eMb7rGYHViHcfAw&usqp=CAU"
            size="xs"
            alt="User's Profile Avatar"
          />
        </div>
        <div class="text-center text-2xl text-primary mt-3">Sky albert</div>
        <p class="font-semibold text-gray-400 mt-1">nhatq@gmail.com</p>
      </div>
    </div>
  </div>

  <!-- Start Menu -->
  <div class="row">
    <div class="container mx-auto px-8">
      <div class="gird grid-cols-1">
        <div class="col-span-1">
          <h3 class="font-bold text-xl text-primary mb-2">General</h3>
        </div>
      </div>
      <div class="gird grid-cols-1">
        <div class="col-span-1">
          <ul>
            <li v-for="profile in profileOptions" :key="profile.name">
              <router-link
                :to="profile.route"
                class="flex justify-between items-center py-3"
              >
                <div class="flex items-center text-left">
                  <i class="t2ico text-2xl" :class="profile.icon"></i>
                  <font class="font-semibold ml-3">{{ profile.name }}</font>
                </div>
                <div class="text-right">
                  <i class="t2ico t2ico-arrow-right"></i>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    const profileOptions = reactive([
      {
        name: "My Wallet",
        icon: "t2ico-wallet",
        route: {
          name: "Home",
          params: {},
        },
      },
      {
        name: "Tools",
        icon: "t2ico-ticker-start",
        route: {
          name: "Home",
          params: {},
        },
      },
      {
        name: "Privacy",
        icon: "t2ico-lock",
        route: {
          name: "Home",
          params: {},
        },
      },
      {
        name: "About",
        icon: "t2ico-info-square",
        route: {
          name: "Home",
          params: {},
        },
      },
      {
        name: "Logout",
        icon: "t2ico-logout",
        route: {
          name: "Home",
          params: {},
        },
      },
    ]);

    return { profileOptions };
  },
};
</script>
