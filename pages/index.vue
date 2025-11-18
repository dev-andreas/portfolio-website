<template>
  <div class="flex items-center justify-center">
    <div class="grid lg:grid-cols-3 gap-10 place-items-start standard-grid-width">
      <aside v-if="!mobileView" class="flex flex-col justify-between sticky top-0 w-full h-screen py-20">
        <div class="flex flex-col gap-10">
          <IntersectionAnimation startingClass="opacity-0 translate-y-3 blur-sm"
            endingClass="opacity-100 translate-y-0 blur-none">
            <h1 class="section-header">Andreas Gerasimow</h1>
            <h2 class="section-subheader">Computer Science Student</h2>
          </IntersectionAnimation>
          <NavbarItemList></NavbarItemList>
        </div>
        <FooterPart />
      </aside>
      <div class="flex flex-col col-span-2">
        <ArticleSection header="About Me" id="top" :showHeader="false" class="pt-20">
          <IntersectionAnimation v-if="mobileView" startingClass="opacity-0 -translate-x-3 blur-sm"
            endingClass="opacity-100 translate-x-0 blur-none">
            <h1 class="section-header">Andreas Gerasimow</h1>
            <h2 class="section-subheader">Computer Science Student</h2>
          </IntersectionAnimation>
          <div class="flex flex-col md:flex-row items-center gap-10">
            <div
              class="standard-grid-width sm:w-80 bg-primary-200 dark:bg-primary-dark-200 rounded-2xl flex-shrink-0 border border-font-dark dark:border-primary-dark-100 overflow-hidden">
              <img src="/andreas_gerasimow.jpg" alt="Andreas Gerasimow" class="object-cover">
            </div>
            <div class="flex flex-col items-start gap-5">
              <p>
                Hi, I’m Andreas, a graduate computer science student at Ulm University with a specialization in
                cybersecurity. Alongside my studies, I work as a working student at eXXcelent solutions, where I
                contribute to the development of easySSP, a modeling and simulation software. My role spans
                full-stack development with Java and React.
              </p>
              <ExternalButton href="mailto:andreas@gerasimow.de" icon="mail" class="w-auto">
                andreas@gerasimow.de
              </ExternalButton>
            </div>
          </div>
        </ArticleSection>

        <ArticleSection header="Experience" id="experience" class="">
          <TimeLine :items="[
            {
              title: 'Working Student - Software Development',
              institution: 'eXXcelent solutions',
              time: 'Aug 2025 - present',
              details: ['Full-stack development for the modeling and simulation software easySSP.'],
              image: '',
              technologies: ['Java', 'Dropwizard', 'React', 'Node.js', 'Docker']
            },
            {
              title: 'Student Assistant',
              institution: 'Ulm University',
              time: 'Nov 2023 - Aug 2024',
              details: ['Collaborated on the FeatureIDE framework and the FeatJAR library for feature-oriented software development. Both projects are open-source and available on GitHub.'],
              image: '',
              technologies: ['Java']
            },
            {
              title: 'Working Student - Software Development',
              institution: 'PERI',
              time: 'Sep 2022 - Oct 2023',
              details: ['Improved the company’s internal information systems in an agile team.'],
              image: '',
              technologies: ['Vue.js', 'MySQL', 'PHP']
            },
            {
              title: 'Freelancer',
              institution: 'self-employed',
              time: 'Aug 2021 - Aug 2022',
              details: ['Developed and maintained a website for the start-up ultraTEC Innovation GmbH.'],
              image: '',
              technologies: ['Nuxt.js', 'Vue.js', 'Tailwind CSS']
            }
          ]"></TimeLine>
        </ArticleSection>

        <ArticleSection header="Education" id="education">
          <TimeLine :items="[
            {
              title: 'Computer Science, Master of Science',
              institution: 'Ulm University',
              time: 'June 2025 - present',
              details: '',
              image: ''
            },
            {
              title: 'Computer Science, Master of Science (Exchange Year)',
              institution: 'University of Massachusetts Amherst',
              time: 'Sep 2024 - May 2025',
              details: '',
              image: ''
            },
            {
              title: 'Computer Science, Bachelor of Science',
              institution: 'Ulm University',
              time: 'Sep 2021 - Aug 2024',
              details: ['Thesis Title: LoRa for localization in outdoor scenarios'],
              image: ''
            },
            {
              title: 'Abitur',
              institution: 'Kilian-von-Steiner Schule',
              time: 'Sep 2018 - Jun 2021',
              details: [],
              image: ''
            }
          ]"></TimeLine>
        </ArticleSection>

        <ArticleSection header="Projects & Contributions" id="projects_and_contributions">
          <ProjectBox :src="travelBlogThumb">
            <ExternalButton href="https://blog.gerasimow.de" alt="Travel Blog Logo">
              Travel Blog
            </ExternalButton>
            My travel blog where I share my experiences and recommendations for the places that I have
            visited.
          </ProjectBox>
          <ProjectBox :src="featureIDEThumb" alt="FeatureIDE Logo">
            <div class="flex flex-wrap gap-3">
              <ExternalButton href="https://github.com/FeatureIDE/FeatureIDE">
                FeatureIDE
              </ExternalButton>
              <ExternalButton href="https://github.com/FeatureIDE/FeatJAR">
                FeatJAR
              </ExternalButton>
            </div>
            An extensible framework and libraries for feature-oriented software development.
          </ProjectBox>
        </ArticleSection>
      </div>
    </div>
  </div>
</template>

<script setup>
import travelBlogThumb from "~/assets/images/travel_blog_thumb.jpeg";
import featureIDEThumb from "~/assets/images/external/featureide_logo.png";

import ArticleSection from "~/components/ArticleSection.vue";
import { useArticleStore } from "~/stores/stores.js";
import DarkModeToggle from "~/components/DarkModeToggle.vue";

const articleStore = useArticleStore();
onBeforeMount(() => {
  articleStore.$reset();
});
const mobileView = inject("mobileView");
</script>
