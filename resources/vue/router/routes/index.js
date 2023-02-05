import site from './site'
import admin from './admin'
import lms from './lms'
import error from './error'

const routes = [].concat(
	site,
	admin,
	lms,
	error,
);

export default routes;