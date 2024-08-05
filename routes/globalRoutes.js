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

// Commented out balance ledger routes removed as they are not used
// const {
//   createBalanceledger,
//   getBalanceledger,
//   getBalanceledgerById,
//   updateBalanceledger,
//   deleteBalanceledger
// } = require('../controllers/balanceLedgerController.js');

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
  deleteGstregistration
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
  getIdRequestById,
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

// Document routes
router.post('/uploadDocument', upload.single('Document'), uploadDocument);

// Authorization routes
router.post('/userSignup', userSignup);
router.post('/userLogin', userLogin);
router.post('/checkAdmin', checkAdmin);

// Member routes
router.post('/createMember', verifyToken, createMember);
router.post('/getMembers', verifyToken, getMembers);
router.post('/getMemberById', verifyToken, getMemberById);
router.post('/updateMember', verifyToken, updateMember);
router.post('/deleteMember', verifyToken, deleteMember);
router.post('/getMemberuniqueId', verifyToken, getMemberuniqueId);

// AEPS Comission routes
router.post('/createAepscomission', verifyToken, createAepscomission);
router.post('/getAepscomissions', verifyToken, getAepscomission);
router.post('/getAepscomissionById', verifyToken, getAepscomissionById);
router.post('/updateAepscomission', verifyToken, updateAepscomission);
router.post('/deleteAepscomission', verifyToken, deleteAepscomission);

// AEPS Wallet routes
router.post('/createAepswallet', verifyToken, createAepswallet);
router.post('/getAepswallet', verifyToken, getAepswallet);
router.post('/getAepswalletById', verifyToken, getAepswalletById);
router.post('/updateAepswallet', verifyToken, updateAepswallet);
router.post('/deleteAepswallet', verifyToken, deleteAepswallet);

// Balance routes
router.post('/createBalance', verifyToken, createBalance);
router.post('/getBalance', verifyToken, getBalance);
router.post('/getBalanceById', verifyToken, getBalanceById);
router.post('/updateBalance', verifyToken, updateBalance);
router.post('/deleteBalance', verifyToken, deleteBalance);

// Bank routes
router.post('/createBank', verifyToken, createBank);
router.post('/getBanks', verifyToken, getBanks);
router.post('/getBankById', verifyToken, getBankById);
router.post('/updateBank', verifyToken, updateBank);
router.post('/deleteBank', verifyToken, deleteBank);

// Bank Setting routes
router.post('/createBankSetting', verifyToken, createBankSetting);
router.post('/getBankSettings', verifyToken, getBankSettings);
router.post('/getBankSettingById', verifyToken, getBankSettingById);
router.post('/updateBankSetting', verifyToken, updateBankSetting);
router.post('/deleteBankSetting', verifyToken, deleteBankSetting);

// Company routes
router.post('/createCompany', verifyToken, createCompany);
router.post('/getCompanies', verifyToken, getCompanies);
router.post('/getCompanyById', verifyToken, getCompanyById);
router.post('/updateCompany', verifyToken, updateCompany);
router.post('/deleteCompany', verifyToken, deleteCompany);

// Contact Us routes
router.post('/createContactUs', verifyToken, createContactUs);
router.post('/getContactUs', verifyToken, getContactUs);
router.post('/getContactUsById', verifyToken, getContactUsById);
router.post('/updateContactUs', verifyToken, updateContactUs);
router.post('/deleteContactUs', verifyToken, deleteContactUs);

// District routes
router.post('/createDistrict', verifyToken, createDistrict);
router.post('/getDistricts', verifyToken, getDistricts);
router.post('/getDistrictById', verifyToken, getDistrictById);
router.post('/updateDistrict', verifyToken, updateDistrict);
router.post('/deleteDistrict', verifyToken, deleteDistrict);

// DMRS routes
router.post('/createDmrs', verifyToken, createDmrs);
router.post('/getDmrs', verifyToken, getDmrs);
router.post('/getDmrsById', verifyToken, getDmrsById);
router.post('/updateDmrs', verifyToken, updateDmrs);
router.post('/deleteDmrs', verifyToken, deleteDmrs);

// Employee routes
router.post('/createEmployee', verifyToken, createEmployee);
router.post('/getEmployees', verifyToken, getEmployees);
router.post('/getEmployeeById', verifyToken, getEmployeeById);
router.post('/updateEmployee', verifyToken, updateEmployee);
router.post('/deleteEmployee', verifyToken, deleteEmployee);

// EPFO routes
router.post('/createEpfo', verifyToken, createEpfo);
router.post('/getEpfos', verifyToken, getEpfos);
router.post('/getEpfoById', verifyToken, getEpfoById);
router.post('/updateEpfo', verifyToken, updateEpfo);
router.post('/deleteEpfo', verifyToken, deleteEpfo);

// EPFO Ledger routes
router.post('/createEpfoledger', verifyToken, createEpfoledger);
router.post('/getEpfoledgers', verifyToken, getEpfoledgers);
router.post('/getEpfoledgerById', verifyToken, getEpfoledgerById);
router.post('/updateEpfoledger', verifyToken, updateEpfoledger);
router.post('/deleteEpfoledger', verifyToken, deleteEpfoledger);

// Exception routes
router.post('/createException', verifyToken, createException);
router.post('/getExceptions', verifyToken, getExceptions);
router.post('/getExceptionById', verifyToken, getExceptionById);
router.post('/updateException', verifyToken, updateException);
router.post('/deleteException', verifyToken, deleteException);

// Fund Request routes
router.post('/createFundRequest', verifyToken, createFundRequest);
router.post('/getFundRequests', verifyToken, getFundRequests);
router.post('/getFundRequestById', verifyToken, getFundRequestById);
router.post('/updateFundRequest', verifyToken, updateFundRequest);
router.post('/deleteFundRequest', verifyToken, deleteFundRequest);

// Gallery routes
router.post('/createGallery', verifyToken, createGallery);
router.post('/getGalleries', verifyToken, getGalleries);
router.post('/getGalleryById', verifyToken, getGalleryById);
router.post('/updateGallery', verifyToken, updateGallery);
router.post('/deleteGallery', verifyToken, deleteGallery);

// GST Ledger routes
router.post('/createGstledger', verifyToken, createGstledger);
router.post('/getGstledgers', verifyToken, getGstledgers);
router.post('/getGstledgerById', verifyToken, getGstledgerById);
router.post('/updateGstledger', verifyToken, updateGstledger);
router.post('/deleteGstledger', verifyToken, deleteGstledger);

// GST Registration routes
router.post('/createGstregistration', verifyToken, createGstregistration);
router.post('/getGstregistrations', verifyToken, getGstregistrations);
router.post('/getGstregistrationById', verifyToken, getGstregistrationById);
router.post('/updateGstregistration', verifyToken, updateGstregistration);
router.post('/deleteGstregistration', verifyToken, deleteGstregistration);

// ID Master routes
router.post('/createIdmaster', verifyToken, createIdmaster);
router.post('/getIdmasters', verifyToken, getIdmasters);
router.post('/getIdmasterById', verifyToken, getIdmasterById);
router.post('/updateIdmaster', verifyToken, updateIdmaster);
router.post('/deleteIdmaster', verifyToken, deleteIdmaster);

// ID Request routes
router.post('/createIdRequest', verifyToken, createIdRequest);
router.post('/getIdRequests', verifyToken, getIdRequests);
router.post('/getIdRequestById', verifyToken, getIdRequestById);
router.post('/updateIdRequest', verifyToken, updateIdRequest);
router.post('/deleteIdRequest', verifyToken, deleteIdRequest);

// ITR routes
router.post('/createItr', verifyToken, createItr);
router.post('/getItrs', verifyToken, getItrs);
router.post('/getItrById', verifyToken, getItrById);
router.post('/updateItr', verifyToken, updateItr);
router.post('/deleteItr', verifyToken, deleteItr);

// ITR Ledger routes
router.post('/createItrledger', verifyToken, createItrledger);
router.post('/getItrledgers', verifyToken, getItrledgers);
router.post('/getItrledgerById', verifyToken, getItrledgerById);
router.post('/updateItrledger', verifyToken, updateItrledger);
router.post('/deleteItrledger', verifyToken, deleteItrledger);

// Login History routes
router.post('/createLoginhistory', verifyToken, createLoginhistory);
router.post('/getLoginhistories', verifyToken, getLoginhistories);
router.post('/getLoginhistoryById', verifyToken, getLoginhistoryById);
router.post('/updateLoginhistory', verifyToken, updateLoginhistory);
router.post('/deleteLoginhistory', verifyToken, deleteLoginhistory);

// Main Wallet Ledger routes
router.post('/createMainwalletledger', verifyToken, createMainwalletledger);
router.post('/getMainwalletledger', verifyToken, getMainwalletledger);
router.post('/getMainwalletledgerById', verifyToken, getMainwalletledgerById);
router.post('/updateMainwalletledger', verifyToken, updateMainwalletledger);
router.post('/deleteMainwalletledger', verifyToken, deleteMainwalletledger);

// Message Setting routes
router.post('/createMessagesetting', verifyToken, createMessagesetting);
router.post('/getMessagesettings', verifyToken, getMessagesettings);
router.post('/getMessagesettingById', verifyToken, getMessagesettingById);
router.post('/updateMessagesetting', verifyToken, updateMessagesetting);
router.post('/deleteMessagesetting', verifyToken, deleteMessagesetting);

// News Event routes
router.post('/createNewsevent', verifyToken, createNewsevent);
router.post('/getNewsevents', verifyToken, getNewsevents);
router.post('/getNewseventById', verifyToken, getNewseventById);
router.post('/updateNewsevent', verifyToken, updateNewsevent);
router.post('/deleteNewsevent', verifyToken, deleteNewsevent);

// Order routes
router.post('/createOrder', verifyToken, createOrder);
router.post('/getOrders', verifyToken, getOrders);
router.post('/getOrderById', verifyToken, getOrderById);
router.post('/updateOrder', verifyToken, updateOrder);
router.post('/deleteOrder', verifyToken, deleteOrder);

// PAN Ledger routes
router.post('/createPanledger', verifyToken, createPanledger);
router.post('/getPanledgers', verifyToken, getPanledgers);
router.post('/getPanledgerById', verifyToken, getPanledgerById);
router.post('/updatePanledger', verifyToken, updatePanledger);
router.post('/deletePanledger', verifyToken, deletePanledger);

// PAN Token routes
router.post('/createPantoken', verifyToken, createPantoken);
router.post('/getPantokens', verifyToken, getPantokens);
router.post('/getPantokenById', verifyToken, getPantokenById);
router.post('/updatePantoken', verifyToken, updatePantoken);
router.post('/deletePantoken', verifyToken, deletePantoken);

// Payout Surcharge routes
router.post('/createPayoutsurcharge', verifyToken, createPayoutsurcharge);
router.post('/getPayoutsurcharges', verifyToken, getPayoutsurcharges);
router.post('/getPayoutsurchargeById', verifyToken, getPayoutsurchargeById);
router.post('/updatePayoutsurcharge', verifyToken, updatePayoutsurcharge);
router.post('/deletePayoutsurcharge', verifyToken, deletePayoutsurcharge);

// Product routes
router.post('/createProduct', verifyToken, createProduct);
router.post('/getProducts', verifyToken, getProducts);
router.post('/getProductById', verifyToken, getProductById);
router.post('/updateProduct', verifyToken, updateProduct);
router.post('/deleteProduct', verifyToken, deleteProduct);

// Self Bank routes
router.post('/createSelfbank', verifyToken, createSelfbank);
router.post('/getSelfbanks', verifyToken, getSelfbanks);
router.post('/getSelfbankById', verifyToken, getSelfbankById);
router.post('/updateSelfbank', verifyToken, updateSelfbank);
router.post('/deleteSelfbank', verifyToken, deleteSelfbank);

// Service routes
router.post('/createService', verifyToken, createService);
router.post('/getServices', verifyToken, getServices);
router.post('/getServiceById', verifyToken, getServiceById);
router.post('/updateService', verifyToken, updateService);
router.post('/deleteService', verifyToken, deleteService);

// State routes
router.post('/createState', verifyToken, createState);
router.post('/getStates', verifyToken, getStates);
router.post('/getStateById', verifyToken, getStateById);
router.post('/updateState', verifyToken, updateState);
router.post('/deleteState', verifyToken, deleteState);

// Ticket routes
router.post('/createTicket', verifyToken, createTicket);
router.post('/getTickets', verifyToken, getTickets);
router.post('/getTicketById', verifyToken, getTicketById);
router.post('/updateTicket', verifyToken, updateTicket);
router.post('/deleteTicket', verifyToken, deleteTicket);

// Wallet Pin routes
router.post('/createWalletpin', verifyToken, createWalletpin);
router.post('/getWalletpins', verifyToken, getWalletpins);
router.post('/getWalletpinById', verifyToken, getWalletpinById);
router.post('/updateWalletpin', verifyToken, updateWalletpin);
router.post('/deleteWalletpin', verifyToken, deleteWalletpin);

module.exports = router;
