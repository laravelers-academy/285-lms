export default [
	{
		path: '/',
		name: 'Site',
		component: () => import(/* webpackChunkName: 'SiteLayout' */ '@layouts/site/SiteLayout'),
		children: [
			{
				path: '/password-reset/:token',
				name: 'PasswordReset',
				component: () => import(/* webpackChunkName: 'PasswordReset' */ '@views/site/auth/PasswordReset')
			}
		]	
	},		
];