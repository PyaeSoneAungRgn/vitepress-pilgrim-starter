import { defineConfigWithTheme } from "vitepress";
import type { ThemeConfig } from '@hempworks/pilgrim'
import config from '@hempworks/pilgrim/config'

export default defineConfigWithTheme<ThemeConfig>({
    extends: config,
    title: 'Virepress Pilgrim Starter',
    description: 'Documentation template styled like Forge, Envoyer, Vapor, Jetstream, and Spark',
    base: '/',
    cleanUrls: false,
    srcDir: 'src',

    themeConfig: {
        logo: {
            light: '/logo.png',
            dark: '/logo-dark.png',
        },
        nav: [
            { text: 'Home', link: '/markdown-examples' },
        ],
        sidebar: [
            {
                text: 'Examples',
                items: [
                    { text: 'Markdown Examples', link: '/markdown-examples' },
                    { text: 'Runtime API Examples', link: '/api-examples' },
                ],
            }
        ],
        search: {
            provider: 'local',
            options: {
                placeholder: 'Search...',
            },
        },
        githubUrl: 'https://github.com/PyaeSoneAungRgn/vitepress-pilgrim-starter'
    }
})