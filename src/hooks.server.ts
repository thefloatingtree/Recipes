import { redirect, type Handle } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";
import * as auth from "./auth";

const authorizeRoutes: Handle = async ({ event, resolve }) => {
    if (event.route.id?.includes("(protected)")) {
        const session = await event.locals.auth();
        if (!session) {
            throw redirect(303, '/');
        }
    }

    return resolve(event);
};

export const handle: Handle = sequence(
    auth.handle,
    authorizeRoutes
);