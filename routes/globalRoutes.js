const express = require('express');
const verifyToken = require('../utils/verifyToken.js');
const upload = require('../utils/uploadDocument.js');

// Import controllers
const authorizationController = require('../controllers/authorizationController.js');
const memberController = require('../controllers/memberController.js');
const aepscomissionController = require('../controllers/aepscomissionController.js');
const aepswalletController = require('../controllers/aepswalletController.js');
const balanceController = require('../controllers/balanceController.js');
const bankController = require('../controllers/bankController.js');
const bankSettingController = require('../controllers/bankSettingController.js');
const companyController = require('../controllers/companyController.js');
const contactusController = require('../controllers/contactusController.js');
const districtController = require('../controllers/districtController.js');
const dmrsController = require('../controllers/dmrsController.js');
const employeeController = require('../controllers/employeeController.js');
const epfoController = require('../controllers/epfoController.js');
const epfoledgerController = require('../controllers/epfoledgerController.js');
const exceptionController = require('../controllers/exceptionController.js');
const fundrequestController = require('../controllers/fundrequestController.js');
const galleryController = require('../controllers/galleryController.js');
const gstledgerController = require('../controllers/gstledgerController.js');
const gstRegistrationController = require('../controllers/gstRegistrationController.js');
const idMasterController = require('../controllers/idMasterController.js');
const idRequestController = require('../controllers/idRequestController.js');
const itrController = require('../controllers/itrController.js');
const itrLedgerController = require('../controllers/itrLedgerController.js');
const loginHistoryController = require('../controllers/loginHistoryController.js');
const mainWalletLedgerController = require('../controllers/mainWalletLedgerController.js');
const messageSettingController = require('../controllers/messageSettingController.js');
const newsEventController = require('../controllers/newsEventController.js');
const orderController = require('../controllers/orderController.js');
const panLedgerController = require('../controllers/panLedgerController.js');
const panTokenController = require('../controllers/panTokenController.js');
const payoutSurchargeController = require('../controllers/payoutSurchargeController.js');
const productController = require('../controllers/productController.js');
const selfBankController = require('../controllers/selfBankController.js');
const serviceController = require('../controllers/serviceController.js');
const stateController = require('../controllers/stateController.js');
const ticketController = require('../controllers/ticketController.js');
const walletPinController = require('../controllers/walletPinController.js');

const router = express.Router();

// Document routes
router.post('/uploadDocument', upload.single('Document'), documentController.uploadDocument);

// Authorization routes
router.post('/userSignup', authorizationController.userSignup);
router.post('/userLogin', authorizationController.userLogin);
router.post('/checkAdmin', authorizationController.checkAdmin);

// Member routes
router.post('/createMember', verifyToken, memberController.createMember);
router.post('/getMembers', verifyToken, memberController.getMembers);
router.post('/getMemberById', verifyToken, memberController.getMemberById);
router.post('/updateMember', verifyToken, memberController.updateMember);
router.post('/deleteMember', verifyToken, memberController.deleteMember);
router.post('/getMemberuniqueId', verifyToken, memberController.getMemberuniqueId);

// AEPS Comission routes
router.post('/createAepscomission', verifyToken, aepscomissionController.createAepscomission);
router.post('/getAepscomissions', verifyToken, aepscomissionController.getAepscomission);
router.post('/getAepscomissionById', verifyToken, aepscomissionController.getAepscomissionById);
router.post('/updateAepscomission', verifyToken, aepscomissionController.updateAepscomission);
router.post('/deleteAepscomission', verifyToken, aepscomissionController.deleteAepscomission);

// AEPS Wallet routes
router.post('/createAepswallet', verifyToken, aepswalletController.createAepswallet);
router.post('/getAepswallet', verifyToken, aepswalletController.getAepswallet);
router.post('/getAepswalletById', verifyToken, aepswalletController.getAepswalletById);
router.post('/updateAepswallet', verifyToken, aepswalletController.updateAepswallet);
router.post('/deleteAepswallet', verifyToken, aepswalletController.deleteAepswallet);

// Balance routes
router.post('/createBalance', verifyToken, balanceController.createBalance);
router.post('/getBalance', verifyToken, balanceController.getBalance);
router.post('/getBalanceById', verifyToken, balanceController.getBalanceById);
router.post('/updateBalance', verifyToken, balanceController.updateBalance);
router.post('/deleteBalance', verifyToken, balanceController.deleteBalance);

// Bank routes
router.post('/createBank', verifyToken, bankController.createBank);
router.post('/getBanks', verifyToken, bankController.getBanks);
router.post('/getBankById', verifyToken, bankController.getBankById);
router.post('/updateBank', verifyToken, bankController.updateBank);
router.post('/deleteBank', verifyToken, bankController.deleteBank);

// Bank Setting routes
router.post('/createBankSetting', verifyToken, bankSettingController.createBankSetting);
router.post('/getBankSettings', verifyToken, bankSettingController.getBankSettings);
router.post('/getBankSettingById', verifyToken, bankSettingController.getBankSettingById);
router.post('/updateBankSetting', verifyToken, bankSettingController.updateBankSetting);
router.post('/deleteBankSetting', verifyToken, bankSettingController.deleteBankSetting);

// Company routes
router.post('/createCompany', verifyToken, companyController.createCompany);
router.post('/getCompanies', verifyToken, companyController.getCompanies);
router.post('/getCompanyById', verifyToken, companyController.getCompanyById);
router.post('/updateCompany', verifyToken, companyController.updateCompany);
router.post('/deleteCompany', verifyToken, companyController.deleteCompany);

// Contact Us routes
router.post('/createContactUs', verifyToken, contactusController.createContactUs);
router.post('/getContactUs', verifyToken, contactusController.getContactUs);
router.post('/getContactUsById', verifyToken, contactusController.getContactUsById);
router.post('/updateContactUs', verifyToken, contactusController.updateContactUs);
router.post('/deleteContactUs', verifyToken, contactusController.deleteContactUs);

// District routes
router.post('/createDistrict', verifyToken, districtController.createDistrict);
router.post('/getDistricts', verifyToken, districtController.getDistricts);
router.post('/getDistrictById', verifyToken, districtController.getDistrictById);
router.post('/updateDistrict', verifyToken, districtController.updateDistrict);
router.post('/deleteDistrict', verifyToken, districtController.deleteDistrict);

// DMRS routes
router.post('/createDmrs', verifyToken, dmrsController.createDmrs);
router.post('/getDmrs', verifyToken, dmrsController.getDmrs);
router.post('/getDmrsById', verifyToken, dmrsController.getDmrsById);
router.post('/updateDmrs', verifyToken, dmrsController.updateDmrs);
router.post('/deleteDmrs', verifyToken, dmrsController.deleteDmrs);

// Employee routes
router.post('/createEmployee', verifyToken, employeeController.createEmployee);
router.post('/getEmployees', verifyToken, employeeController.getEmployees);
router.post('/getEmployeeById', verifyToken, employeeController.getEmployeeById);
router.post('/updateEmployee', verifyToken, employeeController.updateEmployee);
router.post('/deleteEmployee', verifyToken, employeeController.deleteEmployee);

// EPFO routes
router.post('/createEpfo', verifyToken, epfoController.createEpfo);
router.post('/getEpfos', verifyToken, epfoController.getEpfos);
router.post('/getEpfoById', verifyToken, epfoController.getEpfoById);
router.post('/updateEpfo', verifyToken, epfoController.updateEpfo);
router.post('/deleteEpfo', verifyToken, epfoController.deleteEpfo);

// EPFO Ledger routes
router.post('/createEpfoledger', verifyToken, epfoledgerController.createEpfoledger);
router.post('/getEpfoledgers', verifyToken, epfoledgerController.getEpfoledgers);
router.post('/getEpfoledgerById', verifyToken, epfoledgerController.getEpfoledgerById);
router.post('/updateEpfoledger', verifyToken, epfoledgerController.updateEpfoledger);
router.post('/deleteEpfoledger', verifyToken, epfoledgerController.deleteEpfoledger);

// Exception routes
router.post('/createException', verifyToken, exceptionController.createException);
router.post('/getExceptions', verifyToken, exceptionController.getExceptions);
router.post('/getExceptionById', verifyToken, exceptionController.getExceptionById);
router.post('/updateException', verifyToken, exceptionController.updateException);
router.post('/deleteException', verifyToken, exceptionController.deleteException);

// Fund Request routes
router.post('/createFundRequest', verifyToken, fundrequestController.createFundRequest);
router.post('/getFundRequests', verifyToken, fundrequestController.getFundRequests);
router.post('/getFundRequestById', verifyToken, fundrequestController.getFundRequestById);
router.post('/updateFundRequest', verifyToken, fundrequestController.updateFundRequest);
router.post('/deleteFundRequest', verifyToken, fundrequestController.deleteFundRequest);

// Gallery routes
router.post('/createGallery', verifyToken, galleryController.createGallery);
router.post('/getGallery', verifyToken, galleryController.getGallery);
router.post('/getGalleryById', verifyToken, galleryController.getGalleryById);
router.post('/updateGallery', verifyToken, galleryController.updateGallery);
router.post('/deleteGallery', verifyToken, galleryController.deleteGallery);

// GST Ledger routes
router.post('/createGstledger', verifyToken, gstledgerController.createGstledger);
router.post('/getGstledgers', verifyToken, gstledgerController.getGstledgers);
router.post('/getGstledgerById', verifyToken, gstledgerController.getGstledgerById);
router.post('/updateGstledger', verifyToken, gstledgerController.updateGstledger);
router.post('/deleteGstledger', verifyToken, gstledgerController.deleteGstledger);

// GST Registration routes
router.post('/createGstRegistration', verifyToken, gstRegistrationController.createGstRegistration);
router.post('/getGstRegistrations', verifyToken, gstRegistrationController.getGstRegistrations);
router.post('/getGstRegistrationById', verifyToken, gstRegistrationController.getGstRegistrationById);
router.post('/updateGstRegistration', verifyToken, gstRegistrationController.updateGstRegistration);
router.post('/deleteGstRegistration', verifyToken, gstRegistrationController.deleteGstRegistration);

// ID Master routes
router.post('/createIdMaster', verifyToken, idMasterController.createIdMaster);
router.post('/getIdMasters', verifyToken, idMasterController.getIdMasters);
router.post('/getIdMasterById', verifyToken, idMasterController.getIdMasterById);
router.post('/updateIdMaster', verifyToken, idMasterController.updateIdMaster);
router.post('/deleteIdMaster', verifyToken, idMasterController.deleteIdMaster);

// ID Request routes
router.post('/createIdRequest', verifyToken, idRequestController.createIdRequest);
router.post('/getIdRequests', verifyToken, idRequestController.getIdRequests);
router.post('/getIdRequestById', verifyToken, idRequestController.getIdRequestById);
router.post('/updateIdRequest', verifyToken, idRequestController.updateIdRequest);
router.post('/deleteIdRequest', verifyToken, idRequestController.deleteIdRequest);

// ITR routes
router.post('/createItr', verifyToken, itrController.createItr);
router.post('/getItrs', verifyToken, itrController.getItrs);
router.post('/getItrById', verifyToken, itrController.getItrById);
router.post('/updateItr', verifyToken, itrController.updateItr);
router.post('/deleteItr', verifyToken, itrController.deleteItr);

// ITR Ledger routes
router.post('/createItrLedger', verifyToken, itrLedgerController.createItrLedger);
router.post('/getItrLedgers', verifyToken, itrLedgerController.getItrLedgers);
router.post('/getItrLedgerById', verifyToken, itrLedgerController.getItrLedgerById);
router.post('/updateItrLedger', verifyToken, itrLedgerController.updateItrLedger);
router.post('/deleteItrLedger', verifyToken, itrLedgerController.deleteItrLedger);

// Login History routes
router.post('/createLoginHistory', verifyToken, loginHistoryController.createLoginHistory);
router.post('/getLoginHistories', verifyToken, loginHistoryController.getLoginHistories);
router.post('/getLoginHistoryById', verifyToken, loginHistoryController.getLoginHistoryById);
router.post('/updateLoginHistory', verifyToken, loginHistoryController.updateLoginHistory);
router.post('/deleteLoginHistory', verifyToken, loginHistoryController.deleteLoginHistory);

// Main Wallet Ledger routes
router.post('/createMainWalletLedger', verifyToken, mainWalletLedgerController.createMainWalletLedger);
router.post('/getMainWalletLedgers', verifyToken, mainWalletLedgerController.getMainWalletLedgers);
router.post('/getMainWalletLedgerById', verifyToken, mainWalletLedgerController.getMainWalletLedgerById);
router.post('/updateMainWalletLedger', verifyToken, mainWalletLedgerController.updateMainWalletLedger);
router.post('/deleteMainWalletLedger', verifyToken, mainWalletLedgerController.deleteMainWalletLedger);

// Message Setting routes
router.post('/createMessageSetting', verifyToken, messageSettingController.createMessageSetting);
router.post('/getMessageSettings', verifyToken, messageSettingController.getMessageSettings);
router.post('/getMessageSettingById', verifyToken, messageSettingController.getMessageSettingById);
router.post('/updateMessageSetting', verifyToken, messageSettingController.updateMessageSetting);
router.post('/deleteMessageSetting', verifyToken, messageSettingController.deleteMessageSetting);

// News Event routes
router.post('/createNewsEvent', verifyToken, newsEventController.createNewsEvent);
router.post('/getNewsEvents', verifyToken, newsEventController.getNewsEvents);
router.post('/getNewsEventById', verifyToken, newsEventController.getNewsEventById);
router.post('/updateNewsEvent', verifyToken, newsEventController.updateNewsEvent);
router.post('/deleteNewsEvent', verifyToken, newsEventController.deleteNewsEvent);

// Order routes
router.post('/createOrder', verifyToken, orderController.createOrder);
router.post('/getOrders', verifyToken, orderController.getOrders);
router.post('/getOrderById', verifyToken, orderController.getOrderById);
router.post('/updateOrder', verifyToken, orderController.updateOrder);
router.post('/deleteOrder', verifyToken, orderController.deleteOrder);

// PAN Ledger routes
router.post('/createPanLedger', verifyToken, panLedgerController.createPanLedger);
router.post('/getPanLedgers', verifyToken, panLedgerController.getPanLedgers);
router.post('/getPanLedgerById', verifyToken, panLedgerController.getPanLedgerById);
router.post('/updatePanLedger', verifyToken, panLedgerController.updatePanLedger);
router.post('/deletePanLedger', verifyToken, panLedgerController.deletePanLedger);

// PAN Token routes
router.post('/createPanToken', verifyToken, panTokenController.createPanToken);
router.post('/getPanTokens', verifyToken, panTokenController.getPanTokens);
router.post('/getPanTokenById', verifyToken, panTokenController.getPanTokenById);
router.post('/updatePanToken', verifyToken, panTokenController.updatePanToken);
router.post('/deletePanToken', verifyToken, panTokenController.deletePanToken);

// Payout Surcharge routes
router.post('/createPayoutSurcharge', verifyToken, payoutSurchargeController.createPayoutSurcharge);
router.post('/getPayoutSurcharges', verifyToken, payoutSurchargeController.getPayoutSurcharges);
router.post('/getPayoutSurchargeById', verifyToken, payoutSurchargeController.getPayoutSurchargeById);
router.post('/updatePayoutSurcharge', verifyToken, payoutSurchargeController.updatePayoutSurcharge);
router.post('/deletePayoutSurcharge', verifyToken, payoutSurchargeController.deletePayoutSurcharge);

// Product routes
router.post('/createProduct', verifyToken, productController.createProduct);
router.post('/getProducts', verifyToken, productController.getProducts);
router.post('/getProductById', verifyToken, productController.getProductById);
router.post('/updateProduct', verifyToken, productController.updateProduct);
router.post('/deleteProduct', verifyToken, productController.deleteProduct);

// Self Bank routes
router.post('/createSelfBank', verifyToken, selfBankController.createSelfBank);
router.post('/getSelfBanks', verifyToken, selfBankController.getSelfBanks);
router.post('/getSelfBankById', verifyToken, selfBankController.getSelfBankById);
router.post('/updateSelfBank', verifyToken, selfBankController.updateSelfBank);
router.post('/deleteSelfBank', verifyToken, selfBankController.deleteSelfBank);

// Service routes
router.post('/createService', verifyToken, serviceController.createService);
router.post('/getServices', verifyToken, serviceController.getServices);
router.post('/getServiceById', verifyToken, serviceController.getServiceById);
router.post('/updateService', verifyToken, serviceController.updateService);
router.post('/deleteService', verifyToken, serviceController.deleteService);

// State routes
router.post('/createState', verifyToken, stateController.createState);
router.post('/getStates', verifyToken, stateController.getStates);
router.post('/getStateById', verifyToken, stateController.getStateById);
router.post('/updateState', verifyToken, stateController.updateState);
router.post('/deleteState', verifyToken, stateController.deleteState);

// State City routes
router.post('/createStateCity', verifyToken, stateCityController.createStateCity);
router.post('/getStateCities', verifyToken, stateCityController.getStateCities);
router.post('/getStateCityById', verifyToken, stateCityController.getStateCityById);
router.post('/updateStateCity', verifyToken, stateCityController.updateStateCity);
router.post('/deleteStateCity', verifyToken, stateCityController.deleteStateCity);

// State District routes
router.post('/createStateDistrict', verifyToken, stateDistrictController.createStateDistrict);
router.post('/getStateDistricts', verifyToken, stateDistrictController.getStateDistricts);
router.post('/getStateDistrictById', verifyToken, stateDistrictController.getStateDistrictById);
router.post('/updateStateDistrict', verifyToken, stateDistrictController.updateStateDistrict);
router.post('/deleteStateDistrict', verifyToken, stateDistrictController.deleteStateDistrict);

// State Hub routes
router.post('/createStateHub', verifyToken, stateHubController.createStateHub);
router.post('/getStateHubs', verifyToken, stateHubController.getStateHubs);
router.post('/getStateHubById', verifyToken, stateHubController.getStateHubById);
router.post('/updateStateHub', verifyToken, stateHubController.updateStateHub);
router.post('/deleteStateHub', verifyToken, stateHubController.deleteStateHub);

// Support routes
router.post('/createSupport', verifyToken, supportController.createSupport);
router.post('/getSupports', verifyToken, supportController.getSupports);
router.post('/getSupportById', verifyToken, supportController.getSupportById);
router.post('/updateSupport', verifyToken, supportController.updateSupport);
router.post('/deleteSupport', verifyToken, supportController.deleteSupport);

// System Activity routes
router.post('/createSystemActivity', verifyToken, systemActivityController.createSystemActivity);
router.post('/getSystemActivities', verifyToken, systemActivityController.getSystemActivities);
router.post('/getSystemActivityById', verifyToken, systemActivityController.getSystemActivityById);
router.post('/updateSystemActivity', verifyToken, systemActivityController.updateSystemActivity);
router.post('/deleteSystemActivity', verifyToken, systemActivityController.deleteSystemActivity);

// System Event routes
router.post('/createSystemEvent', verifyToken, systemEventController.createSystemEvent);
router.post('/getSystemEvents', verifyToken, systemEventController.getSystemEvents);
router.post('/getSystemEventById', verifyToken, systemEventController.getSystemEventById);
router.post('/updateSystemEvent', verifyToken, systemEventController.updateSystemEvent);
router.post('/deleteSystemEvent', verifyToken, systemEventController.deleteSystemEvent);

// Template Setting routes
router.post('/createTemplateSetting', verifyToken, templateSettingController.createTemplateSetting);
router.post('/getTemplateSettings', verifyToken, templateSettingController.getTemplateSettings);
router.post('/getTemplateSettingById', verifyToken, templateSettingController.getTemplateSettingById);
router.post('/updateTemplateSetting', verifyToken, templateSettingController.updateTemplateSetting);
router.post('/deleteTemplateSetting', verifyToken, templateSettingController.deleteTemplateSetting);

// Terms and Conditions routes
router.post('/createTermsAndConditions', verifyToken, termsAndConditionsController.createTermsAndConditions);
router.post('/getTermsAndConditions', verifyToken, termsAndConditionsController.getTermsAndConditions);
router.post('/getTermsAndConditionsById', verifyToken, termsAndConditionsController.getTermsAndConditionsById);
router.post('/updateTermsAndConditions', verifyToken, termsAndConditionsController.updateTermsAndConditions);
router.post('/deleteTermsAndConditions', verifyToken, termsAndConditionsController.deleteTermsAndConditions);

// Transaction Log routes
router.post('/createTransactionLog', verifyToken, transactionLogController.createTransactionLog);
router.post('/getTransactionLogs', verifyToken, transactionLogController.getTransactionLogs);
router.post('/getTransactionLogById', verifyToken, transactionLogController.getTransactionLogById);
router.post('/updateTransactionLog', verifyToken, transactionLogController.updateTransactionLog);
router.post('/deleteTransactionLog', verifyToken, transactionLogController.deleteTransactionLog);

// Transaction Setting routes
router.post('/createTransactionSetting', verifyToken, transactionSettingController.createTransactionSetting);
router.post('/getTransactionSettings', verifyToken, transactionSettingController.getTransactionSettings);
router.post('/getTransactionSettingById', verifyToken, transactionSettingController.getTransactionSettingById);
router.post('/updateTransactionSetting', verifyToken, transactionSettingController.updateTransactionSetting);
router.post('/deleteTransactionSetting', verifyToken, transactionSettingController.deleteTransactionSetting);

// Transaction Type routes
router.post('/createTransactionType', verifyToken, transactionTypeController.createTransactionType);
router.post('/getTransactionTypes', verifyToken, transactionTypeController.getTransactionTypes);
router.post('/getTransactionTypeById', verifyToken, transactionTypeController.getTransactionTypeById);
router.post('/updateTransactionType', verifyToken, transactionTypeController.updateTransactionType);
router.post('/deleteTransactionType', verifyToken, transactionTypeController.deleteTransactionType);

// User routes
router.post('/createUser', verifyToken, userController.createUser);
router.post('/getUsers', verifyToken, userController.getUsers);
router.post('/getUserById', verifyToken, userController.getUserById);
router.post('/updateUser', verifyToken, userController.updateUser);
router.post('/deleteUser', verifyToken, userController.deleteUser);

// User Bank routes
router.post('/createUserBank', verifyToken, userBankController.createUserBank);
router.post('/getUserBanks', verifyToken, userBankController.getUserBanks);
router.post('/getUserBankById', verifyToken, userBankController.getUserBankById);
router.post('/updateUserBank', verifyToken, userBankController.updateUserBank);
router.post('/deleteUserBank', verifyToken, userBankController.deleteUserBank);

// Wallet routes
router.post('/createWallet', verifyToken, walletController.createWallet);
router.post('/getWallets', verifyToken, walletController.getWallets);
router.post('/getWalletById', verifyToken, walletController.getWalletById);
router.post('/updateWallet', verifyToken, walletController.updateWallet);
router.post('/deleteWallet', verifyToken, walletController.deleteWallet);

// Wallet Ledger routes
router.post('/createWalletLedger', verifyToken, walletLedgerController.createWalletLedger);
router.post('/getWalletLedgers', verifyToken, walletLedgerController.getWalletLedgers);
router.post('/getWalletLedgerById', verifyToken, walletLedgerController.getWalletLedgerById);
router.post('/updateWalletLedger', verifyToken, walletLedgerController.updateWalletLedger);
router.post('/deleteWalletLedger', verifyToken, walletLedgerController.deleteWalletLedger);

// Wallet Surcharge routes
router.post('/createWalletSurcharge', verifyToken, walletSurchargeController.createWalletSurcharge);
router.post('/getWalletSurcharges', verifyToken, walletSurchargeController.getWalletSurcharges);
router.post('/getWalletSurchargeById', verifyToken, walletSurchargeController.getWalletSurchargeById);
router.post('/updateWalletSurcharge', verifyToken, walletSurchargeController.updateWalletSurcharge);
router.post('/deleteWalletSurcharge', verifyToken, walletSurchargeController.deleteWalletSurcharge);

module.exports = router;

