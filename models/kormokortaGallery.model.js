module.exports = (sequelize, Sequelize) => {
    const kormokortaGallery = sequelize.define("kormokortaGallery", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      image : {
        type: Sequelize.STRING
      }
      
    });
  
    return kormokortaGallery;
  };