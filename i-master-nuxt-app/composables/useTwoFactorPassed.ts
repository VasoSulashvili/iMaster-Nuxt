export const useTwoFactorPassed = () =>
  useCookie<boolean>('twoFactorPassed', {
    default: () => false,
    maxAge: 60 * 60, // 1 hour
  })