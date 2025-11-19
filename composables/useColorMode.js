const DARK = "dark"
const LIGHT = "light"
const SYSTEM = "system"

export function useColorMode() {
    const systemTheme = useSystemTheme()
    const theme = ref(SYSTEM)

    const isDarkTheme = computed(() => {
        const isDark = systemTheme.isDark
        switch (theme.value) {
            case DARK:
                return true
            case LIGHT:
                return false
            default:
                return isDark.value
        }
    })
    const setSystemTheme = () => {
        theme.value = SYSTEM
    }

    const toggleTheme = () => {
        theme.value = isDarkTheme.value ? LIGHT : DARK
    }

    if (process.client) {
        watch(isDarkTheme, (value) => {
            if (value) {
                document.documentElement.classList.add('dark')
            } else {
                document.documentElement.classList.remove('dark')
            }
        })
        watch(theme, (value) => {
            localStorage.setItem("theme", value)
        })
        const lsTheme = localStorage.getItem("theme")
        switch (lsTheme) {
            case DARK:
                theme.value = DARK
                break
            case LIGHT:
                theme.value = LIGHT
                break
            default:
                theme.value = SYSTEM
        }

        // initialization
        localStorage.setItem("theme", theme.value)
    }

    return { isDarkTheme, setSystemTheme, toggleTheme }
}