<script setup lang="ts">
import NavBar from './components/layout/NavBar.vue'
import MobileDock from './components/layout/MobileDock.vue'
import FooterSection from './components/layout/FooterSection.vue'
import HeroSection from './components/sections/HeroSection.vue'
import ServicesSection from './components/sections/ServicesSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import ExperienceSection from './components/sections/ExperienceSection.vue'
import SkillsSection from './components/sections/SkillsSection.vue'
import PortfolioSection from './components/sections/PortfolioSection.vue'
import ContactSection from './components/sections/ContactSection.vue'
</script>

<template>
  <NavBar />
  <MobileDock />
  <main>
    <HeroSection />
    <ServicesSection />
    <AboutSection />
    <ExperienceSection />
    <SkillsSection />
    <PortfolioSection />
    <ContactSection />
  </main>
  <FooterSection />
</template>
