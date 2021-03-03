module.exports = (sequelize, Sequelize) => {
    const feroman = sequelize.define("feroman", {
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
      feroman: {
        type: Sequelize.STRING
      },
      comment: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.STRING
      },
      upazilla_id: {
        type: Sequelize.INTEGER
      }
    });
  
    return feroman;
  };