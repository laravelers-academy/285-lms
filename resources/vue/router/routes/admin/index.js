export default [
	{
		path: '/dashboard',
		name: 'Admin',
		component: () => import (/* webpackChunkName: 'AdminLayout' */ '@layouts/admin/AdminLayout')
	},
];