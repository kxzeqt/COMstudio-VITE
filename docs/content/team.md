---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const coreMembers = [
  {
    avatar: 'https://upload-os-bbs.hoyolab.com/upload/2024/01/09/270665082/185ea2e82dbe98ad268f2815dd8c4072_2263428939097189063.jpg?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70',
    name: 'Cyrus Rebello',
    title: 'Founder & Animation Director',
    links: [
      { icon: 'x', link: 'https://x.com/COM_Animation' },
      { icon: 'bluesky', link: 'https://bsky.app/' }
    ]
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      COM Animation Studio is made up of passionate creative professionals dedicated to bringing stories to life through animation.
    </template>
  </VPTeamPageTitle>

  <VPTeamPageSection>
    <template #title>Leadership</template>
    <template #lead>Our core team of industry veterans guiding the studio's creative vision.</template>
    <template #members>
      <VPTeamMembers size="medium" :members="coreMembers" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
