const express = require('express');
const verifyToken = require('../utils/verifyToken.js');
const upload = require('../utils/uploadDocument.js');

const documentController = require('../controllers/documentController.js');
const authorizationController = require('../controllers/authorizationController.js');
const memberController = require('../controllers/memberController.js');
const aepscomissionController = require('../controllers/aepscomissionController.js');
const aepswalletController = require('../controllers/aepswalletController.js');
const balanceController = require('../controllers/balanceController.js');
//const balanceLedgerController = require('../controllers/balanceLedgerController.js');
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

