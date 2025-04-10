<template>
  <div class="e py-10">
    <div class="max-w-7xl mx-auto px-4 flex gap-8">
      <div class="lg:w-1/3">
        <div class="flex flex-col gap-2 mt-4 space-y-2">
          <p>
            <i class="fa-solid fa-phone" style="color: #ff5a3d"></i>(098)
            765-4321
          </p>
          <p>
            <i class="fa-solid fa-envelope" style="color: #11a7c5"></i>
            abc@gmail.com
          </p>
          <p>
            <i class="fa-solid fa-location-dot" style="color: #e01c06"></i>
            Xã..., Huyện/Quận.... , Hà Nội
          </p>
        </div>
      </div>

      <div class="lg:w-1/3 mt-6">
        <a href="" class="flex space-x-2">
          <img :src="logo_footer" class="w-auto h-28" />
        </a>
      </div>

      <div class="lg:w-1/3">
        <div class="w-1/3 ms-auto">
          <h3 class="text-lg font-semibold mb-4">QUICK LINKS</h3>
          <ul class="space-y-2">
            <li v-for="link in quickLinks">
              <a :href="link.href" class="hover:text-orange-500">{{
                link.name
              }}</a>
            </li>
          </ul>
        </div>
        <div class="w-1/3 ms-auto mt-4 flex space-x-3">
          <a
            href="https://www.facebook.com"
            class="hover:text-orange-500 text-xl"
            target="_blank"
          >
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com"
            class="hover:text-orange-500 text-xl"
            target="_blank"
          >
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com"
            class="hover:text-orange-500 text-xl"
            target="_blank"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://www.x.com"
            class="hover:text-orange-500 text-xl"
            target="_blank"
          >
            <i class="fa-brands fa-twitter"></i>
          </a>
        </div>
      </div>

      <!-- <div class="mt-6">
        <h3 class="text-lg font-semibold mb-2">Secure Payments</h3>
        <div class="flex space-x-2">
          <img :src="logo_visa" class="w-14 h-8" />
          <img :src="logo_mastercard" class="w-14 h-8" />
          <img :src="logo_paypal" class="w-14 h-8" />
          <img :src="logo_discover" class="w-14 h-8" />
        </div>
      </div> -->
    </div>

    <div
      class="border-t border-gray-700 mt-10 pt-4 text-center text-gray-400 text-sm"
    >
      <p>Design by Vietmerce</p>
      <!-- <p>
        <a href="#" class="hover:text-white">Terms & Conditions</a> |
        <a href="#" class="hover:text-white">Privacy Policy</a>
      </p> -->
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import logo_footer from "../assets/img/logo/logo-vietmerce.png";

const quickLinks = ref([
  { name: "Home", href: "/" },
  { name: "Contact Us", href: "/contact" },
  { name: "About", href: "/about" },
  { name: "FAQ's", href: "/faq" },
]);
</script>
