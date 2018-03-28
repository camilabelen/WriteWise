var EmailCtrl = require('./mail/mailCtrl');
//email route
router.post('/email', EmailCtrl.sendEmail);