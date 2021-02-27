module.exports = (sequelize, Sequelize) => {
    const agriFairGallery = sequelize.define("agriFairGallery", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      image : {
        type: Sequelize.STRING
      }
      
    });
  
    return agriFairGallery;
  };