module.exports = (sequelize, DataTypes) => {
    let alias = "Actors"; /*alias para la tabla*/
    let cols = { /*configurar las columnas de la tabla*/
        id: {
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        first_name: {
            type: DataTypes.STRING(100) + ' CHARSET utf8 COLLATE utf8_general_ci',
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING(100) + ' CHARSET utf8 COLLATE utf8_general_ci',
            allowNull: false
        },
        rating: {
            type: DataTypes.DECIMAL(3, 1),
            allowNull: false
        },
        favorite_movie_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false        
        }

    };
    let config = {
        tableName: "actors", /*puede no estar esta configuracion */
        timestamps: false
    };

    const Actors = sequelize.define(alias, cols, config);

    return Actors;
}

/* TIPOS DE DATOS

DataType.STRING          // VARCHAR(255)
DataType.STRING(400)     // VARCHAR(400)

DataType.INTEGER         // INTEGER
DataType.BIGINT          // BIGINT
DataType.FLOAT           // FLOAT
DataType.DOUBLE          // DOUBLE
DataType.DECIMAL         // DECIMAL

DataType.DATE            // DATE*/
