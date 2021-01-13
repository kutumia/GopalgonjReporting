module.exports = (sequelize, Sequelize) => {
    const localOfficeBuiliding = sequelize.define("localOfficeBuiliding", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      area: {
        type: Sequelize.STRING
      },
      expense: {
        type: Sequelize.STRING
      },
      time: {
        type: Sequelize.STRING
      },
      company: {
        type: Sequelize.STRING
      },
      progress: {
        type: Sequelize.STRING
      },
    });
  
    return localOfficeBuiliding;
  };