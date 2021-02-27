module.exports = (sequelize, Sequelize) => {
    const fieldDayGallery = sequelize.define("fieldDayGallery", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      image : {
        type: Sequelize.STRING
      }
      
    });
  
    return fieldDayGallery;
  };