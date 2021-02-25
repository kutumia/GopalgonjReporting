module.exports = (sequelize, Sequelize) => {
    const motivationGallery = sequelize.define("motivationGallery", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      image : {
        type: Sequelize.STRING
      }
      
    });
  
    return motivationGallery;
  };