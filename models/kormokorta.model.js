module.exports = (sequelize, Sequelize) => {
    const kormokorta = sequelize.define("kormokorta", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      name: {
        type: Sequelize.STRING
      },
      place: {
        type: Sequelize.STRING
      },
      mobile: {
        type: Sequelize.STRING
      },
      topic: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.STRING
      },
    });
  
    return kormokorta;
  };