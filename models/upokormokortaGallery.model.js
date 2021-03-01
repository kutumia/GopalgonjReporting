module.exports = (sequelize, Sequelize) => {
    const upokormokortaGallery = sequelize.define("upokormokortaGallery", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      image : {
        type: Sequelize.STRING
      }
      
    });
  
    return upokormokortaGallery;
  };