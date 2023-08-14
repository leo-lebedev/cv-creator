<template>
  <div id="cv" class="w-full grid justify-center gap-10 h-screen p-10 overflow-y-scroll bg-white">


    <section id="printMe" class="w-full">
      <!-- <div class="theme-name text-sm w-full text-end py-2 px-3">
<p class="uppercase">Benito theme</p>
</div> -->
      <div class="main-cv flex">
        <aside class="h-full min-w-[275px] w-[275px] p-7">
          <div class="flex flex-wrap gap-x-2 font-semibold">
            <!-- PERSONAL DETAIL FIRST NAME -->
            <h1 :style="{ color: storeSetting.cvData.settings.colors }" class="text-2xl uppercase">
              {{ storeSetting.cvData.personal_details.first_name }}</h1>
            <!-- PERSONAL DETAIL LAST NAME -->
            <h1 :style="{ color: storeSetting.cvData.settings.colors }" class="text-2xl uppercase">
              {{ storeSetting.cvData.personal_details.last_name }}</h1>
          </div>
          <!-- PERSONAL DETAIL JOB TITLE -->
          <div class="mt-1">
            <h1 class="text-sm uppercase">{{ storeSetting.cvData.personal_details.job_title }}</h1>
          </div>
          <!-- PERSONAL DETAIL CONTATCS TITLE -->
          <div v-show="storeSetting.cvData.personal_details.email ||
                        storeSetting.cvData.personal_details.phone ||
                        storeSetting.cvData.personal_details.location" class="mt-6">
            <h1 class="text-[20px] uppercase font-semibold">
              {{ storeSetting.cvData.settings.languages.contact }}
            </h1>
          </div>
          <!-- PERSONAL DETAIL CONTATCS DATA -->
          <div class="mt-2">
            <div v-show="storeSetting.cvData.personal_details.email" class="flex align-middle gap-2">
              <img alt="" src="../components/svg/email.svg" width="20">
              <h1 class="text-sm">{{ storeSetting.cvData.personal_details.email }}</h1>
            </div>
            <div v-show="storeSetting.cvData.personal_details.phone" class="flex align-middle gap-2 mt-1">
              <img alt="" src="../components/svg/phone.svg" width="20">
              <h1 class="text-sm">{{ storeSetting.cvData.personal_details.phone }}</h1>
            </div>
            <div v-show="storeSetting.cvData.personal_details.location" class="flex align-middle gap-2 mt-1">
              <img alt="" src="../components/svg/location.svg" width="20">
              <h1 class="text-sm">{{ storeSetting.cvData.personal_details.location }}</h1>
            </div>
          </div>

          <!-- ==SKILLS START== -->
          <!-- TECH TITLE -->
          <div v-show="storeSetting.cvData.skills.isTech" class="mt-6">
            <h1 class="text-[20px] uppercase font-semibold">
              {{ storeSetting.cvData.settings.languages.tech }}
            </h1>
          </div>
          <!-- TECH -->
          <div v-show="storeSetting.cvData.skills.isTech" class="mt-2">
            <ul class="flex flex-wrap gap-1.5">
              <li v-for=" tech  in  storeSetting.cvData.skills.tech "
                  :key="tech"
                  :style="{ background: storeSetting.cvData.settings.colors }"
                  class="py-[4px] px-2 rounded-[5px] text-[10px] text-light">
                {{ tech }}
              </li>
            </ul>
          </div>

          <!-- SOFT TITLE -->
          <div v-show="storeSetting.cvData.skills.isSoft" class="mt-6">
            <h1 class="text-[20px] uppercase font-semibold">
              {{ storeSetting.cvData.settings.languages.soft }}
            </h1>
          </div>
          <!-- SOFT -->
          <div v-show="storeSetting.cvData.skills.isSoft" class="mt-2">
            <ul class="ml-5">
              <li v-for="soft  in  storeSetting.cvData.skills.soft " :key="soft"
                  class="text-sm text-dark" style="list-style: disc;">
                {{ soft }}
              </li>
            </ul>
          </div>

          <!-- LANGUAGE TITLE -->
          <div class="mt-6">
            <h1 class="text-[20px] uppercase font-semibold">
              {{ storeSetting.cvData.settings.languages.language }}
            </h1>
          </div>
          <!-- LANGUAGE -->
          <div class="mt-2">
            <ul class="grid gap-3">
              <li v-for="language  in  storeSetting.cvData.skills.language " v-show="language.isLanguage"
                  :key="language" class="text-sm text-dark">
                <div class="flex justify-between">
                  <p class="text-sm">{{ language.name.toUpperCase() }}</p>
                  <strong class="text-sm font-light">{{ language.level }}%</strong>
                </div>
                <div class="h-2 relative w-full bg-[#d2d6db] rounded-xl">
                  <div :style="{ width: language.level + '%', background: storeSetting.cvData.settings.colors }"
                       class="h-2 mt-1.5 rounded-xl">
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <!-- ==SKILLS END== -->

          <!-- SOCIALS TITLE -->
          <div v-show="storeSetting.cvData.socials.github ||
                        storeSetting.cvData.socials.twitter ||
                        storeSetting.cvData.socials.instagram ||
                        storeSetting.cvData.socials.linkedin ||
                        storeSetting.cvData.socials.telegram ||
                        storeSetting.cvData.socials.web" class="mt-6">
            <h1 class="text-[20px] uppercase font-semibold">
              {{ storeSetting.cvData.settings.languages.social }}
            </h1>
          </div>
          <!-- SOCIALS BODY -->
          <div v-show="storeSetting.cvData.settings.languages.social" class="mt-2">
            <ul class="grid gap-0.5">
              <li class="text-sm text-dark flex gap-2">
                <img v-show="storeSetting.cvData.socials.github" alt="github" src="../components/svg/github.svg"
                     width="16">
                {{ storeSetting.cvData.socials.github }}
              </li>
              <li class="text-sm text-dark flex gap-2">
                <img v-show="storeSetting.cvData.socials.twitter" alt="twitter" src="../components/svg/twitter.svg"
                     width="16">
                {{ storeSetting.cvData.socials.twitter }}
              </li>
              <li class="text-sm text-dark flex gap-2">
                <img v-show="storeSetting.cvData.socials.instagram" alt="instagram"
                     src="../components/svg/instagram.svg"
                     width="16">
                {{ storeSetting.cvData.socials.instagram }}
              </li>
              <li class="text-sm text-dark flex gap-2">
                <img v-show="storeSetting.cvData.socials.linkedin" alt="linkedin" src="../components/svg/linkedin.svg"
                     width="16">
                {{ storeSetting.cvData.socials.linkedin }}
              </li>
              <li class="text-sm text-dark flex gap-2">
                <img v-show="storeSetting.cvData.socials.telegram" alt="telegram" src="../components/svg/telegram.svg"
                     width="16">
                {{ storeSetting.cvData.socials.telegram }}
              </li>
              <li class="text-sm text-dark flex gap-2">
                <img v-show="storeSetting.cvData.socials.web" alt="web" src="../components/svg/web.svg"
                     width="16">
                {{ storeSetting.cvData.socials.web }}
              </li>
            </ul>
          </div>


        </aside>

        <main class="h-full w-full p-7">
          <div class="">
            <!-- PERSONAL DETAIL ABOUT ME TITLE -->
            <h1 :style="{ color: storeSetting.cvData.settings.colors }"
                class="text-xl uppercase font-semibold">
              {{ storeSetting.cvData.settings.languages.about_me }}
            </h1>
            <article class="mt-2 text-sm">
              {{ storeSetting.cvData.personal_details.about_me }}
            </article>
          </div>

          <div class="h-2 w-full bg-lightblue mt-5"></div>


          <div class="mt-5">
            <!-- PERSONAL DETAIL ABOUT ME TITLE -->
            <h1 :style="{ color: storeSetting.cvData.settings.colors }"
                class="text-xl uppercase font-semibold">
              {{ storeSetting.cvData.settings.languages.experience }}
            </h1>

            <div v-for="e in storeSetting.cvData.experiences" v-show="e.isExperience" :key="e">
              <h1 class="text-[16px] uppercase font-medium mt-4">{{ e.title }}</h1>
              <p class="text-[14px] mt-1.5">{{ e.location }} <span v-show="e.from"> | </span>{{ e.from }}<span
                  v-show="e.to">-</span>{{ e.to }}</p>
              <article class="mt-1 text-sm">
                {{ e.summary }}
              </article>
            </div>
          </div>
          <div class="mt-6">
            <!-- PERSONAL DETAIL ABOUT ME TITLE -->
            <h1 :style="{ color: storeSetting.cvData.settings.colors }"
                class="text-xl uppercase font-semibold">
              {{ storeSetting.cvData.settings.languages.educationsAndCertifications }}
            </h1>

            <div v-for="e in storeSetting.cvData.educationsAndCertifications" v-show="e.isTrue" :key="e"
                 class="">
              <h1 class="text-[16px] uppercase font-medium mt-5">{{ e.title }}</h1>
              <p class="text-[14px] mt-1.5">{{ e.location }} <span v-show="e.from"> | </span>{{ e.from }}<span
                  v-show="e.to">-</span>{{ e.to }}</p>
              <article class="mt-1 text-sm">
                {{ e.summary }}
              </article>
            </div>
          </div>
        </main>
      </div>


    </section>
  </div>
</template>

<script setup>
import {useSettingStore} from "@/stores/settings"

const storeSetting = useSettingStore()

</script>
