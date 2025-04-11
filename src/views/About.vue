<template>
  <section>
    <div
      class="hero-bg relative w-full h-[100vh] bg-cover bg-center"
      :style="{ backgroundImage: `url(${bg_content})` }"
    >
      <div class="absolute inset-0 bg-black bg-opacity-20"></div>

      <!-- Nội dung -->
      <div
        class="relative flex flex-col items-center gap-20 justify-end h-full"
      >
        <h1 class="text-white w-9/12 text-7xl font-normal mb-20">
          We’re passionate about helping you grow and make an impact.
        </h1>
      </div>
    </div>
  </section>

  <section>
    <div class="w-3/4 mx-auto">
      <div class="my-16">
        <div class="flex justify-center items-center gap-3">
          <div class="flex-1 h-px bg-gray-300"></div>
          <h1 class="text-2xl md:text-4xl font-bold text-center">ABOUT US</h1>
          <div class="flex-1 h-px bg-gray-300"></div>
        </div>
        <div class="text-center mt-8 opacity-80">
          <p>
            Every great brand starts with a simple idea. For us, it was the
            desire to bring high-quality products, sophisticated designs, and a
            modern shopping experience to our customers.
          </p>
        </div>
        <div class="text-center mt-8 opacity-80">
          <p>
            Starting as a small store in 2018, we quickly realized that
            e-commerce is not just about selling products—it’s about telling a
            story, connecting with customers, and delivering real value. With
            passion and creativity, we have grown into a trusted e-commerce
            brand, serving thousands of customers worldwide.
          </p>
        </div>
        <div class="text-center mt-8 opacity-80">
          <p>
            Beyond just products, we are committed to sustainability and social
            responsibility. Every item we create is more than just a
            product—it’s a part of a story about style, quality, and
            long-lasting value.
          </p>
        </div>
        <div class="h-px bg-gray-300 mt-8"></div>
      </div>
    </div>
  </section>

  <section>
    <div class="bg-orange-800 text-white">
      <div
        class="w-4/5 h-[80vh] mx-auto flex flex-col gap-10 items-center justify-evenly"
      >
        <div class="mt-">
          <h1 class="font-semibold text-7xl">Core Value && Mission</h1>
        </div>
        <div class="flex flex-col gap-20 justify-center items-center">
          <div class="flex justify-between">
            <div class="flex w-[30%] flex-col items-center gap-14">
              <div class="text-center flex flex-col gap-5">
                <h1 class="font-semibold text-2xl">Top-notch Quality</h1>
                <p>
                  Every product is designed and crafted to the highest standards
                  to ensure the best customer experience.
                </p>
              </div>
            </div>
            <div class="flex flex-col w-[30%] items-center gap-14">
              <div class="text-center flex flex-col gap-5">
                <h1 class="font-semibold text-2xl">
                  Customer-Centric Approach
                </h1>
                <p>
                  We always listen and continuously improve to provide the best
                  service for our customers.
                </p>
              </div>
            </div>
            <div class="flex flex-col w-[30%] items-center gap-14">
              <div class="text-center flex flex-col gap-5">
                <h1 class="font-semibold text-2xl">Creativity & Innovation</h1>
                <p>
                  Constantly seeking new ideas and trends to deliver unique and
                  distinctive products.
                </p>
              </div>
            </div>
          </div>
          <div class="flex justify-between">
            <div class="flex flex-col w-[30%] items-center gap-14">
              <div class="text-center flex flex-col gap-5">
                <h1 class="font-semibold text-2xl">
                  Sustainability & Responsibility
                </h1>
                <p>
                  Committed to minimizing environmental impact, using
                  eco-friendly materials, and giving back to the community.
                </p>
              </div>
            </div>
            <div class="flex flex-col w-[30%] items-center gap-14">
              <div class="text-center flex flex-col gap-5">
                <h1 class="font-semibold text-2xl">Honesty & Transparency</h1>
                <p>
                  We prioritize transparency in our business, from production
                  processes to customer service.
                </p>
              </div>
            </div>
            <div class="flex flex-col w-[30%] items-center gap-14">
              <div class="text-center flex flex-col gap-5">
                <h1 class="font-semibold text-2xl">Passion & Dedication</h1>
                <p>
                  Our team is driven by passion and commitment to excellence in
                  every aspect of our work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="py-20">
      <div class="text-center mt-10 mb-20">
        <h2 class="text-5xl font-bold text-gray-800 mb-4">OUR FOUNDERS</h2>
      </div>
      <div
        class="w-3/4 mx-auto md:px-10 flex flex-col gap-20 lg:flex-row-reverse items-center"
      >
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

        <div class="lg:w-2/5 px-6">
          <img :src="about_1" alt="wrapper" class="rounded-lg shadow-lg" />
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

      <div class="h-px mx-auto bg-gray-500 mt-28"></div>
    </div>
  </section>
</template>

<script setup>
import bg_content from "../assets/img/bg/bg-about.jpg";
import about_1 from "../assets/img/content/about-1.jpeg";
import about_2 from "../assets/img/content/about-2.jpeg";
</script>

<style></style>
