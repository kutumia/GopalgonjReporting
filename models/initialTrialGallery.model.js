module.exports = (sequelize, Sequelize) => {
    const initialTrialGallery = sequelize.define("initialTrialGallery", {
        id : {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        image : {
            type: Sequelize.STRING
        },
        dd_id : {
            type: Sequelize.STRING
        },
        upazilla_id : {
            type: Sequelize.STRING
        }
    });

    return initialTrialGallery;
};