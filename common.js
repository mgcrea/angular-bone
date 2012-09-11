
angular.module('$bone.config', []).value('$bone.config', {});
angular.module('$bone.services', ['$bone.config']);
angular.module('$bone', ['$bone.services', '$bone.config']);
