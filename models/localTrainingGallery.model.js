module.exports = (sequelize, Sequelize) => {
    const localTrainingGallery = sequelize.define("localTrainingGallery", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      image : {
        type: Sequelize.STRING
      }
      
    });
  
    return localTrainingGallery;
  };