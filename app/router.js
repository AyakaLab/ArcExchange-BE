'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // -------------------------------- 用户登录 --------------------------------
  router.post('/login/username', controller.user.userLoginByUsername);
};
