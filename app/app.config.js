(function () {
	var tenantName = 'delegatedemo01';
	
	var officeAddin = angular.module('officeAddin');
	officeAddin.constant('appId', '355ae2c7-3ebe-4935-b09b-1ce62d170e35');
	officeAddin.constant('sharePointUrl', 'https://' + tenantName + '.sharepoint.com');
})();