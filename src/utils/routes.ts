export const routes = {
	root: "/",
	details: "/details",
}

export const getDetailsRoute = (id: number): string =>
	`${routes.details}/${id}`

export const icons = {
	logo: "/icons/logo.svg",
}
