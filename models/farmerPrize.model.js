module.exports = (sequelize, Sequelize) => {
    const farmerPrize = sequelize.define("farmerPrize", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      district: {
        type: Sequelize.STRING
      },
      upazilla: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      village: {
        type: Sequelize.STRING
      },
      mobile: {
        type: Sequelize.STRING
      },
      crop: {
        type: Sequelize.STRING
      },
      comment: {
        type: Sequelize.STRING
      },
      ddComment: {
        type: Sequelize.STRING
      },
      pdComment: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.STRING
      },
      upazilla_id: {
        type: Sequelize.INTEGER
      }
    });
  
    return farmerPrize;
  };