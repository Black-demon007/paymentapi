const express = require('express');
const verifyToken = require('../utils/verifyToken.js');
const upload = require('../utils/uploadDocument.js');

const {
  uploadDocument
} = require('../controllers/documentController.js');

const {
 userSignup,
 userLogin,
 checkAdmin
} = require('../controllers/authorizationController.js');

const {
  createMember,
  getMembers,
  getMemberById,
  updateMember,
  deleteMember,
  getMemberuniqueId
} = require('../controllers/memberController.js');

const {
  createAepscomission,
  getAepscomission,
  getAepscomissionById,
  updateAepscomission,
  deleteAepscomission
} = require('../controllers/aepscomissionController.js');

const {
  createAepswallet,
  getAepswallet,
  getAepswalletById,
  updateAepswallet,
  deleteAepswallet
} = require('../controllers/aepswalletController.js');

const {
  createBalance,
  getBalance,
  getBalanceById,
  updateBalance,
  deleteBalance
} = require('../controllers/balanceController.js');

//const {
 // createBalanceledger,
 // getBalanceledger,
 // getBalanceledgerById,
 // updateBalanceledger,
//  deleteBalanceledger
//} = require('../controllers/balanceLedgerController.js');

const {
  createBank,
  getBanks,
  getBankById,
  updateBank,
  deleteBank
} = require('../controllers/bankController.js');

const {
  createBankSetting,
  getBankSettings,
  getBankSettingById,
  updateBankSetting,
  deleteBankSetting
} = require('../controllers/bankSettingController.js');

const {
  createCompany,
  getCompanies,
  getCompanyById,
  updateCompany,
  deleteCompany
} = require('../controllers/companyController.js');

const {
  createContactUs,
  getContactUs,
  getContactUsById,
  updateContactUs,
  deleteContactUs
} = require('../controllers/contactusController.js');

const {
  createDistrict,
  getDistricts,
  getDistrictById,
  updateDistrict,
  deleteDistrict
} = require('../controllers/districtController.js');

const {
  createDmrs,
  getDmrs,
  getDmrsById,
  updateDmrs,
  deleteDmrs
} = require('../controllers/dmrsController.js');

const {
  createEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee
} = require('../controllers/employeeController.js');

const {
  createEpfo,
  getEpfos,
  getEpfoById,
  updateEpfo,
  deleteEpfo
} = require('../controllers/epfoController.js');

const {
  createEpfoledger,
  getEpfoledgers,
  getEpfoledgerById,
  updateEpfoledger,
  deleteEpfoledger
} = require('../controllers/epfoledgerController.js');

const {
  createException,
  getExceptions,
  getExceptionById,
  updateException,
  deleteException
} = require('../controllers/exceptionController.js');

const {
  createFundRequest,
  getFundRequests,
  getFundRequestById,
  updateFundRequest,
  deleteFundRequest
} = require('../controllers/fundrequestController.js');

const {
  createGallery,
  getGalleries,
  getGalleryById,
  updateGallery,
  deleteGallery
} = require('../controllers/galleryController.js');

const {
  createGstledger,
  getGstledgers,
  getGstledgerById,
  updateGstledger,
  deleteGstledger
} = require('../controllers/gstledgerController.js');

const {
  createGstregistration,
  getGstregistrations,
  getGstregistrationById,
  updateGstregistration,
  deleteGstRegistration
} = require('../controllers/gstRegistrationController.js');

const {
  createIdmaster,
  getIdmasters,
  getIdmasterById,
  updateIdmaster,
  deleteIdmaster
} = require('../controllers/idMasterController.js');

const {
  createIdRequest,
  getIdRequests,
  getIdRequestsById,
  updateIdRequest,
  deleteIdRequest
} = require('../controllers/idRequestController.js');

const {
  createItr,
  getItrs,
  getItrById,
  updateItr,
  deleteItr
} = require('../controllers/itrController.js');

const {
  createItrledger,
  getItrledgers,
  getItrledgerById,
  updateItrledger,
  deleteItrledger
} = require('../controllers/itrLedgerController.js');

const {
  createLoginhistory,
  getLoginhistories,
  getLoginhistoryById,
  updateLoginhistory,
  deleteLoginhistory
} = require('../controllers/loginHistoryController.js');

const {
  createMainwalletledger,
  getMainwalletledger,
  getMainwalletledgerById,
  updateMainwalletledger,
  deleteMainwalletledger
} = require('../controllers/mainWalletLedgerController.js');

const {
  createMessagesetting,
  getMessagesettings,
  getMessagesettingById,
  updateMessagesetting,
  deleteMessagesetting
} = require('../controllers/messageSettingController.js');

const {
  createNewsevent,
  getNewsevents,
  getNewseventById,
  updateNewsevent,
  deleteNewsevent
} = require('../controllers/newsEventController.js');

const {
  createOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder
} = require('../controllers/orderController.js');

const {
  createPanledger,
  getPanledgers,
  getPanledgerById,
  updatePanledger,
  deletePanledger
} = require('../controllers/panLedgerController.js');

const {
  createPantoken,
  getPantokens,
  getPantokenById,
  updatePantoken,
  deletePantoken
} = require('../controllers/panTokenController.js');

const {
  createPayoutsurcharge,
  getPayoutsurcharges,
  getPayoutsurchargeById,
  updatePayoutsurcharge,
  deletePayoutsurcharge
} = require('../controllers/payoutSurchargeController.js');

const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct
} = require('../controllers/productController.js');

const {
  createSelfbank,
  getSelfbanks,
  getSelfbankById,
  updateSelfbank,
  deleteSelfbank
} = require('../controllers/selfBankController.js');

const {
  createService,
  getServices,
  getServiceById,
  updateService,
  deleteService
} = require('../controllers/serviceController.js');

const {
  createState,
  getStates,
  getStateById,
  updateState,
  deleteState
} = require('../controllers/stateController.js');

const {
  createTicket,
  getTickets,
  getTicketById,
  updateTicket,
  deleteTicket
} = require('../controllers/ticketController.js');

const {
  createWalletpin,
  getWalletpins,
  getWalletpinById,
  updateWalletpin,
  deleteWalletpin
} = require('../controllers/walletPinController.js');


const router = express.Router();


router.post('/uploadDocument', upload.single('Document'), uploadDocument);

router.post('/userSignup', userSignup);
router.post('/userLogin', userLogin);
router.post('/checkAdmin', checkAdmin);

router.post('/createMember', verifyToken, createMember);
router.post('/getMembers', verifyToken, getMembers);
router.post('/getMemberById', verifyToken, getMemberById);
router.post('/updateMember', verifyToken, updateMember);
router.post('/deleteMember', verifyToken, deleteMember);
router.post('/getMemberuniqueId', verifyToken, getMemberuniqueId);

router.post('/createAepscomisison', verifyToken, createAepscomission);
router.post('/getAepscomissions', verifyToken, getAepscomission);
router.post('/getAepscomisisonById', verifyToken, getAepscomissionById);
router.post('/updateAepscomisison', verifyToken, updateAepscomission);
router.post('/deleteAepscomission', verifyToken, deleteAepscomission);

router.post('/createAepswallet', verifyToken, createAepswallet);
router.post('/getAepswallet', verifyToken, getAepswallet);
router.post('/getAepswalletById', verifyToken, getAepswalletById);
router.post('/updateAepswallet', verifyToken, updateAepswallet);
router.post('/deleteAepswallet', verifyToken, deleteAepswallet);

router.post('/createBalance', verifyToken, createBalance);
router.post('/getBalance', verifyToken, getBalance);
router.post('/getBalanceById', verifyToken, getBalanceById);
router.post('/updateBalance', verifyToken, updateBalance);
router.post('/deleteBalance', verifyToken, deleteBalance);

//router.post('/createBalanceledger', verifyToken, createBalanceledger);
//router.post('/getBalanceledger', verifyToken, getBalanceledger);
//router.post('/getBalanceledgerById', verifyToken, getBalanceledgerById);
//router.post('/updateBalanceledger', verifyToken, updateBalanceledger);
//router.post('/deleteBalanceledger', verifyToken, deleteBalanceledger);

router.post('/createBank', verifyToken, createBank);
router.post('/getBanks', verifyToken, getBanks);
router.post('/getBankById', verifyToken, getBankById);
router.post('/updateBank', verifyToken, updateBank);
router.post('/deleteBank', verifyToken, deleteBank);

router.post('/createBanksetting', verifyToken, createBankSetting);
router.post('/getBanksettings', verifyToken, getBankSettings);
router.post('/getBanksettingById', verifyToken, getBankSettingById);
router.post('/updateBanksetting', verifyToken, updateBankSetting);
router.post('/deleteBanksetting', verifyToken, deleteBankSetting);

router.post('/createCompany', verifyToken, createCompany);
router.post('/getCompanies', verifyToken, getCompanies);
router.post('/getComapaniesById', verifyToken, getCompanyById);
router.post('/updateCompany', verifyToken, updateCompany);
router.post('/deleteCompany', verifyToken, deleteCompany);

router.post('/createContactus', verifyToken, createContactUs);
router.post('/getContactus', verifyToken, getContactUs);
router.post('/getContactusById', verifyToken, getContactUsById);
router.post('/updateContactus', verifyToken, updateContactUs);
router.post('/deleteContactus', verifyToken, deleteContactUs);

router.post('/createDistrict', verifyToken, createDistrict);
router.post('/getDistricts', verifyToken, getDistricts);
router.post('/getDistrictById', verifyToken, getDistrictById);
router.post('/updateDistrict', verifyToken, updateDistrict);
router.post('/deleteDistrict', verifyToken, deleteDistrict);

router.post('/createDmrs', verifyToken, createDmrs);
router.post('/getDmrs', verifyToken, getDmrs);
router.post('/getDmrsById', verifyToken, getDmrsById);
router.post('/updateDmrs', verifyToken, updateDmrs);
router.post('/deleteDmrs', verifyToken, deleteDmrs);

router.post('/createEmployee', verifyToken, createEmployee);
router.post('/getEmployee', verifyToken, getEmployees);
router.post('/getEmployeeById', verifyToken, getEmployeeById);
router.post('/updateEmployee', verifyToken, updateEmployee);
router.post('/deleteEmployee', verifyToken, deleteEmployee);

router.post('/createEpfo', verifyToken, createEpfo);
router.post('/getEpfo', verifyToken, getEpfos);
router.post('/getEpfoById', verifyToken, getEpfoById);
router.post('/updateEpfo', verifyToken, updateEpfo);
router.post('/deleteEpfo', verifyToken, deleteEpfo);

router.post('/createEpfoledger', verifyToken, createEpfoledger);
router.post('/getEpfoledgers', verifyToken, getEpfoledgers);
router.post('/getEpfoledgerById', verifyToken, getEpfoledgerById);
router.post('/updateEpfoledger', verifyToken, updateEpfoledger);
router.post('/deleteEpfoledger', verifyToken, deleteEpfoledger);

router.post('/createException', verifyToken, createException);
router.post('/getExceptions', verifyToken, getExceptions);
router.post('/getExceptionById', verifyToken, getExceptionById);
router.post('/updateException', verifyToken, updateException);
router.post('/deleteException', verifyToken, deleteException);

router.post('/createFundrequest', verifyToken, createFundRequest);
router.post('/getFundrequest', verifyToken, getFundRequests);
router.post('/getFundrequestById', verifyToken, getFundRequestById);
router.post('/updateFundrequest', verifyToken, updateFundRequest);
router.post('/deleteFundrequest', verifyToken, deleteFundRequest);

router.post('/createGallery', verifyToken, createGallery);
router.post('/getGalleries', verifyToken, getGalleries);
router.post('/getGalleryById', verifyToken, getGalleryById);
router.post('/updateGallery', verifyToken, updateGallery);
router.post('/deleteGallery', verifyToken, deleteGallery);

router.post('/createGstledger', verifyToken, createGstledger);
router.post('/getGstledgers', verifyToken, getGstledgers);
router.post('/getGstledgerById', verifyToken, getGstledgerById);
router.post('/updateGstledger', verifyToken, updateGstledger);
router.post('/deleteGstledger', verifyToken, deleteGstledger);

router.post('/createGstledger', verifyToken, createGstregistration);
router.post('/getGstledgers', verifyToken, getGstregistrations);
router.post('/getGstledgerById', verifyToken, getGstregistrationById);
router.post('/updateGstledger', verifyToken, updateGstregistration);
router.post('/deleteGstledger', verifyToken, deleteGstRegistration);

router.post('/createIdmaster', verifyToken, createIdmaster);
router.post('/getIdmasters', verifyToken, getIdmasters);
router.post('/getIdmasterById', verifyToken, getIdmasterById);
router.post('/updateIdmaster', verifyToken, updateIdmaster);
router.post('/deleteIdmaster', verifyToken, deleteIdmaster);

router.post('/createIdrequest', verifyToken, createIdRequest);
router.post('/getIdrequests', verifyToken, getIdRequests);
router.post('/getIdrequestById', verifyToken, getIdRequestsById);
router.post('/updateIdrequest', verifyToken, updateIdRequest);
router.post('/deleteIdrequest', verifyToken, deleteIdRequest);

router.post('/createItr', verifyToken, createItr);
router.post('/getItrs', verifyToken, getItrs);
router.post('/getItrById', verifyToken, getItrById);
router.post('/updateItr', verifyToken, updateItr);
router.post('/deleteItr', verifyToken, deleteItr);

router.post('/createItrledger', verifyToken, createItrledger);
router.post('/getItrledger', verifyToken, getItrledgers);
router.post('/getItrledgerById', verifyToken, getItrledgerById);
router.post('/updateItrledger', verifyToken, updateItrledger);
router.post('/deleteItrledger', verifyToken, deleteItrledger);

router.post('/createLoginhistory', verifyToken, createLoginhistory);
router.post('/getLoginhistory', verifyToken, getLoginhistories);
router.post('/getLoginhistoryById', verifyToken, getLoginhistoryById);
router.post('/updateLoginhistory', verifyToken, updateLoginhistory);
router.post('/deleteLoginhistory', verifyToken, deleteLoginhistory);

router.post('/createMainwalletledger', verifyToken, createMainwalletledger);
router.post('/getMainwalletledger', verifyToken, getMainwalletledger);
router.post('/getMainwalletledgerById', verifyToken, getMainwalletledgerById);
router.post('/updateMainwalletledger', verifyToken, updateMainwalletledger);
router.post('/deleteMainwalletledger', verifyToken, deleteMainwalletledger);

router.post('/createMessagesetting', verifyToken, createMessagesetting);
router.post('/getMessagesettings', verifyToken, getMessagesettings);
router.post('/getMessagesettingById', verifyToken, getMessagesettingById);
router.post('/updateMessagesetting', verifyToken, updateMessagesetting);
router.post('/deleteMessagesetting', verifyToken, deleteMessagesetting);

router.post('/createNewsevent', verifyToken, createNewsevent);
router.post('/getNewsevent', verifyToken, getNewsevents);
router.post('/getNewseventById', verifyToken, getNewseventById);
router.post('/updateNewsevent', verifyToken, updateNewsevent);
router.post('/deleteNewsevent', verifyToken, deleteNewsevent);

router.post('/createOrder', verifyToken, createOrder);
router.post('/getOrders', verifyToken, getOrders);
router.post('/getOrderById', verifyToken, getOrderById);
router.post('/updateOrder', verifyToken, updateOrder);
router.post('/deleteOrder', verifyToken, deleteOrder);

router.post('/createPanledger', verifyToken, createPanledger);
router.post('/getPanledgers', verifyToken, getPanledgers);
router.post('/getPanledgerById', verifyToken, getPanledgerById);
router.post('/updatePanledger', verifyToken, updatePanledger);
router.post('/deletePanledger', verifyToken, deletePanledger);

router.post('/createPantoken', verifyToken, createPantoken);
router.post('/getPantokens', verifyToken, getPantokens);
router.post('/getPantokenById', verifyToken, getPantokenById);
router.post('/updatePantoken', verifyToken, updatePantoken);
router.post('/deletePantoken', verifyToken, deletePantoken);

router.post('/createPayoutsurcharge', verifyToken, createPayoutsurcharge);
router.post('/getPayoutsurchaarges', verifyToken, getPayoutsurcharges);
router.post('/getPayoutsurchargeById', verifyToken, getPayoutsurchargeById);
router.post('/updatePayoutsurcharge', verifyToken, updatePayoutsurcharge);
router.post('/deletePayoutsurcharge', verifyToken, deletePayoutsurcharge);

router.post('/createProduct', verifyToken, createProduct);
router.post('/getProducts', verifyToken, getProducts);
router.post('/getProductById', verifyToken, getProductById);
router.post('/updateProduct', verifyToken, updateProduct);
router.post('/deleteProduct', verifyToken, deleteProduct);

router.post('/createSelfbank', verifyToken, createSelfbank);
router.post('/getSelfbanks', verifyToken, getSelfbanks);
router.post('/getSelfbankById', verifyToken, getSelfbankById);
router.post('/updateSelfbank', verifyToken, updateSelfbank);
router.post('/deleteSelfbank', verifyToken, deleteSelfbank);

router.post('/createService', verifyToken, createService);
router.post('/getServices', verifyToken, getServices);
router.post('/getServiceById', verifyToken, getServiceById);
router.post('/updateService', verifyToken, updateService);
router.post('/deleteService', verifyToken, deleteService);

router.post('/createState', verifyToken, createState);
router.post('/getStates', verifyToken, getStates);
router.post('/getStateById', verifyToken, getStateById);
router.post('/updateState', verifyToken, updateState);
router.post('/deleteState', verifyToken, deleteState);

router.post('/createTicket', verifyToken, createTicket);
router.post('/getTickets', verifyToken, getTickets);
router.post('/getTicketById', verifyToken, getTicketById);
router.post('/updateTicket', verifyToken, updateTicket);
router.post('/deleteTicket', verifyToken, deleteTicket);

router.post('/createWalletpin', verifyToken, createWalletpin);
router.post('/getWalletpins', verifyToken, getWalletpins);
router.post('/getWalletpinById', verifyToken, getWalletpinById);
router.post('/updateWalletpin', verifyToken, updateWalletpin);
router.post('/deleteWalletpin', verifyToken, deleteWalletpin);

module.exports = router;
