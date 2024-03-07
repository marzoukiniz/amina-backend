// 'use strict';


// const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::purchase.purchase', ({ strapi }) => ({
// async me(ctx) {
//     try {
//         const user = ctx.state.user;
//           ctx.request.body.data.users_permissions_user = user.id
//         console.log('user od :'+user.id);
//         const data = await strapi.entityService.findMany("api::purchase.purchase", {
//             filters: {
//                 user: {
//                     id: user.id
//                 }
//             }
//         })
//         return data;
//     } catch (err) {
//         ctx.body = err;
//     }
// }
// }));

// api/purchase/controllers/purchase.js

'use strict';
const { createCoreController } = require('@strapi/strapi').factories;
module.exports = createCoreController('api::purchase.purchase', ({ strapi }) => ({
  /**
   * Retrieve records based on logged-in user
   *
   * @return {Array}
   */
  async me(ctx) {
    // Retrieve the logged-in user from the request context
    const { user } = ctx.state;
    ctx.request.body.data.users_permissions_user = user.data.id
    if (!user) {
      // If the user is not logged in, return an empty array or an error message
      return [];
      // Alternatively, you can return an error response like:
      // ctx.throw(403, 'You must be logged in to access this data');
    }

    try {
      // Fetch the purchases associated with the logged-in user (assuming there's a relation)
      const purchases = await strapi.entityService.find({
         status: 'completed'  

       // Replace 'user' with the actual relation field name in your Purchase model
        // Optionally, you can add any other filtering, sorting, or pagination options here.
        // For example: additional conditions like { status: 'completed' } or { createdAt_gte: '2023-01-01' }
      });

      return purchases;
    } catch (error) {
      console.error('Error fetching purchases:', error);
      ctx.throw(500, 'Internal Server Error');
    }
  },
}));
