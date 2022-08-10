phoneApi.getAddonFile('marketHome.html', (home) => {
    phoneApi.registerApp({
        name: 'Testing App',
        path: 'test',
        icon: 'fas fa-circle-chevron-up',
        iconColour: '#FFFFFF',
        iconBackground: 'linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
        headerColour: 'rgba(2,0,36,1)',
        installedByDefault: false,
    }, home);
});

phoneApi.subscribe('appLaunched', (a) => {
    console.log(`[Example Addon] App Loaded: ${a.app}`);
    // setTimeout(() => {
    //     $('#child').text('Child');
    // }, 1500);
});