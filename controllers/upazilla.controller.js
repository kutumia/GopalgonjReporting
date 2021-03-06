const db = require("../models");
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
const farmerPrize = db.farmerPrize;
const feromans = db.feroman;
const trainedFarmerGallery = db.trainedFarmerGallery;
const initialTrialGallery = db.initialTrialGallery
const finalTrialGallery = db.finalTrialGallery;
const agriFairGallery = db.agriFairGallery;
const fieldDayGallery = db.fieldDayGallery;
const irrigationGallery = db.irrigationGallery;
const machineryGallery = db.machineryGallery;
const motivationGallery = db.motivationGallery;
const feromanGallery = db.feromanGallery;
const farmerPrizeGallery = db.farmerPrizeGallery;

const multer = require("multer");

const fs = require("fs");
const path = require("path");

let pdf = require("html-pdf");
let ejs = require("ejs");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const { request, response } = require("express");
const express = require("express");

// Multer setup for FarmerTraining-------------------
var storageFarmerTraining = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/farmerTrainingGallery");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
var uploadFarmerTraining = multer({
  storage: storageFarmerTraining,
}).single("farmerTraining");
exports.uploadFarmerTraining = uploadFarmerTraining;

// Multer setup for farmerPrize-------------------
var storagefarmerPrize = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/farmerPrizeGallery");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
var uploadfarmerPrize = multer({
  storage: storagefarmerPrize,
}).single("farmerPrize");
exports.uploadfarmerPrize = uploadfarmerPrize;

// Multer setup for feroman-------------------
var storageferoman = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/feromanGallery");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
var uploadferoman = multer({
  storage: storageferoman,
}).single("feroman");
exports.uploadferoman = uploadferoman;

//multer setup for agriFair image-----------------
var storageagriFair = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/agriFairGallery");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
var uploadagriFair = multer({
  storage: storageagriFair,
}).single("agriFair");
exports.uploadagriFair = uploadagriFair;

//multer setup for fieldDay image--------------------
var storagefieldDay = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/fieldDayGallery");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
var uploadfieldDay = multer({
  storage: storagefieldDay,
}).single("fieldDay");
exports.uploadfieldDay = uploadfieldDay;

//multer setup for motivation image---------------
var storagemotivation = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/motivationGallery");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
var uploadmotivation = multer({
  storage: storagemotivation,
}).single("motivation");
exports.uploadmotivation = uploadmotivation;

// Multer setup for primaryPresentation ------------------
var storagePrimaryPresentation = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/primaryPresentationGallery");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
var uploadPrimaryPresentation = multer({
  storage: storagePrimaryPresentation,
}).single("primaryPresentation");
exports.uploadPrimaryPresentation = uploadPrimaryPresentation;

// Multer setup for FinalPresentation ---------------------
var storageFinalPresentation = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/finalPresentationGallery");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
var uploadFinalPresentation = multer({
  storage: storageFinalPresentation,
}).single("FinalPresentation");
exports.uploadFinalPresentation = uploadFinalPresentation;

// Multer setup for agriTools ---------------
var storageAgriTools = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/agriToolsGallery");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
var uploadAgriTools = multer({
  storage: storageAgriTools,
}).single("AgriTools");
exports.uploadAgriTools = uploadAgriTools;

// Multer setup for irrigation --------------------
var storageIrrigation = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/irrigationGallery");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
var uploadIrrigation = multer({
  storage: storageIrrigation,
}).single("Irrigation");
exports.uploadIrrigation = uploadIrrigation;

module.exports.upazillalogin = async (req, res) => {
  res.render("upazilla/login", {
    title:
      "গোপালগঞ্জ,খুলনা,বাগেরহাট,সাতক্ষীরা এবং পিরোজপুর কৃষি উন্নয়ন প্রকল্প এ স্বাগতম",
    msg: "",
  });
  res.send("log");
};
module.exports.upazillaloginpost = async (req, res) => {
  try {
    const uname = req.body.uname;
    const password = req.body.password;
    upazilla
      .findAll({ where: { uname: uname } })
      .then((data) => {
        if (data.length > 0) {
          bcrypt.compare(password, data[0].password, function (err, result) {
            if (result == true) {
              req.session.type = "upazilla";
              req.session.user_id = data[0].id;
              const id = req.session.user_id;
              console.log("session=", req.session.type, res.locals);
              res.redirect("/upazilla/dashboard");
            } else {
              return res.status(200).render("upazilla/login", {
                title:
                  "গোপালগঞ্জ,খুলনা,বাগেরহাট,সাতক্ষীরা এবং পিরোজপুর কৃষি উন্নয়ন প্রকল্প এ স্বাগতম",
                msg: "Please provide a username and password",
              });
            }
          });
        } else {
          return res.status(200).render("upazilla/login", {
            title:
              "গোপালগঞ্জ,খুলনা,বাগেরহাট,সাতক্ষীরা এবং পিরোজপুর কৃষি উন্নয়ন প্রকল্প এ স্বাগতম",
            msg: "Please provide a username and password",
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials.",
        });
      });
  } catch (error) {
    console.log(error);
  }
};
module.exports.upazillaDashboard = async (req, res) => {
  console.log("upazilladashboard", res.locals.type);
  res.render("upazilla/dashboard", {
    title:
      "গোপালগঞ্জ,খুলনা,বাগেরহাট,সাতক্ষীরা এবং পিরোজপুর কৃষি উন্নয়ন প্রকল্প এ স্বাগতম",
    msg: "Welcome",
  });
};
//logIn controller end

//signUp controller
module.exports.upazillasignup = async (req, res) => {
  await dd
    .findAll()
    .then((data) => {
      console.log("inside");
      res.render("upazilla/signup", {
        title:
          "গোপালগঞ্জ,খুলনা,বাগেরহাট,সাতক্ষীরা এবং পিরোজপুর কৃষি উন্নয়ন প্রকল্প এ স্বাগতম",
        msg: "",
        records: data,
      });
    })
    .catch((err) => {
      console.log("outside");
      res.render("upazilla/signup", {
        title:
          "গোপালগঞ্জ,খুলনা,বাগেরহাট,সাতক্ষীরা এবং পিরোজপুর কৃষি উন্নয়ন প্রকল্প এ স্বাগতম",
        msg: "",
        records: err,
      });
    });
};
module.exports.upazillasignuppost = async (req, res) => {
  try {
    const { dds, uname, upazillas, password, confirmPassword } = req.body;
    const ddata = await dd.findAll();
    const data = await upazilla.findAll({ where: { uname: uname } });

    if (data.length > 0) {
      res.render("upazilla/signup", {
        title:
          "গোপালগঞ্জ,খুলনা,বাগেরহাট,সাতক্ষীরা এবং পিরোজপুর কৃষি উন্নয়ন প্রকল্প এ স্বাগতম",
        msg: "ERROR: The upazilla is already enrolled!",
        records: ddata,
      });
    } else if (password !== confirmPassword) {
      res.render("upazilla/signup", {
        title:
          "গোপালগঞ্জ,খুলনা,বাগেরহাট,সাতক্ষীরা এবং পিরোজপুর কৃষি উন্নয়ন প্রকল্প এ স্বাগতম",
        msg: "ERROR: Passwords do not match!",
        records: ddata,
      });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      console.log(hashedPassword);
      try {
        const createupazilla = await upazilla.create({
          uname: uname,
          upazilla: upazillas,
          password: hashedPassword,
          dd_id: dds,
          pd_id: 1,
        });
        res.render("upazilla/signup", {
          title:
            "গোপালগঞ্জ,খুলনা,বাগেরহাট,সাতক্ষীরা এবং পিরোজপুর কৃষি উন্নয়ন প্রকল্প এ স্বাগতম",
          msg: "upazilla Registered Successfully!",
          records: ddata,
        });
      } catch (err) {
        console.log(err);
      }
    }
  } catch (error) {
    console.log(error);
  }
};
//signUp controller end

//trainedFarmer controller
module.exports.trainedFarmer = async (req, res) => {
  await trainedFarmer
    .findAll({
      where: { upazilla_id: req.session.user_id },
    })
    .then((data) => {
      console.log("inside");
      res.render("upazilla/trainedFarmer/trainedFarmer", {
        title: "প্রশিক্ষণপ্রাপ্ত কৃষকের তথ্য",
        success: "",
        records: data,
      });
    })
    .catch((err) => {
      console.log("outside", err);
    });

  //  records:result
};
module.exports.trainedFarmerYear = async (req, res) => {
  await trainedFarmer
    .findAll({
      where: { year: req.body.year, upazilla_id: req.session.user_id },
    })
    .then((data) => {
      res.render(
        "upazilla/trainedFarmer/trainedFarmerTable",
        { records: data },
        function (err, html) {
          res.send(html);
        }
      );
    })
    .catch((err) => {
      console.log("outside", err);
    });
};
module.exports.trainedFarmerForm = async (req, res) => {
  res.render("upazilla/trainedFarmer/trainedFarmerForm", {
    title: "প্রশিক্ষণপ্রাপ্ত কৃষকের তথ্য",
    msg: "",
    success: "",
    user_id: req.session.user_id,
  });
};
module.exports.trainedFarmerFormPost = async (req, res) => {
  var name = req.body.name;
  var vname = req.body.vname;
  var mnum = req.body.mnum;
  var nid = req.body.nid;
  var topic = req.body.topic;
  var date = req.body.date;
  var year = req.body.year;
  var user_id = req.body.user_id;

  await trainedFarmer.create({
    name: name,
    vname: vname,
    mnum: mnum,
    nid: nid,
    topic: topic,
    date: date,
    year: year,
    upazilla_id: user_id,
  });
  await initialTrial.create({
    name: name,
    vname: vname,
    mnum: mnum,
    year: year,
    upazilla_id: user_id,
  });
  await finalTrial
    .create({
      name: name,
      vname: vname,
      mnum: mnum,
      year: year,
      upazilla_id: user_id,
    })

    .then((data) => {
      res.redirect("/upazilla/trainedFarmer");
    })
    .catch((err) => {
      console.log("outside", err);
    });
};
module.exports.trainedFarmerEdit = async (req, res) => {
  await trainedFarmer
    .findByPk(req.params.id)
    .then((data) => {
      console.log("inside");
      res.render("upazilla/trainedFarmer/trainedFarmerFormEdit", {
        title: "প্রশিক্ষণপ্রাপ্ত কৃষকের তথ্য",
        msg: "",
        success: "",
        records: data,
        upazilla_id: req.session.user_id,
      });
    })
    .catch((err) => {
      console.log("outside", err);
    });
};
module.exports.trainedFarmerFormEditPost = async (req, res) => {
  var name = req.body.name;
  var vname = req.body.vname;
  var mnum = req.body.mnum;
  var nid = req.body.nid;
  var topic = req.body.topic;
  var date = req.body.date;
  var year = req.body.year;
  var user_id = req.body.user_id;

  await trainedFarmer.update(
    {
      name: name,
      vname: vname,
      mnum: mnum,
      nid: nid,
      topic: topic,
      date: date,
      year: year,
    },
    {
      where: { id: req.params.id },
    }
  );
  await initialTrial.update(
    {
      name: name,
      vname: vname,
      mnum: mnum,
      year: year,
    },
    {
      where: { id: req.params.id },
    }
  );
  await finalTrial
    .update(
      {
        name: name,
        vname: vname,
        mnum: mnum,
        year: year,
      },
      {
        where: { id: req.params.id },
      }
    )

    .then((data) => {
      res.redirect("/upazilla/trainedFarmer");
    })
    .catch((err) => {
      res.render("errorpage", err);
    });
};
module.exports.trainedFarmerDelete = async (req, res) => {
  var trainedFarmerDelete = await trainedFarmer.findByPk(req.params.id);
  var initialTrialDelete = await initialTrial.findByPk(req.params.id);
  var finalTrialDelete = await finalTrial.findByPk(req.params.id);
  try {
    trainedFarmerDelete.destroy();
    initialTrialDelete.destroy();
    finalTrialDelete.destroy();
    res.redirect("/upazilla/trainedFarmer");
  } catch {
    console.log("outside", err);
  }
};
module.exports.trainedFarmerGallery=async(req,res)=>{
    try{
        console.log("upazilla",req.session.user_id);
        var districts = await dd.findAll();        
        const data = await trainedFarmerGallery.findAll();
        res.render('upazilla/trainedFarmer/trainedFarmerGallery', { title: 'কৃষক প্রশিক্ষন গ্যালারী',success:'', records: data, district:districts });
    }
    catch (e) {
        console.log(e)
    }
};
module.exports.trainedFarmerGalleryPost=async(req,res)=>{
    const path = req.file && req.file.path;
    if(path){
      try{
        var imagePath = "/farmerTrainingGallery/" + req.file.filename;
        const data = await upazilla.findByPk(req.session.user_id);
        const trainedFarmerGalleryPost = await trainedFarmerGallery.create({
          image: imagePath,
          dd_id: data.dd_id,
          upazilla_id: req.session.user_id
        })
        res.redirect('/upazilla/trainedFarmerGallery');
      }
      catch (e) {
        console.log(e)
      }
    }
    else{
        console.log("file not uploaded successfully");
    }
};
module.exports.generatePdftrainedFarmer = async (req, res) => {
  try {
    var upazillas= await upazilla.findOne({
      where: { id: req.session.user_id },
    })
  var data= await trainedFarmer.findAll({
      where: { year: req.body.year, upazilla_id: req.session.user_id },
    })
      ejs.renderFile(
          path.join(__dirname, "../views/upazilla/trainedFarmer/", "pdf.ejs"),
          { records: data,upazilla:upazillas,dirname: __dirname },
          (err, data) => {
            if (err) {
              console.log("error", err);
              res.send(err);
            } else {
              var assesPath = path.join(__dirname, "../public/");
              // console.log(assesPath);
              assesPath = assesPath.replace(new RegExp(/\\/g), "/");

              var options = {
                height: "11.25in",
                width: "18.5in",
                header: {
                  height: "20mm",
                },
                footer: {
                  height: "20mm",
                },
                base: "file:///" + assesPath,
              };
              res.json({ html: data });
            }
          }
      )
    
    
  } catch (e) {
    console.log(e);
  }

};
//trainedFarmer controller end

//initialTrial controller
module.exports.initialTrial = async (req, res) => {
  await initialTrial
    .findAll({
      where: { upazilla_id: req.session.user_id },
    })
    .then((data) => {
      console.log("inside");
      res.render("upazilla/initialTrial/initialTrial", {
        title: "প্রদর্শনীর প্রাথমিক প্রতিবেদন",
        success: "",
        records: data,
      });
    })
    .catch((err) => {
      console.log("outside", err);
    });

  //  records:result
};
module.exports.initialTrialYear = async (req, res) => {
  await initialTrial
    .findAll({
      where: { year: req.body.year, upazilla_id: req.session.user_id },
    })
    .then((data) => {
      res.render(
        "upazilla/initialTrial/initialTrialTable",
        { records: data },
        function (err, html) {
          res.send(html);
        }
      );
    })
    .catch((err) => {
      console.log("outside", err);
    });
};
module.exports.initialTrialFormPost = async (req, res) => {
  var breedname = req.body.breedname;
  var trialdate = req.body.trialdate;
  var present = req.body.present;
  var kphone = req.body.kphone;

  await initialTrial.update(
    {
      breedname: breedname,
      trialdate: trialdate,
      present: present,
      kphone: kphone,
    },
    {
      where: { id: req.params.id },
    }
  );
  await finalTrial
    .update(
      {
        breedname: breedname,
        trialdate: trialdate,
      },
      {
        where: { id: req.params.id },
      }
    )

    .then((data) => {
      res.redirect("/upazilla/initialTrial");
    })
    .catch((err) => {
      console.log("outside", err);
    });
};
module.exports.initialTrialEdit = async (req, res) => {
  await initialTrial
    .findByPk(req.params.id)
    .then((data) => {
      console.log("inside");
      res.render("upazilla/initialTrial/initialTrialForm", {
        title: "প্রদর্শনীর প্রাথমিক প্রতিবেদন",
        msg: "",
        success: "",
        records: data,
      });
    })
    .catch((err) => {
      console.log("outside", err);
    });
};
module.exports.initialTrialGallery=async(req,res)=>{
    try{
        var districts = await dd.findAll();
        const data = await initialTrialGallery.findAll();
        res.render('upazilla/initialTrial/initialTrialGallery', { title: 'প্রদর্শনীর প্রাথমিক প্রতিবেদন গ্যালারী',success:'',records: data, district:districts });
    }
    catch (e) {
        console.log(e)
    }
};
module.exports.initialTrialGalleryPost=async(req,res)=>{
    const path = req.file && req.file.path;
    if(path){
      try{
        var imagePath = "/primaryPresentationGallery/" + req.file.filename;
        const data = await upazilla.findByPk(req.session.user_id);
        const initialTrialGalleryPost = await initialTrialGallery.create({
          image: imagePath,
          dd_id: data.dd_id,
          upazilla_id: req.session.user_id
        })
        res.redirect('/upazilla/initialTrialGallery');
      }
      catch (e) {
        console.log(e)
      }
    }
    else{
        console.log("file not uploaded successfully");
    }
};
module.exports.generatePdftrainedFarmer = async (req, res) => {
  try {
    var upazillas= await upazilla.findOne({
      where: { id: req.session.user_id },
    })
  var data= await initialTrial.findAll({
      where: { year: req.body.year, upazilla_id: req.session.user_id },
    })
      ejs.renderFile(
          path.join(__dirname, "../views/upazilla/trainedFarmer/", "pdf.ejs"),
          { records: data,upazilla:upazillas,dirname: __dirname },
          (err, data) => {
            if (err) {
              console.log("error", err);
              res.send(err);
            } else {
              var assesPath = path.join(__dirname, "../public/");
              // console.log(assesPath);
              assesPath = assesPath.replace(new RegExp(/\\/g), "/");

              var options = {
                height: "11.25in",
                width: "18.5in",
                header: {
                  height: "20mm",
                },
                footer: {
                  height: "20mm",
                },
                base: "file:///" + assesPath,
              };
              res.json({ html: data });
            }
          }
      )
    
    
  } catch (e) {
    console.log(e);
  }

};
//initialTrial controller end

//finalTrial controller
module.exports.finalTrial = async (req, res) => {
  await finalTrial
    .findAll({
      where: { upazilla_id: req.session.user_id },
    })
    .then((data) => {
      console.log("inside");
      res.render("upazilla/finalTrial/finalTrial", {
        title: "প্রদর্শনীর চূড়ান্ত প্রতিবেদন",
        success: "",
        records: data,
      });
    })
    .catch((err) => {
      console.log("outside", err);
    });

  //  records:result
};
module.exports.finalTrialYear = async (req, res) => {
  await finalTrial
    .findAll({
      where: { year: req.body.year, upazilla_id: req.session.user_id },
    })
    .then((data) => {
      res.render(
        "upazilla/finalTrial/finalTrialTable",
        { records: data },
        function (err, html) {
          res.send(html);
        }
      );
    })
    .catch((err) => {
      console.log("outside", err);
    });
};
module.exports.finalTrialForm = async (req, res) => {
  res.render("upazilla/finalTrial/finalTrialForm", {
    title: "প্রদর্শনীর চূড়ান্ত প্রতিবেদন",
    msg: "",
    success: "",
    user_id: req.session.user_id,
  });
};
module.exports.finalTrialFormPost = async (req, res) => {
  var cdate = req.body.cdate;
  var production = req.body.production;
  var fcomment = req.body.fcomment;
  var kcomment = req.body.kcomment;

  await finalTrial
    .update(
      {
        cdate: cdate,
        production: production,
        fcomment: fcomment,
        kcomment: kcomment,
      },
      {
        where: { id: req.params.id },
      }
    )

    .then((data) => {
      res.redirect("/upazilla/finalTrial");
    })
    .catch((err) => {
      console.log("outside", err);
    });
};
module.exports.finalTrialEdit = async (req, res) => {
  await finalTrial
    .findByPk(req.params.id)
    .then((data) => {
      console.log("inside");
      res.render("upazilla/finalTrial/finalTrialForm", {
        title: "প্রদর্শনীর চূড়ান্ত প্রতিবেদন",
        msg: "",
        success: "",
        records: data,
      });
    })
    .catch((err) => {
      console.log("outside", err);
    });
};
module.exports.finalTrialGallery=async(req,res)=>{
    try{
        var districts = await dd.findAll();
        const data = await finalTrialGallery.findAll();
        res.render('upazilla/finalTrial/finalTrialGallery', { title: 'প্রদর্শনীর চূড়ান্ত প্রতিবেদন গ্গ্যালারী',success:'', records: data, district:districts });
    }
    catch (e) {
        console.log(e)
    }
};
module.exports.finalTrialGalleryPost=async(req,res)=>{
    const path = req.file && req.file.path;
    if(path){
      try{
        var imagePath = "/finalPresentationGallery/" + req.file.filename;
        const data = await upazilla.findByPk(req.session.user_id);
        const finalTrialGalleryPost = await finalTrialGallery.create({
          image: imagePath,
          dd_id: data.dd_id,
          upazilla_id: req.session.user_id
        })
        res.redirect('/upazilla/finalTrialGallery');
      }
      catch (e) {
        console.log(e)
      }
    }
    else{
        console.log("file not uploaded successfully");
    }
};
module.exports.generatePdftrainedFarmer = async (req, res) => {
  try {
    var upazillas= await upazilla.findOne({
      where: { id: req.session.user_id },
    })
  var data= await finalTrial.findAll({
      where: { year: req.body.year, upazilla_id: req.session.user_id },
    })
      ejs.renderFile(
          path.join(__dirname, "../views/upazilla/trainedFarmer/", "pdf.ejs"),
          { records: data,upazilla:upazillas,dirname: __dirname },
          (err, data) => {
            if (err) {
              console.log("error", err);
              res.send(err);
            } else {
              var assesPath = path.join(__dirname, "../public/");
              // console.log(assesPath);
              assesPath = assesPath.replace(new RegExp(/\\/g), "/");

              var options = {
                height: "11.25in",
                width: "18.5in",
                header: {
                  height: "20mm",
                },
                footer: {
                  height: "20mm",
                },
                base: "file:///" + assesPath,
              };
              res.json({ html: data });
            }
          }
      )
    
    
  } catch (e) {
    console.log(e);
  }

};
//finalTrial controller end

//agriFair controller
module.exports.agriFair = async (req, res) => {
  res.render("upazilla/agriFair/agriFair", {
    title: "কৃষি মেলা তথ্য",
    success: "",
  });

  //  records:result
};
module.exports.agriFairYear = async (req, res) => {
  var year = req.body.year;
  var upazilla = req.session.user_id;
  await agriFair
    .findAll({
      where: { year: year, upazilla_id: upazilla },
    })
    .then((data) => {
      console.log(
        "inside,req.body.year,req.session.user_id",
        data,
        year,
        upazilla
      );
      res.render(
        "upazilla/agriFair/agriFairTable",
        { records: data },
        function (err, html) {
          res.send(html);
        }
      );
    })
    .catch((err) => {
      console.log("outside", err);
    });
};
module.exports.agriFairForm = async (req, res) => {
  var upazillass = await upazilla.findOne({
    where: { id: req.session.user_id },
  });
  var upazillas = upazillass.upazilla;
  var ddata = upazillass.dd_id;
  var ddss = await dd.findOne({ where: { id: ddata } });
  var dds = ddss.district;
  try {
    res.render("upazilla/agriFair/agriFairForm", {
      title: "কৃষি মেলার তথ্য",
      msg: "",
      success: "",
      dds: dds,
      upazillas: upazillas,
      user_id: req.session.user_id,
    });
  } catch {
    console.log(err);
  }
};
module.exports.agriFairFormPost = async (req, res) => {
  var district = req.body.district;
  var upazilla = req.body.upazilla;
  var booth = req.body.booth;
  var technology = req.body.technology;
  var name = req.body.name;
  var comment = req.body.comment;
  var year = req.body.year;
  var user_id = req.body.user_id;

  await agriFair
    .create({
      district: district,
      upazilla: upazilla,
      booth: booth,
      technology: technology,
      name: name,
      comment: comment,
      year: year,
      upazilla_id: user_id,
    })

    .then((data) => {
      res.redirect("/upazilla/agriFair");
    })
    .catch((err) => {
      console.log("outside", err);
    });
};
module.exports.agriFairEdit = async (req, res) => {
  await agriFair
    .findByPk(req.params.id)
    .then((data) => {
      console.log("inside");
      res.render("upazilla/agriFair/agriFairEdit", {
        title: "কৃষি মেলা তথ্য",
        msg: "",
        success: "",
        records: data,
      });
    })
    .catch((err) => {
      console.log("outside");
      res.render("upazilla/agriFair/agriFairEdit", {
        title: "কৃষি মেলা তথ্য",
        msg: "",
        success: "",
        records: err,
      });
    });
};
module.exports.agriFairEditPost = async (req, res) => {
  var district = req.body.district;
  var upazilla = req.body.upazilla;
  var booth = req.body.booth;
  var technology = req.body.technology;
  var name = req.body.name;
  var comment = req.body.comment;

  await agriFair
    .update(
      {
        district: district,
        upazilla: upazilla,
        booth: booth,
        technology: technology,
        name: name,
        comment: comment,
      },
      {
        where: { id: req.params.id },
      }
    )

    .then((data) => {
      res.redirect("/upazilla/agriFair");
    })
    .catch((err) => {
      console.log("outside", err);
    });
};
module.exports.agriFairDelete = async (req, res) => {
  var agriFairDelete = await agriFair.findByPk(req.params.id);
  try {
    agriFairDelete.destroy();
    res.redirect("/upazilla/agriFair");
  } catch {
    console.log("outside", err);
  }
};
module.exports.agriFairGallery=async(req,res)=>{
    try{
        var districts = await dd.findAll();
        const data = await agriFairGallery.findAll();
        res.render('upazilla/agriFair/agriFairGallery', { title: 'কৃষি মেলা গ্যালারী',success:'', records: data, district:districts });
    }
    catch (e) {
        console.log(e)
    }
};
module.exports.agriFairGalleryPost=async(req,res)=>{
    const path = req.file && req.file.path;
    if(path){

      try{
        var imagePath = "/agriFairGallery/" + req.file.filename;
        const data = await upazilla.findByPk(req.session.user_id);
        const agriFairGalleryPost = agriFairGallery.create({
          image: imagePath,
          dd_id: data.dd_id,
          upazilla_id: req.session.user_id
        })
        res.redirect('/upazilla/agriFairGallery');
      }
      catch (e) {
        console.log(e)
      }
    }
    else{
        console.log("file not uploaded successfully");
    }
};
module.exports.generatePdfagriFair = async (req, res) => {
  try {
    var upazillas= await upazilla.findOne({
      where: { id: req.session.user_id },
    })
  var data= await agriFair.findAll({
      where: { year: req.body.year, upazilla_id: req.session.user_id },
    })
      ejs.renderFile(
          path.join(__dirname, "../views/upazilla/agriFair/", "pdf.ejs"),
          { records: data,upazilla:upazillas,dirname: __dirname },
          (err, data) => {
            if (err) {
              console.log("error", err);
              res.send(err);
            } else {
              var assesPath = path.join(__dirname, "../public/");
              // console.log(assesPath);
              assesPath = assesPath.replace(new RegExp(/\\/g), "/");

              var options = {
                height: "11.25in",
                width: "18.5in",
                header: {
                  height: "20mm",
                },
                footer: {
                  height: "20mm",
                },
                base: "file:///" + assesPath,
              };
              res.json({ html: data });
            }
          }
      )
    
    
  } catch (e) {
    console.log(e);
  }

};
//agriFair controller end

//fieldDay controller
module.exports.fieldDay = async (req, res) => {
  await fieldDay
    .findAll({
      where: { upazilla_id: req.session.user_id },
    })
    .then((data) => {
      console.log("inside");
      res.render("upazilla/fieldDay/fieldDay", {
        title: "মাঠ দিবস তথ্য",
        success: "",
        records: data,
      });
    })
    .catch((err) => {
      console.log("outside", err);
    });

  //  records:result
};
module.exports.fieldDayYear = async (req, res) => {
  await fieldDay
    .findAll({
      where: { year: req.body.year, upazilla_id: req.session.user_id },
    })
    .then((data) => {
      res.render(
        "upazilla/fieldDay/fieldDayTable",
        { records: data },
        function (err, html) {
          res.send(html);
        }
      );
    })
    .catch((err) => {
      console.log("outside", err);
    });
};
module.exports.fieldDayForm = async (req, res) => {
  res.render("upazilla/fieldDay/fieldDayForm", {
    title: "মাঠ দিবস তথ্য",
    msg: "",
    success: "",
    user_id: req.session.user_id,
  });
};
module.exports.fieldDayFormPost = async (req, res) => {
  var name = req.body.name;
  var foshol = req.body.foshol;
  var date = req.body.date;
  var time = req.body.time;
  var comment = req.body.comment;
  var year = req.body.year;
  var user_id = req.body.user_id;

  await fieldDay
    .create({
      name: name,
      foshol: foshol,
      date: date,
      time: time,
      comment: comment,
      year: year,
      upazilla_id: user_id,
    })

    .then((data) => {
      res.redirect("/upazilla/fieldDay");
    })
    .catch((err) => {
      console.log("outside", err);
    });
};
module.exports.fieldDayEdit = async (req, res) => {
  await fieldDay
    .findByPk(req.params.id)
    .then((data) => {
      console.log("inside");
      res.render("upazilla/fieldDay/fieldDayEdit", {
        title: "মাঠ দিবস তথ্য",
        msg: "",
        success: "",
        records: data,
      });
    })
    .catch((err) => {
      console.log("outside", err);
    });
};
module.exports.fieldDayEditPost = async (req, res) => {
  var name = req.body.name;
  var foshol = req.body.foshol;
  var date = req.body.date;
  var time = req.body.time;
  var comment = req.body.comment;

  await fieldDay
    .update(
      {
        name: name,
        foshol: foshol,
        date: date,
        time: time,
        comment: comment,
      },
      {
        where: { id: req.params.id },
      }
    )

    .then((data) => {
      res.redirect("/upazilla/fieldDay");
    })
    .catch((err) => {
      console.log("outside", err);
    });
};
module.exports.fieldDayDelete = async (req, res) => {
  var fieldDayDelete = await fieldDay.findByPk(req.params.id);
  try {
    fieldDayDelete.destroy();
    res.redirect("/upazilla/fieldDay");
  } catch {
    console.log("outside", err);
  }
};
module.exports.fieldDayGallery=async(req,res)=>{
    try{
        console.log("field day starts ---------------------------");
        var districts = await dd.findAll();
        const data = await fieldDayGallery.findAll();
        res.render('upazilla/fieldDay/fieldDayGallery', { title: 'মাঠ দিবস গ্যালারী',success:'', records: data, district:districts });
    }
    catch (e) {
        console.log(e)
    }
};
module.exports.fieldDayGalleryPost=async(req,res)=>{
    const path = req.file && req.file.path;
    if(path){

      try{
        var imagePath = "/fieldDayGallery/" + req.file.filename;
        const data = await upazilla.findByPk(req.session.user_id);
        const fieldDayGalleryPost = await fieldDayGallery.create({
          image: imagePath,
          dd_id: data.dd_id,
          upazilla_id: req.session.user_id
        })
        res.redirect('/upazilla/fieldDayGallery');
      }
      catch (e) {
        console.log(e)
      }
    }
    else{
        console.log("file not uploaded successfully");
    }
};
module.exports.generatePdffieldDay = async (req, res) => {
  try {
    var upazillas= await upazilla.findOne({
      where: { id: req.session.user_id },
    })
  var data= await fieldDay.findAll({
      where: { year: req.body.year, upazilla_id: req.session.user_id },
    })
      ejs.renderFile(
          path.join(__dirname, "../views/upazilla/fieldDay/", "pdf.ejs"),
          { records: data,upazilla:upazillas,dirname: __dirname },
          (err, data) => {
            if (err) {
              console.log("error", err);
              res.send(err);
            } else {
              var assesPath = path.join(__dirname, "../public/");
              // console.log(assesPath);
              assesPath = assesPath.replace(new RegExp(/\\/g), "/");

              var options = {
                height: "11.25in",
                width: "18.5in",
                header: {
                  height: "20mm",
                },
                footer: {
                  height: "20mm",
                },
                base: "file:///" + assesPath,
              };
              res.json({ html: data });
            }
          }
      )
    
    
  } catch (e) {
    console.log(e);
  }

};
//fieldDay controller end

//irrigation controller
module.exports.irrigation = async (req, res) => {
  await irrigation
    .findAll({
      where: { upazilla_id: req.session.user_id },
    })
    .then((data) => {
      console.log("inside");
      res.render("upazilla/irrigation/irrigation", {
        title: "সেচ অবকাঠামো নির্মাণ তথ্য",
        success: "",
        records: data,
      });
    })
    .catch((err) => {
      console.log("outside", err);
    });

  //  records:result
};
module.exports.irrigationYear = async (req, res) => {
  await irrigation
    .findAll({
      where: { year: req.body.year, upazilla_id: req.session.user_id },
    })
    .then((data) => {
      res.render(
        "upazilla/irrigation/irrigationTable",
        { records: data },
        function (err, html) {
          res.send(html);
        }
      );
    })
    .catch((err) => {
      console.log("outside", err);
    });
};
module.exports.irrigationForm = async (req, res) => {
  var upazillass = await upazilla.findOne({
    where: { id: req.session.user_id },
  });
  var upazillas = upazillass.upazilla;
  var ddata = upazillass.dd_id;
  var ddss = await dd.findOne({ where: { id: ddata } });
  var dds = ddss.district;
  try {
    res.render("upazilla/irrigation/irrigationForm", {
      title: "সেচ অবকাঠামো নির্মাণ তথ্য",
      msg: "",
      success: "",
      dds: dds,
      upazillas: upazillas,
      user_id: req.session.user_id,
    });
  } catch {
    console.log(err);
  }
};
module.exports.irrigationFormPost = async (req, res) => {
  var district = req.body.district;
  var upazilla = req.body.upazilla;
  var pipe = req.body.pipe;
  var union = req.body.union;
  var jomi = req.body.jomi;
  var comment = req.body.comment;
  var year = req.body.year;
  var user_id = req.body.user_id;

  await irrigation
    .create({
      district: district,
      upazilla: upazilla,
      pipe: pipe,
      union: union,
      jomi: jomi,
      comment: comment,
      year: year,
      upazilla_id: user_id,
    })
    .then((data) => {
      res.redirect("/upazilla/irrigation");
    })
    .catch((err) => {
      console.log("outside", err);
    });
};
module.exports.irrigationEdit = async (req, res) => {
  await irrigation
    .findByPk(req.params.id)
    .then((data) => {
      console.log("inside");
      res.render("upazilla/irrigation/irrigationEdit", {
        title: "সেচ অবকাঠামো নির্মাণ তথ্য",
        msg: "",
        success: "",
        records: data,
      });
    })
    .catch((err) => {
      console.log("outside", err);
    });
};
module.exports.irrigationEditPost = async (req, res) => {
  var district = req.body.district;
  var upazilla = req.body.upazilla;
  var pipe = req.body.pipe;
  var union = req.body.union;
  var jomi = req.body.jomi;
  var comment = req.body.comment;

  await irrigation
    .update(
      {
        district: district,
        upazilla: upazilla,
        pipe: pipe,
        union: union,
        jomi: jomi,
        comment: comment,
      },
      {
        where: { id: req.params.id },
      }
    )

    .then((data) => {
      res.redirect("/upazilla/irrigation");
    })
    .catch((err) => {
      console.log("outside", err);
    });
};
module.exports.irrigationDelete = async (req, res) => {
  var irrigationDelete = await irrigation.findByPk(req.params.id);
  try {
    irrigationDelete.destroy();
    res.redirect("/upazilla/irrigation");
  } catch {
    console.log("outside", err);
  }
};
module.exports.irrigationGallery=async(req,res)=>{
    try{
        var districts = await dd.findAll();
        const data = await irrigationGallery.findAll();
        res.render('upazilla/irrigation/irrigationGallery', { title: 'সেচ অবকাঠামো নির্মাণ তথ্য গ্যালারী',success:'', records: data, district:districts });
    }
    catch (e) {
        console.log(e)
    }
};
module.exports.irrigationGalleryPost=async(req,res)=>{
    const path = req.file && req.file.path;
    if(path){
      try{
        var imagePath = "/irrigationGallery/" + req.file.filename;
        const data = await upazilla.findByPk(req.session.user_id);
        const irrigationGalleryPost = await irrigationGallery.create({
          image: imagePath,
          dd_id: data.dd_id,
          upazilla_id: req.session.user_id
        })
        res.redirect('/upazilla/irrigationGallery');
      }
      catch (e) {
        console.log(e)
      }
    }
    else{
        console.log("file not uploaded successfully");
    };
};
module.exports.generatePdfirrigation = async (req, res) => {
  try {
    var upazillas= await upazilla.findOne({
      where: { id: req.session.user_id },
    })
  var data= await irrigation.findAll({
      where: { year: req.body.year, upazilla_id: req.session.user_id },
    })
      ejs.renderFile(
          path.join(__dirname, "../views/upazilla/irrigation/", "pdf.ejs"),
          { records: data,upazilla:upazillas,dirname: __dirname },
          (err, data) => {
            if (err) {
              console.log("error", err);
              res.send(err);
            } else {
              var assesPath = path.join(__dirname, "../public/");
              // console.log(assesPath);
              assesPath = assesPath.replace(new RegExp(/\\/g), "/");

              var options = {
                height: "11.25in",
                width: "18.5in",
                header: {
                  height: "20mm",
                },
                footer: {
                  height: "20mm",
                },
                base: "file:///" + assesPath,
              };
              res.json({ html: data });
            }
          }
      )
    
    
  } catch (e) {
    console.log(e);
  }

};
//irrigation controller end

//machinery controller
module.exports.machinery = async (req, res) => {
  await machinery
    .findAll({
      where: { upazilla_id: req.session.user_id },
    })
    .then((data) => {
      console.log("inside");
      res.render("upazilla/machinery/machinery", {
        title: "কৃষি যন্ত্রপাতি বিতরণ প্রতিবেদন তথ্য",
        success: "",
        records: data,
      });
    })
    .catch((err) => {
      console.log("outside", err);
    });

  //  records:result
};
module.exports.machineryYear = async (req, res) => {
  await machinery
    .findAll({
      where: { year: req.body.year, upazilla_id: req.session.user_id },
    })
    .then((data) => {
      res.render(
        "upazilla/machinery/machineryTable",
        { records: data },
        function (err, html) {
          res.send(html);
        }
      );
    })
    .catch((err) => {
      console.log("outside", err);
    });
};
module.exports.machineryForm = async (req, res) => {
  var upazillass = await upazilla.findOne({
    where: { id: req.session.user_id },
  });
  var upazillas = upazillass.upazilla;
  var ddata = upazillass.dd_id;
  var ddss = await dd.findOne({ where: { id: ddata } });
  var dds = ddss.district;
  try {
    res.render("upazilla/machinery/machineryForm", {
      title: "কৃষি যন্ত্রপাতি বিতরণ প্রতিবেদন",
      msg: "",
      success: "",
      dds: dds,
      upazillas: upazillas,
      user_id: req.session.user_id,
    });
  } catch {
    console.log(err);
  }
};
module.exports.machineryFormPost = async (req, res) => {
  var district = req.body.district;
  var upazilla = req.body.upazilla;
  var machine = req.body.machine;
  var number = req.body.number;
  var farmer = req.body.farmer;
  var village = req.body.village;
  var mobile = req.body.mobile;
  var bitoron = req.body.bitoron;
  var year = req.body.year;
  var user_id = req.body.user_id;

  await machinery
    .create({
      district: district,
      upazilla: upazilla,
      machine: machine,
      number: number,
      farmer: farmer,
      village: village,
      mobile: mobile,
      bitoron: bitoron,
      year: year,
      upazilla_id: user_id,
    })

    .then((data) => {
      res.redirect("/upazilla/machinery");
    })
    .catch((err) => {
      console.log("outside", err);
    });
};
module.exports.machineryEdit = async (req, res) => {
  await machinery
    .findByPk(req.params.id)
    .then((data) => {
      console.log("inside");
      res.render("upazilla/machinery/machineryEdit", {
        title: "কৃষি যন্ত্রপাতি বিতরণ প্রতিবেদন",
        msg: "",
        success: "",
        records: data,
      });
    })
    .catch((err) => {
      console.log("outside", err);
    });
};
module.exports.machineryEditPost = async (req, res) => {
  var machine = req.body.machine;
  var number = req.body.number;
  var farmer = req.body.farmer;
  var village = req.body.village;
  var mobile = req.body.mobile;
  var bitoron = req.body.bitoron;

  await machinery
    .update(
      {
        machine: machine,
        number: number,
        farmer: farmer,
        village: village,
        mobile: mobile,
        bitoron: bitoron,
      },
      {
        where: { id: req.params.id },
      }
    )

    .then((data) => {
      res.redirect("/upazilla/machinery");
    })
    .catch((err) => {
      console.log("outside", err);
    });
};
module.exports.machineryDelete = async (req, res) => {
  var machineryDelete = await machinery.findByPk(req.params.id);
  try {
    machineryDelete.destroy();
    res.redirect("/upazilla/machinery");
  } catch {
    console.log("outside", err);
  }
};
module.exports.machineryGallery=async(req,res)=>{
    try{
        var districts = await dd.findAll();
        const data = await machineryGallery.findAll();
        res.render('upazilla/machinery/machineryGallery', { title: 'কৃষি যন্ত্রপাতি বিতরণ প্রতিবেদন তথ্য গ্যালারী',success:'', records: data, district:districts });
    }
    catch (e) {
        console.log(e)
    }
};
module.exports.machineryGalleryPost=async(req,res)=>{
    const path = req.file && req.file.path;
    if(path){
      try{
        var imagePath = "/agriToolsGallery/" + req.file.filename;
        const data = await upazilla.findByPk(req.session.user_id);
        const machineryGalleryPost = await machineryGallery.create({
          image: imagePath,
          dd_id: data.dd_id,
          upazilla_id: req.session.user_id
        })
        res.redirect('/upazilla/machineryGallery');
      }
      catch (e) {
        console.log(e)
      }
    }
    else{
        console.log("file not uploaded successfully");
    };
};
module.exports.generatePdfmachinery = async (req, res) => {
  try {
    var upazillas= await upazilla.findOne({
      where: { id: req.session.user_id },
    })
  var data= await machinery.findAll({
      where: { year: req.body.year, upazilla_id: req.session.user_id },
    })
      ejs.renderFile(
          path.join(__dirname, "../views/upazilla/machinery/", "pdf.ejs"),
          { records: data,upazilla:upazillas,dirname: __dirname },
          (err, data) => {
            if (err) {
              console.log("error", err);
              res.send(err);
            } else {
              var assesPath = path.join(__dirname, "../public/");
              // console.log(assesPath);
              assesPath = assesPath.replace(new RegExp(/\\/g), "/");

              var options = {
                height: "11.25in",
                width: "18.5in",
                header: {
                  height: "20mm",
                },
                footer: {
                  height: "20mm",
                },
                base: "file:///" + assesPath,
              };
              res.json({ html: data });
            }
          }
      )
    
    
  } catch (e) {
    console.log(e);
  }

};
//machinery controller end

//motivation controller
module.exports.motivation = async (req, res) => {
  await motivation
    .findAll({
      where: { upazilla_id: req.session.user_id },
    })
    .then((data) => {
      console.log("inside");
      res.render("upazilla/motivation/motivation", {
        title: "উদ্বুদ্ধকরণ ভ্রমণ তথ্য",
        success: "",
        records: data,
      });
    })
    .catch((err) => {
      console.log("outside", err);
    });

  //  records:result
};
module.exports.motivationYear = async (req, res) => {
  await motivation
    .findAll({
      where: { year: req.body.year, upazilla_id: req.session.user_id },
    })
    .then((data) => {
      res.render(
        "upazilla/motivation/motivationTable",
        { records: data },
        function (err, html) {
          res.send(html);
        }
      );
    })
    .catch((err) => {
      console.log("outside", err);
    });
};
module.exports.motivationForm = async (req, res) => {
  var upazillass = await upazilla.findOne({
    where: { id: req.session.user_id },
  });
  var upazillas = upazillass.upazilla;
  var ddata = upazillass.dd_id;
  var ddss = await dd.findOne({ where: { id: ddata } });
  var dds = ddss.district;
  try {
    res.render("upazilla/motivation/motivationForm", {
      title: "উদ্বুদ্ধকরণ ভ্রমণ তথ্য",
      msg: "",
      success: "",
      dds: dds,
      upazillas: upazillas,
      user_id: req.session.user_id,
    });
  } catch {
    console.log(err);
  }
};
module.exports.motivationFormPost = async (req, res) => {
  var district = req.body.district;
  var upazilla = req.body.upazilla;
  var name = req.body.name;
  var nid = req.body.nid;
  var village = req.body.village;
  var mobile = req.body.mobile;
  var comment = req.body.comment;
  var year = req.body.year;
  var user_id = req.body.user_id;

  await motivation
    .create({
      district: district,
      upazilla: upazilla,
      name: name,
      nid: nid,
      village: village,
      mobile: mobile,
      comment: comment,
      year: year,
      upazilla_id: user_id,
    })

    .then((data) => {
      res.redirect("/upazilla/motivation");
    })
    .catch((err) => {
      console.log("outside", err);
    });
};
module.exports.motivationEdit = async (req, res) => {
  await motivation
    .findByPk(req.params.id)
    .then((data) => {
      console.log("inside");
      res.render("upazilla/motivation/motivationEdit", {
        title: "উদ্বুদ্ধকরণ ভ্রমণ তথ্য",
        msg: "",
        success: "",
        records: data,
      });
    })
    .catch((err) => {
      console.log("outside", err);
    });
};
module.exports.motivationEditPost = async (req, res) => {
  var name = req.body.name;
  var nid = req.body.nid;
  var village = req.body.village;
  var mobile = req.body.mobile;
  var comment = req.body.comment;

  await motivation
    .update(
      {
        name: name,
        nid: nid,
        village: village,
        mobile: mobile,
        comment: comment,
      },
      {
        where: { id: req.params.id },
      }
    )

    .then((data) => {
      res.redirect("/upazilla/motivation");
    })
    .catch((err) => {
      console.log("outside", err);
    });
};
module.exports.motivationDelete = async (req, res) => {
  var motivationDelete = await motivation.findByPk(req.params.id);
  try {
    motivationDelete.destroy();
    res.redirect("/upazilla/motivation");
  } catch {
    console.log("outside", err);
  }
};
module.exports.motivationGallery=async(req,res)=>{
    try{
        var districts = await dd.findAll();
        const data = await motivationGallery.findAll();
        res.render('upazilla/motivation/motivationGallery', { title: 'উদ্বুদ্ধকরণ ভ্রমণ গ্যালারী',success:'', records: data, district:districts });
    }
    catch (e) {
        console.log(e)
    }
};
module.exports.motivationGalleryPost=async(req,res)=>{
    const path = req.file && req.file.path;
    if(path){

      try{
        var imagePath = "/motivationGallery/" + req.file.filename;
        const data = await upazilla.findByPk(req.session.user_id);
        const motivationGalleryPost = await motivationGallery.create({
          image: imagePath,
          dd_id: data.dd_id,
          upazilla_id: req.session.user_id
        })
        res.redirect('/upazilla/motivationGallery');
      }
      catch (e) {
        console.log(e)
      }
    }
    else{
        console.log("file not uploaded successfully");
    }
};
module.exports.generatePdfmotivation = async (req, res) => {
  try {
    var upazillas= await upazilla.findOne({
      where: { id: req.session.user_id },
    })
  var data= await motivation.findAll({
      where: { year: req.body.year, upazilla_id: req.session.user_id },
    })
      ejs.renderFile(
          path.join(__dirname, "../views/upazilla/motivation/", "pdf.ejs"),
          { records: data,upazilla:upazillas,dirname: __dirname },
          (err, data) => {
            if (err) {
              console.log("error", err);
              res.send(err);
            } else {
              var assesPath = path.join(__dirname, "../public/");
              // console.log(assesPath);
              assesPath = assesPath.replace(new RegExp(/\\/g), "/");

              var options = {
                height: "11.25in",
                width: "18.5in",
                header: {
                  height: "20mm",
                },
                footer: {
                  height: "20mm",
                },
                base: "file:///" + assesPath,
              };
              res.json({ html: data });
            }
          }
      )
    
    
  } catch (e) {
    console.log(e);
  }

};
//motivation controller end

//feroman controller
module.exports.feroman = async (req, res) => {
  await feromans
    .findAll({
      where: { upazilla_id: req.session.user_id },
    })
    .then((data) => {
      console.log("inside");
      res.render("upazilla/feroman/feroman", {
        title: "ফেরোমন ফাঁদ বিতরণ তথ্য",
        success: "",
        records: data,
      });
    })
    .catch((err) => {
      console.log("outside", err);
    });

  //  records:result
};
module.exports.feromanYear = async (req, res) => {
  await feromans
    .findAll({
      where: { year: req.body.year, upazilla_id: req.session.user_id },
    })
    .then((data) => {
      res.render(
        "upazilla/feroman/feromanTable",
        { records: data },
        function (err, html) {
          res.send(html);
        }
      );
    })
    .catch((err) => {
      console.log("outside", err);
    });
};
module.exports.feromanForm = async (req, res) => {
  var upazillass = await upazilla.findOne({
    where: { id: req.session.user_id },
  });
  var upazillas = upazillass.upazilla;
  var ddata = upazillass.dd_id;
  var ddss = await dd.findOne({ where: { id: ddata } });
  var dds = ddss.district;
  try {
    res.render("upazilla/feroman/feromanForm", {
      title: "ফেরোমন ফাঁদ বিতরণ তথ্য",
      msg: "",
      success: "",
      dds: dds,
      upazillas: upazillas,
      user_id: req.session.user_id,
    });
  } catch {
    console.log(err);
  }
};
module.exports.feromanFormPost = async (req, res) => {
  var district = req.body.district;
  var upazilla = req.body.upazilla;
  var name = req.body.name;
  var crop = req.body.crop;
  var feroman = req.body.feroman;
  var village = req.body.village;
  var mobile = req.body.mobile;
  var comment = req.body.comment;
  var year = req.body.year;
  var user_id = req.body.user_id;

  await feromans.create({
      district: district,
      upazilla: upazilla,
      name: name,
      crop: crop,
      feroman:feroman,
      village: village,
      mobile: mobile,
      comment: comment,
      year: year,
      upazilla_id: user_id,
    })

    .then((data) => {
      res.redirect("/upazilla/feroman");
    })
    .catch((err) => {
      console.log("outside", err);
    });
};
module.exports.feromanEdit = async (req, res) => {
  await feromans
    .findByPk(req.params.id)
    .then((data) => {
      console.log("inside");
      res.render("upazilla/feroman/feromanEdit", {
        title: "ফেরোমন ফাঁদ বিতরণ তথ্য",
        msg: "",
        success: "",
        records: data,
      });
    })
    .catch((err) => {
      console.log("outside", err);
    });
};
module.exports.feromanEditPost = async (req, res) => {
  var name = req.body.name;
  var crop = req.body.crop;
  var feroman = req.body.feroman;
  var village = req.body.village;
  var mobile = req.body.mobile;
  var comment = req.body.comment;

  await feromans
    .update(
      {
        name: name,
        crop:crop,
        feroman: feroman,
        village: village,
        mobile: mobile,
        comment: comment,
      },
      {
        where: { id: req.params.id },
      }
    )

    .then((data) => {
      res.redirect("/upazilla/feroman");
    })
    .catch((err) => {
      console.log("outside", err);
    });
};
module.exports.feromanDelete = async (req, res) => {
  var feromanDelete = await feromans.findByPk(req.params.id);
  try {
    feromanDelete.destroy();
    res.redirect("/upazilla/feroman");
  } catch {
    console.log("outside", err);
  }
};
module.exports.feromanGallery=async(req,res)=>{
    try{
        var districts = await dd.findAll();
        const data = await feromanGallery.findAll();
        res.render('upazilla/feroman/feromanGallery', { title: 'ফেরোমন ফাঁদ বিতরণ গ্যালারী',success:'', records: data, district:districts });
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
                res.redirect('/upazilla/feromanGallery');
            }).catch(err => {
                console.log("file not uploaded successfully",err);
            });
    }
    else{
        console.log("file not uploaded successfully");
    }
};
module.exports.generatePdfferoman = async (req, res) => {
  try {
    var upazillas= await upazilla.findOne({
      where: { id: req.session.user_id },
    })
  var data= await feromans.findAll({
      where: { year: req.body.year, upazilla_id: req.session.user_id },
    })
      ejs.renderFile(
          path.join(__dirname, "../views/upazilla/feroman/", "pdf.ejs"),
          { records: data,upazilla:upazillas,dirname: __dirname },
          (err, data) => {
            if (err) {
              console.log("error", err);
              res.send(err);
            } else {
              var assesPath = path.join(__dirname, "../public/");
              // console.log(assesPath);
              assesPath = assesPath.replace(new RegExp(/\\/g), "/");

              var options = {
                height: "11.25in",
                width: "18.5in",
                header: {
                  height: "20mm",
                },
                footer: {
                  height: "20mm",
                },
                base: "file:///" + assesPath,
              };
              res.json({ html: data });
            }
          }
      )
    
    
  } catch (e) {
    console.log(e);
  }

};
//feroman controller end

//farmerPrize controller
module.exports.farmerPrize = async (req, res) => {
  await farmerPrize
    .findAll({
      where: { upazilla_id: req.session.user_id },
    })
    .then((data) => {
      console.log("inside");
      res.render("upazilla/farmerPrize/farmerPrize", {
        title: "কৃষক পুরষ্কার তথ্য",
        success: "",
        records: data,
      });
    })
    .catch((err) => {
      console.log("outside", err);
    });

  //  records:result
};
module.exports.farmerPrizeYear = async (req, res) => {
  await farmerPrize
    .findAll({
      where: { year: req.body.year, upazilla_id: req.session.user_id },
    })
    .then((data) => {
      res.render(
        "upazilla/farmerPrize/farmerPrizeTable",
        { records: data },
        function (err, html) {
          res.send(html);
        }
      );
    })
    .catch((err) => {
      console.log("outside", err);
    });
};
module.exports.farmerPrizeForm = async (req, res) => {
  var upazillass = await upazilla.findOne({
    where: { id: req.session.user_id },
  });
  var upazillas = upazillass.upazilla;
  var ddata = upazillass.dd_id;
  var ddss = await dd.findOne({ where: { id: ddata } });
  var dds = ddss.district;
  try {
    res.render("upazilla/farmerPrize/farmerPrizeForm", {
      title: "কৃষক পুরষ্কার তথ্য",
      msg: "",
      success: "",
      dds: dds,
      upazillas: upazillas,
      user_id: req.session.user_id,
    });
  } catch {
    console.log(err);
  }
};
module.exports.farmerPrizeFormPost = async (req, res) => {
  var district = req.body.district;
  var upazilla = req.body.upazilla;
  var name = req.body.name;
  var crop = req.body.crop;
  var village = req.body.village;
  var mobile = req.body.mobile;
  var comment = req.body.comment;
  var year = req.body.year;
  var user_id = req.body.user_id;

  await farmerPrize
    .create({
      district: district,
      upazilla: upazilla,
      name: name,
      crop: crop,
      village: village,
      mobile: mobile,
      comment: comment,
      year: year,
      upazilla_id: user_id,
    })

    .then((data) => {
      res.redirect("/upazilla/farmerPrize");
    })
    .catch((err) => {
      console.log("outside", err);
    });
};
module.exports.farmerPrizeEdit = async (req, res) => {
  await farmerPrize
    .findByPk(req.params.id)
    .then((data) => {
      console.log("inside");
      res.render("upazilla/farmerPrize/farmerPrizeEdit", {
        title: "কৃষক পুরষ্কার তথ্য",
        msg: "",
        success: "",
        records: data,
      });
    })
    .catch((err) => {
      console.log("outside", err);
    });
};
module.exports.farmerPrizeEditPost = async (req, res) => {
  var name = req.body.name;
  var nid = req.body.nid;
  var crop = req.body.crop;
  var village = req.body.village;
  var mobile = req.body.mobile;
  var comment = req.body.comment;

  await farmerPrize
    .update(
      {
        name: name,
        nid: nid,
        crop: crop,
        village: village,
        mobile: mobile,
        comment: comment,
      },
      {
        where: { id: req.params.id },
      }
    )

    .then((data) => {
      res.redirect("/upazilla/farmerPrize");
    })
    .catch((err) => {
      console.log("outside", err);
    });
};
module.exports.farmerPrizeDelete = async (req, res) => {
  var farmerPrizeDelete = await farmerPrize.findByPk(req.params.id);
  try {
    farmerPrizeDelete.destroy();
    res.redirect("/upazilla/farmerPrize");
  } catch {
    console.log("outside", err);
  }
};
module.exports.farmerPrizeGallery=async(req,res)=>{
    try{
        var districts = await dd.findAll();
        const data = await farmerPrizeGallery.findAll();
        res.render('upazilla/farmerPrize/farmerPrizeGallery', { title: 'কৃষক পুরষ্কার গ্যালারী',success:'', records: data, district:districts });
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
                res.redirect('/upazilla/farmerPrizeGallery');
            }).catch(err => {
                console.log("file not uploaded successfully",err);
            });
    }
    else{
        console.log("file not uploaded successfully");
    }
};
module.exports.generatePdffarmerPrize = async (req, res) => {
  try {
    var upazillas= await upazilla.findOne({
      where: { id: req.session.user_id },
    })
  var data= await farmerPrize.findAll({
      where: { year: req.body.year, upazilla_id: req.session.user_id },
    })
      ejs.renderFile(
          path.join(__dirname, "../views/upazilla/farmerPrize/", "pdf.ejs"),
          { records: data,upazilla:upazillas,dirname: __dirname },
          (err, data) => {
            if (err) {
              console.log("error", err);
              res.send(err);
            } else {
              var assesPath = path.join(__dirname, "../public/");
              // console.log(assesPath);
              assesPath = assesPath.replace(new RegExp(/\\/g), "/");

              var options = {
                height: "11.25in",
                width: "18.5in",
                header: {
                  height: "20mm",
                },
                footer: {
                  height: "20mm",
                },
                base: "file:///" + assesPath,
              };
              res.json({ html: data });
            }
          }
      )
    
    
  } catch (e) {
    console.log(e);
  }

};
//farmerPrize controller end
