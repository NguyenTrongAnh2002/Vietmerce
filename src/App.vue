<template>
  <div class="bg-amber-50">
    <Navbar />
    <router-view></router-view>
    <Footer />

    <button
      v-show="showScrollButton"
      @click="scrollToTop"
      class="fixed z-50 bottom-6 right-6 w-14 h-14 bg-gray-600 hover:bg-orange-600 text-white rounded-full shadow-lg transition-opacity duration-1000"
    >
      <i class="fa-solid fa-arrow-up text-xl"></i>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Navbar from "./components/Header.vue";
import Footer from "./components/Footer.vue";

const showScrollButton = ref(false);
let scrollTimeout = null;

const handleScroll = () => {
  showScrollButton.value = true;

  // Nếu người dùng không cuộn trong 2 giây => Ẩn nút
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    showScrollButton.value = false;
  }, 2000);
};

// Hàm cuộn lên đầu trang
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Gắn sự kiện khi component được tạo
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

// Xóa sự kiện khi component bị hủy
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped></style>
