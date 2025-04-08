<template>
  <section>
    <div
      class="hero-bg relative w-full h-[90vh] bg-cover bg-center"
      :style="{ backgroundImage: `url(${hero_bg})` }"
    >
      <div class="absolute inset-0 bg-black bg-opacity-20"></div>

      <!-- Nội dung -->
      <div
        class="relative z-10 flex flex-col items-center gap-20 justify-center h-full"
      >
        <h1 class="text-white w-4/5 text-7xl font-bold text-center">
          VietNam based eCommerce for global market brand
        </h1>
        <button
          @click="openForm = true"
          class="hidden md:block bg-yellow-500 text-black px-20 py-5 rounded-lg text-lg hover:opacity-50"
        >
          JOIN NOW
        </button>
      </div>
    </div>
  </section>

  <section>
    <div class="py-20">
      <div
        class="w-3/4 mx-auto md:px-10 flex flex-col lg:flex-row items-center"
      >
        <div
          class="lg:w-1/2 w-full flex flex-col lg:gap-20 px-6 mt-6 lg:mt-0 text-left"
        >
          <h2 class="text-7xl font-bold text-gray-800 mb-4">
            We’re here to help you thrive
          </h2>
          <p class="text-lg text-gray-600 mb-6">
            After years of personal and professional experience, we founded
            Vietmerce to help individuals and teams make their business dreams a
            reality. With our comprehensive guided resources, you’ll unearth
            renewed confidence and tactics to help your business thrive.
          </p>
          <button
            class="w-1/2 lg:w-1/3 bg-gray-800 text-white px-6 py-3 rounded-lg text-lg hover:bg-black inline-block"
          >
            Lern More
          </button>
        </div>

        <div class="lg:w-1/2 px-6">
          <img
            :src="wrapper_1"
            alt="wrapper"
            class="rounded-lg shadow-lg h-auto"
          />
        </div>
      </div>
    </div>
  </section>

  <section>
    <div
      class="hero-bg relative w-full h-[60vh] bg-cover bg-center mt-20"
      :style="{ backgroundImage: `url(${bg_content1})` }"
    >
      <div class="absolute inset-0 bg-black bg-opacity-20"></div>

      <!-- Nội dung -->
      <div
        class="relative px-10 flex flex-col items-center justify-evenly h-full"
      >
        <h1 class="text-white w-4/5 text-7xl font-bold text-center">
          Overcome your obstacles
        </h1>
        <div class="flex gap-10">
          <div class="flex flex-col gap-8 text-white text-center">
            <h1 class="font-semibold text-xl">Identify your starting point</h1>
            <p>
              What is step one when creating a business? It’s not as hard as you
              think.
            </p>
          </div>
          <div class="flex flex-col gap-8 text-white text-center">
            <h1 class="font-semibold text-xl">Bring your ideas to life</h1>
            <p>
              Remember those amazing ideas locked up inside your mind? Make them
              real.
            </p>
          </div>
          <div class="flex flex-col gap-8 text-white text-center">
            <h1 class="font-semibold text-xl">Sell your vision to others</h1>
            <p>Learn to present yourself and your concepts with confidence.</p>
          </div>
          <div class="flex flex-col gap-8 text-white text-center">
            <h1 class="font-semibold text-xl">Expand your business</h1>
            <p>
              Break through walls to turn your small working business into an
              empire.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div
      class="w-4/5 h-[90vh] mx-auto flex flex-col gap-20 items-center justify-evenly"
    >
      <div class="flex flex-col items-center gap-5">
        <h1 class="font-semibold text-4xl">SERVICES</h1>
        <p class="text-2xl underline">Explore our services</p>
      </div>
      <div class="flex gap-20 items-center">
        <div class="flex flex-col items-center gap-14">
          <div class="text-center flex flex-col gap-5">
            <h1 class="font-semibold text-2xl">Beginner’s Guide to Business</h1>
            <p>
              Receive expert tips for getting started, a checklist for your
              first year of business, and helpful follow-up links.
            </p>
          </div>
          <div>
            <button
              class="md:block bg-black text-white py-3 px-8 rounded-lg text-lg hover:opacity-50"
            >
              Learn now
            </button>
          </div>
        </div>
        <div class="flex flex-col items-center gap-14">
          <div class="text-center flex flex-col gap-5">
            <h1 class="font-semibold text-2xl">Beginner’s Guide to Business</h1>
            <p>
              Receive expert tips for getting started, a checklist for your
              first year of business, and helpful follow-up links.
            </p>
          </div>
          <div>
            <button
              class="md:block bg-black text-white py-3 px-8 rounded-lg text-lg hover:opacity-50"
            >
              Learn now
            </button>
          </div>
        </div>
        <div class="flex flex-col items-center gap-14">
          <div class="text-center flex flex-col gap-5">
            <h1 class="font-semibold text-2xl">Beginner’s Guide to Business</h1>
            <p>
              Receive expert tips for getting started, a checklist for your
              first year of business, and helpful follow-up links.
            </p>
          </div>
          <div>
            <button
              class="md:block bg-black text-white py-3 px-8 rounded-lg text-lg hover:opacity-50"
            >
              Learn now
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div
      class="hero-bg relative w-full h-[80vh] bg-cover bg-center mt-20"
      :style="{ backgroundImage: `url(${bg_content2})` }"
    >
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>

      <!-- Nội dung -->
      <div class="lg:w-3/5 relative px-10 flex flex-col justify-evenly h-full">
        <h1 class="text-white w-4/5 text-4xl font-bold">
          Get unlimited access to our full suite of programs when you become a
          member.
        </h1>
        <div class="flex gap-10">
          <button
            class="md:block bg-yellow-500 py-6 px-20 text-black rounded-lg text-lg hover:opacity-50"
          >
            Explore programs
          </button>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="py-20">
      <div class="w-9/10 mx-auto md:px-10 flex flex-col gap-20 items-center">
        <div>
          <h2 class="text-5xl font-bold text-gray-800 mb-4">OUR FOUNDERS</h2>
        </div>
        <div class="flex">
          <div
            class="lg:w-1/2 w-full flex flex-col gap-10 px-6 mt-6 lg:mt-0 text-left"
          >
            <div class="flex flex-col gap-10">
              <h1 class="text-3xl">Shirley L.</h1>
              <img
                :src="wrapper_2"
                alt="wrapper"
                class="rounded-lg shadow-lg h-auto"
              />
              <p class="text-lg text-gray-600 mb-6">
                It was difficult for me to figure out how to start my own
                business, but Bloom Coaching made the process so simple for me
                with a step-by-step process.
              </p>
            </div>

            <div class="h-px bg-gray-500 mt-8"></div>

            <div class="w-2/3 flex flex-col gap-10 ms-auto">
              <h1 class="text-3xl">Molly S.</h1>
              <img
                :src="wrapper_3"
                alt="wrapper"
                class="rounded-lg shadow-lg h-auto"
              />
              <p class="text-lg text-gray-600 mb-6">
                It was difficult for me to figure out how to start my own
                business, but Bloom Coaching made the process so simple for me
                with a step-by-step process.
              </p>
            </div>

            <div class="h-px bg-gray-500 mt-16"></div>
          </div>

          <div
            class="lg:w-1/3 w-full flex flex-col gap-20 px-6 mt-6 lg:mt-0 justify-center ms-auto"
          >
            <div class="flex flex-col gap-10">
              <h1 class="text-3xl">Maddie</h1>
              <img
                :src="wrapper_4"
                alt="wrapper"
                class="rounded-lg shadow-lg h-auto"
              />
              <p class="text-lg text-gray-600 mb-6">
                It was difficult for me to figure out how to start my own
                business, but Bloom Coaching made the process so simple for me
                with a step-by-step process.
              </p>
            </div>

            <div class="h-px bg-gray-500 mt-8"></div>

            <div class="w-2/3 flex flex-col gap-20">
              <h1 class="text-3xl">Learn more about us</h1>
              <div>
                <a href="/about">
                  <button
                    class="bg-black text-white py-6 px-16 rounded-lg text-lg hover:opacity-50"
                  >
                    ABOUT US
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div
      class="hero-bg relative w-full h-[70vh] bg-cover bg-center mt-20"
      :style="{ backgroundImage: `url(${bg_content3})` }"
    >
      <div class="absolute inset-0 bg-black bg-opacity-20"></div>

      <!-- Nội dung -->
      <div
        class="relative flex flex-col items-center gap-20 justify-around h-full"
      >
        <div class="w-4/5 flex flex-col gap-10 text-white text-center">
          <h1 class="text-7xl font-bold">Let’s kickstart your business</h1>
          <p>We’ll be with you every step of the way.</p>
        </div>
        <button
          @click="openForm = true"
          class="hidden md:block bg-yellow-500 text-black px-40 py-5 rounded-lg text-lg hover:opacity-50"
        >
          JOIN NOW
        </button>
      </div>
    </div>
  </section>

  <RequestForm :isOpen="openForm" @close-form="openForm = false" />
</template>

<script setup>
import { ref } from "vue";
import RequestForm from "../components/RequestForm.vue";

import hero_bg from "../assets/img/bg/hero-bg.jpg";
import wrapper_1 from "../assets/img/content/wrapper.jpeg";
import wrapper_2 from "../assets/img/content/wrapper2.jpeg";
import wrapper_3 from "../assets/img/content/wrapper3.jpeg";
import wrapper_4 from "../assets/img/content/wrapper4.jpeg";
import bg_content1 from "../assets/img/bg/bg-content.jpg";
import bg_content2 from "../assets/img/bg/bg-content2.jpg";
import bg_content3 from "../assets/img/bg/bg-content3.jpg";

const openForm = ref(false);
</script>

<style scoped></style>
