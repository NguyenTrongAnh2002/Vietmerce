<template>
  <section>
    <div class="py-20">
      <div
        class="w-5/6 mx-auto md:px-10 flex flex-col gap-20 lg:flex-row items-center"
      >
        <div
          class="lg:w-1/2 w-full flex flex-col lg:gap-32 px-6 mt-6 lg:mt-0 text-left"
        >
          <div>
            <h2 class="text-7xl font-bold text-gray-800 mb-4">
              Questions? We’re here to help.
            </h2>
            <div class="flex flex-col gap-5">
              <div>
                <strong class="text-lg text-gray-600 mb-6">Phone:</strong>
                <p>0987654321</p>
              </div>
              <div>
                <strong class="text-lg text-gray-600 mb-6">Email:</strong>
                <p>vietmerce@example.com</p>
              </div>
            </div>
          </div>

          <button
            @click="openForm = true"
            class="w-1/2 lg:w-1/3 bg-gray-800 text-white px-6 py-3 rounded-lg text-lg hover:bg-black inline-block"
          >
            Contact Us
          </button>
        </div>

        <div class="lg:w-2/5 px-6">
          <img
            :src="wrapper_1"
            alt="wrapper"
            class="rounded-lg shadow-lg h-auto"
          />
        </div>
      </div>
    </div>
  </section>

  <RequestForm :isOpen="openForm" @close-form="openForm = false" />
</template>

<script setup>
import { ref } from "vue";
import RequestForm from "../components/RequestForm.vue";
import wrapper_1 from "../assets/img/content/wrapper.jpeg";

const openForm = ref(false);
</script>

<style></style>
