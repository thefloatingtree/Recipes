import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async (event) => {
    if (event.route.id?.includes("(protected)")) {
        const session = await event.locals.auth();
        if (!session) {
            throw redirect(303, '/');
        }
    }
};