<template>
  <section>
    <div
      class="hero-bg relative w-full h-[100vh] bg-cover bg-center"
      :style="{ backgroundImage: `url(${bg_content})` }"
    >
      <div class="absolute inset-0 bg-black bg-opacity-20"></div>

      <!-- Nội dung -->
      <div
        class="relative z-10 flex flex-col items-center gap-20 justify-end h-full"
      >
        <h1 class="text-white w-9/12 text-7xl font-normal mb-20">
          We’re passionate about helping you grow and make an impact.
        </h1>
      </div>
    </div>
  </section>

  <section>
    <div class="py-20">
      <div
        class="w-3/4 mx-auto md:px-10 flex flex-col gap-20 lg:flex-row items-center"
      >
        <div class="lg:w-2/5 px-6">
          <img :src="about_1" alt="wrapper" class="rounded-lg shadow-lg" />
        </div>

        <div
          class="lg:w-1/2 w-full flex flex-col lg:gap-20 px-6 mt-6 lg:mt-0 text-left"
        >
          <h2 class="text-7xl font-bold text-gray-800 mb-4">Tina</h2>
          <p class="text-lg text-gray-600 mb-6">
            While I loved working in-house as an executive coach for many years,
            I became passionate about the idea of helping more small businesses
            succeed. When I met Rose, I knew the opportunity had finally
            arrived. We quickly bonded over our desire to work with
            entrepreneurs, and within the year Bloom Coaching was born. We now
            have the pleasure of working with aspiring business owners and
            entrepreneurs from all over the world.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="py-20">
      <div
        class="w-3/4 mx-auto md:px-10 flex flex-col gap-20 lg:flex-row items-center"
      >
        <div
          class="lg:w-1/2 w-full flex flex-col lg:gap-20 px-6 mt-6 lg:mt-0 text-left"
        >
          <h2 class="text-7xl font-bold text-gray-800 mb-4">Rose</h2>
          <p class="text-lg text-gray-600 mb-6">
            After working as a finance director at one of the top firm in New
            York City, I decided to take a break and look into starting my own
            business. With several years of experience working in business and
            finance, I wanted to create a program to guide dreamers through the
            first steps of starting a business. When I met Tina, our combined
            experiences helped us create a business coaching platform that has
            been tested and proven time and time again. We’re honored to have
            the opportunity to not only help you grow, but to help you bloom.
          </p>
        </div>

        <div class="lg:w-2/5 px-6">
          <img :src="about_2" alt="wrapper" class="rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="bg-orange-800 text-white">
      <div
        class="w-4/5 h-[70vh] mx-auto flex flex-col gap-10 items-center justify-evenly"
      >
        <div class="flex flex-col items-center gap-5">
          <h1 class="font-semibold text-7xl">We can help</h1>
        </div>
        <div class="flex gap-20 items-center">
          <div class="flex flex-col items-center gap-14">
            <div class="text-center flex flex-col gap-5">
              <h1 class="font-semibold text-2xl">
                Beginner’s Guide to Business
              </h1>
              <p>
                Receive expert tips for getting started, a checklist for your
                first year of business, and helpful follow-up links.
              </p>
            </div>
          </div>
          <div class="flex flex-col items-center gap-14">
            <div class="text-center flex flex-col gap-5">
              <h1 class="font-semibold text-2xl">
                Beginner’s Guide to Business
              </h1>
              <p>
                Receive expert tips for getting started, a checklist for your
                first year of business, and helpful follow-up links.
              </p>
            </div>
          </div>
          <div class="flex flex-col items-center gap-14">
            <div class="text-center flex flex-col gap-5">
              <h1 class="font-semibold text-2xl">
                Beginner’s Guide to Business
              </h1>
              <p>
                Receive expert tips for getting started, a checklist for your
                first year of business, and helpful follow-up links.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import bg_content from "../assets/img/bg/bg-about.jpg";
import about_1 from "../assets/img/content/about-1.jpeg";
import about_2 from "../assets/img/content/about-2.jpeg";
</script>

<style></style>
