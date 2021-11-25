const Module = () => import('./Module.vue');
const Login = () => import('./views/Login.vue');

const moduleRoute = {
	path: '/auth',
	component: Module,
	children: [
		{
			path: 'login',
			component: Login
		},
	]
};

export default router => {
	router.addRoute(moduleRoute);
};