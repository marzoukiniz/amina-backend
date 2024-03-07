'use strict';

/**
 * food-beverage service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::food-beverage.food-beverage');
