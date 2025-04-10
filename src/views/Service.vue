<template>
  <section>
    <div class="w-3/4 mx-auto text-center my-16">
      <h1 class="font-bold text-6xl">OUR SERVICES</h1>
    </div>
  </section>

  <section>
    <div class="py-20">
      <div
        class="w-3/4 mx-auto md:px-10 flex flex-col gap-20 lg:flex-row items-center"
      >
        <div class="lg:w-1/2 px-6">
          <img :src="service_img" alt="wrapper" class="rounded-lg shadow-lg" />
        </div>

        <div
          class="lg:w-1/2 w-full flex flex-col lg:gap-20 px-6 mt-6 lg:mt-0 text-left"
        >
          <h2 class="text-5xl font-bold text-gray-800 mb-4">SERVICE 1</h2>
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
          <h2 class="text-5xl font-bold text-gray-800 mb-4">SERVICE 2</h2>
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

        <div class="lg:w-1/2 px-6">
          <img :src="service_img" alt="wrapper" class="rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="py-20">
      <div
        class="w-3/4 mx-auto md:px-10 flex flex-col gap-20 lg:flex-row items-center"
      >
        <div class="lg:w-1/2 px-6">
          <img :src="service_img" alt="wrapper" class="rounded-lg shadow-lg" />
        </div>

        <div
          class="lg:w-1/2 w-full flex flex-col lg:gap-20 px-6 mt-6 lg:mt-0 text-left"
        >
          <h2 class="text-5xl font-bold text-gray-800 mb-4">SERVICE 3</h2>
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
</template>

<script setup>
import service_img from "../assets/img/content/service.jpeg";
</script>

<style scoped></style>
