const db=require('../models');
const pd = db.pd;
const dd = db.dd;
const ad = db.ad;       
const upazilla = db.upazilla;
const trainedFarmer = db.trainedFarmer;
const initialTrial = db.initialTrial;
const finalTrial = db.finalTrial;
const irrigation = db.irrigation;
const machinery = db.machinery;
const motivation = db.motivation;
const fieldDay = db.fieldDay;
const agriFair = db.agriFair;
const upoKormokorta = db.upoKormokorta;
const kormokorta = db.kormokorta;
const localOfficeBuiliding = db.localOfficeBuiliding;
const localTraining = db.localTraining;
const foreignTraining = db.foreignTraining;
const feroman = db.feroman;
const farmerPrize = db.farmerPrize;
const kormokortaGallery = db.kormokortaGallery;
const localTrainingGallery = db.localTrainingGallery;
const foreignTrainingGallery = db.foreignTrainingGallery;
const upoKormokortaGallerys = db.upoKormokortaGallery;
const agriFairGallery = db.agriFairGallery;
const fieldDayGallery = db.fieldDayGallery;
const motivationGallery = db.motivationGallery;
const trainedFarmerGallery = db.trainedFarmerGallery;
const initialTrialGallery = db.initialTrialGallery;
const finalTrialGallery = db.finalTrialGallery;
const machineryGallery = db.machineryGallery;
const irrigationGallery = db.irrigationGallery;
const feromanGallery = db.feromanGallery;
const farmerPrizeGallery = db.farmerPrizeGallery;

const multer = require("multer");
const path = require("path");

const jwt= require('jsonwebtoken');
const bcrypt= require('bcryptjs'); 

const { request, response } = require('express');
const express = require('express');

//multer setup for feroman image
var storageferoman = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/feromanGallery');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
  });  
var uploadferoman = multer({
    storage: storageferoman,
 }).single("feroman");
 exports.uploadferoman=uploadferoman;
 //multer setup for farmerPrize image
var storagefarmerPrize = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/farmerPrizeGallery');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
  });  
var uploadfarmerPrize = multer({
    storage: storagefarmerPrize,
 }).single("farmerPrize");
 exports.uploadfarmerPrize=uploadfarmerPrize;
//multer setup for kormokorta image
var storagekormokorta = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/kormokortaGallery');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
  });  
var uploadkormokorta = multer({
    storage: storagekormokorta,
 }).single("kormokorta");
 exports.uploadkormokorta=uploadkormokorta;
 
 //multer setup for agriFair image
var storageagriFair= multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/agriFairGallery');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
  });  
var uploadagriFair = multer({
    storage: storageagriFair,
 }).single("agriFair");
 exports.uploadagriFair=uploadagriFair;

 //multer setup for fieldDay image
var storagefieldDay = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/fieldDayGallery');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
  });  
var uploadfieldDay = multer({
    storage: storagefieldDay,
 }).single("fieldDay");
 exports.uploadfieldDay=uploadfieldDay;

 //multer setup for foreignTraining image
var storageforeignTraining = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/foreignTrainingGallery');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
  });  
var uploadforeignTraining = multer({
    storage: storageforeignTraining,
 }).single("foreignTraining");
 exports.uploadforeignTraining=uploadforeignTraining;

 //multer setup for localTraining image
var storagelocalTraining = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/localTrainingGallery');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
  });  
var uploadlocalTraining = multer({
    storage: storagelocalTraining,
 }).single("localTraining");
 exports.uploadlocalTraining=uploadlocalTraining;

 //multer setup for motivation image
var storagemotivation = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/motivationGallery');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
  });  
var uploadmotivation = multer({
    storage: storagemotivation,
 }).single("motivation");
 exports.uploadmotivation=uploadmotivation;

 //multer setup for upoKormokorta image
var storageupoKormokorta = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/upoKormokortaGallery');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
  });  
var uploadupoKormokorta = multer({
    storage: storageupoKormokorta,
 }).single("kormokorta");
 exports.uploadupoKormokorta=uploadupoKormokorta;

// Multer setup for FarmerTraining
var storageFarmerTraining = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/farmerTrainingGallery');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
  });  
var uploadFarmerTraining = multer({
    storage: storageFarmerTraining,
}).single("farmerTraining");
exports.uploadFarmerTraining=uploadFarmerTraining;

// Multer setup for primaryPresentation
var storagePrimaryPresentation = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/primaryPresentationGallery');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
  });  
var uploadPrimaryPresentation = multer({
    storage: storagePrimaryPresentation,
 }).single("primaryPresentation");
 exports.uploadPrimaryPresentation=uploadPrimaryPresentation;


// Multer setup for FinalPresentation
var storageFinalPresentation = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/finalPresentationGallery');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
  });  
var uploadFinalPresentation = multer({
    storage: storageFinalPresentation,
}).single("FinalPresentation");
exports.uploadFinalPresentation=uploadFinalPresentation;

// Multer setup for agriTools
var storageAgriTools = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/agriToolsGallery');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
  });  
var uploadAgriTools = multer({
    storage: storageAgriTools,
}).single("AgriTools");
exports.uploadAgriTools=uploadAgriTools;


// Multer setup for irrigation
var storageIrrigation = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/irrigationGallery');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
  });  
var uploadIrrigation = multer({
    storage: storageIrrigation,
}).single("Irrigation");
exports.uploadIrrigation=uploadIrrigation;

module.exports.pdlogin=async(req,res)=>{
    res.render('pd/login', { title: 'গোপালগঞ্জ,খুলনা,বাগেরহাট,সাতক্ষীরা এবং পিরোজপুর কৃষি উন্নয়ন প্রকল্প এ স্বাগতম',msg:'' });
    res.send("log");
};

module.exports.pdloginpost=async(req,res)=>{
    try {
        const uname = req.body.uname;
        const password = req.body.password;
        pd.findAll({ where: {uname: uname} })
        .then(data => {
            if(data.length > 0){
                bcrypt.compare(password,data[0].password,function(err, result) {
                    if(result== true){
                        req.session.type = "pd";
                        req.session.user_id = data[0].id;
                        const id=req.session.user_id;
                        // res.locals.type = req.session.type;
                        // res.locals.user_id = req.session.user_id;
                        console.log("session=", req.session.type,res.locals);
                        // const token=jwt.sign({id},process.env.JWT_SECRET,token{
                        //     expiresIn:process.env.JWT_EXPIRES_IN
                        // });
                        // console.log("the token is :"+)
                        res.redirect('/pd/dashboard');
                    }
                    else{
                        return res.status(200).render('pd/login', { title: 'গোপালগঞ্জ,খুলনা,বাগেরহাট,সাতক্ষীরা এবং পিরোজপুর কৃষি উন্নয়ন প্রকল্প এ স্বাগতম',msg:'Please provide a username and password' });
                    }
                });
            }else{
                return res.status(200).render('pd/login', { title: 'গোপালগঞ্জ,খুলনা,বাগেরহাট,সাতক্ষীরা এবং পিরোজপুর কৃষি উন্নয়ন প্রকল্প এ স্বাগতম',msg:'Please provide a username and password' });
            }
        })
        .catch(err => {
              res.status(500).send({
                message:
                  err.message || "Some error occurred while retrieving tutorials."
              });
            });
        // upazilla.findAll({ where: {uname: uname} })
        // .then(data => {
        //     if(data.length > 0){
        //         bcrypt.compareSync(password , upazilla.password, function(err, result) {
        //             if(result== true){
        //                 res.redirect('/upazilla/dashboard');
        //             }
        //             else{
        //                 res.redirect('/upazilla/dashboard');
        //             }
        //         });
        //     }else{
        //         return res.status(200).render('upazilla/login', { title: 'Horticulture Wing Central Management Software',msg:'Please provide a username and password' });
        //     }
        // })
        // .catch(err => {
        //   res.status(500).send({
        //     message:
        //       err.message || "Some error occurred while retrieving tutorials."
        //   });
        // });

        
    }
    catch(error){
        console.log(error);
    } 
};

module.exports.pdDashboard = async(req,res) => {
    console.log("pddashboard",res.locals.type);
    res.render('pd/dashboard', { title: 'গোপালগঞ্জ,খুলনা,বাগেরহাট,সাতক্ষীরা এবং পিরোজপুর কৃষি উন্নয়ন প্রকল্প এ স্বাগতম',msg:'Welcome' });
};
//logIn controller end

//signUp controller
module.exports.pdsignup=async(req,res)=>{
    res.render('pd/signup', { title: 'গোপালগঞ্জ,খুলনা,বাগেরহাট,সাতক্ষীরা এবং পিরোজপুর কৃষি উন্নয়ন প্রকল্প এ স্বাগতম',msg:'' });
    res.send("log");
};
module.exports.pdsignuppost=async(req,res)=>{
    try {
        const{uname,password,confirmPassword}=req.body;

        const data = await pd.findAll({ where: {uname: uname} })
        if(data.length > 0){
            res.render('pd/signup',{title: 'গোপালগঞ্জ,খুলনা,বাগেরহাট,সাতক্ষীরা এবং পিরোজপুর কৃষি উন্নয়ন প্রকল্প এ স্বাগতম',msg:'ERROR: The pd is already enrolled!'})
        }
        else if(password !== confirmPassword){
            return res.render('pd/signup',{title: 'গোপালগঞ্জ,খুলনা,বাগেরহাট,সাতক্ষীরা এবং পিরোজপুর কৃষি উন্নয়ন প্রকল্প এ স্বাগতম',msg:'ERROR: Passwords do not match!'})
        }
        else{
            const hashedPassword = await bcrypt.hash(password, 10);
            console.log(hashedPassword);
            try{
                const createpd = await pd.create({
                    uname: uname,
                    password:hashedPassword,
                    pd_id:1
                    })
                res.render('pd/signup',{title: 'গোপালগঞ্জ,খুলনা,বাগেরহাট,সাতক্ষীরা এবং পিরোজপুর কৃষি উন্নয়ন প্রকল্প এ স্বাগতম',msg:'pd Registered Successfully!'})
            }
            catch (err) {
                console.log(err);
            }
            
        }
    }
    catch(error){
        console.log(error);
    } 
};
//signUp controller end

//trainedFarmer controller -
module.exports.trainedFarmer=async(req,res)=>{
    try{
        var districts=await dd.findAll();
        res.render('pd/trainedFarmer/trainedFarmer', { title: 'প্রশিক্ষণপ্রাপ্ত কৃষকের তথ্য',success:'',district:districts });
    }
    catch(err){
        console.log("outside",err);
    }
     
    //  records:result

};
module.exports.trainedFarmerFilter=async(req,res)=>{
    await trainedFarmer.findAll({ 
        where: {year: req.body.year,upazilla_id: req.body.upazilla}
    })
    .then(data => {
        console.log("data",data,req.body.year,req.body.upazilla);
        res.render('pd/trainedFarmer/trainedFarmerTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        res.render('errorpage',err);    })

};
module.exports.trainedFarmerDistrictFilter=async(req,res)=>{
    try{
        // var dds=await dd.findAll({where: {id: req.body.district}});
        var upazillass=await upazilla.findAll({where: {dd_id: req.body.district}});
        console.log("inside");
        res.send(upazillass)
    }
    catch(err){
        console.log("outside",err);
    }
     

};
module.exports.trainedFarmerEdit=async(req,res)=>{
        await trainedFarmer.findByPk(req.params.id)
        .then(data => {
            console.log("inside",data);
            res.render('pd/trainedFarmer/trainedFarmerEdit', { title: 'প্রশিক্ষণপ্রাপ্ত কৃষকের তথ্য ফর্ম',success:'',records: data });
        })
        .catch(err => {
            console.log("outside",err);
        })

    //  records:result

};
module.exports.trainedFarmerEditPost=async(req,res)=>{
    var pdComment= req.body.pdComment;
    console.log("req.params.id",req.params.id);
    await trainedFarmer.update({
        pdComment:pdComment
    },{
        where: {id: req.params.id}
    })
    
        
        .then(data => {
            res.redirect('/pd/trainedFarmer');
        }).catch(err => {
            res.render('errorpage',err);
        });
};
module.exports.trainedFarmerGallery=async(req,res)=>{
    try{
        var districts = await dd.findAll();
        const data = await trainedFarmerGallery.findAll();
        res.render('pd/trainedFarmer/trainedFarmerGallery', { title: 'কৃষক প্রশিক্ষন গ্যালারী',success:'', records: data, district:districts });
    }
    catch (e) {
        console.log(e)
    }
};
module.exports.trainedFarmerGalleryPost=async(req,res)=>{
    const path = req.file && req.file.path;
    if(path){
        var imagePath = "/farmerTrainingGallery/" + req.file.filename;
        await trainedFarmerGallery.create({
            image: imagePath,
            dd_id: req.body.district,
            upazilla_id: req.body.upazilla
        })
        .then(data => {
            res.redirect('/pd/trainedFarmerGallery');
        }).catch(err => {
            console.log("file not uploaded successfully",err);
        });
    }
    else{
        console.log("file not uploaded successfully");
    }
};
//trainedFarmer controller end

//initialTrial controller -------------------------------------------------------------------------------------------------------------------
module.exports.initialTrial=async(req,res)=>{
    try{
        var districts=await dd.findAll();
        console.log("inside");
        res.render('pd/initialTrial/initialTrial', { title: 'প্রদর্শনীর প্রাথমিক প্রতিবেদন',success:'',district:districts });
    }
    catch(err){
        console.log("outside",err);
    }
     
    //  records:result

};
module.exports.initialTrialFilter=async(req,res)=>{
    await initialTrial.findAll({
        where: {year: req.body.year,upazilla_id: req.body.upazilla}
    })
    .then(data => {
        res.render('pd/initialTrial/initialTrialTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        console.log("error",err);
    })

};
module.exports.initialTrialDistrictFilter=async(req,res)=>{
    try{
        var upazillass=await upazilla.findAll({where: {dd_id: req.body.district}});
        console.log("inside");
        res.send(upazillass)
    }
    catch(err){
        console.log("error",err);
    }
     

};
module.exports.initialTrialEdit=async(req,res)=>{
    await initialTrial.findByPk(req.params.id)
    .then(data => {
        console.log("inside initialTrialEdit",data);
        res.render('pd/initialTrial/initialTrialEdit', { title: 'প্রদর্শনীর প্রাথমিক প্রতিবেদন ফর্ম',success:'',records: data });
    })
    .catch(err => {
        console.log("outside",err);
    })

//  records:result

};
module.exports.initialTrialEditPost=async(req,res)=>{
var pdComment= req.body.pdComment;
console.log("req.params.id",req.params.id);
await initialTrial.update({
    pdComment:pdComment
},{
    where: {id: req.params.id}
})

    
    .then(data => {
        res.redirect('/pd/initialTrial');
    }).catch(err => {
        res.render('errorpage',err);
    });
};
module.exports.initialTrialGallery=async(req,res)=>{
    try{
        var districts = await dd.findAll();
        const data = await initialTrialGallery.findAll();
        res.render('pd/initialTrial/initialTrailGallery', { title: 'প্রদর্শনীর প্রাথমিক প্রতিবেদন গ্যালারী',success:'', records: data, district:districts });
    }
    catch (e) {
        console.log(e)
    }
};
module.exports.initialTrialGalleryPost=async(req,res)=>{
    const path = req.file && req.file.path;
    if(path){
        var imagePath = "/primaryPresentationGallery/" + req.file.filename;
        await initialTrialGallery.create({
            image: imagePath,
            dd_id: req.body.district,
            upazilla_id: req.body.upazilla
        })
        .then(data => {
            res.redirect('/pd/initialTrialGallery');
        }).catch(err => {
            console.log("file not uploaded successfully",err);
        });
    }
    else{
        console.log("file not uploaded successfully");
    };
};

//initialTrial controller end

//finalTrial controller ----------------------------------------------------------------------------------------------------------------------------
module.exports.finalTrial=async(req,res)=>{
    try{
        var districts=await dd.findAll();
        console.log("inside");
        res.render('pd/finalTrial/finalTrial', { title: 'প্রদর্শনীর চূড়ান্ত প্রতিবেদন',success:'',district:districts });
    }
    catch(err){
        console.log("outside",err);
    }
    //  records:result

};
module.exports.finalTrialFilter=async(req,res)=>{
    await finalTrial.findAll({
        where: {year: req.body.year,upazilla_id: req.body.upazilla}
    })
    .then(data => {
        res.render('pd/finalTrial/finalTrialTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        res.render('errorpage',err);
    })

};
module.exports.finalTrialDistrictFilter=async(req,res)=>{
    try{
        var upazillass=await upazilla.findAll({where: {dd_id: req.body.district}});
        console.log("inside");
        res.send(upazillass)
    }
    catch(err){
        console.log("outside",err);
    }
     

};
module.exports.finalTrialEdit=async(req,res)=>{
    await finalTrial.findByPk(req.params.id)
    .then(data => {
        console.log("inside",data);
        res.render('pd/finalTrial/finalTrialEdit', { title: 'প্রদর্শনীর চূড়ান্ত প্রতিবেদন ফর্ম',success:'',records: data });
    })
    .catch(err => {
        res.render('errorpage',err);
    })

//  records:result

};
module.exports.finalTrialEditPost=async(req,res)=>{
var pdComment= req.body.pdComment;
console.log("req.params.id",req.params.id);
await finalTrial.update({
    pdComment:pdComment
},{
    where: {id: req.params.id}
})

    
    .then(data => {
        res.redirect('/pd/finalTrial');
    }).catch(err => {
        res.render('errorpage',err);
    });
};
module.exports.finalTrialGallery=async(req,res)=>{
    try{
        var districts = await dd.findAll();
        const data = await finalTrialGallery.findAll();
        res.render('pd/finalTrial/finalTrialGallery', { title: 'প্রদর্শনীর চূড়ান্ত প্রতিবেদন গ্গ্যালারী',success:'', records: data, district:districts });
    }
    catch (e) {
        console.log(e)
    }
};
module.exports.finalTrialGalleryPost=async(req,res)=>{
    const path = req.file && req.file.path;
    if(path){
        var imagePath = "/finalPresentationGallery/" + req.file.filename;
        await finalTrialGallery.create({
            image: imagePath,
            dd_id: req.body.district,
            upazilla_id: req.body.upazilla
        })
        .then(data => {
            res.redirect('/pd/finalTrialGallery');
        }).catch(err => {
            console.log("file not uploaded successfully",err);
        });
    }
    else{
        console.log("file not uploaded successfully");
    };
};
//finalTrial controller end

//agriFair controller
module.exports.agriFair=async(req,res)=>{
    try{
        var districts=await dd.findAll();
        console.log("inside");
        res.render('pd/agriFair/agriFair', { title: 'কৃষি মেলা তথ্য',success:'',district:districts });
    }
    catch(err){
        console.log("outside",err);
    }
     
    //  records:result

};
module.exports.agriFairFilter=async(req,res)=>{
    await agriFair.findAll({ 
        where: {year: req.body.year,upazilla_id: req.body.upazilla}
    })
    .then(data => {
        res.render('pd/agriFair/agriFairTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        res.render('errorpage',err);    })

};
module.exports.agriFairDistrictFilter=async(req,res)=>{
    try{
        // var dds=await dd.findAll({where: {id: req.body.district}});
        var upazillass=await upazilla.findAll({where: {dd_id: req.body.district}});
        console.log("inside");
        res.send(upazillass)
    }
    catch(err){
        console.log("outside",err);
    }
     

};
module.exports.agriFairEdit=async(req,res)=>{
    await agriFair.findByPk(req.params.id)
    .then(data => {
        console.log("inside",data);
        res.render('pd/agriFair/agriFairEdit', { title: 'কৃষি মেলা তথ্য ফর্ম',success:'',records: data });
    })
    .catch(err => {
        console.log("outside",err);
    })

//  records:result

};
module.exports.agriFairEditPost=async(req,res)=>{
var pdComment= req.body.pdComment;
console.log("req.params.id",req.params.id);
await agriFair.update({
    pdComment:pdComment
},{
    where: {id: req.params.id}
})

    
    .then(data => {
        res.redirect('/pd/agriFair');
    }).catch(err => {
        res.render('errorpage',err);
    });
};
module.exports.agriFairGallery=async(req,res)=>{
    try{
        var districts = await dd.findAll();
        const data = await agriFairGallery.findAll();
        res.render('pd/agriFair/agriFairGallery', { title: 'কৃষক প্রশিক্ষন গ্যালারী',success:'', records: data, district:districts });
    }
    catch (e) {
        console.log(e)
    }
};
module.exports.agriFairGalleryPost=async(req,res)=>{
    const path = req.file && req.file.path;
    if(path){
        var imagePath = "/agriFairGallery/" + req.file.filename;
        await agriFairGallery.create({
                image: imagePath,
                dd_id: req.body.district,
                upazilla_id: req.body.upazilla
        })
        .then(data => {
            res.redirect('/pd/agriFairGallery');
        }).catch(err => {
            console.log("file not uploaded successfully",err);
        });
    }
    else{
        console.log("file not uploaded successfully");
    }
};
//agriFair controller end

//irrigation controller -------------------------------------------------------------------------------------------------------------------------------------------
module.exports.irrigation=async(req,res)=>{
    try{
        var districts=await dd.findAll();
        console.log("inside");
        res.render('pd/irrigation/irrigation', { title: 'সেচ অবকাঠামো নির্মাণ তথ্য',success:'',district:districts });
    }
    catch(err){
        console.log("outside",err);
    }
     
    //  records:result

};
module.exports.irrigationFilter=async(req,res)=>{
    await irrigation.findAll({ 
        where: {year: req.body.year,upazilla_id: req.body.upazilla}
    })
    .then(data => {
        res.render('pd/irrigation/irrigationTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        res.render('errorpage',err);    })

};
module.exports.irrigationDistrictFilter=async(req,res)=>{
    try{
        // var dds=await dd.findAll({where: {id: req.body.district}});
        var upazillass=await upazilla.findAll({where: {dd_id: req.body.district}});
        console.log("inside");
        res.send(upazillass)
    }
    catch(err){
        console.log("outside",err);
    }
     

};
module.exports.irrigationEdit=async(req,res)=>{
    await irrigation.findByPk(req.params.id)
    .then(data => {
        console.log("inside",data);
        res.render('pd/irrigation/irrigationEdit', { title: 'সেচ অবকাঠামো নির্মাণ তথ্য ফর্ম',success:'',records: data });
    })
    .catch(err => {
        console.log("outside",err);
    })

//  records:result

};
module.exports.irrigationEditPost=async(req,res)=>{
var pdComment= req.body.pdComment;
console.log("req.params.id",req.params.id);
await irrigation.update({
    pdComment:pdComment
},{
    where: {id: req.params.id}
})

    
    .then(data => {
        res.redirect('/pd/irrigation');
    }).catch(err => {
        res.render('errorpage',err);
    });
};
module.exports.irrigationGallery=async(req,res)=>{
    try{
        var districts = await dd.findAll();
        const data = await irrigationGallery.findAll();
        res.render('pd/irrigation/irrigationGallery', { title: 'সেচ অবকাঠামো নির্মাণ তথ্য গ্যালারী',success:'', records: data, district:districts });
    }
    catch (e) {
        console.log(e)
    }
};
module.exports.irrigationGalleryPost=async(req,res)=>{
    const path = req.file && req.file.path;
    if(path){
        var imagePath = "/irrigationGallery/" + req.file.filename;
        await irrigationGallery.create({
            image: imagePath,
            dd_id: req.body.district,
            upazilla_id: req.body.upazilla
        })
        .then(data => {
            res.redirect('/pd/irrigationGallery');
        }).catch(err => {
            console.log("file not uploaded successfully",err);
        });
    }
    else{
        console.log("file not uploaded successfully");
    };
};
//irrigation controller end

//machinery controller --------------------------------------------------------------------------------------------------------------
module.exports.machinery=async(req,res)=>{
    try{
        var districts=await dd.findAll();
        console.log("inside");
        res.render('pd/machinery/machinery', { title: 'কৃষি যন্ত্রপাতি বিতরণ প্রতিবেদন তথ্য',success:'',district:districts });
    }
    catch(err){
        console.log("outside",err);
    }
     
    //  records:result

};
module.exports.machineryFilter=async(req,res)=>{
    await machinery.findAll({ 
        where: {year: req.body.year,upazilla_id: req.body.upazilla}
    })
    .then(data => {
        res.render('pd/machinery/machineryTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        res.render('errorpage',err);
    })

};
module.exports.machineryDistrictFilter=async(req,res)=>{
    try{
        // var dds=await dd.findAll({where: {id: req.body.district}});
        var upazillass=await upazilla.findAll({where: {dd_id: req.body.district}});
        console.log("inside");
        res.send(upazillass)
    }
    catch(err){
        console.log("outside",err);
    }
     

};
module.exports.machineryEdit=async(req,res)=>{
    await machinery.findByPk(req.params.id)
    .then(data => {
        console.log("inside",data);
        res.render('pd/machinery/machineryEdit', { title: 'কৃষি যন্ত্রপাতি বিতরণ প্রতিবেদন তথ্য ফর্ম',success:'',records: data });
    })
    .catch(err => {
        console.log("outside",err);
    })

//  records:result

};
module.exports.machineryEditPost=async(req,res)=>{
var pdComment= req.body.pdComment;
console.log("req.params.id",req.params.id);
await machinery.update({
    pdComment:pdComment
},{
    where: {id: req.params.id}
})

    
    .then(data => {
        res.redirect('/pd/machinery');
    }).catch(err => {
        res.render('errorpage',err);
    });
};
module.exports.machineryGallery=async(req,res)=>{
    try{
        var districts = await dd.findAll();
        const data = await machineryGallery.findAll();
        res.render('pd/machinery/machineryGallery', { title: 'কৃষি যন্ত্রপাতি বিতরণ প্রতিবেদন তথ্য গ্যালারী',success:'', records: data, district:districts });
    }
    catch (e) {
        console.log(e)
    }
};
module.exports.machineryGalleryPost=async(req,res)=>{
    const path = req.file && req.file.path;
    if(path){
        var imagePath = "/agriToolsGallery/" + req.file.filename;
        await machineryGallery.create({
            image: imagePath,
            dd_id: req.body.district,
            upazilla_id: req.body.upazilla
        })
        .then(data => {
            res.redirect('/pd/machineryGallery');
        }).catch(err => {
            console.log("file not uploaded successfully",err);
        });
    }
    else{
        console.log("file not uploaded successfully");
    };
};
//machinery controller end

//motivation controller
module.exports.motivation=async(req,res)=>{
    try{
        var districts=await dd.findAll();
        console.log("inside");
        res.render('pd/motivation/motivation', { title: 'উদ্বুদ্ধকরণ ভ্রমণ তথ্য',success:'',district:districts });
    }
    catch(err){
        console.log("outside",err);
    }
     
    //  records:result

};

module.exports.motivationFilter=async(req,res)=>{
    await motivation.findAll({ 
        where: {year: req.body.year,upazilla_id: req.body.upazilla}
    })
    .then(data => {
        res.render('pd/motivation/motivationTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        res.render('errorpage',err);    })

};

module.exports.motivationDistrictFilter=async(req,res)=>{
    try{
        // var dds=await dd.findAll({where: {id: req.body.district}});
        var upazillass=await upazilla.findAll({where: {dd_id: req.body.district}});
        console.log("inside");
        res.send(upazillass)
    }
    catch(err){
        console.log("outside",err);
    }
     

};
module.exports.motivationEdit=async(req,res)=>{
    await motivation.findByPk(req.params.id)
    .then(data => {
        console.log("inside",data);
        res.render('pd/motivation/motivationEdit', { title: 'প্রশিক্ষণপ্রাপ্ত কৃষকের তথ্য ফর্ম',success:'',records: data });
    })
    .catch(err => {
        console.log("outside",err);
    })

//  records:result

};

module.exports.motivationEditPost=async(req,res)=>{
var pdComment= req.body.pdComment;
console.log("req.params.id",req.params.id);
await motivation.update({
    pdComment:pdComment
},{
    where: {id: req.params.id}
})

    
    .then(data => {
        res.redirect('/pd/motivation');
    }).catch(err => {
        res.render('errorpage',err);
    });
};
module.exports.motivationGallery=async(req,res)=>{
    try{
        var districts = await dd.findAll();
        const data = await motivationGallery.findAll();
        res.render('pd/motivation/motivationGallery', { title: 'কৃষক প্রশিক্ষন গ্যালারী',success:'', records: data, district:districts });
    }
    catch (e) {
        console.log(e)
    }
};
module.exports.motivationGalleryPost=async(req,res)=>{
    const path = req.file && req.file.path;
    if(path){
        var imagePath = "/motivationGallery/" + req.file.filename;
        await motivationGallery.create({
                image: imagePath,
                dd_id: req.body.district,
                upazilla_id: req.body.upazilla
            })
            .then(data => {
                res.redirect('/pd/motivationGallery');
            }).catch(err => {
                console.log("file not uploaded successfully",err);
            });
    }
    else{
        console.log("file not uploaded successfully");
    }
};
//motivation controller end

//fieldDay controller
module.exports.fieldDay=async(req,res)=>{
    try{
        var districts=await dd.findAll();
        console.log("inside");
        res.render('pd/fieldDay/fieldDay', { title: 'মাঠ দিবস তথ্য',success:'',district:districts });
    }
    catch(err){
        console.log("outside",err);
    }
     
    //  records:result

};
module.exports.fieldDayFilter=async(req,res)=>{
    await fieldDay.findAll({ 
        where: {year: req.body.year,upazilla_id: req.body.upazilla}
    })
    .then(data => {
        res.render('pd/fieldDay/fieldDayTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        res.render('errorpage',err);
        })

};
module.exports.fieldDayDistrictFilter=async(req,res)=>{
    try{
        // var dds=await dd.findAll({where: {id: req.body.district}});
        var upazillass=await upazilla.findAll({where: {dd_id: req.body.district}});
        console.log("inside");
        res.send(upazillass)
    }
    catch(err){
        console.log("outside",err);
    }
     

};
module.exports.fieldDayEdit=async(req,res)=>{
    await fieldDay.findByPk(req.params.id)
    .then(data => {
        console.log("inside",data);
        res.render('pd/fieldDay/fieldDayEdit', { title: 'প্রশিক্ষণপ্রাপ্ত কৃষকের তথ্য ফর্ম',success:'',records: data });
    })
    .catch(err => {
        console.log("outside",err);
    })

//  records:result

};
module.exports.fieldDayEditPost=async(req,res)=>{
var pdComment= req.body.pdComment;
console.log("req.params.id",req.params.id);
await fieldDay.update({
    pdComment:pdComment
},{
    where: {id: req.params.id}
})

    
    .then(data => {
        res.redirect('/pd/fieldDay');
    }).catch(err => {
        res.render('errorpage',err);
    });
};
module.exports.fieldDayGallery=async(req,res)=>{
    try{
        var districts = await dd.findAll();
        const data = await fieldDayGallery.findAll();
        res.render('pd/fieldDay/fieldDayGallery', { title: 'কৃষক প্রশিক্ষন গ্যালারী',success:'', records: data, district:districts });
    }
    catch (e) {
        console.log(e)
    }
};
module.exports.fieldDayGalleryPost=async(req,res)=>{
    const path = req.file && req.file.path;
    if(path){
        var imagePath = "/fieldDayGallery/" + req.file.filename;
        await fieldDayGallery.create({
                image: imagePath,
                dd_id: req.body.district,
                upazilla_id: req.body.upazilla
            })
            .then(data => {
                res.redirect('/pd/fieldDayGallery');
            }).catch(err => {
                console.log("file not uploaded successfully",err);
            });
        }
        else{
            console.log("file not uploaded successfully");
        }
};
//fieldDay controller end

//foreignTraining controller
module.exports.foreignTraining=async(req,res)=>{
    await foreignTraining.findAll()
    .then(data => {
        console.log("inside");
        res.render('pd/foreignTraining/foreignTraining', { title: 'বৈদেশিক শিক্ষাসফর',success:'', records: data });
    })
    .catch(err => {
        console.log("outside",err);

    })
     
    //  records:result

};
module.exports.foreignTrainingYear=async(req,res)=>{
    await foreignTraining.findAll({where: {year: req.body.year}})
    .then(data => {
        res.render('pd/foreignTraining/foreignTrainingTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        console.log("outside",err);
    })

};
module.exports.foreignTrainingForm=async(req,res)=>{
    res.render('pd/foreignTraining/foreignTrainingForm', { title: 'বৈদেশিক শিক্ষাসফর',msg:'' ,success:''});

};
module.exports.foreignTrainingFormPost=async(req,res)=>{
    var name= req.body.name;
    var podobi= req.body.podobi;
    var mobile= req.body.mobile;
    var place= req.body.place;
    var date= req.body.date;
    var year =req.body.year;

    await foreignTraining.create({
        name: name,
        podobi:podobi,
        mobile:mobile,
        place:place,
        date:date,
        year:year,
    })
    
        
        .then(data => {
            res.redirect('/pd/foreignTraining');
        }).catch(err => {
            console.log("outside",err);
        });
  
};
module.exports.foreignTrainingEdit=async(req,res)=>{
    await foreignTraining.findByPk(req.params.id)
    .then(data => {
        console.log("inside");
        res.render('pd/foreignTraining/foreignTrainingEdit', { title: 'বৈদেশিক শিক্ষাসফর',msg:'' ,success:'',records: data });
    })
    .catch(err => {
        console.log("outside",err);

    })
};
module.exports.foreignTrainingEditPost=async(req,res)=>{
    var name= req.body.name;
    var podobi= req.body.podobi;
    var mobile= req.body.mobile;
    var place= req.body.place;
    var date= req.body.date;

    await foreignTraining.update({
        name: name,
        podobi:podobi,
        mobile:mobile,
        place:place,
        date:date,
    },{
        where: {id: req.params.id}
    })
    
        
        .then(data => {
            res.redirect('/pd/foreignTraining');
        }).catch(err => {
            console.log("outside",err);
        });
};
module.exports.foreignTrainingDelete=async(req,res)=>{
    var foreignTrainingDelete = await foreignTraining.findByPk(req.params.id);
    try {
        foreignTrainingDelete.destroy();
        res.redirect("/pd/foreignTraining");
    }
    catch{
        console.log(err);
    }
};
module.exports.foreignTrainingGallery=async(req,res)=>{
    await foreignTrainingGallery.findAll()
    .then(data => {
        console.log("inside");
        res.render('pd/foreignTraining/foreignTrainingGallery', { title: 'বৈদেশিক শিক্ষাসফর গ্যালারী',success:'', records: data });
    })
    .catch(err => {
        console.log("outside",err);

    })
     
    //  records:result

};
module.exports.foreignTrainingGalleryPost=async(req,res)=>{
    const path = req.file && req.file.path;
    if(path){
        var imagePath = "/foreignTrainingGallery/" + req.file.filename;
        await foreignTrainingGallery.create({
                image: imagePath,
            })
            .then(data => {
            res.redirect('/pd/foreignTrainingGallery');
            }).catch(err => {
            console.log("file not uploaded successfully");
            });
        }
        else{
        
            console.log("file not uploaded successfully");
        };
    
  
};
//foreignTraining controller end

//localTraining controller
module.exports.localTraining=async(req,res)=>{
    await localTraining.findAll()
    .then(data => {
        console.log("inside");
        res.render('pd/localTraining/localTraining', { title: 'আঞ্চলিক কর্মশালা তথ্য',success:'', records: data });
    })
    .catch(err => {
        console.log("outside",err);

    })
     
    //  records:result

};
module.exports.localTrainingYear=async(req,res)=>{
    await localTraining.findAll({where: {year: req.body.year}})
    .then(data => {
        res.render('pd/localTraining/localTrainingTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        console.log("outside",err);
    })

};
module.exports.localTrainingForm=async(req,res)=>{
    res.render('pd/localTraining/localTrainingForm', { title: 'আঞ্চলিক কর্মশালা',msg:'' ,success:''});

};
module.exports.localTrainingFormPost=async(req,res)=>{
    var name= req.body.name;
    var podobi= req.body.podobi;
    var mobile= req.body.mobile;
    var venue= req.body.venue;
    var date= req.body.date;
    var year =req.body.year;

    await localTraining.create({
        name: name,
        podobi:podobi,
        mobile:mobile,
        venue:venue,
        date:date,
        year:year,
    })
    
        
        .then(data => {
            res.redirect('/pd/localTraining');
        }).catch(err => {
            console.log("outside",err);
        });
  
};
module.exports.localTrainingEdit=async(req,res)=>{
    await localTraining.findByPk(req.params.id)
    .then(data => {
        console.log("inside");
        res.render('pd/localTraining/localTrainingEdit', { title: 'আঞ্চলিক কর্মশালা',msg:'' ,success:'',records: data });
    })
    .catch(err => {
        console.log("outside",err);

    })
};
module.exports.localTrainingEditPost=async(req,res)=>{
    var name= req.body.name;
    var podobi= req.body.podobi;
    var mobile= req.body.mobile;
    var venue= req.body.venue;
    var date= req.body.date;

    await localTraining.update({
        name: name,
        podobi:podobi,
        mobile:mobile,
        venue:venue,
        date:date,
    },{
        where: {id: req.params.id}
    })
    
        
        .then(data => {
            res.redirect('/pd/localTraining');
        }).catch(err => {
            console.log("outside",err);
        });
};
module.exports.localTrainingDelete=async(req,res)=>{
    var localTrainingDelete = await localTraining.findByPk(req.params.id);
    try {
        localTrainingDelete.destroy();
        res.redirect("/pd/localTraining");
    }
    catch{
        console.log("outside",err);
    }
};
module.exports.localTrainingGallery=async(req,res)=>{
    await localTrainingGallery.findAll()
    .then(data => {
        console.log("inside");
        res.render('pd/localTraining/localTrainingGallery', { title: 'আঞ্চলিক কর্মশালা গ্যালারী',success:'', records: data });
    })
    .catch(err => {
        console.log("outside",err);

    })
     
    //  records:result

};
module.exports.localTrainingGalleryPost=async(req,res)=>{
    const path = req.file && req.file.path;
    if(path){
        var imagePath = "/localTrainingGallery/" + req.file.filename;
        await localTrainingGallery.create({
                image: imagePath,
            })
            .then(data => {
            res.redirect('/pd/localTrainingGallery');
            }).catch(err => {
            console.log("file not uploaded successfully");
            });
        }
        else{
        
            console.log("file not uploaded successfully");
        };
    
  
};
//localTraining controller end

//localOfficeBuiliding controller
module.exports.localOfficeBuiliding=async(req,res)=>{
    await localOfficeBuiliding.findAll()
    .then(data => {
        console.log("inside");
        res.render('pd/localOfficeBuiliding/localOfficeBuiliding', { title: 'আঞ্চলিক অফিস ভবন নির্মাণ',success:'', records: data });
    })
    .catch(err => {
        console.log("outside",err);

    })

};
module.exports.localOfficeBuilidingForm=async(req,res)=>{
    res.render('pd/localOfficeBuiliding/localOfficeBuilidingForm', { title: 'আঞ্চলিক অফিস ভবন নির্মাণ',msg:'' ,success:''});

};
module.exports.localOfficeBuilidingFormPost=async(req,res)=>{
    var area= req.body.area;
    var expense= req.body.expense;
    var time= req.body.time;
    var company= req.body.company;
    var progress= req.body.progress;

    await localOfficeBuiliding.create({
        area: area,
        expense:expense,
        time:time,
        company:company,
        progress:progress,
    })
    
        
        .then(data => {
            res.redirect('/pd/localOfficeBuiliding');
        }).catch(err => {
            console.log("outside",err);
        });
  
};
module.exports.localOfficeBuilidingEdit=async(req,res)=>{
    await localOfficeBuiliding.findByPk(req.params.id)
    .then(data => {
        console.log("inside");
        res.render('pd/localOfficeBuiliding/localOfficeBuilidingEdit', { title: 'আঞ্চলিক অফিস ভবন নির্মাণ',msg:'' ,success:'',records: data });
    })
    .catch(err => {
        console.log("outside",err);

    })
};
module.exports.localOfficeBuilidingEditPost=async(req,res)=>{
    var area= req.body.area;
    var expense= req.body.expense;
    var time= req.body.time;
    var company= req.body.company;
    var progress= req.body.progress;

    await localOfficeBuiliding.update({
        area: area,
        expense:expense,
        time:time,
        company:company,
        progress:progress,
    },{
        where: {id: req.params.id}
    })
    
        
        .then(data => {
            res.redirect('/pd/localOfficeBuiliding');
        }).catch(err => {
            console.log("outside",err);
        });
};
module.exports.localOfficeBuilidingDelete=async(req,res)=>{
    var localOfficeBuilidingDelete = await localOfficeBuiliding.findByPk(req.params.id);
    try {
        localOfficeBuilidingDelete.destroy();
        res.redirect("/pd/localOfficeBuiliding");
    }
    catch{
        console.log("outside",err);
    }
};
//localOfficeBuiliding controller end

//kormokorta controller
module.exports.kormokorta=async(req,res)=>{
    await kormokorta.findAll()
    .then(data => {
        console.log("inside");
        res.render('pd/kormokorta/kormokorta', { title: 'কর্মকর্তা প্রশিক্ষণ তথ্য',success:'', records: data });
    })
    .catch(err => {
        console.log("outside",err);

    })
     
    //  records:result

};
module.exports.kormokortaYear=async(req,res)=>{
    await kormokorta.findAll({where: {year: req.body.year}})
    .then(data => {
        res.render('pd/kormokorta/kormokortaTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        console.log("outside",err);
    })

};
module.exports.kormokortaForm=async(req,res)=>{
    res.render('pd/kormokorta/kormokortaForm', { title: 'কর্মকর্তা প্রশিক্ষণ',msg:'' ,success:''});

};
module.exports.kormokortaFormPost=async(req,res)=>{
    var name= req.body.name;
    var place= req.body.place;
    var mobile= req.body.mobile;
    var topic= req.body.topic;
    var date= req.body.date;
    var year =req.body.year;

    await kormokorta.create({
        name: name,
        place:place,
        mobile:mobile,
        topic:topic,
        date:date,
        year:year,
    })
    
        
        .then(data => {
            res.redirect('/pd/kormokorta');
        }).catch(err => {
            console.log("outside",err);
        });
  
};
module.exports.kormokortaEdit=async(req,res)=>{
    await kormokorta.findByPk(req.params.id)
    .then(data => {
        console.log("inside");
        res.render('pd/kormokorta/kormokortaEdit', { title: 'কর্মকর্তা প্রশিক্ষণ',msg:'' ,success:'',records: data });
    })
    .catch(err => {
        console.log("outside",err);

    })
};
module.exports.kormokortaEditPost=async(req,res)=>{
    var name= req.body.name;
    var place= req.body.place;
    var mobile= req.body.mobile;
    var topic= req.body.topic;
    var date= req.body.date;
    var year =req.body.year;

    await kormokorta.update({
        name: name,
        place:place,
        mobile:mobile,
        topic:topic,
        date:date,
        year:year,
    },{
        where: {id: req.params.id}
    })
    
        
        .then(data => {
            res.redirect('/pd/kormokorta');
        }).catch(err => {
            console.log("outside",err);
        });
};
module.exports.kormokortaDelete=async(req,res)=>{
    var kormokortaDelete = await kormokorta.findByPk(req.params.id);
    try {
        kormokortaDelete.destroy();
        res.redirect("/pd/kormokorta");
    }
    catch{
        console.log("outside",err);
    }
};
module.exports.kormokortaGallery=async(req,res)=>{
    await kormokortaGallery.findAll()
    .then(data => {
        console.log("inside");
        res.render('pd/kormokorta/kormokortaGallery', { title: 'কর্মকর্তা প্রশিক্ষণ গ্যালারী',success:'', records: data });
    })
    .catch(err => {
        console.log("outside",err);

    })
     
    //  records:result

};
module.exports.kormokortaGalleryPost=async(req,res)=>{
    const path = req.file && req.file.path;
    console.log("path",path)
    if(path){
        var imagePath = "/kormokortaGallery/" + req.file.filename;
        await kormokortaGallery.create({
                image: imagePath,
            })
            .then(data => {
            res.redirect('/pd/kormokortaGallery');
            }).catch(err => {
            console.log("file not uploaded successfully");
            });
        }
        else{
        
            console.log("file not uploaded successfully");
        };
    
  
};
//kormokorta controller end

//upoKormokorta controller
module.exports.upoKormokorta=async(req,res)=>{
    await upoKormokorta.findAll()
    .then(data => {
        console.log("inside");
        res.render('pd/upoKormokorta/upoKormokorta', { title: 'উপ সহকারী কৃষি কর্মকর্তা প্রশিক্ষণ তথ্য',success:'', records: data });
    })
    .catch(err => {
        console.log("outside",err);

    })
     
    //  records:result

};
module.exports.upoKormokortaYear=async(req,res)=>{
    await upoKormokorta.findAll({where: {year: req.body.year}})
    .then(data => {
        res.render('pd/upoKormokorta/upoKormokortaTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        console.log("outside",err);
    })

};
module.exports.upoKormokortaForm=async(req,res)=>{
    res.render('pd/upoKormokorta/upoKormokortaForm', { title: 'উপ সহকারী কৃষি কর্মকর্তা প্রশিক্ষণ',msg:'' ,success:''});

};
module.exports.upoKormokortaFormPost=async(req,res)=>{
    var district= req.body.district;
    var name= req.body.name;
    var place= req.body.place;
    var mobile= req.body.mobile;
    var topic= req.body.topic;
    var date= req.body.date;
    var year =req.body.year;

    await upoKormokorta.create({
        district:district,
        name: name,
        place:place,
        mobile:mobile,
        topic:topic,
        date:date,
        year:year,
    })
    
        
        .then(data => {
            res.redirect('/pd/upoKormokorta');
        }).catch(err => {
            console.log("outside",err);
        });
  
};
module.exports.upoKormokortaEdit=async(req,res)=>{
    await upoKormokorta.findByPk(req.params.id)
    .then(data => {
        console.log("inside");
        res.render('pd/upoKormokorta/upoKormokortaEdit', { title: 'উপ সহকারী কৃষি কর্মকর্তা প্রশিক্ষণ',msg:'' ,success:'',records: data });
    })
    .catch(err => {
        console.log("outside",err);

    })
};
module.exports.upoKormokortaEditPost=async(req,res)=>{
    var district= req.body.district;
    var name= req.body.name;
    var place= req.body.place;
    var mobile= req.body.mobile;
    var topic= req.body.topic;
    var date= req.body.date;
    var year =req.body.year;

    await upoKormokorta.update({
        district:district,
        name: name,
        place:place,
        mobile:mobile,
        topic:topic,
        date:date,
        year:year,
    },{
        where: {id: req.params.id}
    })
    
        
        .then(data => {
            res.redirect('/pd/upoKormokorta');
        }).catch(err => {
            console.log("outside",err);
        });
};
module.exports.upoKormokortaDelete=async(req,res)=>{
    var upoKormokortaDelete = await upoKormokorta.findByPk(req.params.id);
    try {
        upoKormokortaDelete.destroy();
        res.redirect("/pd/upoKormokorta");
    }
    catch{
        console.log("outside",err);
    }
};
module.exports.upoKormokortaGallery=async(req,res)=>{
    await upoKormokortaGallerys.findAll()
    .then(data => {
        console.log("inside");
        res.render('pd/upoKormokorta/upoKormokortaGallery', { title: 'উপ সহকারী কৃষি কর্মকর্তা গ্যালারী',success:'', records: data });
    })
    .catch(err => {
        console.log("outside",err);

    })
     
    //  records:result

}; 
module.exports.upoKormokortaGalleryPost=async(req,res)=>{
    const path = req.file && req.file.path;
    if(path){
        var imagePath = "/upoKormokortaGallery/" + req.file.filename;
        await upoKormokortaGallerys.create({
                image: imagePath,
            })
            .then(data => {
            res.redirect('/pd/upoKormokortaGallery');
            }).catch(err => {
            console.log("file not uploaded successfully");
            });
        }
        else{
        
            console.log("file not uploaded successfully");
        };
    
  
};
//upoKormokorta controller end

//feroman controller
//feroman controller
module.exports.feroman=async(req,res)=>{
    try{
        var districts=await dd.findAll();
        console.log("inside");
        res.render('pd/feroman/feroman', { title: 'ফেরোমন ফাঁদ বিতরণ তথ্য',success:'',district:districts });
    }
    catch(err){
        console.log("outside",err);
    }
     
    //  records:result

};
module.exports.feromanFilter=async(req,res)=>{
    await feroman.findAll({ 
        where: {year: req.body.year,upazilla_id: req.body.upazilla}
    })
    .then(data => {
        res.render('pd/feroman/feromanTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        res.render('errorpage',err);    })

};
module.exports.feromanDistrictFilter=async(req,res)=>{
    try{
        // var dds=await dd.findAll({where: {id: req.body.district}});
        var upazillass=await upazilla.findAll({where: {dd_id: req.body.district}});
        console.log("inside");
        res.send(upazillass)
    }
    catch(err){
        console.log("outside",err);
    }
     

};
module.exports.feromanEdit=async(req,res)=>{
    await feroman.findByPk(req.params.id)
    .then(data => {
        console.log("inside",data);
        res.render('pd/feroman/feromanEdit', { title: 'ফেরোমন ফাঁদ বিতরণ তথ্য ফর্ম',success:'',records: data });
    })
    .catch(err => {
        console.log("outside",err);
    })

//  records:result

};
module.exports.feromanEditPost=async(req,res)=>{
var pdComment= req.body.pdComment;
console.log("req.params.id",req.params.id);
await feroman.update({
    pdComment:pdComment
},{
    where: {id: req.params.id}
})

    
    .then(data => {
        res.redirect('/pd/feroman');
    }).catch(err => {
        res.render('errorpage',err);
    });
};
module.exports.feromanGallery=async(req,res)=>{
    try{
        var districts = await dd.findAll();
        const data = await feromanGallery.findAll();
        res.render('pd/feroman/feromanGallery', { title: 'ফেরোমন ফাঁদ বিতরণ গ্যালারী',success:'', records: data, district:districts });
    }
    catch (e) {
        console.log(e)
    }
};
module.exports.feromanGalleryPost=async(req,res)=>{
    const path = req.file && req.file.path;
    if(path){
        var imagePath = "/feromanGallery/" + req.file.filename;
        await feromanGallery.create({
                image: imagePath,
                dd_id: req.body.district,
                upazilla_id: req.body.upazilla
        })
        .then(data => {
            res.redirect('/pd/feromanGallery');
        }).catch(err => {
            console.log("file not uploaded successfully",err);
        });
    }
    else{
        console.log("file not uploaded successfully");
    }
};
//feroman controller end  
//farmerPrize controller
module.exports.farmerPrize=async(req,res)=>{
    try{
        var districts=await dd.findAll();
        console.log("inside");
        res.render('pd/farmerPrize/farmerPrize', { title: 'কৃষক পুরষ্কার তথ্য',success:'',district:districts });
    }
    catch(err){
        console.log("outside",err);
    }
     
    //  records:result

};
module.exports.farmerPrizeFilter=async(req,res)=>{
    await farmerPrize.findAll({ 
        where: {year: req.body.year,upazilla_id: req.body.upazilla}
    })
    .then(data => {
        res.render('pd/farmerPrize/farmerPrizeTable', {records: data} ,function(err, html) {
            res.send(html);
        });
    })
    .catch(err => {
        res.render('errorpage',err);    })

};
module.exports.farmerPrizeDistrictFilter=async(req,res)=>{
    try{
        // var dds=await dd.findAll({where: {id: req.body.district}});
        var upazillass=await upazilla.findAll({where: {dd_id: req.body.district}});
        console.log("inside");
        res.send(upazillass)
    }
    catch(err){
        console.log("outside",err);
    }
     

};
module.exports.farmerPrizeEdit=async(req,res)=>{
    await farmerPrize.findByPk(req.params.id)
    .then(data => {
        console.log("inside",data);
        res.render('pd/farmerPrize/farmerPrizeEdit', { title: 'কৃষক পুরষ্কার ফর্ম',success:'',records: data });
    })
    .catch(err => {
        console.log("outside",err);
    })

//  records:result

};
module.exports.farmerPrizeEditPost=async(req,res)=>{
var pdComment= req.body.pdComment;
console.log("req.params.id",req.params.id);
await farmerPrize.update({
    pdComment:pdComment
},{
    where: {id: req.params.id}
})

    
    .then(data => {
        res.redirect('/pd/farmerPrize');
    }).catch(err => {
        res.render('errorpage',err);
    });
};
module.exports.farmerPrizeGallery=async(req,res)=>{
    try{
        var districts = await dd.findAll();
        const data = await farmerPrizeGallery.findAll();
        res.render('pd/farmerPrize/farmerPrizeGallery', { title: 'কৃষক পুরষ্কার গ্যালারী',success:'', records: data, district:districts });
    }
    catch (e) {
        console.log(e)
    }
};
module.exports.farmerPrizeGalleryPost=async(req,res)=>{
    const path = req.file && req.file.path;
    if(path){
        var imagePath = "/farmerPrizeGallery/" + req.file.filename;
        await farmerPrizeGallery.create({
                image: imagePath,
                dd_id: req.body.district,
                upazilla_id: req.body.upazilla
        })
        .then(data => {
            res.redirect('/pd/farmerPrizeGallery');
        }).catch(err => {
            console.log("file not uploaded successfully",err);
        });
    }
    else{
        console.log("file not uploaded successfully");
    }
};
//farmerPrize controller end