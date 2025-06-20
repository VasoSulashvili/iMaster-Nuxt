export default defineNuxtRouteMiddleware((to, from) => {
    const twoFAPassed = useTwoFactorPassed();

    if (!twoFAPassed.value) {
        navigateTo('auth/two-fa-login')
    }

    return true
})