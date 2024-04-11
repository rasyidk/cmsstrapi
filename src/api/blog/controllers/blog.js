'use strict'

/**
 * blog controller
 */

const { createCoreController } = require('@strapi/strapi').factories

module.exports = createCoreController('api::blog.blog', ({ strapi }) => ({
  async findOne (ctx) {
    const { id } = ctx.params

    let entity = await strapi.db.query('api::blog.blog').findOne({
      where: { slug: id },
      populate: true
    })

    const sanitiedEntity = await this.sanitizeOutput(entity, ctx)

    return this.transformResponse(sanitiedEntity)
  }
}))
