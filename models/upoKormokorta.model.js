module.exports = (sequelize, Sequelize) => {
    const upoKormokorta = sequelize.define("upoKormokorta", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      district: {
        type: Sequelize.STRING
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
  
    return upoKormokorta;
  };