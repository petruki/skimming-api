import facade from "../helpers/skimming-facade.ts";
import getBool from "../helpers/index.ts";
import {
    APP_CONTEXT_ENDPOINT,
    APP_FILES
} from "../config.ts";
import { Context } from "https://deno.land/x/oak/context.ts";

export default async (context: Context) => {

    const req = context.request.url;
    const res = context.response;

    try {
        const query = req.searchParams.get('query');
        const url = req.searchParams.get('url') || APP_CONTEXT_ENDPOINT;
        const queryFiles = req.searchParams.get('files') || '';

        if (!query) {
            res.status = 400;
            res.body = {
                message: 'Invalid query'
            };
            return;
        }

        const files = queryFiles ? queryFiles.split(",") : APP_FILES.split(",");
        const previewLength: any = req.searchParams.get('previewLength') || 200;
        const ignoreCase = getBool(req.searchParams.get('ignoreCase'), true);
        const trimContent = getBool(req.searchParams.get('trimContent'), true);
        const regex = getBool(req.searchParams.get('regex'), false);
        const skipCache = getBool(req.searchParams.get('skipCache'), false);

        const results = await facade(
            files, url, query, parseInt(previewLength), ignoreCase, trimContent, regex, skipCache);

        res.status = 200;
        res.body = {
            message: 'Success',
            query: query,
            result: results
        };
    } catch (e) {
        res.status = 500;
        res.body = {
            message: `Something went wrong - ${e.message}`
        }
    }
}