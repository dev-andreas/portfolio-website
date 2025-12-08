export function useColorMode() {
    const ThemeType = {
        LIGHT: "light",
        DARK: "dark",
        SYSTEM: "system"
    };

    // 1. USE STATE: Unique key 'color-mode' ensures state is shared across components
    // but isolated per user request on the server.
    const theme = useState('color-mode', () => ThemeType.SYSTEM)

    // Note: Ensure useSystemTheme is safe to run on server or wrap in checks
    const systemTheme = useSystemTheme()

    const isDarkTheme = computed(() => {
        // Guard against server-side execution if systemTheme relies on window
        if (process.server && !systemTheme.value) return false

        const isDark = systemTheme.isDark
        switch (theme.value) {
            case ThemeType.DARK:
                return true
            case ThemeType.LIGHT:
                return false
            default:
                return isDark.value
        }
    })

    const setTheme = (newTheme) => {
        theme.value = newTheme
    }

    const toggleTheme = () => {
        theme.value = isDarkTheme.value ? ThemeType.LIGHT : ThemeType.DARK
    }

    // 2. DOM MANIPULATION: strictly client-side
    // We use onMounted to handle the initial LocalStorage read to avoid Hydration Mismatches
    onMounted(() => {
        // Initialize from LocalStorage
        const lsTheme = localStorage.getItem("theme")
        if (lsTheme && Object.values(ThemeType).includes(lsTheme)) {
            theme.value = lsTheme
        }

        // Watch for changes to update DOM and LocalStorage
        watch(isDarkTheme, (isDark) => {
            if (isDark) {
                document.documentElement.classList.add('dark')
            } else {
                document.documentElement.classList.remove('dark')
            }
        }, { immediate: true })

        watch(theme, (val) => {
            localStorage.setItem("theme", val)
        })
    })

    return {
        isDarkTheme,
        toggleTheme,
        getTheme: () => theme.value, // Simple getter
        setTheme,
        ThemeType,
        theme
    }
}