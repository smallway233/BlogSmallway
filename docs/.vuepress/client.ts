import { defineClientConfig } from 'vuepress/client'
import { onMounted, nextTick, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useMediumZoom } from '@vuepress/plugin-medium-zoom/client'
// import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
// import NpmBadge from 'vuepress-theme-plume/features/NpmBadge.vue'
// import NpmBadgeGroup from 'vuepress-theme-plume/features/NpmBadgeGroup.vue'
// import Swiper from 'vuepress-theme-plume/features/Swiper.vue'

// import CustomComponent from './theme/components/Custom.vue'

// import './theme/styles/custom.css'
import Swiper from 'vuepress-theme-plume/features/Swiper.vue'


export default defineClientConfig({

  enhance({ app }) {
    app.component('Swiper', Swiper)   //全局图片轮播图
    // built-in components
    // app.component('RepoCard', RepoCard)
    // app.component('NpmBadge', NpmBadge)
    // app.component('NpmBadgeGroup', NpmBadgeGroup)
    // app.component('Swiper', Swiper) // you should install `swiper`

    // your custom components
    // app.component('CustomComponent', CustomComponent)
  },
  setup() {
    const zoom = useMediumZoom()
    const route = useRoute()

    const attachZoom = () => {
      nextTick(() => {
        setTimeout(() => {
          // @ts-ignore
          if (zoom && zoom.attach) {
            // @ts-ignore
            zoom.attach('[data-zoomable]')
          }
        }, 500)
      })
    }

    onMounted(() => {
      attachZoom()
    })

    watch(
      () => route.path,
      () => attachZoom()
    )
  },
})
