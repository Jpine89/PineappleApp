phoneApi.getAddonFile('dist/index.html', (template) => {
    phoneApi.registerApp({
        name: 'Pineapple Trading',
        path: 'pineapple-app',
        icon: 'fas fa-circle-chevron-up',
        iconColour: '#FFFFFF',
        iconBackground: 'linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
        headerColour: 'rgba(2,0,36,1)',
        installedByDefault: false,
    }, template);
});

phoneApi.subscribe('appLaunched', (a) => {
    console.log(`[Example Addon] App Loaded: ${a.app}`);
});
