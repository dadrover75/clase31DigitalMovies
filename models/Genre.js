module.exports = (sequelize, DataTypes) => {
    let alias = "Genres"; /*alias para la tabla*/
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
        name: {
            type: DataTypes.STRING(255) + ' CHARSET utf8 COLLATE utf8_general_ci',
            allowNull: false
        },
        ranking: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
        },
        active: {
            type: DataTypes.INTEGER(1),
            allowNull: false,
            defaultValue: 1
        }

    };
    let config = {
        tableName: "genres", /*puede no estar esta configuracion */
        timestamps: false
    };

    const Genres = sequelize.define(alias, cols, config);

    return Genres;
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
