db.createUser({
  user: 'niong-erp-admin',
  pwd: 'Password1@3',
  // roles: [{role: 'dbAdmin', db: 'saas'}]
  roles: ['readWrite']
});
