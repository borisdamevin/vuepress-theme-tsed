import { resolveMatchingConfig, resolvePage } from '@vuepress/theme-default/util'

export * from '@vuepress/theme-default/util'

export function resolveOtherTopicsItems (page, route, site, localePath) {
  const { pages, themeConfig } = site
  const localeConfig = localePath && themeConfig.locales
    ? themeConfig.locales[localePath] || themeConfig
    : themeConfig

  const otherTopicsConfig = localeConfig.otherTopics || themeConfig.otherTopics

  if (!otherTopicsConfig) {
    return []
  } else {
    const { base, config } = resolveMatchingConfig(route, otherTopicsConfig)
    return config
      ? config.map(item => {
        return resolvePage(pages, item, base)
      })
      : []
  }
}
