const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our User model
class Event extends Model {}

// define table columns and configuration

Event.init(
    {
      // define an id column
      id: {
        // use the special Sequelize DataTypes object provide what type of data it is
        type: DataTypes.INTEGER,
        // this is the equivalent of SQL's `NOT NULL` option
        allowNull: false,
        // instruct that this is the Primary Key
        primaryKey: true,
        // turn on auto increment
        autoIncrement: true
      },
      // define a title column
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      // define description column
      description: {
        type: DataTypes.STRING,
        allowNull: false,
       
       
      },
      
      date: {
          //DataTypes.STRING (DEPENDS ON THE FRONT END)
          type: DataTypes.DATE,
          allowNull: false,
          
      },
      // FIRST PART OF CONNECTING TO THE USER 
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model:'user',
                key:'id'
            }
        } 
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'event'
    }
  );

module.exports = Event;
