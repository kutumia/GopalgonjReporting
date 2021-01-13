module.exports = (sequelize, Sequelize) => {
    const foreignTraining = sequelize.define("foreignTraining", {
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
      place: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.STRING
      },
    });
  
    return foreignTraining;
  };