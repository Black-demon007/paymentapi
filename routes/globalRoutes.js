const express = require('express');
const verifyToken = require('../utils/verifyToken.js');
const upload = require('../utils/uploadDocument.js');

const documentController = require('../controllers/documentController.js');
const authorizationController = require('../controllers/authorizationController.js');
const memberController = require('../controllers/memberController.js');
const aepscomissionController = require('../controllers/aepscomissionController.js');
const aepswalletController = require('../controllers/aepswalletController.js');
const balanceController = require('../controllers/balanceController.js');
// const balanceLedgerController = require('../controllers/balanceLedgerController.js');
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
const gstregistrationController = require('../controllers/gstRegistrationController.js');
const idMasterController = require('../controllers/idMasterController.js');
const idRequestController = require('../controllers/idRequestController.js');
const itrController = require('../controllers/itrController.js');
const itrledgerController = require('../controllers/itrLedgerController.js');
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

router.post('/uploadDocument', upload.single('Document'), documentController.uploadDocument);

router.post('/userSignup', authorizationController.userSignup);
router.post('/userLogin', authorizationController.userLogin);
router.post('/checkAdmin', authorizationController.checkAdmin);

router.post('/createMember', verifyToken, memberController.createMember);
router.post('/getMembers', verifyToken, memberController.getMembers);
router.post('/getMemberById', verifyToken, memberController.getMemberById);
router.post('/updateMember', verifyToken, memberController.updateMember);
router.post('/deleteMember', verifyToken, memberController.deleteMember);
router.post('/getMemberuniqueId', verifyToken, memberController.getMemberuniqueId);

router.post('/createAepscomisison', verifyToken, aepscomissionController.createAepscomission);
router.post('/getAepscomissions', verifyToken, aepscomissionController.getAepscomission);
router.post('/getAepscomisisonById', verifyToken, aepscomissionController.getAepscomissionById);
router.post('/updateAepscomisison', verifyToken, aepscomissionController.updateAepscomission);
router.post('/deleteAepscomission', verifyToken, aepscomissionController.deleteAepscomission);

router.post('/createAepswallet', verifyToken, aepswalletController.createAepswallet);
router.post('/getAepswallet', verifyToken, aepswalletController.getAepswallet);
router.post('/getAepswalletById', verifyToken, aepswalletController.getAepswalletById);
router.post('/updateAepswallet', verifyToken, aepswalletController.updateAepswallet);
router.post('/deleteAepswallet', verifyToken, aepswalletController.deleteAepswallet);

router.post('/createBalance', verifyToken, balanceController.createBalance);
router.post('/getBalance', verifyToken, balanceController.getBalance);
router.post('/getBalanceById', verifyToken, balanceController.getBalanceById);
router.post('/updateBalance', verifyToken, balanceController.updateBalance);
router.post('/deleteBalance', verifyToken, balanceController.deleteBalance);

// router.post('/createBalanceledger', verifyToken, balanceLedgerController.createBalanceledger);
// router.post('/getBalanceledger', verifyToken, balanceLedgerController.getBalanceledger);
// router.post('/getBalanceledgerById', verifyToken, balanceLedgerController.getBalanceledgerById);
// router.post('/updateBalanceledger', verifyToken, balanceLedgerController.updateBalanceledger);
// router.post('/deleteBalanceledger', verifyToken, balanceLedgerController.deleteBalanceledger);

router.post('/createBank', verifyToken, bankController.createBank);
router.post('/getBanks', verifyToken, bankController.getBanks);
router.post('/getBankById', verifyToken, bankController.getBankById);
router.post('/updateBank', verifyToken, bankController.updateBank);
router.post('/deleteBank', verifyToken, bankController.deleteBank);

router.post('/createBanksetting', verifyToken, bankSettingController.createBankSetting);
router.post('/getBanksettings', verifyToken, bankSettingController.getBankSettings);
router.post('/getBanksettingById', verifyToken, bankSettingController.getBankSettingById);
router.post('/updateBanksetting', verifyToken, bankSettingController.updateBankSetting);
router.post('/deleteBanksetting', verifyToken, bankSettingController.deleteBankSetting);

router.post('/createCompany', verifyToken, companyController.createCompany);
router.post('/getCompanies', verifyToken, companyController.getCompanies);
router.post('/getComapaniesById', verifyToken, companyController.getCompanyById);
router.post('/updateCompany', verifyToken, companyController.updateCompany);
router.post('/deleteCompany', verifyToken, companyController.deleteCompany);

router.post('/createContactus', verifyToken, contactusController.createContactUs);
router.post('/getContactus', verifyToken, contactusController.getContactUs);
router.post('/getContactusById', verifyToken, contactusController.getContactUsById);
router.post('/updateContactus', verifyToken, contactusController.updateContactUs);
router.post('/deleteContactus', verifyToken, contactusController.deleteContactUs);

router.post('/createDistrict', verifyToken, districtController.createDistrict);
router.post('/getDistricts', verifyToken, districtController.getDistricts);
router.post('/getDistrictById', verifyToken, districtController.getDistrictById);
router.post('/updateDistrict', verifyToken, districtController.updateDistrict);
router.post('/deleteDistrict', verifyToken, districtController.deleteDistrict);

router.post('/createDmrs', verifyToken, dmrsController.createDmrs);
router.post('/getDmrs', verifyToken, dmrsController.getDmrs);
router.post('/getDmrsById', verifyToken, dmrsController.getDmrsById);
router.post('/updateDmrs', verifyToken, dmrsController.updateDmrs);
router.post('/deleteDmrs', verifyToken, dmrsController.deleteDmrs);

router.post('/createEmployee', verifyToken, employeeController.createEmployee);
router.post('/getEmployee', verifyToken, employeeController.getEmployees);
router.post('/getEmployeeById', verifyToken, employeeController.getEmployeeById);
router.post('/updateEmployee', verifyToken, employeeController.updateEmployee);
router.post('/deleteEmployee', verifyToken, employeeController.deleteEmployee);

router.post('/createEpfo', verifyToken, epfoController.createEpfo);
router.post('/getEpfo', verifyToken, epfoController.getEpfos);
router.post('/getEpfoById', verifyToken, epfoController.getEpfoById);
router.post('/updateEpfo', verifyToken, epfoController.updateEpfo);
router.post('/deleteEpfo', verifyToken, epfoController.deleteEpfo);

router.post('/createEpfoledger', verifyToken, epfoledgerController.createEpfoledger);
router.post('/getEpfoledgers', verifyToken, epfoledgerController.getEpfoledgers);
router.post('/getEpfoledgerById', verifyToken, epfoledgerController.getEpfoledgerById);
router.post('/updateEpfoledger', verifyToken, epfoledgerController.updateEpfoledger);
router.post('/deleteEpfoledger', verifyToken, epfoledgerController.deleteEpfoledger);

router.post('/createException', verifyToken, exceptionController.createException);
router.post('/getExceptions', verifyToken, exceptionController.getExceptions);
router.post('/getExceptionById', verifyToken, exceptionController.getExceptionById);
router.post('/updateException', verifyToken, exceptionController.updateException);
router.post('/deleteException', verifyToken, exceptionController.deleteException);

router.post('/createFundrequest', verifyToken, fundrequestController.createFundRequest);
router.post('/getFundrequest', verifyToken, fundrequestController.getFundRequests);
router.post('/getFundrequestById', verifyToken, fundrequestController.getFundRequestById);
router.post('/updateFundrequest', verifyToken, fundrequestController.updateFundRequest);
router.post('/deleteFundrequest', verifyToken, fundrequestController.deleteFundRequest);

router.post('/createGallery', verifyToken, galleryController.createGallery);
router.post('/getGallery', verifyToken, galleryController.getGallery);
router.post('/getGalleryById', verifyToken, galleryController.getGalleryById);
router.post('/updateGallery', verifyToken, galleryController.updateGallery);
router.post('/deleteGallery', verifyToken, galleryController.deleteGallery);

router.post('/createGstledger', verifyToken, gstledgerController.createGstledger);
router.post('/getGstledger', verifyToken, gstledgerController.getGstledger);
router.post('/getGstledgerById', verifyToken, gstledgerController.getGstledgerById);
router.post('/updateGstledger', verifyToken, gstledgerController.updateGstledger);
router.post('/deleteGstledger', verifyToken, gstledgerController.deleteGstledger);

router.post('/createGstregistration', verifyToken, gstregistrationController.createGstRegistration);
router.post('/getGstregistration', verifyToken, gstregistrationController.getGstRegistration);
router.post('/getGstregistrationById', verifyToken, gstregistrationController.getGstRegistrationById);
router.post('/updateGstregistration', verifyToken, gstregistrationController.updateGstRegistration);
router.post('/deleteGstregistration', verifyToken, gstregistrationController.deleteGstRegistration);

router.post('/createIdMaster', verifyToken, idMasterController.createIdMaster);
router.post('/getIdMaster', verifyToken, idMasterController.getIdMaster);
router.post('/getIdMasterById', verifyToken, idMasterController.getIdMasterById);
router.post('/updateIdMaster', verifyToken, idMasterController.updateIdMaster);
router.post('/deleteIdMaster', verifyToken, idMasterController.deleteIdMaster);

router.post('/createIdRequest', verifyToken, idRequestController.createIdRequest);
router.post('/getIdRequest', verifyToken, idRequestController.getIdRequest);
router.post('/getIdRequestById', verifyToken, idRequestController.getIdRequestById);
router.post('/updateIdRequest', verifyToken, idRequestController.updateIdRequest);
router.post('/deleteIdRequest', verifyToken, idRequestController.deleteIdRequest);

router.post('/createItr', verifyToken, itrController.createItr);
router.post('/getItr', verifyToken, itrController.getItr);
router.post('/getItrById', verifyToken, itrController.getItrById);
router.post('/updateItr', verifyToken, itrController.updateItr);
router.post('/deleteItr', verifyToken, itrController.deleteItr);

router.post('/createItrledger', verifyToken, itrledgerController.createItrledger);
router.post('/getItrledger', verifyToken, itrledgerController.getItrledger);
router.post('/getItrledgerById', verifyToken, itrledgerController.getItrledgerById);
router.post('/updateItrledger', verifyToken, itrledgerController.updateItrledger);
router.post('/deleteItrledger', verifyToken, itrledgerController.deleteItrledger);

router.post('/createLoginHistory', verifyToken, loginHistoryController.createLoginHistory);
router.post('/getLoginHistory', verifyToken, loginHistoryController.getLoginHistory);
router.post('/getLoginHistoryById', verifyToken, loginHistoryController.getLoginHistoryById);
router.post('/updateLoginHistory', verifyToken, loginHistoryController.updateLoginHistory);
router.post('/deleteLoginHistory', verifyToken, loginHistoryController.deleteLoginHistory);

router.post('/createMainWalletLedger', verifyToken, mainWalletLedgerController.createMainWalletLedger);
router.post('/getMainWalletLedger', verifyToken, mainWalletLedgerController.getMainWalletLedger);
router.post('/getMainWalletLedgerById', verifyToken, mainWalletLedgerController.getMainWalletLedgerById);
router.post('/updateMainWalletLedger', verifyToken, mainWalletLedgerController.updateMainWalletLedger);
router.post('/deleteMainWalletLedger', verifyToken, mainWalletLedgerController.deleteMainWalletLedger);

router.post('/createMessageSetting', verifyToken, messageSettingController.createMessageSetting);
router.post('/getMessageSetting', verifyToken, messageSettingController.getMessageSetting);
router.post('/getMessageSettingById', verifyToken, messageSettingController.getMessageSettingById);
router.post('/updateMessageSetting', verifyToken, messageSettingController.updateMessageSetting);
router.post('/deleteMessageSetting', verifyToken, messageSettingController.deleteMessageSetting);

router.post('/createNewsEvent', verifyToken, newsEventController.createNewsEvent);
router.post('/getNewsEvent', verifyToken, newsEventController.getNewsEvent);
router.post('/getNewsEventById', verifyToken, newsEventController.getNewsEventById);
router.post('/updateNewsEvent', verifyToken, newsEventController.updateNewsEvent);
router.post('/deleteNewsEvent', verifyToken, newsEventController.deleteNewsEvent);

router.post('/createOrder', verifyToken, orderController.createOrder);
router.post('/getOrder', verifyToken, orderController.getOrder);
router.post('/getOrderById', verifyToken, orderController.getOrderById);
router.post('/updateOrder', verifyToken, orderController.updateOrder);
router.post('/deleteOrder', verifyToken, orderController.deleteOrder);

router.post('/createPanLedger', verifyToken, panLedgerController.createPanLedger);
router.post('/getPanLedger', verifyToken, panLedgerController.getPanLedger);
router.post('/getPanLedgerById', verifyToken, panLedgerController.getPanLedgerById);
router.post('/updatePanLedger', verifyToken, panLedgerController.updatePanLedger);
router.post('/deletePanLedger', verifyToken, panLedgerController.deletePanLedger);

router.post('/createPanToken', verifyToken, panTokenController.createPanToken);
router.post('/getPanToken', verifyToken, panTokenController.getPanToken);
router.post('/getPanTokenById', verifyToken, panTokenController.getPanTokenById);
router.post('/updatePanToken', verifyToken, panTokenController.updatePanToken);
router.post('/deletePanToken', verifyToken, panTokenController.deletePanToken);

router.post('/createPayoutSurcharge', verifyToken, payoutSurchargeController.createPayoutSurcharge);
router.post('/getPayoutSurcharge', verifyToken, payoutSurchargeController.getPayoutSurcharge);
router.post('/getPayoutSurchargeById', verifyToken, payoutSurchargeController.getPayoutSurchargeById);
router.post('/updatePayoutSurcharge', verifyToken, payoutSurchargeController.updatePayoutSurcharge);
router.post('/deletePayoutSurcharge', verifyToken, payoutSurchargeController.deletePayoutSurcharge);

router.post('/createProduct', verifyToken, productController.createProduct);
router.post('/getProduct', verifyToken, productController.getProduct);
router.post('/getProductById', verifyToken, productController.getProductById);
router.post('/updateProduct', verifyToken, productController.updateProduct);
router.post('/deleteProduct', verifyToken, productController.deleteProduct);

router.post('/createSelfBank', verifyToken, selfBankController.createSelfBank);
router.post('/getSelfBank', verifyToken, selfBankController.getSelfBank);
router.post('/getSelfBankById', verifyToken, selfBankController.getSelfBankById);
router.post('/updateSelfBank', verifyToken, selfBankController.updateSelfBank);
router.post('/deleteSelfBank', verifyToken, selfBankController.deleteSelfBank);

router.post('/createService', verifyToken, serviceController.createService);
router.post('/getService', verifyToken, serviceController.getService);
router.post('/getServiceById', verifyToken, serviceController.getServiceById);
router.post('/updateService', verifyToken, serviceController.updateService);
router.post('/deleteService', verifyToken, serviceController.deleteService);

router.post('/createState', verifyToken, stateController.createState);
router.post('/getState', verifyToken, stateController.getState);
router.post('/getStateById', verifyToken, stateController.getStateById);
router.post('/updateState', verifyToken, stateController.updateState);
router.post('/deleteState', verifyToken, stateController.deleteState);

router.post('/createTicket', verifyToken, ticketController.createTicket);
router.post('/getTicket', verifyToken, ticketController.getTicket);
router.post('/getTicketById', verifyToken, ticketController.getTicketById);
router.post('/updateTicket', verifyToken, ticketController.updateTicket);
router.post('/deleteTicket', verifyToken, ticketController.deleteTicket);

router.post('/createWalletPin', verifyToken, walletPinController.createWalletPin);
router.post('/getWalletPin', verifyToken, walletPinController.getWalletPin);
router.post('/getWalletPinById', verifyToken, walletPinController.getWalletPinById);
router.post('/updateWalletPin', verifyToken, walletPinController.updateWalletPin);
router.post('/deleteWalletPin', verifyToken, walletPinController.deleteWalletPin);

// Check if all controllers are defined
const controllers = {
    documentController,
    authorizationController,
    memberController,
    aepscomissionController,
    aepswalletController,
    balanceController,
    bankController,
    bankSettingController,
    companyController,
    contactusController,
    districtController,
    dmrsController,
    employeeController,
    epfoController,
    epfoledgerController,
    exceptionController,
    fundrequestController,
    galleryController,
    gstledgerController,
    gstregistrationController,
    idMasterController,
    idRequestController,
    itrController,
    itrledgerController,
    loginHistoryController,
    mainWalletLedgerController,
    messageSettingController,
    newsEventController,
    orderController,
    panLedgerController,
    panTokenController,
    payoutSurchargeController,
    productController,
    selfBankController,
    serviceController,
    stateController,
    ticketController,
    walletPinController
};

for (const [name, controller] of Object.entries(controllers)) {
    if (!controller) {
        console.error(`Controller ${name} is undefined`);
    }
}

module.exports = router;
