const express = require("express");
const router = express.Router();
// const { Router } = require("express");
const app=express();

const {pdsignup,pdsignuppost,pdlogin,pdloginpost,pdDashboard,trainedFarmerEditPost,trainedFarmerEdit,
    trainedFarmer,trainedFarmerFilter,initialTrial,initialTrialFilter,irrigationEdit,irrigationEditPost,machineryEdit,machineryEditPost,motivationEdit,motivationEditPost,fieldDayEdit,fieldDayEditPost
,initialTrialEdit,initialTrialEditPost,finalTrialEdit,finalTrialEditPost,agriFairEdit,agriFairEditPost,
    finalTrial,finalTrialFilter,trainedFarmerDistrictFilter,finalTrialDistrictFilter,initialTrialDistrictFilter,
    agriFair,agriFairFilter,irrigation,irrigationFilter,machinery,machineryFilter,motivation,motivationFilter,fieldDay,fieldDayFilter,
    agriFairDistrictFilter,irrigationDistrictFilter,machineryDistrictFilter,motivationDistrictFilter,fieldDayDistrictFilter,
foreignTraining,foreignTrainingYear,foreignTrainingForm,foreignTrainingFormPost,foreignTrainingEdit,foreignTrainingEditPost,foreignTrainingDelete,
localTraining,localTrainingYear,localTrainingForm,localTrainingFormPost,localTrainingEdit,localTrainingEditPost,localTrainingDelete,
localOfficeBuiliding,localOfficeBuilidingForm,localOfficeBuilidingFormPost,localOfficeBuilidingEdit,localOfficeBuilidingEditPost,localOfficeBuilidingDelete,
kormokorta,kormokortaYear,kormokortaForm,kormokortaFormPost,kormokortaEdit,kormokortaEditPost,kormokortaDelete,
upoKormokorta,upoKormokortaYear,upoKormokortaForm,upoKormokortaFormPost,upoKormokortaEdit,upoKormokortaEditPost,upoKormokortaDelete,
} = require('../controllers/pd.controller');
router.get('/login',pdlogin);
router.post('/logins',pdloginpost);
router.get('/dashboard',pdDashboard);


router.get('/signup',pdsignup);
router.post('/signups',pdsignuppost);

router.get('/trainedFarmer',trainedFarmer);
router.post('/trainedFarmerFilter',trainedFarmerFilter);
router.post('/trainedFarmerDistrictFilter',trainedFarmerDistrictFilter);
router.get('/trainedFarmerEdit/:id',trainedFarmerEdit);
router.post('/trainedFarmerEditPost/:id',trainedFarmerEditPost);


router.get('/initialTrial',initialTrial);
router.post('/initialTrialFilter',initialTrialFilter);
router.post('/initialTrialDistrictFilter',initialTrialDistrictFilter);
router.get('/initialTrialEdit/:id',initialTrialEdit);
router.post('/initialTrialEditPost/:id',initialTrialEditPost);

router.get('/finalTrial',finalTrial);
router.post('/finalTrialFilter',finalTrialFilter);
router.post('/finalTrialDistrictFilter',finalTrialDistrictFilter);
router.get('/finalTrialEdit/:id',finalTrialEdit);
router.post('/finalTrialEditPost/:id',finalTrialEditPost);

router.get('/agriFair',agriFair);
router.post('/agriFairFilter',agriFairFilter);
router.post('/agriFairDistrictFilter',agriFairDistrictFilter);
router.get('/agriFairEdit/:id',agriFairEdit);
router.post('/agriFairEditPost/:id',agriFairEditPost);

router.get('/irrigation',irrigation);
router.post('/irrigationFilter',irrigationFilter);
router.post('/irrigationDistrictFilter',irrigationDistrictFilter);
router.get('/irrigationEdit/:id',irrigationEdit);
router.post('/irrigationEditPost/:id',irrigationEditPost);

router.get('/machinery',machinery);
router.post('/machineryFilter',machineryFilter);
router.post('/machineryDistrictFilter',machineryDistrictFilter);
router.get('/machineryEdit/:id',machineryEdit);
router.post('/machineryEditPost/:id',machineryEditPost);


router.get('/motivation',motivation);
router.post('/motivationFilter',motivationFilter);
router.post('/motivationDistrictFilter',motivationDistrictFilter);
router.get('/motivationEdit/:id',motivationEdit);
router.post('/motivationEditPost/:id',motivationEditPost);

router.get('/fieldDay',fieldDay);
router.post('/fieldDayFilter',fieldDayFilter);
router.post('/fieldDayDistrictFilter',fieldDayDistrictFilter);
router.get('/fieldDayEdit/:id',fieldDayEdit);
router.post('/fieldDayEditPost/:id',fieldDayEditPost);

router.get('/foreignTraining',foreignTraining);
router.post('/foreignTrainingYear',foreignTrainingYear);
router.get('/foreignTrainingForm',foreignTrainingForm);
router.post('/foreignTrainingFormPost',foreignTrainingFormPost);
router.get('/foreignTrainingEdit/:id',foreignTrainingEdit);
router.post('/foreignTrainingEditPost/:id',foreignTrainingEditPost);
router.get('/foreignTrainingDelete/:id',foreignTrainingDelete);

router.get('/localTraining',localTraining);
router.post('/localTrainingYear',localTrainingYear);
router.get('/localTrainingForm',localTrainingForm);
router.post('/localTrainingFormPost',localTrainingFormPost);
router.get('/localTrainingEdit/:id',localTrainingEdit);
router.post('/localTrainingEditPost/:id',localTrainingEditPost);
router.get('/localTrainingDelete/:id',localTrainingDelete);

router.get('/localOfficeBuiliding',localOfficeBuiliding);
router.get('/localOfficeBuilidingForm',localOfficeBuilidingForm);
router.post('/localOfficeBuilidingFormPost',localOfficeBuilidingFormPost);
router.get('/localOfficeBuilidingEdit/:id',localOfficeBuilidingEdit);
router.post('/localOfficeBuilidingEditPost/:id',localOfficeBuilidingEditPost);
router.get('/localOfficeBuilidingDelete/:id',localOfficeBuilidingDelete);

router.get('/kormokorta',kormokorta);
router.post('/kormokortaYear',kormokortaYear);
router.get('/kormokortaForm',kormokortaForm);
router.post('/kormokortaFormPost',kormokortaFormPost);
router.get('/kormokortaEdit/:id',kormokortaEdit);
router.post('/kormokortaEditPost/:id',kormokortaEditPost);
router.get('/kormokortaDelete/:id',kormokortaDelete);

router.get('/upoKormokorta',upoKormokorta);
router.post('/upoKormokortaYear',upoKormokortaYear);
router.get('/upoKormokortaForm',upoKormokortaForm);
router.post('/upoKormokortaFormPost',upoKormokortaFormPost);
router.get('/upoKormokortaEdit/:id',upoKormokortaEdit);
router.post('/upoKormokortaEditPost/:id',upoKormokortaEditPost);
router.get('/upoKormokortaDelete/:id',upoKormokortaDelete);



module.exports = router;