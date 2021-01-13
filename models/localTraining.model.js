module.exports = (sequelize, Sequelize) => {
    const localTraining = sequelize.define("localTraining", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      name: {
        type: Sequelize.STRING
      },
      podobi: {
        type: Sequelize.STRING
      },
      mobile: {
        type: Sequelize.STRING
      },
      venue: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.STRING
      },
    });
  
    return localTraining;
  };