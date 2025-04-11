<template>
  <section>
    <div class="w-3/4 mx-auto">
      <div class="mt-14">
        <h1 class="text-2xl md:text-4xl font-bold mb-5">Vietmerce FAQ</h1>
        <p class="opacity-80 mb-5">
          We understand that shopping online comes with many questions, and
          we're here to help! Below, you'll find answers to some of the most
          commonly asked questions about our products, ordering process,
          shipping, returns, and more.
        </p>
        <p class="opacity-80 mb-5">
          If you don't see your question listed here, feel free to reach out to
          our customer support team—we’re always happy to assist!
        </p>
      </div>

      <div class="mt-6">
        <div><h1 class="text-2xl md:text-4xl font-bold mb-5">FAQ's</h1></div>

        <div class="">
          <button @click="showFAQ1 = !showFAQ1" class="flex gap-5">
            <div
              class="w-8 h-8 border-2 border-orange-600 text-orange-600 text-center"
            >
              <div v-show="!showFAQ1">
                <i class="fa-solid fa-plus"></i>
              </div>
              <div v-show="showFAQ1">
                <i class="fa-solid fa-minus"></i>
              </div>
            </div>
            <h2 class="text-xl md:text-2xl">
              <strong>Can I cancel or modify my order after placing it?</strong>
            </h2>
          </button>

          <div
            class="left-0 w-full transition-all duration-500 ease-in-out"
            :class="
              showFAQ1
                ? 'opacity-100 max-h-40'
                : 'opacity-0 max-h-0 pointer-events-none'
            "
          >
            <ul class="list-disc ps-14">
              <li class="mt-4 opacity-80">
                If the order hasn't been processed yet: You can cancel or modify
                it by contacting our support team within 24 hours of placing the
                order.
              </li>
              <li class="mt-4 opacity-80">
                If the order has been packed/shipped: Cancellation or
                modification is no longer possible. However, you may refuse to
                receive the package, and the order will be returned.
              </li>
              <li class="mt-4 opacity-80">
                If you’ve already received the order but want to exchange/return
                it: Please refer to our return policy.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mt-6">
        <div class="">
          <button @click="showFAQ2 = !showFAQ2" class="flex gap-5">
            <div
              class="w-8 h-8 border-2 border-orange-600 text-orange-600 text-center"
            >
              <div v-show="!showFAQ2">
                <i class="fa-solid fa-plus"></i>
              </div>
              <div v-show="showFAQ2">
                <i class="fa-solid fa-minus"></i>
              </div>
            </div>
            <h2 class="text-xl md:text-2xl">
              <strong> How can I track my order?</strong>
            </h2>
          </button>
          <div
            class="transition-all duration-700 ease-in-out"
            :class="
              showFAQ2
                ? 'opacity-100 max-h-[100vh]'
                : 'opacity-0 max-h-0 pointer-events-none'
            "
          >
            <ul class="list-disc ps-14">
              <li class="mt-4 opacity-80">
                Check your confirmation email: Every order includes a tracking
                number sent via email after confirmation.
              </li>
              <li class="mt-4 opacity-80">
                Visit our website: Log into your account and check the Order
                History section.
              </li>
              <li class="mt-4 opacity-80">
                Track via courier service: Enter your tracking number on the
                carrier's website (DHL, UPS, FedEx, GHN, GHTK, etc.).
              </li>
              <li class="mt-4 opacity-80">
                Contact customer support: If you can't find your tracking
                information, reach out to us for help.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mt-6">
        <div class="">
          <button @click="showFAQ3 = !showFAQ3" class="flex gap-5">
            <div
              class="w-8 h-8 border-2 border-orange-600 text-orange-600 text-center"
            >
              <div v-show="!showFAQ3">
                <i class="fa-solid fa-plus"></i>
              </div>
              <div v-show="showFAQ3">
                <i class="fa-solid fa-minus"></i>
              </div>
            </div>
            <h2 class="text-xl md:text-2xl">
              <strong>What is your refund policy </strong>
            </h2>
          </button>
          <div
            class="transition-all duration-700 ease-in-out"
            :class="
              showFAQ3
                ? 'opacity-100 max-h-[100vh]'
                : 'opacity-0 max-h-0 pointer-events-none'
            "
          >
            <div>
              <p class="mt-4 ps-12 opacity-80">
                We offer refunds in the following cases:
              </p>
              <ul class="list-disc ps-20">
                <li class="mt-4 opacity-80">
                  Defective or damaged products upon arrival.
                </li>
                <li class="mt-4 opacity-80">
                  Wrong item delivered compared to your order.
                </li>
                <li class="mt-4 opacity-80">
                  Lost shipments or orders not delivered within the promised
                  timeframe.
                </li>
              </ul>
            </div>
            <div>
              <p class="mt-4 ps-12 opacity-80">Refund processing time:</p>
              <ul class="list-disc ps-20">
                <li class="mt-4 opacity-80">
                  Credit/Debit card payments: 5-7 business days.
                </li>
                <li class="mt-4 opacity-80">
                  E-wallet payments: 2-3 business days.
                </li>
                <li class="mt-4 opacity-80">
                  Cash on Delivery (COD): Refunds via bank transfer within 5-7
                  days after the return is confirmed.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6">
        <div class="">
          <button @click="showFAQ4 = !showFAQ4" class="flex gap-5">
            <div
              class="w-8 h-8 border-2 border-orange-600 text-orange-600 text-center"
            >
              <div v-show="!showFAQ4">
                <i class="fa-solid fa-plus"></i>
              </div>
              <div v-show="showFAQ4">
                <i class="fa-solid fa-minus"></i>
              </div>
            </div>
            <h2 class="text-xl md:text-2xl">
              <strong
                >Do you have a loyalty program or membership perks?</strong
              >
            </h2>
          </button>
          <div
            class="transition-all duration-700 ease-in-out"
            :class="
              showFAQ4
                ? 'opacity-100 max-h-[100vh]'
                : 'opacity-0 max-h-0 pointer-events-none'
            "
          >
            <div>
              <p class="mt-4 ps-12 opacity-80">
                Yes! As a loyal customer, you'll enjoy:
              </p>
              <ul class="list-disc ps-20">
                <li class="mt-4 opacity-80">
                  Reward points for every purchase, which can be redeemed for
                  discounts.
                </li>
                <li class="mt-4 opacity-80">
                  Birthday gifts and exclusive member-only discounts
                </li>
                <li class="mt-4 opacity-80">
                  Early access to promotions and new collections.
                </li>
                <li class="mt-4 opacity-80">
                  Free shipping for premium members.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6">
        <div class="">
          <button @click="showFAQ5 = !showFAQ5" class="flex gap-5">
            <div
              class="w-8 h-8 border-2 border-orange-600 text-orange-600 text-center"
            >
              <div v-show="!showFAQ5">
                <i class="fa-solid fa-plus"></i>
              </div>
              <div v-show="showFAQ5">
                <i class="fa-solid fa-minus"></i>
              </div>
            </div>
            <h2 class="text-xl md:text-2xl">
              <strong>Do you offer international shipping?</strong>
            </h2>
          </button>
          <div
            class="transition-all duration-700 ease-in-out"
            :class="
              showFAQ5
                ? 'opacity-100 max-h-[100vh]'
                : 'opacity-0 max-h-0 pointer-events-none'
            "
          >
            <div>
              <p class="mt-4 ps-12 opacity-80">
                We offer international shipping to multiple countries, with the
                following details:
              </p>
              <ul class="list-disc ps-20">
                <li class="mt-4 opacity-80">
                  Delivery time: 7-14 days depending on the destination.
                </li>
                <li class="mt-4 opacity-80">
                  Shipping fees: Calculated based on package weight and shipping
                  destination.
                </li>
                <li class="mt-4 opacity-80">
                  Import duties & taxes: Some countries may impose import
                  duties, which customers should check with their local customs
                  office.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, Transition } from "vue";

const showFAQ1 = ref(false);
const showFAQ2 = ref(false);
const showFAQ3 = ref(false);
const showFAQ4 = ref(false);
const showFAQ5 = ref(false);
</script>

<style scoped></style>
