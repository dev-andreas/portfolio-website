export function useSystemTheme() {
    const isDark = ref(false)

    if (process.client) {
        const media = window.matchMedia("(prefers-color-scheme: dark)")
        isDark.value = media.matches

        media.addEventListener("change", (e) => {
            isDark.value = e.matches
        })
    }

    return { isDark }
}