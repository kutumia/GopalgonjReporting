module.exports = (sequelize, Sequelize) => {
    const foreignTrainingGallery = sequelize.define("foreignTrainingGallery", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      image : {
        type: Sequelize.STRING
      }
      
    });
  
    return foreignTrainingGallery;
  };