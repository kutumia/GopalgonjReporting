const express = require("express");
const router = express.Router();
// const { Router } = require("express");
const app=express();

const {fieldDayYear,agriFair,agriFairYear,agriFairForm,agriFairFormPost,fieldDayForm,fieldDayFormPost,upazillasignup,upazillasignuppost,upazillalogin,upazillaloginpost,upazillaDashboard,
    trainedFarmer,trainedFarmerYear,trainedFarmerForm,trainedFarmerFormPost,initialTrial,initialTrialYear,initialTrialFormPost,
    finalTrial,finalTrialYear,finalTrialForm,finalTrialFormPost,agriFairEdit,agriFairDelete,fieldDayEditPost,machineryEditPost,
    trainedFarmerEdit,trainedFarmerDelete,initialTrialEdit,trainedFarmerFormEditPost,finalTrialEdit,agriFairEditPost,
    fieldDay,fieldDayEdit,fieldDayDelete,irrigation,irrigationYear,irrigationForm,irrigationFormPost,irrigationEdit,irrigationDelete,
machinery,machineryYear,machineryForm,machineryFormPost,machineryEdit,machineryDelete,irrigationEditPost,motivationEditPost,
motivation,motivationYear,motivationForm,motivationFormPost,motivationEdit,motivationDelete,
    trainedFarmerGallery,
    trainedFarmerGalleryPost,
    initialTrialGallery,
    initialTrialGalleryPost,
    finalTrailGallery,
    finalTrailGalleryPost,
    agriFairGallery,
    agriFairGalleryPost,
    fieldDayGallery,
    fieldDayGalleryPost,
    irrigationGallery,
    irrigationGalleryPost,
    machineryGallery,
    machineryGalleryPost,
    motivationGallery,
    motivationGalleryPost
} = require('../controllers/upazilla.controller');

router.get('/login',upazillalogin);
router.post('/logins',upazillaloginpost);
router.get('/dashboard',upazillaDashboard);

router.get('/signup',upazillasignup);
router.post('/signups',upazillasignuppost);

router.get('/trainedFarmer',trainedFarmer);
router.post('/trainedFarmerYear',trainedFarmerYear);
router.get('/trainedFarmerForm',trainedFarmerForm);
router.post('/trainedFarmerFormPost',trainedFarmerFormPost);
router.get('/trainedFarmerEdit/:id',trainedFarmerEdit);
router.post('/trainedFarmerFormEditPost/:id',trainedFarmerFormEditPost);
router.get('/trainedFarmerDelete/:id',trainedFarmerDelete);
router.get('/trainedFarmerGallery', trainedFarmerGallery);
router.post('/trainedFarmerGalleryPost', uploadFarmerTraining, trainedFarmerGalleryPost)

router.get('/initialTrial',initialTrial);
router.post('/initialTrialYear',initialTrialYear);
router.post('/initialTrialFormPost/:id',initialTrialFormPost);
router.get('/initialTrialEdit/:id',initialTrialEdit);
router.get('/initialTrialGallery', initialTrialGallery);
router.post('/initialTrialGalleryPost', uploadPrimaryPresentation, initialTrialGalleryPost)

router.get('/finalTrial',finalTrial);
router.post('/finalTrialYear',finalTrialYear);
router.get('/finalTrialForm',finalTrialForm);
router.post('/finalTrialFormPost/:id',finalTrialFormPost);
router.get('/finalTrialEdit/:id',finalTrialEdit);
router.get('/finalTrailGallery', finalTrailGallery);
router.post('/finalTrailGalleryPost', uploadFinalPresentation, finalTrailGalleryPost)

router.get('/agriFair',agriFair);
router.post('/agriFairYear',agriFairYear);
router.get('/agriFairForm',agriFairForm);
router.post('/agriFairFormPost',agriFairFormPost);
router.get('/agriFairEdit/:id',agriFairEdit);
router.post('/agriFairEditPost/:id',agriFairEditPost);
router.get('/agriFairDelete/:id',agriFairDelete);
router.get('/agriFairGallery',agriFairGallery);
router.post('/agriFairGalleryPost',uploadagriFair,agriFairGalleryPost);

router.get('/fieldDay',fieldDay);
router.post('/fieldDayYear',fieldDayYear);
router.get('/fieldDayForm',fieldDayForm);
router.post('/fieldDayFormPost',fieldDayFormPost);
router.get('/fieldDayEdit/:id',fieldDayEdit);
router.post('/fieldDayEditPost/:id',fieldDayEditPost);
router.get('/fieldDayDelete/:id',fieldDayDelete);
router.get('/fieldDayGallery',fieldDayGallery);
router.post('/fieldDayGalleryPost',uploadfieldDay,fieldDayGalleryPost);

router.get('/irrigation',irrigation);
router.post('/irrigationYear',irrigationYear);
router.get('/irrigationForm',irrigationForm);
router.post('/irrigationFormPost',irrigationFormPost);
router.get('/irrigationEdit/:id',irrigationEdit);
router.post('/irrigationEditPost/:id',irrigationEditPost);
router.get('/irrigationDelete/:id',irrigationDelete);
router.get('/irrigationGallery', irrigationGallery);
router.post('/irrigationGalleryPost',uploadIrrigation,irrigationGalleryPost);

router.get('/machinery',machinery);
router.post('/machineryYear',machineryYear);
router.get('/machineryForm',machineryForm);
router.post('/machineryFormPost',machineryFormPost);
router.get('/machineryEdit/:id',machineryEdit);
router.post('/machineryEditPost/:id',machineryEditPost);
router.get('/machineryDelete/:id',machineryDelete);
router.get('/machineryGallery', machineryGallery);
router.post('/machineryGalleryPost',uploadAgriTools,machineryGalleryPost);

router.get('/motivation',motivation);
router.post('/motivationYear',motivationYear);
router.get('/motivationForm',motivationForm);
router.post('/motivationFormPost',motivationFormPost);
router.get('/motivationEdit/:id',motivationEdit);
router.post('/motivationEditPost/:id',motivationEditPost);
router.get('/motivationDelete/:id',motivationDelete);
router.get('/motivationGallery',motivationGallery);
router.post('/motivationGalleryPost',uploadmotivation,motivationGalleryPost);

module.exports = router;