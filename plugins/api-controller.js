import apiController from "~/axios/api-controller";

export default(ctx, inject) => {
    const controller = apiController(ctx, ctx.$axios, ctx.store)
    inject('apiController', controller)
}