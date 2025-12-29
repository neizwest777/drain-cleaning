<template>
  <div>
    <Header />
    <StickyCallButton />
    
    <main>
      <HeroSection />
      <ProblemsSection />
      <ServicesSection />
      <HowWeWorkSection />
      <EquipmentSection />
      <TrustSection />
      <MythsSection />
      <PreventionSection />
      <WorkGallery :limit="6" :show-cta="false" />
      <ReviewsSection />
      <ChatSimulation />
      <FinalCTASection />
    </main>
    
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '../components/layout/Header.vue';
import Footer from '../components/layout/Footer.vue';
import StickyCallButton from '../components/layout/StickyCallButton.vue';
import HeroSection from '../components/HeroSection.vue';
import ProblemsSection from '../components/ProblemsSection.vue';
import ServicesSection from '../components/ServicesSection.vue';
import HowWeWorkSection from '../components/HowWeWorkSection.vue';
import EquipmentSection from '../components/EquipmentSection.vue';
import TrustSection from '../components/TrustSection.vue';
import MythsSection from '../components/MythsSection.vue';
import PreventionSection from '../components/PreventionSection.vue';
import WorkGallery from '../components/WorkGallery.vue';
import ReviewsSection from '../components/ReviewsSection.vue';
import ChatSimulation from '../components/ChatSimulation.vue';
import FinalCTASection from '../components/FinalCTASection.vue';

// JSON-LD schemas are already server-side rendered in index.tsx
// No need to add them again here
</script>