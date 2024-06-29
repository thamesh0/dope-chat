// ----------------------------------------------------------------------

function path(root: string, subLink: string): string {
    return `${root}${subLink}`;
}

const ROOTS_DASHBOARD = "/";

export const PATH_DASHBOARD = {
    root: ROOTS_DASHBOARD,
    general: {
        app: path(ROOTS_DASHBOARD, "app"),
    },
};
