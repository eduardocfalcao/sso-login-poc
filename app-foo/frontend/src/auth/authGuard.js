import { getInstance } from './index';

export const authGuard = (to, from, next) => {
    const authService = getInstance();

    const fn = async () => {
        if (authService.isAuthenticated && await authService.isUserAuthenticated()) {
            return next();
        }

        authService.loginWithRedirect({ appState: { targetUrl: to.fullPath } });
    };

    if (!authService.loading) {
        return fn();
    }

    authService.$watch("loading", async loading => {
        if (loading === false) {
            return await fn();
        }
    });
}